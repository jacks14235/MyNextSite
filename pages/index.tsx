import Head from 'next/head'
import Navbar from '../components/navbar';
import Card, { CardProps } from '../components/card'
import { getCardData } from '../page-data/card-data';
// import init from '../public/pkg/wgpu_tutorial.js';
import init, { State } from '../components/pkg/wgpu_tutorial.js';
import { useEffect, useState } from 'react';


export async function getStaticProps() {
  const cardData = getCardData();
  return {
    props: { cardData }
  }
}

export default function Home(props: { cardData: CardProps[] }) {
  // const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    init().then(() => {
      document.getElementById('canvas-container').querySelector('canvas').setAttribute('style', "width:100%;height:100%;");
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home - Jack Stanley - Princeton University Computer Science</title>
        <meta name='description' content="Jack Stanley is a Computer Science student at Princeton University class of '24. This website documents his projects and experience in software engineering" />
      </Head>
      <Navbar />
      <div className='relative pb-16' style={{minHeight: "calc(100vh - 4rem);"}} >
        <div className="relative w-80 h-28 absolute left-0 right-0 m-auto mt-10 sm:mt-0">
          <div className="w-1/2 orbiter absolute left-0 top-0">
            <img width='90%' src='/name.svg' />
          </div>
          <div className="w-1/2 orbiter delayed absolute left-0 top-0">
            <img width='90%' src='/name.svg' />
          </div>
        </div>
        <h2 className='text-center text-gray-400 text-xl font-semibold mb-4'>Welcome!</h2>
        <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8' style={{ height: 'fit-content' }}>
          {props.cardData.map((d: CardProps) => (
            <Card key={d.title} {...d} />
          ))}
        </div>
        {/* <a href='web'>About this WebGPU background</a> */}
        <a href='about-me#contact' className='text-orange-500 m-auto left-0 right-0 bottom-2 absolute text-center mt-8'>Contact me</a>
      </div>
      <div className='w-screen h-screen fixed bg-black top-0 left-0' style={{ zIndex: -1 }} id='canvas-container'></div>
    </>
  )
}
