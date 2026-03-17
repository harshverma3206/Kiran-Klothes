

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animationTimeline = gsap.timeline({
    paused: false,
    defaults: {
        duration: 2,
        ease: "expo.out",
    },
});