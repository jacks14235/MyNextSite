import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRadioGroup } from '@material-ui/core';


export default function Carousel() {
  const [index, setIndex] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [divHeight, setDivHeight] = useState<number>(0);

  const callbackRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      setDivHeight(node.offsetHeight);
    }
  }, [windowWidth, windowHeight])

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    window.addEventListener('resize', () => setWindowHeight(window.innerHeight));
    return (() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
      window.removeEventListener('resize', () => setWindowHeight(window.innerHeight));
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
    const offset = getTailwindSize(Math.min(windowWidth * .25, divHeight * 1.2));
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

  const size = getTailwindSize(Math.min((divHeight/1.5), (windowWidth * .17)))

  return (
      <div ref={callbackRef} className={`w-full relative h-40 md:h-auto md:flex-grow`}>
        {images.map((src, i) => (
          <div className={`absolute bg-white w-${size} h-${size} w-10 rounded-full transform left-0 right-0 top-0 bottom-0 m-auto ${getClass(((index % images.length) + i) % images.length)} transition-all duration-2000`}>
            <Image
              src={'/images/logos/' + src}
              className='rounded-full'
              layout='fill'
            />
          </div>)
        )}
      </div>
  )
}

function getTailwindSize(n: number) {
  const values = [0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 256, 288, 288, 320, 320, 320, 320, 384];
  let val = 0;

  for (let v of values) {
    if (v > n) {
      break;
    } else {
      val = v;
    }
  }

  return (val / 4).toString();
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