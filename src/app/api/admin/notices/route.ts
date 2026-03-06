import { NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig";
import Notice from "@/src/models/Notice";

export async function POST(req: Request) {
  try {
    await connect();

    const body = await req.json();

    const notice = await Notice.create({
      title: body.title,
      description: body.description,
    });

    return NextResponse.json({
      success: true,
      data: notice,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error creating notice" },
      { status: 500 }
    );
  }
}