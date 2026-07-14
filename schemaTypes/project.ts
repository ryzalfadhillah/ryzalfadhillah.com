// schemaTypes/project.ts
import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Proyek Portofolio',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Nama Proyek', 
      type: 'string' 
    }),
    defineField({ 
      name: 'slug', 
      title: 'Slug URL', 
      type: 'slug', 
      options: { 
        source: 'title',
        maxLength: 96,
      } 
    }),
    defineField({ 
      name: 'thumbnail', 
      title: 'Gambar Sampul (Thumbnail)', 
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ 
      name: 'description', 
      title: 'Deskripsi Singkat (Ikhtisar)', 
      type: 'text',
      description: 'Ringkasan 2-3 kalimat yang tampil pada kartu galeri utama.'
    }),
    defineField({ 
      name: 'content', 
      title: 'Detail Studi Kasus (Rich Text)', 
      type: 'array', 
      of: [{ type: 'block' }],
      description: 'Penjelasan panjang mengenai arsitektur kode, tantangan teknis, dan solusi.'
    })
    defineField({ 
      name: 'technologies', 
      title: 'Teknologi / Stack yang Digunakan', 
      type: 'array', 
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Contoh item: Astro, React 19, Tailwind v4, GSAP, TypeScript.'
    }),
    defineField({ 
      name: 'liveLink', 
      title: 'Tautan Aplikasi Live (URL)', 
      type: 'url' 
    }),
    defineField({ 
      name: 'gitLink', 
      title: 'Tautan Repositori GitHub (URL)', 
      type: 'url' 
    }),
    defineField({ 
      name: 'featured', 
      title: 'Tampilkan di Halaman Utama (Featured)', 
      type: 'boolean',
      initialValue: false,
      description: 'Aktifkan jika proyek ini ingin dipajang di Bento Grid halaman depan.'
    }),
  ],
});