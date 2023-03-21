import { useContext } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "./ThemeModeContext";

export function useThemeMode(): PaletteMode {
  const { mode } = useContext(ThemeModeContext);
  return mode;
}
