import type { StorybookConfig } from "@storybook/react-vite";
import baseConfig from "storybook-config/main";

const config: StorybookConfig = {
  ...baseConfig,
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-vitest"],
};

export default config;
