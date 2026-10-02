import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: './',  // Required for Capacitor Android/iOS (file:// protocol)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'words-data': [
            './src/data/categories/animals',
            './src/data/categories/fruits',
            './src/data/categories/vegetables',
            './src/data/categories/food',
            './src/data/categories/geography',
            './src/data/categories/vehicles',
            './src/data/categories/nature',
            './src/data/categories/sports',
            './src/data/categories/occupations',
            './src/data/categories/body',
            './src/data/categories/household',
          ],
        },
      },
    },
  },
})

