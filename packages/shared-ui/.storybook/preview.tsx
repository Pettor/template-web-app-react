import type { ReactElement } from "react";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { StoryFn, StoryContext } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { createAppTheme } from "mui-theme";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Design System", "Library", "Forms", "Navigation", "Layout", "Views"],
    },
  },
};

function withLocaleProvider(Story: StoryFn, context: StoryContext): ReactElement {
  return (
    <IntlProvider locale="en" messages={{}}>
      <Story {...context} />
    </IntlProvider>
  );
}

export const decorators = [
  withLocaleProvider,
  withThemeFromJSXProvider({
    themes: {
      light: createAppTheme("light"),
      dark: createAppTheme("dark"),
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
