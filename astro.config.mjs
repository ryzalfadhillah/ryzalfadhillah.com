// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ['sanity', 'styled-components']
    },
    ssr: {
      external: ['@sanity/client', 'sanity']
    }
  }
});