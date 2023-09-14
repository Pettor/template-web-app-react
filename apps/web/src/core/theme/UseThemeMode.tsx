import { useContext } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "./ThemeModeContext";

export function useThemeMode(): PaletteMode {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }

  const { mode } = context;
  return mode;
}
