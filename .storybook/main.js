/* eslint-disable */
const { mergeConfig } = require("vite");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ['@storybook/addon-essentials']

  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      plugins: [tsconfigPaths()],
    });
  },
};
