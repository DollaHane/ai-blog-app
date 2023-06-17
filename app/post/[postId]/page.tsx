'use client'
// REACT Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import { Box, Typography } from '@mui/material'

// COMPONENT Imports
import { FormattedPost } from '../../components-shared/types'
import Sidebar from '../../(shared)/Sidebar'
import Content from './Content'

// TYPESAFE
type Props = {
  params: { postId: string }
};

export default function Post({ params }: Props) {

  const { postId } = params;
  console.log("postId", postId)
  const [post, setPost] = useState()

  const getPost = async (postId: any) => {
    console.log(postId)
    const response = await fetch(`/api/getpost/${postId}`, {
      method: 'GET',
    })
    const data: any = await response.json();
    console.log("data", data)
    const formattedPost = {
      ...data,
      createdAt: data?.createdAt instanceof Date ? data.createdAt.toISOString() : null,
      updatedAt: data?.updatedAt instanceof Date ? data.updatedAt.toISOString() : null,

    }
    setPost(formattedPost)
  };

  useEffect(() => {
    getPost(postId)
  }, [postId]);


  if (!post) {
    return 
  }

  return (
    <main className='px-10 leading-7'>
      {
        !post ? (
          <Box>
            <Typography variant='h3'>
              Post Not Found..
            </Typography>
          </Box>
        ) : (
          <Box className='md:flex gap-10 mb-5'>
            <Box className='basis-3/4'>
            </Box>
            <Box className='basis-1/4'>
              <Sidebar/>
            </Box>
          </Box>
        )
      }
    </main>
  );
};
