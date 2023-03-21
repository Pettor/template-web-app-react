import react from "@vitejs/plugin-react-swc";
import { UserConfig, defineConfig, loadEnv } from "vite";
import proxy from "vite-plugin-http2-proxy";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const commonConfig = {
    plugins: [react(), tsconfigPaths()],
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
