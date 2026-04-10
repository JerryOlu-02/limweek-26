import { ReactComponent as ArrowUp } from "../assets/svg/arrow-slant.svg";
import "./styles/Hero.scss";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

import RevealText from "../reusable-components/RevealText";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const containerRef = useRef(null);
  const descriptionRef = useRef(null);

  const spanRef1 = useRef();
  const spanRef2 = useRef();

  const splitText1 = useRef();
  const splitText2 = useRef();

  const splitDescription = useRef();

  const { contextSafe } = useGSAP(() => {
    document.fonts.ready.then(() => {
      splitText1.current = SplitText.create(spanRef1.current, {
        type: "chars",
        autoSplit: true,
      });

      splitText2.current = SplitText.create(spanRef2.current, {
        type: "chars",
        autoSplit: true,
      });
    });

    // DESCRIPTION ANIMATION
    if (!containerRef.current || !descriptionRef.current) return;

    document.fonts.ready.then(() => {
      splitDescription.current = new SplitText(descriptionRef.current, {
        type: "chars",
      });

      gsap.set(splitDescription.current.chars, { yPercent: 100 });

      gsap.to(splitDescription.current.chars, {
        yPercent: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Triggers when the text is 85% down the screen
          once: true,
        },
      });
    });

    return () => {
      splitText1.current?.revert();
      splitText2.current?.revert();
      splitDescription.current?.revert();
    };
  });

  const handleMouseOver = contextSafe(() => {
    gsap.to(splitText1.current.chars, {
      yPercent: -100,
      stagger: 0.04,
      duration: 0.4,
    });

    gsap.to(splitText2.current.chars, {
      yPercent: -100,
      stagger: 0.04,
      duration: 0.4,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(splitText1.current.chars, {
      yPercent: 0,
      stagger: 0.04,
      duration: 0.4,
    });

    gsap.to(splitText2.current.chars, {
      yPercent: 0,
      stagger: 0.04,
      duration: 0.4,
    });
  });

  return (
    <section className="section hero-section">
      <div className="hero main-container">
        <div className="hero__content">
          <div className="hero__description">
            <RevealText>
              <h1>LAGOS INTERNATIONAL MARITIME WEEK 2026</h1>
            </RevealText>

            <RevealText>
              <p>From Policy to Practice – Powering Maritime Excellence</p>
            </RevealText>
          </div>

          <button
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="btn"
          >
            <div style={{ overflow: "hidden", lineHeight: 1, height: "18px" }}>
              <span ref={spanRef1} style={{ display: "block" }}>
                Get Tickets Now
              </span>

              <span
                ref={spanRef2}
                style={{ display: "block" }}
                aria-hidden={true}
              >
                Get Tickets Now
              </span>
            </div>

            <ArrowUp />
          </button>

          {/* <div className="overlay"></div> */}
        </div>
      </div>
    </section>
  );
}
