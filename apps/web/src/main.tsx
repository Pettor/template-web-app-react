import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/App";
import "./main.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
