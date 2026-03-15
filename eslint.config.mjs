// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  // Global ignores (replacement for .eslintignore)
  globalIgnores([
    ".vscode",
    "build",
    "coverage",
    "dist",
    "node_modules",
    "out",
  ]),

  // Configs
  tseslint.configs.recommended,

  // Options
  {
    // include patterns
    files: ["**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"],
    // options
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
      sourceType: "module",
    },
  },
);
