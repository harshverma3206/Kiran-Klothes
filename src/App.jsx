import { useEffect } from "react";
import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";


import Hero from "./Pages/Hero"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.8,            // smoother & stable
      smoothWheel: true,
      wheelMultiplier: 1, // prevents jumpy wheel spikes
      touchMultiplier: 1.1,
      duration: 2
    });
    lenis.on("scroll", ScrollTrigger.update);

    let rafId;


    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
