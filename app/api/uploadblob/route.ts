import { NextRequest, NextResponse } from "next/server";
import { blobstorage } from "@/actions/azureActions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { file } = body;

    if (!file || !file.data || !file.name) {
      return NextResponse.json({ error: "Missing file data or name" }, { status: 400 });
    }

    // Decode the base64 file data
    const buffer = Buffer.from(file.data, "base64");

    // Upload the file to Azure Blob Storage
    const uploadBlobResponse = await blobstorage(buffer, file.name);

    return NextResponse.json({ uploadBlobResponse }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
