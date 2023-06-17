'use client'
// REACT & NEXT Imports
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// MUI Imports
import { Box, Typography, Divider } from '@mui/material'

// MISC Imports
import SocialLinks from './SocialLinks'
import Ad1 from '../assets/ad-1.jpg'

type Props = {};

export default function Navbar( props: Props) {
  return (
    <header className='mb-5'>

      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py4'>
        <Box className='hidden sm:block'>
          <SocialLinks/>
        </Box>
        <Box>
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </Box>
        <Box>
          <Typography>Sign In</Typography>
        </Box>
      </nav>

      <Box className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <Box className='basis-2/3 md:mt-3'>
          <Typography variant='h1' className='font-bold text-3xl md:text-5xl'>
            BLOG OF THE FUTURE
          </Typography>
          <Typography className='text-sm mt-3'>
            Blog dedicated towards AI and generation and job automation
          </Typography>
        </Box>

        <Box className='basis-full relative w-auto h-32 bg-wh-500'>
          <Image
            fill
            alt='advert-1'
            placeholder='blur'
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 75vw,
            (max-width: 1060px) 50vw,
            33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      <Divider className='border-1 mx-10'/>

    </header>
  );
};
