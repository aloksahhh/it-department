import { connect } from "@/src/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  console.log("DB Connected + Route Working ✅");

  return NextResponse.json({
    message: "API working successfully"
  });
}