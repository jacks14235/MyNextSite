import React, { CSSProperties } from "react";

interface SlideInProps {
  scrollY: Number,
  start: Number,
  end: Number,
  mode: 'left' | 'right' | 'top' | 'bottom',
  children: JSX.Element | JSX.Element[],
  className?: string,
  top?: CSSProperties['top'],
  left?: CSSProperties['left'],
  delay?: Number,
  duration?: Number
}

export function SlideIn(props: SlideInProps) {
  return (
    <div className='slide-in relative w-full h-full' style={{left: props.left, top: props.top}}>
      <div 
        className={`w-full h-full absolute transition-transform ${(props.start <= props.scrollY && props.scrollY <= props.end)? '' :  `off-screen-${props.mode}`} ${props.className || ''}`}
        style={{transitionDuration: `${props.duration}ms` || '500ms', transitionDelay: `${props.delay}ms` || '0ms'}}
        >
        {props.children}
      </div>
    </div>
  )
}