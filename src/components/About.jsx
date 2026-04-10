import "./styles/About.scss";

import { useEffect, useRef } from "react";
import useSectionContext from "../helpers/useSectionContext";

import AboutBg from "../assets/images/about-bg.jpg";

import NumericalDetails from "./NumericalDetails";
import BlockReveal from "../reusable-components/BlockReveal";
import AnimatedText from "../reusable-components/AnimatedText";

export default function About() {
  const aboutRef = useRef(null);
  const { activateAboutRef } = useSectionContext();

  useEffect(() => {
    activateAboutRef(aboutRef);
  }, []);

  const revealRef = useRef(null);

  return (
    <section className="section">
      <div ref={aboutRef} className="main-container about-container">
        <aside className="about">
          <div className="about__overlay">
            <img src={AboutBg} alt="about background" />
          </div>

          <div className="about__content">
            <div className="caption">
              <span className="bullet" />
              <span>about the event</span>
            </div>

            <div
              ref={revealRef}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
              }}
            >
              <BlockReveal blockColor="#fff">
                <h2>LIMWEEK 2026</h2>
              </BlockReveal>

              <BlockReveal blockColor="#fff" delay={0.25}>
                <h2>is a premier</h2>
              </BlockReveal>

              <BlockReveal blockColor="#fff" delay={0.5}>
                <h2>event</h2>
              </BlockReveal>
            </div>

            <AnimatedText
              colorInitial="rgba(255, 255, 255, 0.45)"
              colorFinal="rgba(255, 255, 255, 0.75)"
              colorAccent="#0EC6D3"
            >
              <p>
                IT brings together industry professionals, stakeholders, and
                thought leaders to explore key developments, share insights, and
                uncover new opportunities shaping the maritime sector.
              </p>
            </AnimatedText>
          </div>
        </aside>

        <NumericalDetails />
      </div>
    </section>
  );
}
