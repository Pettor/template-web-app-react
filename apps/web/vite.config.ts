import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";
import { defineConfig, loadEnv, mergeConfig } from "vite";
import proxy from "vite-plugin-http2-proxy";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const commonConfig: UserConfig = {
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        devOptions: {
          enabled: false,
        },
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "pwa-192x192.png", "pwa-512x512.png"],
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
          short_name: "WebTemplate",
          theme_color: "#ffffff",
        },
        registerType: "prompt",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          navigateFallbackDenylist: [/storybook/],
        },
      }),
    ],
  };

  switch (command) {
    case "build":
      return mergeConfig(commonConfig, {
        base: "./",
      });
    case "serve":
      return mergeConfig(commonConfig, {
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
