import "./styles/EventDetails.scss";

import EventImg from "../assets/images/event-details-img.jpg";
import EventImgMobile from "../assets/images/event-details-img-mobile.jpg";

import Header from "../reusable-components/Header";

import useSectionContext from "../helpers/useSectionContext";
import { useRef, useEffect } from "react";
import BlockReveal from "../reusable-components/BlockReveal";
import RevealText from "../reusable-components/RevealText";

export default function EventDetails() {
  const eventDetailsRef = useRef(null);
  const { activateEventDetailsRef } = useSectionContext();

  useEffect(() => {
    activateEventDetailsRef(eventDetailsRef);
  }, []);

  return (
    <section ref={eventDetailsRef} className="section event_details-section">
      <div
        className="main-container event_details-container"
        style={{ backgroundColor: "rgba(1, 17, 35, 1)" }}
      >
        <div className="event_details">
          <Header
            caption="EVENT DETAILS"
            description="Key information to help you plan, prepare, and make the most of
                your experience."
            dark={false}
          >
            <div>
              <BlockReveal blockColor="rgba(255, 255, 255, 1)">
                <h2>Everything You</h2>
              </BlockReveal>

              <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.4}>
                <h2>Need to Know</h2>
              </BlockReveal>
            </div>
          </Header>

          <aside className="event_details-image">
            <picture>
              <source srcSet={EventImgMobile} media="(max-width: 768px)" />

              <source srcSet={EventImg} media="(min-width: 768px)" />

              <img src={EventImg} alt="Event Details Visual Representation" />
            </picture>
          </aside>

          <aside className="details">
            <div className="details_list">
              <div className="details_item">
                <span className="line" />

                <div className="details_item-content">
                  <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.6}>
                    <h4>Main Event dates</h4>
                  </BlockReveal>

                  <RevealText stagger={0.02}>
                    <p>Sept 8–9, 2026</p>
                  </RevealText>
                </div>
              </div>

              <div className="details_item">
                <span className="line" />

                <div className="details_item-content">
                  <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.6}>
                    <h4>Time of event</h4>
                  </BlockReveal>

                  <RevealText stagger={0.02} start="top 120%">
                    <p>8:00 AM – 6:00 PM</p>
                  </RevealText>
                </div>
              </div>
            </div>

            <div className="details_list">
              <div className="details_item">
                <span className="line" />

                <div className="details_item-content">
                  <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.6}>
                    <h4>VENUE OF EVENT</h4>
                  </BlockReveal>

                  <RevealText stagger={0.02} start="top 140%">
                    <p>Lagos Oriental Hotel, Victoria Island</p>
                  </RevealText>
                </div>
              </div>

              <div className="details_item">
                <span className="line" />

                <div className="details_item-content">
                  <BlockReveal
                    start="top 130%"
                    blockColor="rgba(255, 255, 255, 1)"
                    delay={0.6}
                  >
                    <h4>EXCURSION DATE</h4>
                  </BlockReveal>

                  <RevealText stagger={0.02} start="top 130%">
                    <p>September 10, 2026</p>
                  </RevealText>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
