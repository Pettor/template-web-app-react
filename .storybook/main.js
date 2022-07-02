const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: "webpack5",
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "storybook-dark-mode"],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
