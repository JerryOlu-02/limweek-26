import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ReactComponent as Logo } from "../assets/svg/footer-logo.svg";

export default function Preloader({ onReadyToReveal, onComplete }) {
  const containerRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const counter = { val: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.to(counter, {
        val: 100,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = `${Math.ceil(counter.val)}%`;
          }
        },
      })
        .call(() => {
          if (onReadyToReveal) onReadyToReveal();
        })
        .to({}, { duration: 0.3 })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div
      ref={containerRef}
      className="preloader-container"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(1, 17, 35, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
        color: "rgba(255, 255, 255, 1)",
        fontSize: "4rem",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255, 255, 255, 1)",
          fontSize: "2rem",
          fontFamily: "Rubik One Regular",
        }}
      >
        <Logo />
        LIMWEEK 26
      </div>

      <div
        style={{
          position: "absolute",
          right: "5%",
          bottom: "5%",
          fontFamily: "Rubik One Regular",
        }}
        ref={counterRef}
      >
        0%
      </div>
    </div>
  );
}
