import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  black?: boolean,
  position?: 'sticky' | 'absolute',
}

export default function Navbar(props: NavbarProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return (() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    });
  }, []);

  const linkClass = 'transform transision hover:scale-125 duration-300'


  if (windowWidth > 640) {
    return (
      <div className={`${props.position + ' top-0'} flex z-10 flex-row items-center w-full h-16 text-orange-500 text-lg space-x-4 px-8 font-semibold ${props.black ? 'bg-transparent' : ''}`}>
        <Link href='/' className={linkClass}>
          <h2 className={`font-bold ${props.black ? 'text-white' : 'text-black'}`}>Home</h2>
        </Link>
        <Link href='/projects' className={linkClass}>
          <h2>Projects</h2>
        </Link>
        <Link href='/research' className={linkClass}>
          <h2>Research</h2>
        </Link>
        <Link href='/experience' className={linkClass}>
          <h2>Experience</h2>
        </Link>
        <Link href='/about-me' className={linkClass}>
          <h2>About Me</h2>
        </Link>

      </div>
    )
  } else {
    return (
      <>
        <MenuIcon fontSize='large' className='absolute top-2 right-4 text-black z-20' onClick={() => setMenuOpen(!menuOpen)} />
        <div className={`w-full h-36 transform ${!menuOpen ? '-translate-y-36' : 'shadow-lg'} transition-transform duration-500 flex flex-col items-center justify-center absolute top-0 z-10 text-orange-500 bg-white border-b-2 border-gray-300`}>
          <>
            <Link className={linkClass} href='/'>
              <h2 className='font-bold text-black'>Home</h2>
            </Link>
            <Link className={linkClass} href='/projects'>
              <h2>Projects</h2>
            </Link>
            <Link className={linkClass} href='/research'>
              <h2>Research</h2>
            </Link>
            <Link className={linkClass} href='/experience'>
              <h2>Experience</h2>
            </Link>
            <Link className={linkClass} href='/about-me'>
              <h2>About Me</h2>
            </Link>
          </>
        </div>
      </>
    )
  }
}