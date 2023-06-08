import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@mui/material/Box",
    "@mui/lab",
    "@mui/icons-material",
    /^@emotion/,
  ],
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: "tsconfig.json",
  loader: {
    ".svg": "dataurl",
  },
});

export default tsupConfig;
