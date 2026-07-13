// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'; // 🌟 Import engine resmi Tailwind v4 untuk Vite

export default defineConfig({
  integrations: [react()], // 🌟 Hapus tailwind() lama dari sini
  vite: {
    plugins: [tailwindcss()], // 🌟 Suntikkan Tailwind v4 langsung ke compiler Vite
    optimizeDeps: {
      exclude: ['sanity', 'styled-components']
    },
    ssr: {
      external: ['@sanity/client', 'sanity']
    }
  }
});