import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'ryzalfadhillah.com',
  projectId: 'mxkcjxob',
  dataset: 'production',
  plugins: [structureTool()], // Mengaktifkan alat navigasi konten bawaan Sanity
  schema: {
    types: schemaTypes, // Mendaftarkan 4 skema yang sudah kita buat kemarin
  },
});