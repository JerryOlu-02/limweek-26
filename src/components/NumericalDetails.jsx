import "./styles/NumericalDetails.scss";

import NumberCountdown from "../reusable-components/NumberCountdown";

export default function NumericalDetails() {
  return (
    <div className="numerical_details_section">
      <div className="numerical_details">
        <div className="numerical_details-item">
          <h3 className="num">
            <NumberCountdown targetNumber={13} suffix="+" duration={3} />
          </h3>

          <p>YEARS of continuous impact</p>
        </div>

        <span className="line" />

        <div className="numerical_details-item">
          <h3 className="num">
            <NumberCountdown targetNumber={10} duration={3} />
          </h3>

          <p>major event organized</p>
        </div>

        <span className="line" />

        <div className="numerical_details-item">
          <h3 className="num">
            <NumberCountdown targetNumber={20} duration={3} />
          </h3>

          <p>youth mentorship</p>
        </div>
      </div>
    </div>
  );
}
