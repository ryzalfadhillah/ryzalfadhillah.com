import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Artikel Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul Artikel', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'publishDate', title: 'Tanggal Rilis', type: 'date' }),
    defineField({ 
      name: 'mainImage', 
      title: 'Gambar Sampul (Cover)', 
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ name: 'content', title: 'Isi Artikel', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'tags', title: 'Kategori / Tags', type: 'array', of: [{ type: 'string' }] }),
  ],
});