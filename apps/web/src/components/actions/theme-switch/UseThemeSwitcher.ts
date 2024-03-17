import { useAtom } from "jotai";
import type { ThemeSwitchProps } from "./ThemeSwitch";
import { themeModeAtom } from "~/atoms/ThemeAtoms";

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
