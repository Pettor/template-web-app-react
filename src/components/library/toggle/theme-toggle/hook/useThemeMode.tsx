import { useContext } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "../context/ThemeModeContext";

export function useThemeMode(): PaletteMode {
  const { mode } = useContext(ThemeModeContext);
  return mode;
}
