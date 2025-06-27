import { defineConfig } from "eslint/config";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  languageOptions: {
    globals: {
      ...globals.node,
    },

    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {},
  },

  extends: compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ),

  plugins: {
    "@typescript-eslint": typescriptEslint,
    "simple-import-sort": simpleImportSort,
    "unused-imports": unusedImports,
  },

  rules: {
    "prettier/prettier": ["warn", {
      arrowParens: "avoid",
      endOfLine: "auto",
      printWidth: 80,
      semi: false,
      singleAttributePerLine: true,
      tabWidth: 2,
    }],

    "no-unused-vars": "off",
    "no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unused-imports/no-unused-imports": "warn",
    "simple-import-sort/imports": "warn",
  },

  settings: {
    "import/parsers": {
      [import("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
}]);
