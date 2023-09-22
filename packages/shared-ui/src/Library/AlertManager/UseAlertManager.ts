import { useContext } from "react";
import type { IAlertManagerContext } from "./AlertManagerContext";
import { AlertManagerContext } from "./AlertManagerContext";

export function useAlertManager(): IAlertManagerContext {
  const context = useContext(AlertManagerContext);

  if (!context) {
    throw new Error("useAlertManager must be used within a AlertManagerProvider");
  }

  return context;
}
