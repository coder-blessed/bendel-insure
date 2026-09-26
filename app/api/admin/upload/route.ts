import { type NextRequest, NextResponse } from "next/server";
import { uploadMediaToCloudinary } from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { file, folder } = body;

    if (!file || typeof file !== "string") {
      return NextResponse.json(
        { success: false, message: "Image file data is required." },
        { status: 400 },
      );
    }

    const result = await uploadMediaToCloudinary(file, folder);

    return NextResponse.json({
      success: true,
      data: result,
      url: result.url,
      message: "Media uploaded to Cloudinary successfully.",
    });
  } catch (error) {
    console.error("API /api/admin/upload error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to upload image to Cloudinary.",
      },
      { status: 500 },
    );
  }
}
