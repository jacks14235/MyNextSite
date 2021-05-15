import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react'

export async function getStaticProps() {
  
}

export default function ResearchPage() {
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
        <div className='px-4 sm:px-16 lg:px-32 mb-16'>
          <h3 className='text-center md:text-left text-lg font-semibold text-left self-start mt-12'>Abstract</h3>
          <p className='text-center md:text-left text-base'>Machine learning algorithms are being applied to a diverse range of applications, maybe one of the most surprising being musical composition. This paper investigates how the encoding of training data affects stylistic components of music, specifically tempo and dynamics. The object of analysis is MuseNet, a recurrent LSTM model capable of mimicking music in a range of genres and composers. Focusing on compositions based on romantic composer Frédéric Chopin, analysis of MuseNet’s compositions were compared to human performances of his works. This investigation finds that the AI-written music lacks diversity in both tempo and dynamic range, ultimately limiting the potential for stylistic and emotional aspects of music.</p>
        </div>
        <h3 className='text-center text-red-500 xs:text-orange-500 sm:text-green-500 md:text-blue-500 lg:text-indigo-500'>Video Abstract</h3>
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
      <Link href='/'><a><p className='text-blue-700 text-center pt-12 pb-32'><u>Back to Home</u></p></a></Link>
    </>
  )
}