import AnimatedText from "./AnimatedText";
import RevealText from "./RevealText";
import "./styles/Header.scss";

export default function Header({
  children,
  caption,
  description,
  dark = true,
  center,
}) {
  return (
    <aside
      className={`header-item ${dark ? "dark" : ""} ${center ? "center" : ""}`}
    >
      <div className="caption">
        <span />

        <RevealText>{caption}</RevealText>
      </div>

      <div className="header">
        {children}

        <AnimatedText
          colorFinal={
            !dark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.6)"
          }
          colorInitial={
            !dark ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.3)"
          }
        >
          <p>{description}</p>
        </AnimatedText>
      </div>
    </aside>
  );
}
