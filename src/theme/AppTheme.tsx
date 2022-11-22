import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeMode } from "../components/common/toggle/theme-toggle/hook/useThemeMode";
import createAppTheme from "./Theme";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AppTheme({ children }: Props): JSX.Element {
  const mode = useThemeMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
