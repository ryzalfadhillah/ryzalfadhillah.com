import { defineType, defineField } from 'sanity';

export const track = defineType({
  name: 'track',
  title: 'Daftar Musik',
  type: 'document',
  fields: [
    defineField({ name: 'trackTitle', title: 'Judul Lagu', type: 'string' }),
    defineField({ name: 'artist', title: 'Nama Musisi / Kreator', type: 'string' }),
    defineField({ name: 'youtubeUrl', title: 'Link YouTube / YouTube Musik', type: 'string' }), 
  ],
});