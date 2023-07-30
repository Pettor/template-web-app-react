import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig } from "vite";
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
    "@storybook/addon-coverage",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
          "@storybook/addon-interactions",
          "@storybook/addon-styling",
          "@storybook/addon-viewport",
        ],
      },
      build: {
        rollupOptions: {
          onwarn: (warning, warn) => {
            if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
              return;
            }
            warn(warning);
          },
        },
      },
    } satisfies UserConfig);
  },
};

export default config;
