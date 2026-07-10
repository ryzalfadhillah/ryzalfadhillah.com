// schemaTypes/profile.ts
import { defineType, defineField } from 'sanity';

export const profile = defineType({
  name: 'profile',
  title: 'Profil Umum',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama Lengkap', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio / Tagline Utama', type: 'text' }),
    defineField({ 
      name: 'githubUsername', 
      title: 'Username GitHub', 
      type: 'string',
      description: 'Masukkan username GitHub kamu tanpa tanda @ untuk grafik kontribusi.'
    }),
    defineField({ name: 'cvFile', title: 'File CV (PDF)', type: 'file' }),
    
    defineField({
      name: 'skills',
      title: 'Persenjataan Teknologi (Skills)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Daftar keahlian teknologi untuk teks berjalan (Infinite Marquee).'
    }),

    defineField({
      name: 'focusCompetency',
      title: 'Fokus Kompetensi',
      type: 'text',
      description: 'Tuliskan deskripsi fokus kompetensi/domain rekayasa Anda.'
    }),
    
    // 🌐 ARRAY BAHASA
    defineField({
      name: 'languages',
      title: 'Bahasa Komunikasi',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'language', title: 'Bahasa', type: 'string' },
          { name: 'level', title: 'Tingkat Kemahiran (e.g., Native, Professional)', type: 'string' }
        ]
      }]
    }),

    // 📜 🌟 PERUBAHAN DISINI: Sertifikasi diubah judulnya menjadi Sertifikat dan Training
    defineField({
      name: 'certifications',
      title: 'Sertifikat dan Training',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Nama Sertifikat / Pelatihan', type: 'string' },
          { name: 'issuer', title: 'Penerbit / Penyelenggara (e.g., AWS, Meta, Dicoding)', type: 'string' },
          { name: 'year', title: 'Tahun Perolehan', type: 'string' }
        ]
      }]
    }),

    // 🎓 🚀 FIELD BARU: ARRAY RIWAYAT PENDIDIKAN
    defineField({
      name: 'education',
      title: 'Riwayat Pendidikan',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'period', title: 'Periode Waktu (e.g., 2020 - 2024)', type: 'string' },
          { name: 'degree', title: 'Jurusan / Strata Tingkat', type: 'string' },
          { name: 'institution', title: 'Nama Sekolah / Universitas', type: 'string' },
          { name: 'description', title: 'Keterangan Tambahan (Opsional)', type: 'text' }
        ]
      }]
    }),

    // 💼 ARRAY PENGALAMAN / TIMELINE
    defineField({
      name: 'experiences',
      title: 'Rekam Jejak & Pengalaman',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'period', title: 'Periode Waktu (e.g., 2024 - Sekarang)', type: 'string' },
          { name: 'role', title: 'Posisi / Jabatan', type: 'string' },
          { name: 'company', title: 'Nama Perusahaan / Organisasi', type: 'string' },
          { name: 'description', title: 'Deskripsi Singkat Pekerjaan', type: 'text' }
        ]
      }]
    }),

    // 🔗 TAUTAN SOSMED & KELOLA AREA KONTAK
    defineField({
      name: 'socialLinks',
      title: 'Tautan Media Sosial',
      type: 'array',
      of: [{ type: 'url' }]
    }),
    defineField({ name: 'contactEmail', title: 'Email Kontak Utama', type: 'string' }),
    defineField({ name: 'contactHeading', title: 'Judul Kotak Kontak', type: 'string' }),
    defineField({ name: 'contactDescription', title: 'Deskripsi Kotak Kontak', type: 'text' }),
  ]
});