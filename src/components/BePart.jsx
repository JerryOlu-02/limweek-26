import BlockReveal from "../reusable-components/BlockReveal";
import RevealText from "../reusable-components/RevealText";
import "./styles/BePart.scss";

export default function BePart() {
  return (
    <section className="section be_part-section">
      <div className="main-container be_part-container">
        <div className="overlay" />

        <div className="be_part">
          <div className="be_part-content">
            <div>
              <BlockReveal blockColor="rgba(255, 255, 255, 1)">
                <h2>Be a Part of</h2>
              </BlockReveal>

              <BlockReveal blockColor="rgba(255, 255, 255, 1)" delay={0.4}>
                <h2>LIMWEEK 2026</h2>
              </BlockReveal>
            </div>

            <RevealText stagger={0.02}>
              <p>
                Take your place among industry leaders, innovators, and
                decision-makers shaping the future of maritime.
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
