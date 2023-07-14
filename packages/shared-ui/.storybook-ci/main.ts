import type { StorybookConfig } from "@storybook/react-vite";
import mainConfig from "../.storybook/main";

const config: StorybookConfig = {
  ...mainConfig,
  stories: [
    "../src/Layout/**/*.stories.@(ts|tsx)",
    "../src/Library/**/!(Button)*.stories.@(ts|tsx)",
    "../src/Navigation/**/*.stories.@(ts|tsx)"
  ]
}

export default config;
