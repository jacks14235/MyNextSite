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
        <title>Projects</title>
      </Head>
      <Navbar />
      <div className='relative mb-36 xs:mb-0 xs:h-screen w-full'>
        <h1 className='text-6xl text-blue-700 text-center font-bold mb-8 mt-10 sm:mt-0 '>My Projects</h1>
        <h3 className='text-lg text-blue-500 text-center font-semibold mx-4 lg:mx-32 mb-4 md:mb-8 lg:mb-12'>After more than six years of coding experience, I have countless personal projects in a variety of languages.</h3>
        <Carousel />
        <h3 className='text-2xl text-blue-700 text-center font-semibold mx-4 lg:mx-32 mb-7'>Here are a few of my personal favorites:</h3>
        <div className='mt-16 md:absolute md:bottom-24 xs:mt-0 w-full grid grid-flow-row xs:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center' >
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