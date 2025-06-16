import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-themes",
  ],
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: ".storybook/vite.config.ts",
      },
    },
  },
  docs: {
    defaultName: "Docs",
  },
  framework: "@storybook/react-vite",
  stories: ["**/*.stories.@(ts|tsx)"],
};

export default config;
