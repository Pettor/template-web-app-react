import type { ReactElement } from "react";
import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { StoryFn, StoryContext } from "@storybook/react";
import { IntlProvider } from "react-intl";
import "../src/tailwind.css";


export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Design System", "Actions", "Components", "Layout", "Navigation", "Views"],
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
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];
