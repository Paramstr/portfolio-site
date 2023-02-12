import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center">   
      <motion.div //animate from left
      initial = {{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate = {{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition = {{
        duration: 1
      }}
      className="flex flex-row items-center">
        {/* Social Icons (pulled from library) */}

        <SocialIcon 
        url="https://twitter.com/jaketrent"
        fgColor="#1c1917"
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://twitter.com/jaketrent"
        fgColor="#1c1917"
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://twitter.com/jaketrent"
        fgColor="#1c1917"
        bgColor="transparent"
        />
      </motion.div>

      <motion.div //animate from the right
      initial = {{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate = {{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition = {{
        duration: 1
      }} 
      className="flex flex-row items-center text-amber-700 cursor-pointer">
        <SocialIcon 
        className="cursor-pointer" 
        network="email" 
        fgColor="#1c1917"
        bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-stone-900"> Get in Touch</p>
      </motion.div>

    </header>
  )
}