import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 4013,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
});
