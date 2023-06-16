'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <Box className="justify-between mx-auto gap-16 sm:flex">

      {/* First Column */}
      <Box className="mt-16 basis-1/2 sm:mt-0">
        <Typography variant="h4" className='font-bold'>
          BLOG OF THE FUTURE
        </Typography>
        <Typography className='my-5'>
          Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          purus et arcu massa dictum condimentum. Augue scelerisque iaculis
          orci ut habitant laoreet. Iaculis tristique.
        </Typography>
        <Typography>
        © Blog of the Future All Rights Reserved.
        </Typography>
      </Box>

      {/* Second Column */}
      <Box className="mt-16 basis-1/2 sm:mt-0">
        <Typography variant="h4" className='font-bold'></Typography>
        <Typography className='my-5'></Typography>
        <Typography className='my-5'></Typography>
        <Typography></Typography>
      </Box>

      {/* Third Column */}
      <Box className="mt-16 basis-1/2 sm:mt-0">
        <Typography variant="h4" className='font-bold'></Typography>
        <Typography className='my-5'></Typography>
        <Typography></Typography>
      </Box>

      </Box>
    </footer>
  )
}
