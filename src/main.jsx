import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { SectionProvider } from "./context/sectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </StrictMode>,
);
