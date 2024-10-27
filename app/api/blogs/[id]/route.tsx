import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async (req: NextRequest, res: NextResponse) => {
  const id = req.url.split("/blogs/")[1];
  try {

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        sections: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", blog }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};