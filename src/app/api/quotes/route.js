import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendToGoogleSheets } from '@/lib/sheets';

export async function POST(req) {
  try {
    const body = await req.json();

    const quoteObj = {
      id: crypto.randomUUID(),
      full_name: body.full_name,
      phone_number: body.phone_number,
      email: body.email,
      moving_from: body.moving_from,
      moving_to: body.moving_to,
      move_type: body.move_type,
      preferred_date: body.preferred_date,
      additional_details: body.additional_details || "",
      created_at: new Date().toISOString()
    };

    // 1. Try MongoDB (Don't let it crash the whole request)
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "chennai_movers");
      await db.collection("quotes").insertOne(quoteObj);
      console.log("✅ Saved to MongoDB");
    } catch (dbError) {
      console.error("❌ MongoDB Error (skipping):", dbError.message);
    }

    // 2. Send to Google Sheets (Always try this)
    await sendToGoogleSheets("Quotes", quoteObj);

    return NextResponse.json(quoteObj, { status: 201 });
  } catch (error) {
    console.error("Error in Quotes API:", error);
    return NextResponse.json({ error: "Failed to process quote" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "chennai_movers");
    const quotes = await db.collection("quotes").find({}).sort({ created_at: -1 }).toArray();
    
    return NextResponse.json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
  }
}
