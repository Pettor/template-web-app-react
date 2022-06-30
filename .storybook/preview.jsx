import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { useDarkMode } from "storybook-dark-mode";
import createAppTheme from "../src/theme/Theme";

export const parameters = {
  layout: "fullscreen",
  options: {
    storySort: {
      method: "alphabetical",
      order: ['Design System', 'Common', 'Forms', 'Layout', 'Views'],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const darkMode = useDarkMode();
  const theme = createAppTheme(darkMode ? "dark" : "light");

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
