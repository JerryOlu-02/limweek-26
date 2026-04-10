import "./styles/EventSchedule.scss";

import { ReactComponent as ScheduleIcon1 } from "../assets/svg/schedule_1.svg";
import { ReactComponent as ScheduleIcon2 } from "../assets/svg/schedule_2.svg";
import { ReactComponent as ScheduleIcon3 } from "../assets/svg/schedule_3.svg";

import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";

import Header from "../reusable-components/Header";
import BlockReveal from "../reusable-components/BlockReveal";
import AnimatedText from "../reusable-components/AnimatedText";
import RevealText from "../reusable-components/RevealText";

export default function EventSchedule() {
  const scheduleRef = useRef(null);
  const { activateScheduleRef } = useSectionContext();

  useEffect(() => {
    activateScheduleRef(scheduleRef);
  }, []);

  return (
    <section ref={scheduleRef} className="section">
      <div className="main-container event_schedule-container">
        <div className="event_schedule">
          <Header
            caption="Event Schedule"
            header="How the Experience Unfolds"
            description="A clear breakdown of sessions, activities, and key moments
                across each day."
            dark
            center
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
              }}
            >
              <BlockReveal blockColor="rgba(10, 14, 40, 1)">
                <h2>How the</h2>
              </BlockReveal>

              <BlockReveal blockColor="rgba(10, 14, 40, 1)" delay={0.3}>
                <h2>Experience</h2>
              </BlockReveal>

              <BlockReveal blockColor="rgba(10, 14, 40, 1)" delay={0.6}>
                <h2>Unfolds</h2>
              </BlockReveal>
            </div>
          </Header>

          <aside className="schedule_list">
            <div className="schedule_item">
              <ScheduleIcon1 />

              <div className="schedule_item-content">
                <RevealText stagger={0.02}>
                  <h5>Opening Public Lecture</h5>
                </RevealText>

                <AnimatedText
                  colorInitial="rgba(0, 0, 0, 0.4)"
                  colorFinal="rgba(0, 0, 0, 0.6)"
                >
                  <p>
                    By Dr. Segun Musa Secretary General African Shipowners
                    Association.
                  </p>
                </AnimatedText>
              </div>
            </div>

            <div className="schedule_item">
              <ScheduleIcon2 />

              <div className="schedule_item-content">
                <RevealText start="top 110%" stagger={0.02}>
                  <h5>
                    Maritime B2B
                    <br /> Conference
                  </h5>
                </RevealText>

                <AnimatedText
                  colorInitial="rgba(0, 0, 0, 0.4)"
                  colorFinal="rgba(0, 0, 0, 0.6)"
                >
                  <p>There are different rountables quoted in the brief.</p>
                </AnimatedText>
              </div>
            </div>

            <div className="schedule_item">
              <ScheduleIcon3 />

              <div className="schedule_item-content">
                <RevealText start="top 120%" stagger={0.02}>
                  <h5>Maritime Youth Mentorship</h5>
                </RevealText>

                <AnimatedText
                  colorInitial="rgba(0, 0, 0, 0.4)"
                  colorFinal="rgba(0, 0, 0, 0.6)"
                >
                  <p>
                    Equipping young minds with knowledge, mentorship, and
                    connections for a thriving maritime future.
                  </p>
                </AnimatedText>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
