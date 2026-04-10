import { createContext, useState } from "react";

const SectionContext = createContext();

const SectionProvider = function ({ children }) {
  const [aboutRef, setAboutRef] = useState();
  // const [eventRef, setEventRef] = useState();
  const [eventDetailsRef, setEventDetailsRef] = useState();
  const [scheduleRef, setScheduleRef] = useState();
  const [faqRef, setFaqRef] = useState();
  const [pricingRef, setPricingRef] = useState();

  const activateFaqRef = function (ref) {
    setFaqRef(ref);
  };

  const activateEventDetailsRef = function (ref) {
    setEventDetailsRef(ref);
  };

  const activateScheduleRef = function (ref) {
    setScheduleRef(ref);
  };

  const activatePricingRef = function (ref) {
    setPricingRef(ref);
  };

  const activateAboutRef = function (ref) {
    setAboutRef(ref);
  };

  // const activateEventRef = function (ref) {
  //   setEventRef(ref);
  // };

  const data = {
    aboutRef,
    eventDetailsRef,
    scheduleRef,
    pricingRef,
    faqRef,
    activateAboutRef,
    // activateEventRef,
    activateEventDetailsRef,
    activateScheduleRef,
    activatePricingRef,
    activateFaqRef,
  };

  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };

export default SectionContext;
