'use client'
// REACT & NEXT Imports
import React from 'react'
import Image from 'next/image'

// COMPONENT Imports
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

// IMAGES Imports
import Ad2 from "../assets/ad-2.png"
import AboutProfile from "../assets/about-profile.jpg"
import { Box, Typography } from '@mui/material'

export default function Sidebar() {
  return (
    <section>
      
      <Typography variant="h4" className='bg-wh-900 py-3 px-5 text-wh-50 font-bold text-center'>
        Subscribe and Follow
      </Typography>

      <Box>
        <SocialLinks isDark/>
      </Box>

      <Subscribe/>

      <Image
        className='hidden md:block my-8 w-full'
        alt='advert-2'
        placeholder='blur'
        src={Ad2}
        width={500}
        height={1000}
      />

      <Typography variant='h4' className='bg-wh-900 py-3 px-5 text-wh-50 font-bold text-center'>
        About the Blog
      </Typography>

      <Box>
        <Image
          className='hidden md:block my-8 w-full'
          alt='advert-2'
          placeholder='blur'
          src={AboutProfile}
          width={500}
          height={1000}
        />
      </Box>

      <Typography variant='h4' className='py-3 px-5 text-wh-500 font-bold text-center'>
        Elon Musk
      </Typography>

      <Typography>
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi.
      </Typography>

    </section>
  )
}
