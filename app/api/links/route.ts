import { NextResponse } from "next/server";
import prisma from "../../lib/prismaClient";

export async function GET() {
  try {
    const links = await prisma.link.findMany({
      include: {
        author: true,
      },
    });

    return NextResponse.json(links);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
