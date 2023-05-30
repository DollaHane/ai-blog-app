// REACT & NEXT Imports
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// MUI Imports
import { Box } from '@mui/material'

// IMAGE Imports
import Twitter from "../assets/social_twitter.png"
import Facebook from "../assets/social_facebook.png"
import Instagram from "../assets/social_instagram.png"
import Google from "../assets/social_google.png"
import Discord from "../assets/social_discord.png"

// TYPESAFE
type Props = {
  isDark?: boolean;
}

export default function SocialLinks({ isDark }: Props) {

  return (
    <Box className='flex justify-between items-center gap-7'>

      <Link href="https//twitter.com" target="_blank" rel="noreferrer">
      <Image
        className={`${isDark ? "brightness-0" : "hover:opacity-50"}`}
        alt="twitter"
        src={Twitter}
        width={20}
        height={20}
      />
      </Link>

      <Link href="https//twitter.com" target="_blank" rel="noreferrer">
      <Image
        className={`${isDark ? "brightness-0" : "hover:opacity-50"}`}
        alt="facebook"
        src={Facebook}
        width={20}
        height={20}
      />
      </Link>

      <Link href="https//twitter.com" target="_blank" rel="noreferrer">
      <Image
        className={`${isDark ? "brightness-0" : "hover:opacity-50"}`}
        alt="Instagram"
        src={Instagram}
        width={20}
        height={20}
      />
      </Link>

      <Link href="https//twitter.com" target="_blank" rel="noreferrer">
      <Image
        className={`${isDark ? "brightness-0" : "hover:opacity-50"}`}
        alt="google"
        src={Google}
        width={20}
        height={20}
      />
      </Link>

      <Link href="https//twitter.com" target="_blank" rel="noreferrer">
      <Image
        className={`${isDark ? "brightness-0" : "hover:opacity-50"}`}
        alt="discord"
        src={Discord}
        width={20}
        height={20}
      />
      </Link>
    </Box>
  );
};
