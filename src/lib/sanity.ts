// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'mxkcjxob',      // Project ID unik cloud Sanity milikmu
  dataset: 'production',      // Dataset target utama kamu
  useCdn: true,               // Mengaktifkan Edge CDN agar pemuatan data super cepat
  apiVersion: '2026-07-09',   // Format penanggalan versi API saat ini
});