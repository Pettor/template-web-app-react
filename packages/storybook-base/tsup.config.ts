import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom", "@mui/material", /^@emotion/],
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: "tsconfig.json",
});

export default tsupConfig;
