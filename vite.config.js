import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true,  
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',           // Fastest minifier
    target: 'es2020',
    cssMinify: true,
    reportCompressedSize: false, // Skip gzip size calc = faster build
    rollupOptions: {
      output: {
        // Split vendor chunks so browser caches them separately
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
  publicDir: 'public',
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});
