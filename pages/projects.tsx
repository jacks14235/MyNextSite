import { useRef, useState, useCallback } from 'react';
import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'
import ProjectJumbo from '../components/project-jumbotron';
import { getProjectData, ProjectData } from "../page-data/jumbo-data";
import Navbar from '../components/navbar';
import Arrow from '@material-ui/icons/ArrowForward'
import Carousel from '../components/carousel'

export async function getStaticProps() {
  const projectData = getProjectData();
  return {
    props: { projectData }
  }
}

export default function Projects(props: { projectData: ProjectData[] }) {
  // const [divTop, setDivtop] = useState<number>();
  // const [div]
  const refs = props.projectData.map((_) => useRef<HTMLDivElement>(null))

  function toRef(index: number) {
    const curr = refs[index].current;
    console.log('REF', curr);
    if (curr) {
      curr.scrollIntoView({ behavior: 'smooth', })
    }
  }

  return (
    <>
      <Head>
        <title>Jack Stanley - Projects</title>
        <meta name='description' content="A list of some of Jack Stanley's personal coding projects including shared stopwatch, mandelbrot viewer, and distance measurement app among others" />
      </Head>
      <Navbar />
      <div className='relative mb-36 xs:mb-0 xs:h-screen w-full md:flex md:flex-col'>
        <div className="w-full bg-blue-600 flex justify-center align-center p-4">
          <h1 className='text-6xl text-white text-center font-bold sm:mt-0'>My Projects</h1>
        </div>
        <h3 className='text-lg text-blue-500 text-center font-semibold mx-4 lg:mx-32 leading-2'>After more than six years of coding experience, I have countless personal projects in a variety of languages.</h3>
        <Carousel />
        <h3 className='text-2xl text-blue-700 text-center font-semibold mx-4 lg:mx-32 mb-7'>Here are a few of my personal favorites:</h3>
        <div className='mt-16 mb-24 xs:mt-0 w-full grid grid-flow-row xs:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center' >
          {props.projectData.map((d, j) => (
            <div className={`relative w-64 h-40 rounded-2xl bg-gradient-to-br from-${d.color}-400 to-${d.color}-700`}>
              <h3 className='text-lg font-semibold m-2 text-center sm:text-left leading-4'>{d.title}</h3>
              <p className='mx-2 text-left'>{d.subtitle}</p>
              <div className='absolute w-full bottom-2 flex flex-row justify-between items-center px-4'>
                {new Array(3).fill(0).map((_, i) =>
                  d.tools[i] ?
                    <Image className='rounded-full' src={`/images/logos/${d.tools[i]}`} width='40' height='40' /> :
                    <div className='w-10' />
                )}
                <div onClick={() => toRef(j)} className='rounded-full cursor-pointer bg-white opacity-60 hover:opacity-100 h-10 w-10 flex flex-row items-center justify-center transition-opacity duration-300'>
                  <Arrow className='text-gray-800 opacity-100 pointer-events-none' fontSize='large' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        {props.projectData.map((d, i) =>
          <>
            {/* <div ref={refs[i]} /> */}
            <ProjectJumbo title={d.title} text={d.description} image={d.image} color={d.color} reverse={i % 2 === 1} link={d.link} ref={refs[i]} />
          </>
        )}
        <Link href='/'><a className='hover:text-blue-700 hover:underline mb-20'>Back to home</a></Link>
      </div>
    </>
  )
}

/*
  PurgeCSS:
  Tailwind purges the dynamic classnames, writing them here makes it keep them
  * bg-green-400
  * bg-green-500
  * bg-green-700
  * bg-orange-400
  * bg-orange-500
  * bg-orange-700
  * bg-blue-400
  * bg-blue-500
  * bg-blue-700
  * bg-red-400
  * bg-red-500
  * bg-red-700
  * bg-indigo-400
  * bg-indigo-500
  * bg-indigo-700
  * bg-purple-400
  * bg-purple-500
  * bg-purple-700
  * bg-pink-400
  * bg-pink-500
  * bg-pink-700
*/