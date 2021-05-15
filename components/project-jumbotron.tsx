import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface JumboProps {
  title: string,
  text: string,
  image: string,
  color: 'red' | 'orange' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink',
  reverse?: boolean,
  link?: string
  // ref: MutableRefObject<any>
}

const ProjectJumbo = React.forwardRef((props: JumboProps, ref: React.MutableRefObject<HTMLDivElement>) => {

  return (
    <div ref={ref} className={`bg-${props.color}-500 border-4 border-black my-7 w-4/5 md:h-96 rounded-xl flex flex-col items-center justify-between md:flex-row${props.reverse ? '-reverse' : ''}`}>
      <div className={`relative w-full md:w-1/2 flex flex-col items-center sm:items-start justify-between text-center md:text-left px-3 md:px-7`}>
        <h2 className='text-xl lg:text-3xl md:mb-7 font-bold text-center sm:text-left'>{props.title}</h2>
        <p className='text-sm lg:text-base mb-4 md:mb-0 font-semibold'>{props.text}</p>
        {props.link && (
          <a className='self-center mt-3' href={props.link} target='_blank'>
            <button className='rounded-lg bg-blue-500 hover:bg-blue-600 transition-color duration-300 border-2 border-white text-white self-center h-12 w-32'>Check it out</button>
          </a>
        )}
      </div>
      <div className='relative h-full w-full md:w-1/2 w-80'>
        <img className='rounded-lg md:rounded-none md:rounded-r-lg w-full h-full object-cover' src={props.image} />
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-b md:bg-gradient-to-${props.reverse ? 'l' : 'r'} from-${props.color}-500 to-transparent`}/>

      </div>
    </div>
  )
})
//fade-gradient-${props.color + (props.reverse ? '-r' : '')}`} />
export default ProjectJumbo;