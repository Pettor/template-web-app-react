import { useContext } from "react";
import { PaletteMode } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ThemeModeContext } from "./context/ThemeModeContext";

export function ThemeToggleExt() {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  function handleToggle(mode: PaletteMode) {
    toggleMode(mode);
  }

  return <ThemeToggle defaultMode={mode} onToggle={handleToggle} />;
}
