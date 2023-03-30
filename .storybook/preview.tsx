import type { ReactElement } from "react";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { StoryFn, StoryContext } from "@storybook/react";
import { IntlProvider } from "react-intl";
import createAppTheme from "../src/libs/theme/Theme";
import { reactIntl } from "./plugins/reactIntl";

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
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Formatjs locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      dynamicTitle: true,
      items: [
        // Add locales here
        { value: "en", title: "English" },
      ],
    },
  },
};

function withLocaleProvider(Story: StoryFn, context: StoryContext): ReactElement {
  const { locale } = context.globals;
  const { messages } = reactIntl;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
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
