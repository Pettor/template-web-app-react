import type { ReactElement } from "react";
import { ThemeToggle } from "shared-ui";
import { useThemeToggleModule } from "./UseThemeToggleModule";

export function ThemeToggleModule(): ReactElement {
  const { currentMode, handleToggleMode } = useThemeToggleModule();
  return <ThemeToggle defaultMode={currentMode} onToggle={handleToggleMode} />;
}
