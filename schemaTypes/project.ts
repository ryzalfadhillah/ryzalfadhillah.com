import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Proyek Portofolio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nama Proyek', type: 'string' }), // [cite: 90]
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'title' } }), // [cite: 91]
    defineField({ name: 'thumbnail', title: 'Gambar Utama (Bento)', type: 'image', options: { hotspot: true } }), // [cite: 92]
    defineField({ name: 'gallery', title: 'Galeri Foto Pendukung', type: 'array', of: [{ type: 'image' }] }), // [cite: 93]
    defineField({ name: 'description', title: 'Deskripsi Detail (Tantangan & Solusi)', type: 'array', of: [{ type: 'block' }] }), // [cite: 94]
    defineField({ name: 'technologies', title: 'Tech Stack (Tags)', type: 'array', of: [{ type: 'string' }] }), // [cite: 95]
    defineField({ name: 'liveLink', title: 'Tautan Live Demo', type: 'url' }), // [cite: 96]
    defineField({ name: 'gitLink', title: 'Tautan GitHub', type: 'url' }), // [cite: 96]
    defineField({ name: 'featured', title: 'Tampilkan di Home (Bento)?', type: 'boolean' }), // [cite: 97]
  ],
});