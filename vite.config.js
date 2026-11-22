import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const version = readFileSync(new URL('./VERSION', import.meta.url), 'utf8').trim();

// base './' lets the same build run at /payton-pizza/ and /payton-pizza/beta/.
export default defineConfig({
  base: './',
  define: { __APP_VERSION__: JSON.stringify(version) },
  build: { outDir: 'dist', emptyOutDir: true },
  test: { include: ['tests/unit/**/*.test.js'], environment: 'node' }
});
