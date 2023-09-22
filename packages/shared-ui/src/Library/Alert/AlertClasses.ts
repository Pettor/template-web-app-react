import type { AlertProps } from "@mui/material";

export interface AlertOptions extends AlertProps {
  text: string;
  title?: string;
  timeout?: number;
}
