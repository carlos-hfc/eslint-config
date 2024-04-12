module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        endOfLine: "auto",
        printWidth: 80,
        semi: false,
        singleAttributePerLine: true,
        tabWidth: 2,
      },
    ],
    "no-unused-vars": "off",
    "no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unused-imports/no-unused-imports": "warn",
    "simple-import-sort/imports": "warn",
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
}
