import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'
import CheckCircle from '@mui/icons-material/CheckCircle';

export async function getStaticProps() {
  return ({
    props: {}
  })
}

export default function ExperiencePage(props) {
  return (
    <>
      <Head>
        <title>Jack Stanley - Experience</title>
        <meta name='description' content="See Jack Stanley's experience through his education as well as internships and startups" />
      </Head>
      <Navbar />
      <div className="w-full bg-orange-500 mb-12 flex justify-center align-center p-4">
          <h1 className='text-6xl font-bold text-white text-center'>Experience</h1>
      </div>

      <div className='flex flex-col items-center sm:items-start sm:flex-row items-center justify-between w-full mb-24'>
        <div className='self-start w-full md:w-1/2'>
          <a href='https://1440.io' target="about:blank"><h1 className='ml-4 text-orange-500 text-6xl font-bold'>1440.io</h1></a>
          <h2 className='ml-4 mt-4 text-2xl text-orange-600 font-semibold'>Software Company in Park City, UT</h2>
          <ul className='py-4 text-orange-600 ml-4'>
            <li>- Worked with a team of fellow Princeton runners and software engineers</li>
            <li>- Created Google Chrome extension for Goodwill that finds common prices for items based on images</li>
            <li>- Helped with the design of the frontend React app in TypeScript</li>
            <li>- Wrote a large portion of the backend servers using PHP and MySQL running in a Docker container</li>
          </ul>
        </div>
        <div className='relative right-0 h-48 w-full md:w-64 md:h-64 md:mr-24'>
          <Image alt='1440' src='/images/1440io.png' className='rounded-2xl' layout='fill' objectFit='contain' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center h-auto md:h-80 w-full bg-orange-500'>
        <div className='relative transform -translate-y-6 w-64 h-32 md:translate-y-0 md:w-64 md:h-96 md:ml-16' style={{ minHeight: '10rem' }}>
          <Image alt='Recon Sports' src='/images/sports-iq.png' className='rounded-2xl' layout='fill' objectFit='cover' />
        </div>
        <div className='mx-4 md:ml-8 md:mt-8 h-full flex flex-col text-white mb-3'>
          <h1 className='text-6xl font-bold'>Sports IQ Software</h1>
          <h2 className='mt-4 self-start text-2xl font-semibold'>Software Engineer Intern - <a className='cursor-pointer hover:text-blue-500 underline' target='_blank' href='https://getsportsiq.com'>getsportsiq.com</a></h2>
          <ul className='py-4'>
            <li>- Sports IQ Software is a startup looking to provide football scouting data analysis for coaches</li>
            <li>- The main features include storing play data and using various filters read data and make predictions</li>
            <li>- Helped with the design of the frontend React app in TypeScript</li>
            <li>- Wrote a large portion of the backend servers using PHP and MySQL running in a Docker container</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-center sm:items-start sm:flex-row items-center justify-between w-full mt-24'>
        <div className='self-start w-full md:w-1/2'>
          <h1 className='ml-4 text-orange-500 text-6xl font-bold'>Princeton University</h1>
          <h2 className='ml-4 mt-4 text-2xl text-orange-600 font-semibold'>BSE of Computer Science - Class of 2024</h2>
          <div className='grid grid flow-col justify-items-center sm:justify-items-start grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 gap-x-32 gap-y-4'>
            {tableData.map((d) => (
              <span className='relative group hover:z-20 flex flex-row items-center w-60 h-10 rounded-md shadow-lg text-base text-black bg-orange-400 leading-5'>
                <CheckCircle className='text-white ml-1 mr-2' />{d}
              </span>
            ))}
          </div>
        </div>
        <div className='relative right-0 h-48 w-full md:w-64 md:h-64 md:mr-24'>
          <Image alt="Princeton" src='/images/princeton.png' className='rounded-2xl' layout='fill' objectFit='contain' />
        </div>
      </div>

      <div className='flex flex-col mt-32 mb-16 md:flex-row-reverse md:justify-between items-center h-auto lg:h-96 w-full bg-orange-500 pb-3'>
        <div className='relative translate-y-3 w-64 h-32 md:translate-y-0 md:w-64 md:h-96 md:mr-16'>
          <Image alt="TutorTechy" src='/images/tutortechy.png' className='rounded-2xl' layout='fill' objectFit='contain' />
        </div>
        <div className='ml-8 mt-8 h-full flex flex-col text-white'>
          <h1 className='text-5xl sm:text-6xl font-bold'>TutorTechy</h1>
          <h2 className='mt-4 self-start text-2xl font-semibold'>Co-Founder - <a className='cursor-pointer hover:text-blue-500 underline' target='_blank' href='https://tutortechy.com'>tutortechy.com</a></h2>
          <ul className='py-4'>
            <li>- A tutoring software startup created by a friend of mine that provides the tools tutors need to move online</li>
            <li>- Acted as head web developer in the creation of the web application as well as the connected servers</li>
            <li>- The website is a react app and makes use of various APIs to satisfy needs as the startup grows </li>
            <ul className='pl-8'>
              <li>- Auth0 to manage account credentials</li>
              <li>- Stripe to handle payments for tutoring sessions</li>
              <li>- Vonage Video API for live video chat</li>
            </ul>
            <li>- Servers that manage these APIs and a PostgreSQL database are written in NodeJS and run on Heroku</li>
          </ul>
        </div>
      </div>

      <div >
        <h1 className='text-center text-3xl md:text-5xl text-orange-500 font-bold pb-16 mx-3'>See my personal projects over on the <Link href='/projects' className='hover:text-blue-700 underline transition-color duration-300'>Projects page!</Link></h1>
      </div>

      <Link href='/'><p className='text-center hover:text-blue-500 hover:underline'>Back to home</p></Link>
      <br />
    </>
  )
}

const tableData = [
  'Living with AI',
  'Computer Science: An Inderdisciplinary Approach',
  'Linear Algebra',
  'Multivariable Calculus',
  'Fundamentals of Statistics',
  'General Physics'
]