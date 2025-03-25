import jsEslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import prettierEslint from "eslint-plugin-prettier/recommended";
import prettierConfigEslint from "eslint-config-prettier";
import importEslint from "eslint-plugin-import";
import formatjsEslint from "eslint-plugin-formatjs";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: ["*.js", "dist", "public", "node_modules", "storybook-static"],
    files: ["*.ts", "*.tsx"],
    plugins: {
      formatjs: formatjsEslint,
      import: importEslint,
    },
    rules: {
      "import/no-unresolved": "off",
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
      "formatjs/enforce-id": ["error", { idInterpolationPattern: "[sha512:contenthash:base64:6]" }],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    },
  },
  prettierEslint,
  prettierConfigEslint,
];
