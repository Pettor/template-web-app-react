import type { StorybookConfig } from "@storybook/react-vite";
import mainConfig from "../.storybook/main";

const config: StorybookConfig = {
  ...mainConfig,
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)"
  ]
}

export default config;
