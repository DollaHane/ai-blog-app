'use client'
// REACT & NEXT Imports
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

// MUI & PRISMA Imports
import { Post } from "@prisma/client"
import { Box, Typography } from '@mui/material'

// TYPESAFE
type Props = {
  className?: string;
  post: Post;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};


export default function Card({ className, post, imageHeight, isSmallCard, isLongForm }: Props) {
  
  // Post data props..
  const { id, title, author, createdAt, image, snippet } = post || {};

  // Card date formatting..
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <Box className={className}>

      {/* SECTION 1: CARD IMAGE */}
      <Link
        className="basis-full hover:opacity-70"
        href={`/post/${post?.id}`}
      >
        <Box className={`relative w-auto mb-3 ${imageHeight}`}>
          <img
            alt="tech"
            src={image}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Link>

      {/* SECTION 2 */}
      <Box>

        {/* SECTION 2: CARD TITLE */}
        <Link href={`/post/${post?.id}`}>
          <Typography
            variant='h4'
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
            `}
          >
            {title}
          </Typography>
        </Link>

        {/* SECTION 2: CARD INFO */}
        <Box className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <Typography variant='h5' className='font-semibold text-xs'>{author}</Typography>
          <Typography variant='h6' className='text-wh-300 text-xs'>{formattedDate}</Typography>
        </Box>

        {/* SECTION 2: CARD SNIPPET */}
        <Typography 
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </Typography>

      </Box>
    </Box>
  );
};
