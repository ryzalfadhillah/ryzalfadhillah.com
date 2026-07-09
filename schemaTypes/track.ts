import { defineType, defineField } from 'sanity';

export const track = defineType({
  name: 'track',
  title: 'Daftar Musik',
  type: 'document',
  fields: [
    defineField({ name: 'trackTitle', title: 'Judul Lagu', type: 'string' }), // [cite: 194]
    defineField({ name: 'artist', title: 'Nama Musisi / Kreator', type: 'string' }), // [cite: 195]
    defineField({ name: 'audioFile', title: 'Berkas Audio (.mp3/.wav)', type: 'file', options: { accept: 'audio/*' } }), // [cite: 196]
  ],
});