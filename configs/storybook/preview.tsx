import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <IntlProvider locale="en" messages={{}}>
        <Story {...context} />
      </IntlProvider>
    ),
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "night",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
