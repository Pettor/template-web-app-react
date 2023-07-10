import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  features: {
    storyStoreV7: true
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-viewport",
  ],
  docs: {
    defaultName: "Docs",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@storybook/addon-a11y",
          "@storybook/addon-essentials",
          "@storybook/addon-styling",
          "@storybook/addon-viewport",
        ],
      },
    });
  },
};

export default config;