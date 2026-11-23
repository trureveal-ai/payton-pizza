import { defineConfig } from 'vite';

// base './' so the built page runs from /payton-pizza/spike-3d/.
export default defineConfig({
  base: './',
  build: { outDir: 'dist', emptyOutDir: true, chunkSizeWarningLimit: 900 }
});
