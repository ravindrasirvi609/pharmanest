import Contact from "@/Model/contactModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const contacts = await Contact.find();

    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch contacts",
    });
  }
}
