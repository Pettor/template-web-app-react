import type { AlertProps } from "@mui/material";

export interface ToastOptions extends AlertProps {
  text: string;
  title?: string;
  timeout?: number;
}
