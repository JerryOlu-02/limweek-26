import Button from "./Button";
import "./styles/Navbar.scss";

import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
import { ReactComponent as LogoDarkSvg } from "../assets/svg/logo-dark.svg";

import { useState } from "react";
import useSectionContext from "../helpers/useSectionContext.js";

import HoverText from "./HoverText.jsx";

export default function NavBar({ isVisible }) {
  //State to manage Navbar Content Visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((open) => (open ? false : true));
  };

  const activeClass = isOpen ? "open" : "";

  // Handle Smooth Scroll Into Section
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
    <nav className={`navbar ${isVisible && "sticky"}`}>
      <div className="navbar_container">
        <h3 className="logo">{isOpen ? <LogoDarkSvg /> : <LogoSvg />}</h3>

        <div className={`nav__container ${activeClass}`}>
          <ul className={`nav__links ${activeClass}`}>
            <li onClick={() => handleScrollToSection(aboutRef)}>
              <HoverText height="16px">
                <>About</>
              </HoverText>
            </li>
            {/* <li onClick={() => handleScrollToSection(eventRef)}>The Event</li> */}
            <li onClick={() => handleScrollToSection(eventDetailsRef)}>
              <HoverText height="16px">
                <>EVENT DETAILS</>
              </HoverText>
            </li>
            <li onClick={() => handleScrollToSection(scheduleRef)}>
              <HoverText height="16px">
                <>SCHEDULE</>
              </HoverText>
            </li>
            <li onClick={() => handleScrollToSection(pricingRef)}>
              <HoverText height="16px">
                <>PRICING</>
              </HoverText>
            </li>
            <li onClick={() => handleScrollToSection(faqRef)}>
              <HoverText height="16px">
                <>FAQs</>
              </HoverText>
            </li>
          </ul>
        </div>

        <div className="menu">
          <div className={`btn__container mobile ${activeClass}`}>
            <Button
              link
              url={
                "https://tix.africa/lagos-international-maritime-week-limweek-2025"
              }
              className={"btn-nav"}
            >
              BOOK TICKET
            </Button>
          </div>

          <div
            onClick={() => handleToggle()}
            className={`nav__hamburger ${activeClass}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
