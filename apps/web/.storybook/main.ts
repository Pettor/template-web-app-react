import type { StorybookConfig } from "@storybook/react-vite";
import baseConfig from "storybook-config/main";

const config: StorybookConfig = {
  ...baseConfig,
  stories: [
    "../src/**/*.stories.@(ts|tsx)",
    process.env.NODE_ENV === "production" || process.env.STORYBOOK_MODE === "combined"
      ? "../../../packages/ui/src/**/*.stories.tsx"
      : "",
  ],
};

export default config;
