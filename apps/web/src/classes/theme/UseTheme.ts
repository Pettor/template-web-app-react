import { useAtom } from "jotai";
import { themeModeEffect } from "~/atoms/ThemeAtoms";

export function useTheme(): void {
  useAtom(themeModeEffect);
}
