import About from "../components/About";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";

import NavBar from "../reusable-components/Navbar";
import Footer from "../reusable-components/Footer";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import ReactLenis from "lenis/react";

import ReasonsToAttend from "../components/ReasonsToAttend";
import EventDetails from "../components/EventDetails";
import EventSchedule from "../components/EventSchedule";
import PaymentDetails from "../components/PaymentDetails";
import Moments from "../components/Moments";
import BePart from "../components/BePart";
import Preloader from "../reusable-components/Preloader";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}

export default function () {
  const lenisRef = useRef();
  const containerRef = useRef(null);

  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.on("scroll", ScrollTrigger.update);
    }

    return () => {
      gsap.ticker.remove(update);

      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current?.lenis) return;

    if (isScrollLocked) {
      lenisRef.current.lenis.stop(); // Lock scroll
    } else {
      lenisRef.current.lenis.start(); // Unlock scroll

      // Tell ScrollTrigger to recalculate everything now that the screen is visible
      ScrollTrigger.refresh();
    }
  }, [isScrollLocked]);

  // useGSAP(
  //   () => {
  //     if (!isLayoutReady) return;

  //     const sections = gsap.utils.toArray(".section", containerRef.current);

  //     const triggers = [];

  //     sections.forEach((section, index) => {
  //       const container = section.querySelector(".main-container");

  //       if (container) {
  //         gsap.to(container, {
  //           rotation: 0,
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: section,
  //             start: "top bottom",
  //             end: "top 20%",
  //             scrub: true,
  //           },
  //         });
  //       }

  //       if (index == sections.length - 1) return;

  //       const pinTrigger = ScrollTrigger.create({
  //         trigger: section,
  //         start: "bottom bottom",
  //         end: "bottom top",
  //         pin: true,
  //         pinSpacing: false,
  //         refreshPriority: 1,
  //       });

  //       triggers.push(pinTrigger);
  //     });

  //     return () => {
  //       triggers.forEach((t) => t?.kill());
  //     };
  //   },
  //   { scope: containerRef, dependencies: [isLayoutReady] },
  // );

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <Preloader
        onReadyToReveal={() => setIsLayoutReady(true)}
        onComplete={() => setIsScrollLocked(false)}
      />

      <main ref={containerRef} className="main">
        <NavBar />

        <Hero />

        <About />

        <ReasonsToAttend />

        <EventDetails />

        <EventSchedule />

        <PaymentDetails />

        <Moments />

        <Faqs />

        <BePart />

        <Footer />
      </main>
    </>
  );
}
