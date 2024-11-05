import Head from 'next/head'
import Navbar from '../components/navbar';
import { useState, useEffect, useRef } from 'react'
import { useScrollY, useWidth } from '../components/utility-hooks';
import { SlideIn } from '../components/slide-in';

export async function getStaticProps() {
  return ({
    props: {}
  })
}

export default function ResearchPage(props) {
  const [bgColor, setBgColor] = useState<string>('#1E0048');
  const videoRef = useRef<HTMLVideoElement>(null);

  const windowWidth = useWidth();
  const scrollY = useScrollY();

  useEffect(() => {
    if (scrollY < 3000) {
      setBgColor('#FFFFFF');//'#0b001a');
    } else if (scrollY < 9000) {
      setBgColor('#15001a');
    } else {
      setBgColor('#1a1500');//'#15001a');
    }
    if (6000 < scrollY && scrollY < 9000 && videoRef.current) {
      // videoRef.current.play();
      let progress = (scrollY - 6000) / 1000;
      videoRef.current.currentTime = progress;
      // window.requestAnimationFrame(() => {});
    }
  }, [scrollY])

  return (
    <>
      <Head>
        <title>Jack Stanley - Research</title>
        <meta name='description' content="Jack Stanley's essay regarding encoding in machine learning training data, mainly a critique of MuseNet" />
      </Head>
      <div className='w-full h-screen sticky z-0 top-0 left-0 mt-10 sm:mt-0 transition-colors duration-1000' style={{backgroundColor: bgColor, overflowY: 'hidden' }}>
        <Navbar black position='absolute' />
        <p className='absolute'>{scrollY}</p>
        {/* Title page */}
        <div className='absolute flex flex-col row-span-2 items-center justify-around w-full h-full'>
          <SlideIn className='mt-16' scrollY={scrollY} start={0} end={3000} mode='left'>
            <h1 className='text-black text-8xl font-bold text-center'>My Research</h1>
            <h2 className='text-black text-5xl font-bold text-center'>Graphics | AI | Music</h2>
          </SlideIn>
          {scrollY < 3000 && <>
              <h6>Scroll for more</h6>
              <span className='animate-bounce'><h6 className='rotate-180'>^</h6></span>
            </>
          }
        </div>
        {/* Independent Work */}
        <div className='absolute flex flex-row items-center justify-center w-full h-full'>
          <SlideIn className='flex justify-center items-center h-full' scrollY={scrollY} start={3000} end={9000} mode='left' duration={1000}>
            <h1 className='text-white text-8xl font-extrabold w-60'>SNeRF</h1>
          </SlideIn>
          <div className='relative w-full h-full'>
            <SlideIn className='flex flex-col justify-center items-start' left={0} top={0} scrollY={scrollY} start={3000} end={6000} mode='right' duration={1000}>
              <h3 className='text-left text-white text-3xl font-extrabold w-80'>Using segmentation to refine transient object removal in NeRFs</h3>
              <h3 className='relative z-10 text-left text-white text-xl'>
                <a className='text-blue-500' href='/api/iw' target='_blank'>Full Paper</a></h3>
            </SlideIn>
            <div className='absolute top-0 left-0 w-full h-full'>
              <SlideIn className='flex flex-col justify-center items-start' left={0} top={0} scrollY={scrollY} start={6000} end={9000} mode='right' duration={1000}>
                <video ref={videoRef} preload='preload'>
                  <source src="/images/bulldozer.mp4" />
                  Video not supported
                </video>
              </SlideIn>
            </div>
          </div>
        </div>
        {/* Cracking the encode */}
        <div className='absolute flex flex-row items-center justify-center w-full h-full'>
          <SlideIn className='flex justify-center items-center h-full' scrollY={scrollY} start={9000} end={15000} mode='left' duration={1000}>
            <h1 className='text-white text-8xl font-extrabold w-60'>cracking the <br></br>encode</h1>
          </SlideIn>
          <div className='relative w-full h-full'>
            <SlideIn className='flex flex-col justify-center items-start' left={0} top={0} scrollY={scrollY} start={9000} end={12000} mode='right' duration={1000}>
              <h3 className='text-left text-white text-3xl font-extrabold w-80'>The consequences of normalizing training data in AI music composition</h3>
              <h3 className='text-left text-white text-xl relative z-10'>
                <a className='text-blue-500' href="https://www.youtube.com/embed/Br3SwyfNeV8" target="_blank">Video Abstract</a> | {' '}
                <a className='text-blue-500' href='/api/cracking-the-encode' target='_blank'>Full Paper</a></h3>
            </SlideIn>
            <div className='absolute top-0 left-0 w-full h-full'>
              <SlideIn className='flex flex-col justify-center items-start' left={0} top={0} scrollY={scrollY} start={12000} end={15000} mode='right' duration={1000}>
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
              </SlideIn>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '15000px' }}></div>
      <div className='fixed bottom-8 w-4/5 h-1 flex flex-row justify-start'>
        <div className='h-full bg-blue-500' style={{width: `${100 * scrollY / 15000}%`}} />
      </div>
      {/* Tailwind purges the dynamic classnames, writing them in this div makes it keep them */}
      <div className='hidden bg-green-400 bg-green-500 bg-green-700 bg-orange-400 bg-orange-500 bg-orange-700 bg-blue-400 bg-blue-500 bg-blue-700 bg-red-400 bg-red-500 bg-red-700 bg-indigo-400 bg-indigo-500 bg-indigo-700 bg-purple-400 bg-purple-500 bg-purple-700 bg-pink-400 bg-pink-500 bg-pink-700 flex-row-reverse flex-col-reverse translate-x-0.25 translate-x-4 translate-x-8 translate-x-12 translate-x-16 translate-x-20 translate-x-24 translate-x-28 translate-x-32 translate-x-40 translate-x-44 translate-x-48 translate-x-52 translate-x-56 translate-x-60 translate-x-64 translate-x-72 translate-x-80 translate-x-96 -translate-x-0.25 -translate-x-4 -translate-x-8 -translate-x-12 -translate-x-16 -translate-x-20 -translate-x-24 -translate-x-28 -translate-x-32 -translate-x-40 -translate-x-44 -translate-x-48 -translate-x-52 -translate-x-56 -translate-x-60 -translate-x-64 -translate-x-72 -translate-x-80 -translate-x-96' />
    </>
  )
}