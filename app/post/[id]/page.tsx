'use client'
// REACT Imports
import React from 'react'

// PRISM Imports
import { prisma } from '@/app/lib/client'
import { Post as PostType } from '@prisma/client'

// MUI Imports
import { Box, Typography } from '@mui/material'

// COMPONENT Imports
import { FormattedPost } from '@/app/components-shared/types'
import Sidebar from '@/app/(shared)/Sidebar'
import Content from './Content'

// TYPESAFE
type Props = {
  params: { id: string };
}

// GET REQUEST
export const revalidate = 60;

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found..`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  }
  return formattedPost;
}

// DEFAULT FUNCTION
export default async function Post({ params }: Props) {

  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <Box>
      <Typography variant='h3'>
        Post Not Found..
      </Typography>
    </Box>
  }

  return (
    <main className='px-10 leading-7'>
      <Box className='md:flex gap-10 mb-5'>
        <Box className='basis-3/4'>
          <Content post={post}/>
        </Box>
        <Box className='basis-1/4'>
          <Sidebar/>
        </Box>
      </Box>
    </main>
  );
};
