import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";

export function useThemeMode() {
  const { mode } = useContext(ThemeModeContext);
  return mode;
}
