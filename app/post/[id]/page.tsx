'use client'
// REACT Imports
import React, { useEffect } from 'react'

// MUI Imports
import { Box, Typography } from '@mui/material'

// COMPONENT Imports
import { FormattedPost } from '@/app/components-shared/types'
import Sidebar from '@/app/components/Sidebar'
import Content from './Content'

// TYPESAFE
type Props = {
  params: { id: string };
}

export const revalidate = 60;

export default async function Post(context: any) {

  const id = context.params.id;
  console.log(id)

  const getPost = async (id: string) => {
    console.log(id)
    const response = await fetch(`/api/getpost/${id}`, {
      method: 'GET',
    })
    const data: any = await response.json();
    console.log("data", data)
    const formattedPost = {
      ...data,
      createdAt: data?.createdAt?.toISOString(),
      updatedAt: data?.updatedAt?.toISOString(),
    }
    return formattedPost;
  };

  const post: FormattedPost | null = await getPost(id);
  console.log("post", post)


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
