import "./styles/RevealText.scss";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RevealText({
  children,
  stagger = 0.035,
  duration = 0.4,
  start = "top 85%",
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const split = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      document.fonts.ready.then(() => {
        split.current = new SplitText(textRef.current, { type: "chars" });

        gsap.set(split.current.chars, { yPercent: 100 });

        gsap.to(split.current.chars, {
          yPercent: 0,
          stagger: stagger,
          duration: duration,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: start,
            once: true,
          },
        });
      });

      return () => {
        split.current?.revert();
      };
    },
    { dependencies: [children, stagger, start, duration] },
  );

  return (
    <div ref={containerRef} className="scroll_text_container">
      <div ref={textRef} className="scroll_text">
        {children}
      </div>
    </div>
  );
}
