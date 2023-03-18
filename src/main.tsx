import { StrictMode } from "react";
import ReactDOMClient from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./app/App";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("Call updateSw here");
    updateSW();
  },
  onOfflineReady() {
    console.log("App is ready for offline usage.");
  },
});

ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
