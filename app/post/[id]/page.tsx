'use client'
// REACT Imports
import React from 'react'

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

export const revalidate = 60;

export default async function Post({ params }: Props) {

  const { id } = params;

  const getPost = async (id: string) => {
    const response = await fetch(`/api/getpost/${id}`, {
      method: 'GET',
    })
    const data: any = await response.json();
    const formattedPost = {
      ...data,
      createdAt: data?.createdAt?.toISOString(),
      updatedAt: data?.updatedAt?.toISOString(),
    }
    return formattedPost;
  };

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
