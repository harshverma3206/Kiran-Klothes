import React, { useRef } from 'react'

import { Link } from 'react-router-dom'
import { animationTimeline } from "../../utils/animationTimeline";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Recent from './Recent';

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
    gsap.from(videoRef.current, {
      scale: 0,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: '50% 100%',
        end: '50% 60%',
        markers: true,
        scrub: 1,
      }
    })
  })

  return (
    <div className=' flex flex-col items-center'>
      <div className='h-screen w-screen'></div>
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='w-[90%] lg:w-[65%] lg:rounded-[3rem] rounded-3xl'
        src="./Video01.mp4"
        loop
        muted
      ></video>
      <div className='w-[90%] lg:w-[65%] p-5! lg:px-15! flex lg:gap-7 gap-4 text-[.8rem] lg:text-[1.3rem] flex-wrap'>
        <Link to="/wishlist">All Products</Link>
        <Link to="/wishlist">Best Seller</Link>
        <Link to="/wishlist">New Arrival</Link>
        <Link to="/wishlist">Kurta</Link>
        <Link to="/wishlist">Kurti</Link>
      </div>

      <Recent />
    </div>
  )
}

export default Hero
