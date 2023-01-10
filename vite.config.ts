import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const envs = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...envs };

  const plugins = {
    plugins: [react()],
  };

  let overrides = {};
  switch (command) {
    case "serve":
      overrides = {
        server: {
          proxy: {
            "/api": {
              target: `http://${process.env.VITE_CONNECT_HOST}:${process.env.VITE_CONNECT_PORT}`,
              changeOrigin: true,
              secure: false,
            },
          },
        },
      };
      break;
    default:
    case "build":
      overrides = {};
      break;
  }

  return { ...plugins, ...overrides };
});
