import React from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import createAppTheme from "../src/theme/Theme";
import { reactIntl } from "./plugins/reactIntl";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Design System", "Library", "Forms", "Layout", "Views"],
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Formatjs locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "sv", title: "Swedish" },
      ],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const { locale } = context.globals;
  const { messages } = reactIntl;

  const darkMode = useDarkMode();
  const theme = createAppTheme(darkMode ? "dark" : "light");

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <CssBaseline />
          <Story {...context} />
        </IntlProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
