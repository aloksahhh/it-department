import { NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig";
import Notice from "@/src/models/Notice";

export async function GET() {
  try {
    await connect();

    const notices = await Notice
  .find()
  .sort({ createdAt: -1 })
  .limit(3);

    return NextResponse.json({
      success: true,
      data: notices,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error fetching notices" },
      { status: 500 }
    );
  }
}