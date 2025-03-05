import { withThemeByDataAttribute, withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Decorator } from "@storybook/react";
import { IntlProvider } from "react-intl";
import "../src/main.css";

const withLocaleProvider: Decorator = (Story, context) => {
  return (
    <IntlProvider locale="en" messages={{}}>
      <Story {...context} />
    </IntlProvider>
  );
};

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
      order: ["Design System", "Views", "Actions", "Feedback", "Forms", "Layout", "Navigation", "Shared"],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
