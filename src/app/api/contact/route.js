import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "chennai_movers");
    const body = await req.json();

    const contactObj = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      created_at: new Date().toISOString()
    };

    // Insert into MongoDB
    await db.collection("contacts").insertOne(contactObj);

    return NextResponse.json(contactObj, { status: 201 });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json({ error: "Failed to create contact message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "chennai_movers");
    const contacts = await db.collection("contacts").find({}).sort({ created_at: -1 }).toArray();
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json({ error: "Failed to fetch contact messages" }, { status: 500 });
  }
}
