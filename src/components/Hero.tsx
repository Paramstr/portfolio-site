
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'

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

        <Image
            className='relative rounded-full h-64 w-64 mx-auto object-cover'
            src='https://cdn.discordapp.com/attachments/1073542307699245097/1073893298932043826/DALLE_2023-02-11_22.06.45_-_expand_all_sides.png'
            alt=""
            width={500}
            height={500}
        />

        <div>
            <h2 className='text-sm uppercase  text-slate-900 pb-2 tracking-[15px] font-weight-300'> Software Enginner</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-amber-900'>
                <span>{text}</span>
                <Cursor cursorColor= "#F7AB0A" />
            </h1>

            <div className='pt-5'>
                {/* The links for take the user to the relevant parts of the page */}
                <a href="#about"> 
                    <button className='heroButton'>About</button>
                </a>
                <a href="#experience">
                    <button className='heroButton'>Experience</button>
                </a>    
                <a href="#skills">
                    <button className='heroButton'>Skills</button>
                </a>    
                <a href="#projects">
                    <button className='heroButton'>Projects</button>
                </a>
            </div>
        </div>

    </div>
    )
}

// export default Hero href="#about"> 
//     <button className='heroButton'>About</button>
// </import>
// <a href="#experience">
//     <button className='heroButton'>Experience</button>
// </a>    
// <a href="#skills">
//     <button className='heroButton'>Skills</button>
// </a>    
// <a href="#projects">
//     <button className='heroButton'>Projects</button>
// </a>



export default Hero