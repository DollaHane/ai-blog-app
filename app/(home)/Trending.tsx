'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@prisma/client'
import { Box, Typography } from '@mui/material'


// TREDING CARD COMPONENT
type TrendingCardProps = {
  className?: string;
  post: Post;
}

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  
  return (
    <Link 
      className={`${className} sm:mt-0 sm:h-auto flex mt-7 w-full h-96 hover:opacity-70`}
      href={`/post/${post?.id}`}
    >
      <Box className='z-0 flex w-full'>
        <img
          alt='tech'
          src={post?.image}
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          className='h-full object-cover rounded-xl shadow-lg mx-auto my-2'
        />
      </Box>

      <Box className='absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual'/>

      <Box className='relative z-2 bottom-0 left-0 p-3'>
        <Typography variant='h4' className='inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900'>
          {post?.category}
        </Typography>
        <Box>
          {post?.title}
        </Box>
      </Box>

    </Link>
  );
};

// DEFAULT TRENDING FUNCTION
type Props ={
  trendingPosts: Array<Post>;
}

export default function Trending({ trendingPosts }: Props) {

  return (
    <section className='pt-3 pb-10'>

      <Box className='flex items-center gap-3 my-5'>
        <Typography variant='h4' className='bg-wh-900 py-2 px-8 text-wh-10 text-m font-bold'>
          TRENDING:
        </Typography>
        <Typography className='text-sm'>
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </Typography>
      </Box>

      <Box className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
        <TrendingCard
          className='col-span-2 row-span-2 bg-wh-500'
          post={trendingPosts[0]}
        />
        <TrendingCard
          className='col-span-2 row-span-2 bg-wh-500'
          post={trendingPosts[1]}
        />
        <TrendingCard
          className='col-span-2 row-span-2 bg-wh-500'
          post={trendingPosts[2]}
        />
        <TrendingCard
          className='col-span-2 row-span-2 bg-wh-500'
          post={trendingPosts[3]}
        />
      </Box>

      <Typography className='text-sm pt-10'>
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </Typography>
    </section>
  )
}
