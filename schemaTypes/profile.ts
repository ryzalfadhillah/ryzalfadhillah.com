import { defineType, defineField } from 'sanity';

export const profile = defineType({
  name: 'profile',
  title: 'Profil Umum',
  type: 'document',
  fields: [
    defineField({ name: 'bio', title: 'Bio / Tagline', type: 'text' }), // [cite: 189]
    defineField({ name: 'cvFile', title: 'File CV (PDF)', type: 'file' }), // [cite: 190]
    defineField({
      name: 'socialLinks',
      title: 'Tautan Media Sosial',
      type: 'array',
      of: [{ type: 'url' }], // [cite: 191]
    }),
  ],
});