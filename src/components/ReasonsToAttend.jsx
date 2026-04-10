import "./styles/ReasonsToAttend.scss";
import ReasonsImg from "../assets/images/reasons_to_attend_image.png";
import { ReactComponent as PracticalSvg } from "../assets/svg/practical-svg.svg";
import { ReactComponent as ValuableSvg } from "../assets/svg/valuable-svg.svg";
import { ReactComponent as AheadSvg } from "../assets/svg/ahead-svg.svg";
import BlockReveal from "../reusable-components/BlockReveal";
import AnimatedText from "../reusable-components/AnimatedText";
import { REASONS_TO_ATTEND as reasonsData } from "../helpers/details";

export default function ReasonsToAttend() {
  const reasons = reasonsData.map((reason, index) => {
    return (
      <div key={reason.desc} className="reasons-item">
        <reason.svg />

        <div className="reasons-item-content">
          <BlockReveal start={`top 1${index}0%`} blockColor="rgba(0, 0, 0, 1)">
            <h5>{reason.header}</h5>
          </BlockReveal>

          <AnimatedText
            colorInitial="rgba(102, 102, 102, 1)"
            colorFinal="rgba(102, 102, 102, 0.7)"
          >
            <p>{reason.desc}</p>
          </AnimatedText>
        </div>
      </div>
    );
  });
  return (
    <section className="section">
      <div className="main-container">
        <aside className="why_attend">
          <div className="why_attend-caption">
            <span />
            Reasons to Attend
          </div>

          <div className="why_attend-content">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <BlockReveal blockColor="#0A0E28">
                <h2>Where Vision</h2>
              </BlockReveal>

              <BlockReveal blockColor="#0A0E28" delay={0.5}>
                <h2>Meets Action</h2>
              </BlockReveal>
            </div>

            <AnimatedText
              colorInitial="rgba(102, 102, 102, 0.45)"
              colorFinal="rgba(102, 102, 102, 1)"
            >
              <p>
                A space where ideas evolve into measurable progress across the
                maritime sector.
              </p>
            </AnimatedText>
          </div>
        </aside>

        <aside className="why_attend-image">
          <img src={ReasonsImg} alt="Reasons to attend visual representation" />
        </aside>

        <aside className="why_attend-reasons">
          <div className="reasons-list">{reasons}</div>
        </aside>
      </div>
    </section>
  );
}
