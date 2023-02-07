import Image from 'next/image';
import Link from 'next/link';


export interface CardProps {
  title: string,
  text: string,
  image: string,
  to: string,
  buttonText?: string
}
export default function Card(props: CardProps) {

  return (
    <div className='flex flex-col items-center group rounded-xl m-4 border border-black shadow-lg transition transform hover:border-orange-500 hover:scale-110 duration-300 bg-gray-800' style={{ minHeight: 'fit-content' }}>
      <div className='relative h-48 w-full'>
        <Image src={props.image} className='border-orange-500 border-2 rounded-t-xl' objectFit='cover' objectPosition='center' layout='fill' />
      </div>
      <h3 className='text-gray-500 text-2xl text-center mt-2 mb-4 mx-2 font-semibold group-hover:text-orange-500'>{props.title}</h3>
      <p className='m-2 text-gray-300'>{props.text}</p>
      <div className='h-12' />
      <Link href={props.to}>
        <button className='absolute bottom-0 w-1/2 bg-orange-500 rounded-lg h-8 mb-3 focus:outline-none hover:bg-orange-300 transition-color duration-300'>Check it out</button>
      </Link>
    </div>
  )
}