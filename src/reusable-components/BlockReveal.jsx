import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlockReveal({
  children,
  blockColor = "#000",
  duration = 0.8,
  delay = 0,
  start = "top 100%",
  animateOnScroll = true,
  width = "fit-content", // Defaults to hugging the content tightly
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const blockRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 1. Initial State Setup
      gsap.set(contentRef.current, { opacity: 0 });
      gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left center" });

      // 2. Timeline Configuration
      const tl = gsap.timeline({
        delay: delay, // Applies your custom delay here!
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: start,
              once: true,
            }
          : null,
      });

      // 3. The Animation Sequence
      tl.to(blockRef.current, {
        scaleX: 1,
        duration: duration / 2,
        ease: "power4.inOut",
      })
        .set(contentRef.current, { opacity: 1 })
        .set(blockRef.current, { transformOrigin: "right center" })
        .to(blockRef.current, {
          scaleX: 0,
          duration: duration / 2,
          ease: "power4.inOut",
        });
    },
    {
      scope: containerRef,
      dependencies: [blockColor, duration, delay, animateOnScroll],
    },
  );

  return (
    <div
      ref={containerRef}
      className="block-reveal-container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: width,
        display: "block",
      }}
    >
      <div className="block" ref={contentRef}>
        {children}
      </div>

      <div
        ref={blockRef}
        className="block-revealer"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: blockColor,
          zIndex: 2,
        }}
      />
    </div>
  );
}
