import type { ReactElement } from "react";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "mui-theme";
import { useThemeMode } from "./UseThemeMode";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AppTheme({ children }: Props): ReactElement {
  const mode = useThemeMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
