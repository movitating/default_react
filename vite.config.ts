import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@app', replacement: '/src/app' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@features', replacement: '/src/features' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@widgets', replacement: '/src/widgets' },
    ],
  },
});
