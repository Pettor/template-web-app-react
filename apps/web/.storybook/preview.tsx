import baseConfig from "storybook-config/preview";
import "../src/main.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  ...baseConfig,
  parameters: {
    ...baseConfig.parameters,
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Design System", "Views", "Actions", "Display", "Feedback", "Forms", "Layout", "Navigation", "Shared"],
      },
    },
  },
};

export default preview;
