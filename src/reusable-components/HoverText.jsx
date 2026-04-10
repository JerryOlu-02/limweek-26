import "./styles/HoverText.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function HoverText({ children, height }) {
  const spanRef1 = useRef(null);
  const spanRef2 = useRef(null);

  const split1Ref = useRef(null);
  const split2Ref = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      if (!spanRef1.current || !spanRef2.current) return;

      document.fonts.ready.then(() => {
        split1Ref.current = SplitText.create(spanRef1.current, {
          type: "chars",
          autoSplit: true,
        });

        split2Ref.current = SplitText.create(spanRef2.current, {
          type: "chars",
          autoSplit: true,
        });
      });

      return () => {
        if (split1Ref.current) split1Ref.current.revert();
        if (split2Ref.current) split2Ref.current.revert();
      };
    },
    { dependencies: [children] },
  );

  const handleMouseOver = contextSafe(() => {
    if (!split1Ref.current?.chars || !split2Ref.current?.chars) return;

    gsap.to(split1Ref.current.chars, {
      yPercent: -100,
      stagger: 0.04,
      duration: 0.4,
      overwrite: true,
    });

    gsap.to(split2Ref.current.chars, {
      yPercent: -100,
      stagger: 0.04,
      duration: 0.4,
      overwrite: true,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    if (!split1Ref.current?.chars || !split2Ref.current?.chars) return;

    gsap.to(split1Ref.current.chars, {
      yPercent: 0,
      stagger: 0.04,
      duration: 0.4,
      overwrite: true,
    });

    gsap.to(split2Ref.current.chars, {
      yPercent: 0,
      stagger: 0.04,
      duration: 0.4,
      overwrite: true,
    });
  });

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="text_container"
      style={{ "--text-height": height }}
    >
      <span ref={spanRef1} className="text">
        {children}
      </span>

      <span ref={spanRef2} className="text" aria-hidden={true}>
        {children}
      </span>
    </div>
  );
}
