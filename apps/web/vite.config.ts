import path from "path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { PluginOption, UserConfig } from "vite";
import { defineConfig, loadEnv, mergeConfig } from "vite";
import proxy from "vite-plugin-http2-proxy";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineConfigVitest } from "vitest/config";

// https://vitejs.dev/config/

const ReactCompilerConfig = {
  target: "19",
};
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const commonConfig: UserConfig = {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }) as PluginOption,
      tailwindcss(),
      tsconfigPaths() as PluginOption,
      VitePWA({
        devOptions: {
          enabled: false,
        },
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "pwa-192x192.png",
          "pwa-512x512.png",
          "screenshot-desktop.png",
          "screenshot-phone.png",
        ],
        injectRegister: "auto",
        manifest: {
          background_color: "#ffffff",
          display: "standalone",
          description: "React Template using Turborepo, TailwindCSS, DaisyUI and Vite.",
          name: "ReactWebTemplate",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          screenshots: [
            {
              src: "screenshot-desktop.png",
              sizes: "690x670",
              type: "image/png",
              form_factor: "wide",
              label: "WebTemplate on Desktop",
            },
            {
              src: "screenshot-phone.png",
              sizes: "435x608",
              type: "image/png",
              form_factor: "narrow",
              label: "WebTemplate on Phone",
            },
          ],
          short_name: "WebTemplate",
          theme_color: "#ffffff",
        },
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          navigateFallbackDenylist: [/storybook/],
        },
      }) as PluginOption,
    ],
  };

  const vitestConfig = defineConfigVitest({
    test: {
      coverage: {
        include: ["src/components/**/*.{ts,tsx}"],
      },
      projects: [
        {
          extends: true,
          optimizeDeps: {
            include: ["react/jsx-dev-runtime"],
          },
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({ configDir: path.join(__dirname, ".storybook") }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: "playwright",
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [path.join(".storybook", "vitest.setup.ts")],
          },
        },
      ],
    },
  });

  switch (command) {
    case "build":
      return mergeConfig(commonConfig, {
        base: "./",
        build: {
          commonjsOptions: {
            exclude: ["@faker-js/faker"],
          },
        },
      });
    case "serve":
      return mergeConfig(commonConfig, {
        ...vitestConfig,
        server: {
          cors: true,
          https: true,
        },
        plugins: [
          mkcert({
            savePath: env.MKCERT_SAVE_PATH || undefined,
          }),
          proxy({
            "^/api": {
              target: `${env.VITE_CONNECT_HOST}:${env.VITE_CONNECT_PORT}`,
              secure: false,
            },
          }),
        ],
      });
  }
});
