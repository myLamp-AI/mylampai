// app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/index";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
    });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching blog post" },
      { status: 500 }
    );
  }
}
