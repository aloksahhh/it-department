import { NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig";
import Notice from "@/src/models/Notice";

export async function GET() {
  await connect();

  const notices = await Notice
    .find()
    .sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    data: notices,
  });
}