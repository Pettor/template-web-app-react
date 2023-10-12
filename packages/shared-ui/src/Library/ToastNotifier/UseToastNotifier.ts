import { useContext } from "react";
import type { IToastNotifierContext } from "./ToastNotifierContext";
import { ToastNotifierContext } from "./ToastNotifierContext";

export function useToastNotifier(): IToastNotifierContext {
  const context = useContext(ToastNotifierContext);

  if (!context) {
    throw new Error("useToastNotifier must be used within a ToastNotifierProvider");
  }

  return context;
}
