import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    plugins: [tailwindcss() as PluginOption, tsconfigPaths() as PluginOption],
    // Add storybook-specific dependencies to pre-optimization
    optimizeDeps: {
      include: ["@storybook/addon-a11y", "@storybook/addon-interactions", "@storybook/addon-viewport"],
    },
  };
});
