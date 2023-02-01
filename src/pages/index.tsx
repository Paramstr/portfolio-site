import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className = "bg-[rgb(57,64,73)] text-white h-screen snap-mandatory overflow-scroll z-0">
      <Head>
        <title> Params Portfolio</title>
      </Head>
      
      <Header /> 
      
      {/* Hero */}
      <section id= "Hero" className='snap-center'>

        <Hero/>

      </section>



      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      


    </div>
  )
}


