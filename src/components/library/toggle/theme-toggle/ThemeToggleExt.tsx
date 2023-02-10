import { ReactElement, useContext } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "./context/ThemeModeContext";
import ThemeToggle from "./ThemeToggle";

export default function ThemeToggleExt(): ReactElement {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  function handleToggle(mode: PaletteMode): void {
    toggleMode(mode);
  }

  return <ThemeToggle defaultMode={mode} onToggle={handleToggle} />;
}
