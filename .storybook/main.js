module.exports = {
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: "@storybook/builder-vite",
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y", "storybook-dark-mode"],

  async viteFinal(config) {
    config.base = './';
    return config;
  },
};
