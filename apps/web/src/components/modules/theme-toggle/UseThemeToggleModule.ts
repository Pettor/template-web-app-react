import { useContext } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "~/core/theme/ThemeModeContext";

export function useThemeToggleModule(): {
  currentMode: PaletteMode;
  handleToggleMode: (mode: PaletteMode) => void;
} {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  return {
    currentMode: mode,
    handleToggleMode: toggleMode,
  };
}
