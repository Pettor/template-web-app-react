import { config } from "eslint-config/react";
export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
