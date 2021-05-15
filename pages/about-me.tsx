import Link from 'next/link'


export async function getStaticProps() {
  
}

export default function AboutMe() {

  return (
    <>
      <h1>About Me</h1>
      <Link href='/'><a><p className='text-blue-700 text-center pt-12 pb-32'><u>Back to Home</u></p></a></Link>
    </>
  )
}