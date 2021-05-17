import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRadioGroup } from '@material-ui/core';


export default function Carousel() {
  const [index, setIndex] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return (() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    });
  }, []);

  const images = [
    'android-studio.png',
    'aws.png',
    'cpp.png',
    'cuda.png',
    'java.png',
    'Mysql.png',
    'next-js.svg',
    'nodejs.png',
    'php.png',
    'python.png',
    'react.png',
    'typescript.png',
    'mongodb.png',
    'heroku.png'
  ]

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000)
  }, [])

  const getClass = (n: number) => {
    const offset = getTailwindSize(windowWidth * .25);
    switch (n) {
      case 0:
        return `scale-150 z-10`;
      case 1:
        return `scale-100 translate-x-${offset} z-10`;
      case 2:
        return `scale-0 translate-x-${offset} z-0`;
      case 3:
        return `scale-0 -translate-x-${offset} z-0`;
      case 4:
        return `scale-100 -translate-x-${offset} z-10`;
      default:
        return `invisible`
    }
  }
  // ((index % length) + i) % length

  return (
    <div className='w-full relative h-12 xs:h-24 sm:h-28 md:h-32 lg:h-48 xl:h-72'>
      {images.map((src, i) => (
        <div className={`absolute bg-white w-8 h-8 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 rounded-full transform left-0 right-0 m-auto ${getClass(((index % images.length) + i) % images.length)} transition-all duration-2000`}>
          <Image
            src={'/images/logos/' + src}
            className={`rounded-full`}
            layout='fill'
          />
        </div>)
      )}
      {/* <button className='w-8 h-8 bg-blue-500' onClick={() => setIndex(index - 1)}>{'<'}</button>
      <button className='w-8 h-8 bg-blue-500' onClick={() => setIndex(index + 1)}>{'>'}</button> */}
    </div>
  )
}

function getTailwindSize(n: number) {
  const values = [1, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 256, 288, 288, 320, 320, 320, 320, 384];
  return (values[(Math.floor(n/16))] / 4 || 96).toString();
}

/*
  PurgeCSS:
  Tailwind purges the dynamic classnames, writing them here makes it keep them
  * translate-x-0.25
  * translate-x-4
  * translate-x-8
  * translate-x-12
  * translate-x-16
  * translate-x-20
  * translate-x-24
  * translate-x-28
  * translate-x-32
  * translate-x-40
  * translate-x-44
  * translate-x-48
  * translate-x-52
  * translate-x-56
  * translate-x-60
  * translate-x-64
  * translate-x-72
  * translate-x-80
  * translate-x-96
  * -translate-x-0.25
  * -translate-x-4
  * -translate-x-8
  * -translate-x-12
  * -translate-x-16
  * -translate-x-20
  * -translate-x-24
  * -translate-x-28
  * -translate-x-32
  * -translate-x-40
  * -translate-x-44
  * -translate-x-48
  * -translate-x-52
  * -translate-x-56
  * -translate-x-60
  * -translate-x-64
  * -translate-x-72
  * -translate-x-80
  * -translate-x-96
*/