import type { ReactElement } from "react";
import React from "react";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import createAppTheme from "../src/libs/theme/Theme";
import { reactIntl } from "./plugins/reactIntl";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from "@storybook/theming";
import { StoryFn, StoryContext } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Design System", "Library", "Forms", "Layout", "Pwa", "Views"],
    },
  },
  docs: {
    container: (props: any) => {
      // This will apply the selected theme to the DocsContainer
      const { context } = props;
      const { id: storyId, storyById } = context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = useDarkMode() ? themes.dark : themes.light;

      return React.createElement(DocsContainer, props);
  },
  darkMode: {
    current: "light"
  }
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Formatjs locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        // Add locales here
        { value: "en", title: "English" },
      ],
    },
  }
};

function withThemeProvider(Story: StoryFn, context: StoryContext): ReactElement {
  const { locale } = context.globals;
  const { messages } = reactIntl;
  const theme = createAppTheme(useDarkMode() ? "dark" : "light");

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
}

export const decorators = [withThemeProvider];
