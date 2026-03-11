import React, { useRef } from 'react'


import { animationTimeline } from "../utils/animationTimeline";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const videoRef = useRef();

  const handleMouseEnter = () => {
    const video = videoRef.current;
    video.play();
    video.muted = false;
  }

  const handleMouseLeave = () => {
    const video = videoRef.current;
    video.pause();
    video.muted = true;
    video.currentTime = 0;
  }

  useGSAP(() => {
    animationTimeline.from(videoRef.current, {
      scale: 0,
      autoAlpha: 0,
      duration: 1
    })
  })

  return (
    <div className=' flex flex-col items-center'>
      <div className='h-screen w-screen'></div>
      <div className='h-screen w-screen'></div>
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='w-[70%] rounded-[4rem]'
        src=""
        loop
        muted
      ></video>
      <div className='h-screen w-screen'></div>
      <div className='h-screen w-screen'></div>
    </div>
  )
}

export default Hero
