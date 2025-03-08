import baseConfig from "storybook-config/preview";
import "../src/main.css";
import type { Preview } from "@storybook/react";

export const preview: Preview = {
  ...baseConfig,
  parameters: {
    ...baseConfig.parameters,
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Design System", "Shared"],
      },
    },
  },
};
