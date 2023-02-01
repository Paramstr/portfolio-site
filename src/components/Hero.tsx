import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name is Param Singh",
            "Guy-who-loves-Everything.tsx",
            "<ButLovesCodingMORE! />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='red' />
        </h1>
    </div>
  )
}

export default Hero