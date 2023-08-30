import { NextResponse } from "next/server";
import prisma from "../../lib/prismaClient";

export async function POST(request: any) {
  try {
    const { title, description, url, imageUrl, authorId } =
      await request.json();

    if (!title || !description || !url || !imageUrl) {
      return new NextResponse("Required fields are missing", { status: 400 });
    }

    console.log("number 1");

    const link = await prisma.link.create({
      data: {
        title,
        description,
        url,
        imageUrl,
        authorId,
      },
      include: {
        author: true,
      },
    });
    console.log("number 2");
    return NextResponse.json(link);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
