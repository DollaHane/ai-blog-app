import prisma from "@/app/lib/client";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: any) {
  try {
    const posts = await prisma.post.findMany();

    // const formattedPosts = await Promise.all(
    //   posts.map(async (post) => {
    //     const imageModule = require(`.${post.image}`);
    //     return {
    //       ...post,
    //       image: imageModule.default,
    //     };
    //   })
    // );

    if (!posts || posts.length === 0) {
      return new Response(JSON.stringify({ error: "Could not find any posts." }), { status: 400 });
    }

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

