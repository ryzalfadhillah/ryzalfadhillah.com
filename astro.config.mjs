import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // Konfigurasi untuk Tailwind v4
  },
  integrations: [
    sanity({
      projectId: 'mxkcjxob', // <--- Ganti dengan Project ID dari Sanity
      dataset: 'production',
      useCdn: true,
      studioUrl: '/admin', // Supaya dashboard CMS bisa diakses di localhost:4321/admin
    }),
  ],
});