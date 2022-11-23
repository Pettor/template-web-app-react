import { ReactNode, createContext, useState } from "react";
import { PaletteMode } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocalStorage } from "../../../../../libs/storage/local-storage/hooks/UseLocalStorage";

interface IThemeModeContext {
  mode: PaletteMode;
  toggleMode(mode: PaletteMode): void;
}

type Props = {
  children: ReactNode;
};

export const ThemeModeContext = createContext<IThemeModeContext>({} as IThemeModeContext);

function ThemeModeProvider({ children }: Props) {
  const [storedMode, setStoredMode] = useLocalStorage<PaletteMode | null>("theme-mode", null);
  const defaultMode = !storedMode ? (useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light") : storedMode;
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  function handleToggleMode(mode: PaletteMode) {
    setStoredMode(mode);
    setMode(mode);
  }

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode: handleToggleMode }}>{children}</ThemeModeContext.Provider>
  );
}

export default ThemeModeProvider;
