import { ReactElement, useContext } from "react";
import { PaletteMode } from "@mui/material";
import ThemeToggle from "../../../components/library/toggle/theme-toggle/ThemeToggle";
import { ThemeModeContext } from "../../theme/ThemeModeContext";

export default function ThemeToggleExt(): ReactElement {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  function handleToggle(mode: PaletteMode): void {
    toggleMode(mode);
  }

  return <ThemeToggle defaultMode={mode} onToggle={handleToggle} />;
}
