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

export const parameters = {
  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: "todo",
  },
};
