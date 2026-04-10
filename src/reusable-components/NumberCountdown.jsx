import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NumberCountdown({
  caption = "",
  targetNumber = 100,
  duration = 2,
  delay = 0,
  animateOnScroll = true,
  prefix = "", // e.g., "$"
  suffix = "", // e.g., "%"
}) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);

  useGSAP(
    () => {
      if (!numberRef.current && !containerRef.current) return;

      // 1. Create a dummy object with our starting value
      const counter = { val: 0 };

      // 2. Animate the dummy object's value
      gsap.to(counter, {
        val: targetNumber,
        duration: duration,
        delay: delay,
        ease: "power2.out", // Slows down as it reaches the end
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 140%",
              once: true, // Only count up once
            }
          : null,
        onUpdate: () => {
          const currentNumber = Math.ceil(counter.val).toLocaleString();

          numberRef.current.innerText = `${prefix}${currentNumber}${suffix}`;
        },
      });
    },
    {
      scope: numberRef,
      dependencies: [
        targetNumber,
        duration,
        delay,
        animateOnScroll,
        prefix,
        suffix,
      ],
    },
  );

  return (
    <div ref={containerRef} className="numerical_details-item">
      <h3 ref={numberRef}>
        <span style={{ display: "inline-block", fontFamily: "inherit" }}></span>
      </h3>

      <p>{caption}</p>
    </div>
  );
}
