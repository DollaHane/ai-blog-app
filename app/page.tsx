'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

// COMPONENT Imports
import Trending from './(home)/Trending';
import Tech from './(home)/Tech';
import Travel from './(home)/Travel';
import Other from './(shared)/Other';
import Subscribe from './(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';
import { Post } from '@prisma/client';


export const revalidate = 60;

export default function Home() {
  const [trendingPosts, setTrendingPosts] = useState<Array<Post>>([]);
  const [techPosts, setTechPosts] = useState<Array<Post>>([]);
  const [travelPosts, setTravelPosts] = useState<Array<Post>>([]);
  const [otherPosts, setOtherPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`/api/getposts`, {
        method: 'GET',
      });
      const data: any = await response.json();
      return data;
    };

    getPosts()
      .then((data) => {
        const formattedPosts = formatPosts(data);
        setTrendingPosts(formattedPosts[0]);
        setTechPosts(formattedPosts[1]);
        setTravelPosts(formattedPosts[2]);
        setOtherPosts(formattedPosts[3]);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const formatPosts = (posts: Array<Post>) => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === 'Tech') {
        techPosts.push(post);
      } else if (post?.category === 'Travel') {
        travelPosts.push(post);
      } else if (post?.category === 'Interior Design') {
        otherPosts.push(post);
      }
    });

    console.log('Formatted', trendingPosts, techPosts, travelPosts, otherPosts);
    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <Box className="md:flex gap-10 mb-5">
        <Box className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <Box className="hidden md:block">
            <Subscribe />
          </Box>
        </Box>
        <Box className="basis-1/4">
          <Sidebar />
        </Box>
      </Box>
    </main>
  );
}
