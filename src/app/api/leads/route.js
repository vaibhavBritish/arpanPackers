import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendToGoogleSheets } from '@/lib/sheets';

export async function POST(req) {
  try {
    const body = await req.json();

    const leadObj = {
      id: crypto.randomUUID(),
      name: body.name,
      phone: body.phone,
      email: body.email || "",
      service: body.service || "",
      message: body.message || "",
      source_page: body.source_page || "",
      created_at: new Date().toISOString()
    };

    // 1. Try MongoDB (Don't let it crash the whole request)
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "chennai_movers");
      await db.collection("leads").insertOne(leadObj);
      console.log("✅ Saved to MongoDB");
    } catch (dbError) {
      console.error("❌ MongoDB Error (skipping):", dbError.message);
    }

    // 2. Send to Google Sheets (Always try this)
    await sendToGoogleSheets("Leads", leadObj);

    return NextResponse.json(leadObj, { status: 201 });
  } catch (error) {
    console.error("Error in Leads API:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "chennai_movers");
    const leads = await db.collection("leads").find({}).sort({ created_at: -1 }).toArray();
    
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
