import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Makes `expect` available globally
    environment: 'jsdom', // Use jsdom for DOM testing
    setupFiles: './src/setupTests.ts', // Path to setupTests file for jest-dom
  },
});