import type { ReactElement } from "react";
import React from "react";
import { withThemeByDataAttribute, withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { StoryFn, StoryContext } from "@storybook/react";
import { IntlProvider } from "react-intl";
import "../src/assets/styling/tailwind.css";

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

export const parameters = {
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Design System", "Actions", "Feedback", "Forms", "Layout", "Navigation", "Views", "Shared"],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
