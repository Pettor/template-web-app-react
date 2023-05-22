import type { ReactElement, ReactNode } from "react";
import { createContext, useMemo } from "react";
import type { PaletteMode } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocalStorage } from "react-utils";

interface IThemeModeContext {
  mode: PaletteMode;
  toggleMode(mode: PaletteMode): void;
}

interface Props {
  children: ReactNode;
}

export const ThemeModeContext = createContext<IThemeModeContext>({} as IThemeModeContext);

export function ThemeModeProvider({ children }: Props): ReactElement {
  const [storedMode, setStoredMode] = useLocalStorage<PaletteMode | null>("theme-mode", null);
  const preferredMode = useMediaQuery("(prefers-color-scheme: dark)");

  const selectedMode = useMemo(() => {
    if (storedMode) {
      return storedMode;
    }

    return preferredMode ? "dark" : "light";
  }, [storedMode, preferredMode]);

  function handleToggleMode(mode: PaletteMode): void {
    setStoredMode(mode);
  }

  return (
    <ThemeModeContext.Provider value={{ mode: selectedMode, toggleMode: handleToggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}
