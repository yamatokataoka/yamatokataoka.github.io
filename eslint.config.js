import { defineConfig, globalIgnores } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import pluginNext from "@next/eslint-plugin-next";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

const { flatConfig } = pluginNext;

export default defineConfig([
  globalIgnores([".next/", "node_modules/", "out/", "next-env.d.ts"]),
  {
    name: "browser",
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    name: "typescript-eslint/typed-linting",
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: "typescript-eslint/javascript",
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // contains recommended rules for Next.js
  flatConfig.coreWebVitals,
  prettierConfig,
]);
