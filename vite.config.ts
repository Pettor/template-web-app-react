import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";
import { defineConfig, loadEnv } from "vite";
import proxy from "vite-plugin-http2-proxy";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const commonConfig = {
    plugins: [
      react(),
      VitePWA({
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
        manifest: {
          name: "WebTemplate",
          short_name: "WebTemplate",
          description: "Description for App",
          theme_color: "#ffffff",
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
        },
        registerType: "autoUpdate",
        injectRegister: "auto",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
  };

  switch (command) {
    case "build":
      return {
        ...commonConfig,
        base: "./",
      } as UserConfig;
    case "serve":
      return {
        ...commonConfig,
        plugins: [
          ...commonConfig.plugins,
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
        server: {
          https: true,
        },
      } as UserConfig;
  }
});
