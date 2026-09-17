import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  // Configuración base para archivos de la aplicación
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },

  // Soporte para archivos CommonJS antiguos
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },

  // CONFIGURACIÓN DE JEST: Aplica a tus archivos de pruebas
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs}"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      // Activa las variables globales de Jest (describe, test, expect, etc.)
      globals: {
        ...globals.jest,
      },
    },
    // Aplica las reglas recomendadas oficiales del plugin de Jest
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
    },
  }
]);
