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
  const spanRef1 = useRef();
  const spanRef2 = useRef();

  const splitText1 = useRef();
  const splitText2 = useRef();

  const { contextSafe } = useGSAP(
    () => {
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

      return () => {
        splitText1.current?.revert();
        splitText2.current?.revert();
      };
    },
    { scope: containerRef, dependencies: [] },
  );

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
    <section ref={containerRef} className="section hero-section">
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

          <a
            href="https://www.tix.africa/discover/lagos-international-zoemaritime-week-limweek-2025"
            target="_blank"
            rel="noreferrer"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
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
          </a>

          {/* <div className="overlay"></div> */}
        </div>
      </div>
    </section>
  );
}
