import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  {
    ignores: [
      ".now/*",
      "**/*.css",
      "**/.changeset",
      "**/dist",
      "esm/*",
      "public/*",
      "tests/*",
      "scripts/*",
      "**/*.config.js",
      "**/.DS_Store",
      "**/node_modules",
      "**/coverage",
      "**/.next",
      "**/build",
      "!**/.commitlintrc.cjs",
      "!**/.lintstagedrc.cjs",
      "!**/jest.config.js",
      "!**/plopfile.js",
      "!**/react-shim.js",
      "!**/tsup.config.ts",
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    plugins: {
      react,
      "unused-imports": unusedImports,
      _import: fixupPluginRules(_import),
      "@typescript-eslint": typescriptEslint,
      "jsx-a11y": jsxA11Y,
      prettier,
    },

    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },

    rules: {
      "no-console": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "prettier/prettier": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],

      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],

          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],

          "newlines-between": "always",
        },
      ],

      "react/self-closing-comp": "warn",

      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      "padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
    },
  },
];

export default eslintConfig;
