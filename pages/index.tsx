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
      <h1 className='text-center text-orange-500 text-4xl font-bold mt-6 mb-2'>Welcome!</h1>
      <h2 className='text-center text-gray-500 text-xl font-semibold mb-4'>See what I have to offer</h2>
      <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8' style={{ height: 'fit-content' }}>
        {props.cardData.map((d: CardProps) => (
          <Card key={d.title} {...d} />
        ))}
      </div>
      <div className='w-screen h-screen fixed bg-black top-0 left-0' style={{zIndex: -1}} id='canvas-container'></div>
      <a href='web'>About this WebGPU background</a>
    </>
  )
}
