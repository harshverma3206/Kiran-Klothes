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

    const sectionRef = useRef();
    const logoRef = useRef()
    const iconsRef = useRef([])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: logoRef.current,
                start: "50% 50%",
                end: "50% 0%",
                scrub: 1,
            }
        });

        tl.from(logoRef.current, {
            scale: () => {
                const w = window.innerWidth;
                const scale = w / 85;
                return Math.max(3, Math.min(scale, 11));
            },
            x: "35vw",
            y: "43vh",
            ease: "none",
            duration: 1,
            transformOrigin: "center center",
        })

        tl.from(iconsRef.current, {
            y: -20,
            autoAlpha: 0,
            stagger: 0.15,
            duration: 0.2
        })
    }, [])


    return (
        <div ref={sectionRef} className='p-5! md:py-7! lg:px-18! md:px-10! flex items-center justify-between fixed top-0 w-full backdrop-blur-md z-50'>

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
