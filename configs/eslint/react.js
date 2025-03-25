import reactEslint from "eslint-plugin-react";
import reactHooksEslint from "eslint-plugin-react-hooks";
import reactCompilerEslint from "eslint-plugin-react-compiler";
import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  ...baseConfig,
  reactCompilerEslint.configs.recommended,
  {
    ...reactEslint.configs.flat.recommended,
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      ...reactEslint.configs.flat.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    plugins: {
      react: reactEslint,
      "react-hooks": reactHooksEslint,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: ["function-declaration"],
        },
      ],
      "react-hooks/exhaustive-deps": "error",
    },
  },
  {
    files: ["**/*.stories.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
