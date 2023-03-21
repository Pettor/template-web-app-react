import type { ReactElement } from "react";
import { useContext } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "../../theme/ThemeModeContext";
import ThemeToggle from "~/components/library/toggle/theme-toggle/ThemeToggle";

export default function ThemeToggleExt(): ReactElement {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  function handleToggle(mode: PaletteMode): void {
    toggleMode(mode);
  }

  return <ThemeToggle defaultMode={mode} onToggle={handleToggle} />;
}
