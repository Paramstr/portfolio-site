import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
        initial = {{
            opacity: 0,
        }}
        animate = {{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.7, 0.1, 0.2],
            borderRadius: ["20%","20%","50%","80%","20%",], 
        }}
        transition = {{
            duration: 100,
        }} 
        className='relative flex justify-center items-center'>

        <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />  {/* the absolute border - means it pushes it to the top relative to parent */}
        <div className='rounded-full border border-[#090A05] h-[300px] w-[300px] mt-52 absolute animate-ping' />
        <div className='rounded-full border border-[#090A05] h-[500px] w-[500px] mt-52 absolute animate-ping' />
        <div className='rounded-full border border-[#090A05] h-[650px] w-[650px] mt-52 opacity-20 absolute animate-pulse' />
        <div className='rounded-full border border-[#090A05] h-[800px] w-[800px] mt-52 absolute animate-ping' />

    </motion.div>
  )
}

export default BackgroundCircles