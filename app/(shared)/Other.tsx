'use client'
// COMPONENT Imports
import React from 'react'
import { Post } from "@prisma/client"
import Card from "./Card"
import { Box, Typography, Divider } from '@mui/material'

// TYPESAFE
type Props = {
  otherPosts: Array<Post>;
}

export default function Other({ otherPosts }: Props) { 

  return (
    <section className='pt-1 mb-16'>
      <Divider className='border-1'/>

      {/* HEADER */}
      <Typography>Other Trending Posts</Typography>
      <Box>
        <Card
          className='mt-5 sm:mt-0'
          imageHeight='h-80'
          post={otherPosts[0]}
        />
        <Card
          className='mt-5 sm:mt-0'
          imageHeight='h-80'
          post={otherPosts[1]}
        />
        <Card
          className='mt-5 sm:mt-0'
          imageHeight='h-80'
          post={otherPosts[2]}
        />
        <Card
          className='mt-5 sm:mt-0'
          imageHeight='h-80'
          post={otherPosts[3]}
        />
      </Box>

    </section>
  );
};
