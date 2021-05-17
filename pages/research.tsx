import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react'

export async function getStaticProps() {
  return ({
    props: {}
  })
}

export default function ResearchPage(props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return (() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    });
  }, []);

  return (
    <>
      <Head>
        <title>Research</title>
      </Head>
      <Navbar />
      <div className='w-full flex flex-col items-center mt-10 sm:mt-0'>
        <h1 className='text-orange-500 text-center text-3xl font-bold mt-4'>Cracking the Encode:</h1>
        <h2 className='text-gray-400 text-center text-xl mt-2'>The consequences of normalizing training data in AI music composition</h2>
        <p className='px-4 text-center md:px-16 lg:px-32'>
          I wrote this research paper as part of my <i>Living with AI</i> writing seminar during my freshman year at Princeton University.
          This topic combines two great interests of mine, deep learning and music. I've been learning piano for the past 7 years so it was
          fun to combine what I've learned playing piano with AI in a meaningful paper.
        </p>
        <div className='px-4 sm:px-16 lg:px-32 mb-10'>
          <h3 className='text-center md:text-left text-lg font-semibold text-left self-start mt-12'>Abstract</h3>
          <p className='text-center md:text-left text-base'>Machine learning algorithms are being applied to a diverse range of applications, maybe one of the most surprising being musical composition. This paper investigates how the encoding of training data affects stylistic components of music, specifically tempo and dynamics. The object of analysis is MuseNet, a recurrent LSTM model capable of mimicking music in a range of genres and composers. Focusing on compositions based on romantic composer Frédéric Chopin, analysis of MuseNet’s compositions were compared to human performances of his works. This investigation finds that the AI-written music lacks diversity in both tempo and dynamic range, ultimately limiting the potential for stylistic and emotional aspects of music.</p>
        </div>
        <a href='/api/cracking-the-encode' target='_blank'>
          <div className='flex flex-row cursor-pointer px-3 hover:bg-gray-300 transition-color duration-300 mb-8 items-center justify-between h-9 border border-gray-600 rounded-md'>
            <Image width={23} height={28} src='/images/logos/pdf.svg' />
            <p className='font-semibold ml-2'>Full paper</p>
          </div>
        </a>
        <h3 className='text-center text-red-500 xs:text-orange-500 sm:text-green-500 md:text-blue-500 lg:text-orange-400 font-semibold text-xl'>Video Abstract</h3>
        <iframe
          style={{ width: Math.min(600, windowWidth * .8) + 'px', height: (9 / 16) * Math.min(600, windowWidth * .8) + 'px' }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Br3SwyfNeV8"
          title="Video Abstract"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* Tailwind purges the dynamic classnames, writing them in this div makes it keep them */}
      <div className='hidden bg-green-400 bg-green-500 bg-green-700 bg-orange-400 bg-orange-500 bg-orange-700 bg-blue-400 bg-blue-500 bg-blue-700 bg-red-400 bg-red-500 bg-red-700 bg-indigo-400 bg-indigo-500 bg-indigo-700 bg-purple-400 bg-purple-500 bg-purple-700 bg-pink-400 bg-pink-500 bg-pink-700 flex-row-reverse flex-col-reverse translate-x-0.25 translate-x-4 translate-x-8 translate-x-12 translate-x-16 translate-x-20 translate-x-24 translate-x-28 translate-x-32 translate-x-40 translate-x-44 translate-x-48 translate-x-52 translate-x-56 translate-x-60 translate-x-64 translate-x-72 translate-x-80 translate-x-96 -translate-x-0.25 -translate-x-4 -translate-x-8 -translate-x-12 -translate-x-16 -translate-x-20 -translate-x-24 -translate-x-28 -translate-x-32 -translate-x-40 -translate-x-44 -translate-x-48 -translate-x-52 -translate-x-56 -translate-x-60 -translate-x-64 -translate-x-72 -translate-x-80 -translate-x-96' />
      <Link href='/'><a><p className='text-blue-700 text-center mt-12 mb-32'><u>Back to Home</u></p></a></Link>
    </>
  )
}