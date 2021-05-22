import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar';
import Card, { CardProps } from '../components/card'
import { getCardData } from '../page-data/card-data';

export async function getStaticProps() {
  const cardData = getCardData();
  return {
    props: { cardData }
  }
}

export default function Home(props: { cardData: CardProps[] }) {

  return (
    <>
      <Head>
        <title>Home - Jack Stanley - Princeton University Computer Science</title>
        <meta name='description' content="Jack Stanley is a Computer Science student at Princeton University class of '24. This website documents his projects and experience in software engineering" />
      </Head>
      <Navbar />
      <h1 className='text-center text-orange-500 text-4xl font-bold mt-6 mb-2'>Welcome!</h1>
      <h2 className='text-center text-gray-700 text-xl font-semibold mb-4'>See what I have to offer</h2>
      <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8' style={{ height: 'fit-content' }}>
        {props.cardData.map((d: CardProps) => (
          <Card {...d} />
        ))}
      </div>
    </>
  )
}
