import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"
import AboutMeData, { AboutMeType } from '../page-data/aboutme-data';
import Navbar from '../components/navbar';

export async function getStaticProps() {
  const data = AboutMeData();
  return ({
    props: { data: data }
  })
}

export default function AboutMe(props: { data: AboutMeType[] }) {

  return (<>
    <Head>
      <title>Jack Stanley - About Me</title>
      <meta name='description' content="Jack Stanley's hobbies and interests, his service through the Boy Scouts of America, and ways to contact him" />
    </Head>
    <div className='flex flex-col items-center'>
      <Navbar />
      <h1 className='text-orange-500 font-bold text-3xl md:text-6xl mb-5 md:mb-16 mt-10 sm:mt-0'>About Me</h1>
      {props.data.map((d, i) => (
        <div className={`md:h-96 mb-8 md:mb-24 w-4/5 md:bg-gray-200 p-2 md:p-8 rounded-lg flex lg:justify-between flex-col md:flex-row${i % 2 == 1 ? '-reverse' : ''}`}>
          <div className='md:w-1/2'>
            <h2 className='text-3xl font-semibold mb-4'>{d.title}</h2>
            <p>{d.text}</p>
          </div>
          <div className='relative h-40 mt-8 md:mt-0 md:w-80 md:h-80'>
            <Image
              alt={d.title}
              src={d.image}
              className='rounded-full'
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </div>
        </div>
      ))}

      <div className={`md:h-96 mb-8 md:mb-24 w-4/5 md:bg-gray-200 p-2 md:p-8 rounded-lg flex flex-col text-center`}>
        <h2 className='text-3xl font-semibold mb-4'>Contact Me</h2>
        <p className='font-semibold mb-4'>Feel free to reach out to me with any questions about my work or opportunities you know of!</p>
        <p className='mb-4'>Email: <a className='underline hover:text-blue-700' href='mailto: jcs9@princeton.edu' target='_blank'>jcs9@princeton.edu</a></p>
        <p><a className='underline hover:text-blue-700' href='https://www.linkedin.com/in/jack-stanley-3083941ab/' target='_blank'>My LinkedIn Profile</a></p>
      </div>

      <Link href='/'><p className='text-blue-700 text-center pt-12 pb-32'><u>Back to Home</u></p></Link>
    </div>
  </>);
}

/*
  PurgeCSS:
  Tailwind purges the dynamic classnames, writing them here makes it keep them
  * flex-row-reverse
  * flex-col-reverse
*/