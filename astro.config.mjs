// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; 

export default defineConfig({
  site: 'https://ryzalfadhillah.tech', 
    integrations: [
    react(), 
    sitemap()
  ], 
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['sanity', 'styled-components']
    },
    ssr: {
      external: ['@sanity/client', 'sanity']
    }
  }
});