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

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}

export default function () {
  const lenisRef = useRef();
  const containerRef = useRef(null);

  const [showNav, setShowNav] = useState(false);

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

  useGSAP(
    () => {
      const navTrigger = ScrollTrigger.create({
        trigger: ".hero-section",
        start: "bottom top",
        onEnter: () => setShowNav(true),
        onLeaveBack: () => setShowNav(false),
      });

      const sections = gsap.utils.toArray(".section");

      const triggers = [];

      sections.forEach((section, index) => {
        const container = section.querySelector(".main-container");

        if (container) {
          gsap.to(container, {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 20%",
              scrub: true,
            },
          });
        }

        if (index == sections.length - 1) return;

        const pinTrigger = ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });

        triggers.push(pinTrigger);
      });

      return () => {
        triggers.forEach((t) => t?.kill());
        navTrigger?.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <main ref={containerRef} className="main">
        <NavBar isVisible={showNav} />

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
