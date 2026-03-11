// utils/animationTimeline.js

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=2000",
        scrub: 3,
        markers: true
    },
    defaults: {
        ease: "expo.out"
    }
});