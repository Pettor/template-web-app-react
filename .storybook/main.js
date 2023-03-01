/* eslint-disable */
const { mergeConfig } = require("vite");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

const config = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport"
  ],
  docs: {
    defaultName: 'Docs',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      plugins: [tsconfigPaths()],
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@storybook/addon-essentials",
          "@storybook/addon-a11y",
          "@storybook/addon-viewport"
        ],
      },
    });
  },
};

export default config;
