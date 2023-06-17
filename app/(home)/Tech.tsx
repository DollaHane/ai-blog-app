'use client'
// REACT & PRISMA Imports
import React from 'react'
import { Post } from '@prisma/client'

// MUI & COMPS Imports
import { Box, Typography, Divider } from '@mui/material'
import Card from '../(shared)/Card'

type Props = {
  techPosts: Array<Post>;
}

export default function Tech({ techPosts }: Props) {

  console.log("Tech-0", techPosts[0]?.id)

  return (
    <section>
      <Divider className='border-1'/>

      {/* HEADER */}
      <Box className='flex items-center gap-3 my-8'>
        <Typography variant='h4' className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>
          HOT
        </Typography>
        <Typography className='font-bold text-2xl'>
          Latest News in Technology
        </Typography>
      </Box>

      {/* GRID */}
      <Box className='sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5'>
        {/* LARGE CARD */}
        <Card
          className='col-span-1 row-span-3'
          imageHeight='h-96'
          post={techPosts[0]}
          isLongForm
        />

        {/* SMALL CARD */}
        <Card
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          post={techPosts[1]}
          isLongForm
        />
        <Card
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          post={techPosts[2]}
          isLongForm
        />
        <Card
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3'
          imageHeight='h-48'
          post={techPosts[3]}
          isLongForm
        />
        
      </Box>
    </section>
  )
}
