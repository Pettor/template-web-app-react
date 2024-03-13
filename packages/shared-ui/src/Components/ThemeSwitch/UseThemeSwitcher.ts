import { useAtom } from "jotai";
import { themeModeAtom } from "./Atoms/ThemeAtoms";
import type { ThemeSwitchProps } from "./ThemeSwitch";

export function useThemeSwitcher(): ThemeSwitchProps {
  const [themeMode, toggleTheme] = useAtom(themeModeAtom);

  function setTheme(): void {
    toggleTheme();
  }

  return {
    mode: themeMode,
    onSwitch: setTheme,
  };
}
