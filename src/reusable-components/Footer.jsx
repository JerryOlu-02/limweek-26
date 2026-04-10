import "./styles/Footer.scss";
import { ReactComponent as FooterLogo } from "../assets/svg/footer-logo.svg";
import HoverText from "./HoverText";
import useSectionContext from "../helpers/useSectionContext";
import RevealText from "./RevealText";
// import { ReactComponent as Logo } from "../assets/svg/logo.svg";

export default function Footer() {
  const handleScrollToSection = function (ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const {
    aboutRef,
    // eventRef,
    eventDetailsRef,
    scheduleRef,
    pricingRef,
    faqRef,
  } = useSectionContext();

  return (
    <section className="section footer">
      <aside className="footer_top">
        <p>
          <span className="bullet" />
          <RevealText>8:00 AM – 6:00 PM</RevealText>
        </p>

        <p>
          <span className="bullet" />
          <RevealText>Sept 8–9, 2026</RevealText>
        </p>

        <p>
          <span className="bullet" />
          <RevealText>Lagos Oriental Hotel</RevealText>
        </p>
      </aside>

      <aside className="footer_bottom">
        <div className="footer_bottom-left">
          <FooterLogo />

          <p>
            <RevealText start="top 140%">
              From Policy to Practice – Powering Maritime Excellence
            </RevealText>
          </p>
        </div>

        <div className="footer_bottom-right">
          <div className="link">
            <button onClick={() => handleScrollToSection(aboutRef)}>
              <HoverText height="16px">
                <>About</>
              </HoverText>
            </button>

            <button onClick={() => handleScrollToSection(eventDetailsRef)}>
              <HoverText height="16px">
                <>The Event</>
              </HoverText>
            </button>

            <button onClick={() => handleScrollToSection(eventDetailsRef)}>
              <HoverText height="16px">
                <>EVENT DETAILS</>
              </HoverText>
            </button>

            <button onClick={() => handleScrollToSection(scheduleRef)}>
              <HoverText height="16px">
                <>SCHEDULE</>
              </HoverText>
            </button>

            <button onClick={() => handleScrollToSection(pricingRef)}>
              <HoverText height="16px">
                <>Pricing</>
              </HoverText>
            </button>

            <button onClick={() => handleScrollToSection(faqRef)}>
              <HoverText height="16px">
                <>FAQs</>
              </HoverText>
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
