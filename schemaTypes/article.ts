import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Artikel Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul Artikel', type: 'string' }), // [cite: 192]
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'publishDate', title: 'Tanggal Rilis', type: 'date' }), // [cite: 192]
    defineField({ name: 'content', title: 'Isi Artikel', type: 'array', of: [{ type: 'block' }] }), // [cite: 193]
    defineField({ name: 'tags', title: 'Kategori / Tags', type: 'array', of: [{ type: 'string' }] }), // [cite: 193]
  ],
});