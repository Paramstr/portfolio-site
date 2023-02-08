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
            src='https://media.discordapp.net/attachments/1008567395658518608/1071944948133408898/Laplace_an_indian_male_called_gurjas_age_21_black_hair_middle_p_265e5339-8248-42cb-ab1f-30d290e98b3f.png'
            alt=""
            width={500}
            height={500}
        />

        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-weight-300'> Software Enginner</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor= "#F7AB0A" />
            </h1>

            <div className='pt-5'>
                {/* The links for take the user to the relevant parts of the page */}
                <a React from 'react'
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
                            src='https://media.discordapp.net/attachments/1008567395658518608/1071944948133408898/Laplace_an_indian_male_called_gurjas_age_21_black_hair_middle_p_265e5339-8248-42cb-ab1f-30d290e98b3f.png'
                            alt=""
                            width={500}
                            height={500}
                        />
                
                        <div>
                            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-weight-300'> Software Enginner</h2>
                            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
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
                
                export default Hero href="#about"> 
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

export default Hero