import js from "eslint-plugin-js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import formatjs from "eslint-plugin-formatjs";
import eslintImport from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    linterOptions: {
      ignorePatterns: ["**/dist/*", "**/node_modules/*"],
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      prettier,
      formatjs,
      import: eslintImport,
      storybook,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: ["builtin", "external", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: ["function-declaration"],
        },
      ],
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "prettier/prettier": "error",
      "formatjs/enforce-id": [
        "error",
        { idInterpolationPattern: "[sha512:contenthash:base64:6]" },
      ],
    },
  },
  {
    files: ["*stories.tsx", "main.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
