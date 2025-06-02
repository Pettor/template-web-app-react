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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
