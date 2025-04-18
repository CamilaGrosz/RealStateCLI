import globals from "globals"  
import pluginJs from "@eslint/js"  
import tseslint from "typescript-eslint"  


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: "typescript-eslint/parser",
    },
    rules: {
      "no-console": "off"
    }
  }
]  