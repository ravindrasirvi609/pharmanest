import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import AbstractModel from "@/Model/AbstractModel";

connect();

export async function GET(
  request: NextRequest,
  context: { params: { code: string } }
) {
  const { code } = context.params;

  try {
    const abstract = await AbstractModel.findOne({
      $or: [{ temporyAbstractCode: code }, { AbstractCode: code }],
    });

    if (!abstract) {
      return NextResponse.json(
        { error: "Abstract not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(abstract);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching abstract" },
      { status: 500 }
    );
  }
}
