import "./styles/Faqs.scss";

import { useState } from "react";

import { FAQS as faqs } from "../helpers/details";
import { ReactComponent as Plus } from "../assets/svg/Plus.svg";

import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";

import Header from "../reusable-components/Header";
import BlockReveal from "../reusable-components/BlockReveal";

export default function Faqs() {
  const faqRef = useRef(null);
  const [isOpen, setIsOpen] = useState(0);

  const { activateFaqRef } = useSectionContext();

  useEffect(() => {
    activateFaqRef(faqRef);
  }, []);

  const renderFaqs = faqs.map((faq, index) => {
    // if (index === 0 && !isOpen) setIsOpen(true);

    const handleFaQVisibility = function (newIndex) {
      setIsOpen((prevIndex) => (prevIndex === newIndex ? null : newIndex));
    };

    return (
      <div key={index} className="faq-container">
        <div className="faq-container__content">
          <div className="faq-question">
            <h5>{faq.question}</h5>

            <div
              onClick={() => handleFaQVisibility(index)}
              className={`faq-btn ${isOpen === index && "open"}`}
            >
              <Plus />
            </div>
          </div>

          {faq.link ? (
            <p className={`faq-answer ${isOpen === index && "open"}`}>
              {faq.textBefore}{" "}
              <a href={faq.url} target="_blank" rel="noreferrer">
                here
              </a>
            </p>
          ) : (
            <p className={`faq-answer ${isOpen === index && "open"}`}>
              {faq.answer}
            </p>
          )}
        </div>
      </div>
    );
  });

  return (
    // <section className="section faqs-section">
    <section className="main-container faqs-main-container">
      <div ref={faqRef} className="faqs">
        <Header
          dark={false}
          caption="FAQs"
          description="Everything you need to know about LIMWEEK 2026, from registration to participation, in one place."
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BlockReveal blockColor="rgba(255, 255, 255, 1)">
              <h2 style={{ color: "rgba(255, 255, 255, 1)" }}>Your</h2>
            </BlockReveal>

            <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.3}>
              <h2 style={{ color: "rgba(255, 255, 255, 1)" }}>Questions,</h2>
            </BlockReveal>

            <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.6}>
              <h2 style={{ color: "rgba(255, 255, 255, 1)" }}>Answered</h2>
            </BlockReveal>
          </div>
        </Header>

        <aside className="faq__content">
          <div className="faq__list">{renderFaqs}</div>
        </aside>
      </div>
    </section>
    // </section>
  );
}
