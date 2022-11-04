/* eslint-disable */
const { mergeConfig } = require("vite");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y", "storybook-dark-mode"],

  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      plugins: [tsconfigPaths()],
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: ["@storybook/addon-a11y", "storybook-dark-mode"],
      },
    });
  },
};
