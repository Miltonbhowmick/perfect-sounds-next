// app/api/download-audio/route.js

import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { message: "No file URL provided" },
      { status: 400 }
    );
  }

  try {
    // Use the built-in fetch
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("File not found");
    }

    const fileName = url.split("/").pop(); // Extract the file name from URL
    const headers = new Headers({
      "Content-Disposition": `attachment; filename=${fileName}`,
      "Content-Type": "audio/mpeg",
    });

    // Stream the file to the client
    return new Response(response.body, { headers });
  } catch (error) {
    return NextResponse.json(
      { message: "Error downloading file" },
      { status: 500 }
    );
  }
}
