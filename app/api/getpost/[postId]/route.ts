import prisma from "@/app/lib/client";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: any) {

  const id = context.params.id
    if (!id) {
      return new Response(JSON.stringify({error: "Missing id parameter"}), { status: 400 });
    }

  try {
    const posts = await prisma.post.findUnique({
      where: { id },
    });

    if (!posts) {
      return new Response(JSON.stringify({ error: `Post with id ${id} not found..` }), { status: 400 });
    }

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


