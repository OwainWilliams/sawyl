import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Define the root as the 'frontend' directory
  root: path.resolve(__dirname, './frontend'),

  build: {
    rollupOptions: {
      input: {
        scripts: path.resolve(__dirname, './ts/main.ts'), // Entry point for TypeScript
        styles: path.resolve(__dirname, './sass/main.scss') // Entry point for SCSS
      },
      output: {
        entryFileNames: 'js/main.js', // Output file name for TypeScript
        chunkFileNames: 'js/main.js', // Naming for dynamic chunks
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'styles.css') {
            return 'css/main.css'; // Ensure SCSS outputs to 'css/main.css'
          }
          return 'js/main.js'; // Default naming for other assets
        },
        dir: path.resolve(__dirname, '../wwwroot') // Output directory
      },
    },
    outDir: path.resolve(__dirname, '../wwwroot'), // Ensure the output directory is correct
    emptyOutDir: false,
    sourcemap: true, // Enable source maps for easier debugging
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname), // Set alias for clean imports
    },
  },
});
