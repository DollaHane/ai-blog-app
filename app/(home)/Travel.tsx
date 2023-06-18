'use client'
// REACT & PRISMA Imports
import React from 'react'
import { Post } from '@prisma/client'

// MUI & COMPS Imports
import { Box, Typography, Divider } from '@mui/material'
import Card from '../(shared)/Card'

type Props = {
  travelPosts: Array<Post>;
}

export default function Travel({ travelPosts }: Props) {
  return (
    <section>
      <Divider className='border-1'/>

      {/* HEADER */}
      <Box className='flex items-center gap-3 my-8'>
        <Typography variant='h4' className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>
          HOT
        </Typography>
        <Typography className='font-bold text-2xl'>
          Latest News in Travel
        </Typography>
      </Box>

      {/* GRID */}
      <Box className='sm:flex justify-between gap-8'>

        {/* CARDS */}
        <Card
          className='basis-1/3 mt-5 sm:mt-0'
          imageHeight='h-80'
          post={travelPosts[0]}
          isLongForm
        />
        <Card
          className='basis-1/3 mt-5 sm:mt-0'
          imageHeight='h-80'
          post={travelPosts[1]}
          isLongForm
        />
        <Card
          className='basis-1/3 mt-5 sm:mt-0'
          imageHeight='h-80'
          post={travelPosts[2]}
          isLongForm
        />
        
      </Box>

      <Card
        className=" sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        post={travelPosts[3]}
      />
      
    </section>
  )
}
