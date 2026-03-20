/**
 * File: vitest.config.ts
 *
 * Responsibility:
 * Central test configuration.
 *
 * Architectural Alignment:
 * - Test isolation
 * - Tool separation
 */

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({

  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",

    setupFiles: "./tests/setup.ts",

    include: [
      "./tests/**/*.test.ts",
      "./tests/**/*.test.tsx"
    ],

    exclude: [
      "src/e2e/**",
      "node_modules",
      "dist"
    ]
  }
})
