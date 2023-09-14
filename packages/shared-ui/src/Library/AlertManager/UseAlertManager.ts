import { useContext } from "react";
import { AlertManagerContext } from "./AlertManagerContext";

export function useAlertManager() {
  const context = useContext(AlertManagerContext);
  
  if (!context) {
    throw new Error("useAlertManager must be used within a AlertManagerProvider");
  }

  return context;
}
