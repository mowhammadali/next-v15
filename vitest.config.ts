import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Needed for DOM testing
    setupFiles: './src/tests/vitest.setup.ts', // Optional: for setup like extending matchers
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
