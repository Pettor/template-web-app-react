import type { Atom } from "jotai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomEffect } from "jotai-effect";
import type { ThemeMode } from "~/classes/theme/ThemeMode";

const themeLocalStorageAtom = atomWithStorage<ThemeMode>("theme", "light");
const themeMediaQueryAtom = atom(() => window.matchMedia("(prefers-color-scheme: dark)"));

// Derived
export const themeModeAtom = atom(
  (get) => {
    const mediaQuery = get(themeMediaQueryAtom);
    const localStorageTheme = get(themeLocalStorageAtom);

    if (!localStorageTheme) {
      return mediaQuery.matches ? "dark" : "light";
    }

    return localStorageTheme;
  },
  (get, set) => {
    const currentTheme = get(themeModeAtom);
    const newTheme = currentTheme === "light" ? "dark" : "light";

    set(themeLocalStorageAtom, newTheme);
  }
);

// Effects
export const themeModeEffect: Atom<void> = atomEffect((get) => {
  const themeMode = get(themeModeAtom);

  if (themeMode === "dark") {
    document.querySelector("html")?.setAttribute("data-theme", "night");
    return;
  }
  document.querySelector("html")?.setAttribute("data-theme", "light");
});
