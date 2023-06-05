'use client'
import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'

export default function Subscribe() {
  return (
    <Box className="text-center bg-wh-10 px-5 py-10">

      <Typography variant="h4" className='font-semibold text-base'>
        Subscribe to our Newsletter
      </Typography>
      <Typography className='text-wh-500 my-3 w-5/6 mx-auto'>
        Enter email address to get top news and great deals
      </Typography>
      
      <TextField
        className='text-center w-5/6 min-w-[100px] px-5 py-2 border-2'
        placeholder='Enter Email Address'
      />

      <Button className='bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 mt-3'>
        SUBSCRIBE
      </Button>

    </Box>
  );
};
