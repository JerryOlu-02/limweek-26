import "./styles/Button.scss";
import { ReactComponent as IconUp } from "../assets/svg/arrow-up.svg";

export default function Button({
  className,
  children,
  link,
  url,
  mail,
  mailTo,
  ...props
}) {
  // This is a reusable button component
  // It can be used in different parts of the application

  const classes = `btn ${className}`;

  if (mail) {
    return (
      <a href={`mailto:${mailTo}`} className={classes}>
        {children}
      </a>
    );
  }
  if (link) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export function ArrowUp() {
  return (
    <div className="arrow-div">
      <IconUp />
    </div>
  );
}
