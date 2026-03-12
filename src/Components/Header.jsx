import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animationTimeline } from "../utils/animationTimeline";

gsap.registerPlugin(ScrollTrigger)

// Icons
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const Header = () => {

    const logoRef = useRef()
    const iconsRef = useRef([])

    useGSAP(() => {

        animationTimeline.from(logoRef.current, {
            scale: () => {
                const scale = window.innerWidth / 160;
                return Math.max(12, Math.min(scale, 18));
            },
            x: "41vw",
            y: "46vh",
            transformOrigin: "center center"
        })

        animationTimeline.from(iconsRef.current, {
            y: -20,
            autoAlpha: 0,
            stagger: 0.15,
            duration: 0.2
        })
    }, [])

    return (
        <div className='p-5! md:py-7! lg:px-18! md:px-10! flex items-center justify-between fixed top-0 w-full backdrop-blur-md z-50'>

            <Link to="/">
                <h1 ref={logoRef} className=''>Kiran<br />Klothes</h1>
            </Link>
            <div className='flex items-center gap-3 md:gap-5 lg:gap-7 text-2xl lg:text-3xl shrink-0'>
                <Link ref={(el) => (iconsRef.current[0] = el)} to="/wishlist">
                    <CiHeart />
                </Link>
                <Link ref={(el) => (iconsRef.current[1] = el)} to="/wishlist">
                    <CiSearch />
                </Link>
                <Link ref={(el) => (iconsRef.current[2] = el)} to="/login">
                    <CiUser />
                </Link>
                <Link ref={(el) => (iconsRef.current[3] = el)} to="/cart">
                    <CiShoppingCart />
                </Link>
                <div ref={(el) => (iconsRef.current[4] = el)} className='hidden'>
                    <IoMdMore />
                </div>
            </div>
        </div>
    )
}

export default Header
