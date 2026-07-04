import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize bundle size for better performance (SEO ranking factor)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Enable source maps for debugging (can be disabled in production)
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Optimize CSS
    cssCodeSplit: true,
  },
  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
  },
  // Ensure proper gzip compression
  define: {
    __DEV__: process.env.NODE_ENV === 'development',
  },
})
