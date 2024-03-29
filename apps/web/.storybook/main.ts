import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
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
  stories: [
    "../src/**/*.stories.@(ts|tsx)",
    process.env.NODE_ENV === "production" || process.env.STORYBOOK_MODE === "combined"
      ? "../../../packages/shared-ui/src/**/*.stories.tsx"
      : "",
  ],
};

export default config;
