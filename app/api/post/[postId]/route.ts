import prisma from "@/app/lib/client";
import { NextResponse } from "next/server";


export async function PATCH(request: NextResponse, context: any) {
  try {
    const id = context.params.postId
    console.log("patch id", id)
    const { title, content } = await request.json();
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 })
  }
}