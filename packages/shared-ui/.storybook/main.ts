import type { AddonOptionsVite } from "@storybook/addon-coverage";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  features: {
    storyStoreV7: true,
  },
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          exclude: ["**/storybook/**"],
        },
      } satisfies AddonOptionsVite,
    },
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-viewport",
  ],
  docs: {
    defaultName: "Docs",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      plugins: [tsconfigPaths()],
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@storybook/addon-a11y",
          "@storybook/addon-coverage",
          "@storybook/addon-essentials",
          "@storybook/addon-styling",
          "@storybook/addon-viewport",
        ],
      },
    });
  },
};

export default config;
