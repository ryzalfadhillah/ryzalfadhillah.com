# Business Requirement Document (BRD) & Technical Blueprint
## Proyek: Website Portofolio Interaktif & Dinamis

* **Versi Dokumen:** 1.0
* **Tahun Rilis:** 2026
* **Status:** Locked & Approved by User

---

## 1. Pendahuluan & Tujuan Proyek
[cite_start]Tujuan dari proyek ini adalah membangun sebuah website portofolio modern yang interaktif, bercerita (*storytelling*), dan dinamis[cite: 191]. [cite_start]Website ini tidak hanya berfungsi sebagai *landing page* statis [cite: 192][cite_start], melainkan sebuah platform berbasis konten di mana pemilik dapat mengelola data secara mandiri dan fleksibel[cite: 192]. [cite_start]Target utama dari website ini adalah memberikan impresi mendalam bagi *recruiter* dan klien melalui performa yang sangat cepat serta animasi yang ciamik tanpa mengorbankan kenyamanan pengguna[cite: 193].

---

## 2. Spesifikasi Teknis (Tech Stack)
[cite_start]Arsitektur yang digunakan adalah **Headless CMS + Frontend Modern** dengan pendekatan *Zero JavaScript by Default* untuk memastikan performa maksimal dan biaya operasional Rp0 (100% *Free Tier*)[cite: 194].

| Komponen | Teknologi | Peran & Alasan Pemilihan |
| :--- | :--- | :--- |
| **Frontend Framework** | **Astro** | [cite_start]Menghasilkan HTML statis super cepat, ringan, fokus pada konten, dan hemat JavaScript[cite: 196]. |
| **Headless CMS** | **Sanity.io** | [cite_start]Mengelola data proyek, artikel, musik, dan konten profil secara visual via *dashboard* gratis[cite: 197]. |
| **Styling Framework** | **Tailwind CSS** | [cite_start]Mempercepat pembuatan *layout* responsif, rapi, dan adaptif untuk dua mode warna[cite: 198]. |
| **Animasi Utama** | **GSAP (GreenSock)** | [cite_start]Menangani animasi kompleks berbasis guliran layar (*scroll-triggered*) yang halus[cite: 199]. |
| **Interaksi Mikro** | **Motion One** | [cite_start]*Library* Vanilla JS super kecil untuk menangani efek *hover* atau klik komponen interaktif[cite: 200]. |
| **Deployment & Hosting**| **Vercel / Netlify** | [cite_start]*Hosting* statis gratis dengan kestabilan performa tinggi dan CDN global[cite: 202]. |

---

## 3. Arsitektur Halaman (Sitemap)
[cite_start]Website ini menggunakan sistem **Hybrid** (kombinasi *Single Page Layout* di halaman depan dan halaman dinamis untuk konten mendalam) [cite: 203] dengan struktur sebagai berikut:

### 3.1. Halaman Utama (Home - `/`)
[cite_start]Menjadi pusat informasi utama (*one-stop station*) yang merangkum persona profesional[cite: 204]:
* [cite_start]**Hero Section:** Deskripsi diri singkat, foto/avatar, tombol unduh file CV, dan ringkasan keahlian[cite: 204].
* [cite_start]**Pengalaman (Experience Timeline):** Rekam jejak karier atau organisasi kronologis dengan efek *scroll reveal*[cite: 205].
* [cite_start]**Project Showcase:** Etalase proyek-proyek pilihan yang disusun dalam bentuk **Bento Grid** interaktif[cite: 206].
* [cite_start]**Kontak (Contact):** Tautan media sosial, email, atau formulir pesan singkat di akhir halaman[cite: 207].

### 3.2. Halaman Artikel (Blog - `/artikel`)
* [cite_start]**Daftar Artikel:** Menampilkan *feed* tulisan, tutorial, atau catatan digital yang dipublikasikan[cite: 208].
* [cite_start]**Detail Artikel (`/artikel/[slug]`):** Halaman dinamis berbasis teks yang dioptimalkan untuk kenyamanan membaca dalam waktu lama[cite: 209].

### 3.3. Halaman Detail Proyek (`/proyek/[slug]`)
* [cite_start]Halaman khusus untuk membedah studi kasus proyek secara mendalam (deskripsi, tantangan, solusi, galeri foto, teknologi, dan *link* demo) agar halaman utama tidak terlalu penuh teks[cite: 210].

---

## 4. Kebutuhan Data CMS (Sanity Schema Requirements)
[cite_start]Manajemen konten dibagi menjadi 4 skema database utama di Sanity Studio[cite: 211]:

### A. Skema Profil (Profile Schema)
* [cite_start]`Bio/Tagline` (Text): Kalimat pengantar di Hero Section[cite: 211].
* [cite_start]`CV File` (File): Unggahan file resume PDF yang dapat diunduh[cite: 212].
* [cite_start]`Social Links` (Array): Kumpulan tautan media sosial (LinkedIn, GitHub, Email)[cite: 213].

### B. Skema Proyek (Project Schema)
* [cite_start]`Title` (String): Nama proyek[cite: 214].
* [cite_start]`Slug` (Slug): URL unik halaman detail proyek[cite: 215].
* [cite_start]`Thumbnail` (Image): Gambar utama untuk tampilan kartu di Bento Grid[cite: 215].
* [cite_start]`Gallery` (Array of Images): Foto pendukung dokumentasi proyek[cite: 216].
* [cite_start]`Description` (Rich Text / Markdown): Detail narasi proyek (tantangan & solusi)[cite: 217].
* [cite_start]`Tags/Technologies` (Array of Strings): Daftar *tech stack* yang digunakan[cite: 218].
* [cite_start]`Live Link` & `Git Link` (URL): Tautan menuju demo *live* website dan repositori kode[cite: 219].
* [cite_start]`Featured` (Boolean): Penanda jika proyek ingin ditampilkan di halaman utama[cite: 220].

### C. Skema Artikel (Article Schema)
* [cite_start]`Title` (String): Judul artikel blog[cite: 221].
* `Publish Date` (Date): Tanggal rilis artikel.
* [cite_start]`Content` (Rich Text): Isi lengkap tulisan/tutorial[cite: 222].
* `Category/Tags` (Array of Strings): Pengelompokan tema artikel.

### D. Skema Musik (Music/Track Schema)
* [cite_start]`Track Title` (String): Judul lagu untuk fitur pemutar musik[cite: 223].
* [cite_start]`Artist/Creator` (String): Nama pembuat musik untuk kebutuhan kredit hak cipta[cite: 224].
* [cite_start]`Audio File` (File): Unggahan berkas `.mp3` atau `.wav` langsung ke cloud Sanity[cite: 225].

---

## 5. Panduan Visual & Arah Desain (Design Direction)

### 5.1. Sistem Warna & Tema (Adaptif via Tailwind CSS)
[cite_start]Website wajib menyediakan fitur **Dark/Light Mode Toggle** dengan ketentuan palet warna yang nyaman di mata[cite: 226]:

#### Pilihan A: Cyber Tech / Sleek Modern (Rekomendasi Developer)
* **Dark Mode:** Background `zinc-950` | Teks `zinc-100` | [cite_start]Aksen `emerald-400` / `violet-500`[cite: 226, 227].
* **Light Mode:** Background `zinc-50` | Teks `zinc-900` | [cite_start]Aksen `emerald-600` / `violet-600`[cite: 228].
* [cite_start]**Karakter:** Sudut kotak tegas/sedikit membulat (`rounded-xl`), garis batas tipis (`border-zinc-800`), efek kartu Bento Grid menyala (*glowing border*)[cite: 229].

#### Pilihan B: Warm Creative / Editorial (Rekomendasi Kreator)
* **Dark Mode:** Background `stone-900` | Teks `stone-100` | [cite_start]Aksen `amber-500` / `terracotta`[cite: 230, 231].
* **Light Mode:** Background `stone-100` / `neutral-50` | Teks `stone-900` | [cite_start]Aksen `amber-600` / `orange-600`[cite: 232].
* [cite_start]**Karakter:** Sudut elemen lebih membulat lembut, kontras tipografi tinggi, dan transisi warna alami[cite: 233].

### 5.2. Tipografi (Typography)
* [cite_start]**Heading (Judul):** Menggunakan *font* berkarakter kuat seperti *Plus Jakarta Sans*, *Inter*, or *Clash Display*[cite: 234].
* [cite_start]**Body Text (Isi):** Menggunakan keluarga *sans-serif* standar yang bersih seperti *Inter* atau *Geist Sans* demi kenyamanan membaca artikel dalam waktu lama[cite: 235].

### 5.3. Tata Letak Grid (Bento Grid Layout)
[cite_start]Komponen etalase proyek di halaman utama akan menggunakan variasi ukuran kotak yang dinamis[cite: 236]:
* [cite_start]**Kotak Besar:** Untuk menampilkan proyek utama lengkap dengan gambar *thumbnail*[cite: 236].
* [cite_start]**Kotak Sedang:** Untuk menampilkan lini masa pengalaman kerja secara ringkas[cite: 237].
* [cite_start]**Kotak Kecil:** Untuk menampilkan barisan ikon *tech stack* keahlian[cite: 238].

---

## 6. Spesifikasi Fitur Musik & Interaksi Utama

### 6.1. Pemutar Musik (Audio Player)
* [cite_start]**Aturan Autoplay:** Musik **dilarang keras** berputar secara otomatis saat halaman pertama kali dimuat demi mematuhi regulasi browser modern dan kenyamanan pengguna[cite: 239].
* [cite_start]**Sisi Frontend (Astro Island):** Komponen pemutar musik diisolasi sebagai komponen interaktif (*Astro Island*), sehingga hanya memuat JavaScript khusus untuk widget tersebut tanpa membebani bagian halaman lain yang statis[cite: 240].
* [cite_start]**Desain UI Widget:** Berupa komponen melayang (*floating widget*) minimalis di pojok layar dengan gaya *Glassmorphism* (efek kaca transparan) berbasis Tailwind CSS[cite: 241].
* [cite_start]**Elemen Kendali:** Menyediakan tombol pilihan lagu (*dropdown/toggle*), tombol *Play/Pause*, pengatur volume, serta indikator visual berupa animasi gelombang suara (*soundwave*) mikro yang bergerak naik-turun saat musik aktif[cite: 242].
* [cite_start]**Lisensi Konten:** Musik yang diunggah ke CMS wajib berstatus *Copyright-Free* atau *Creative Commons* (contoh: Lofi, Synthwave, Ambient)[cite: 243].

### 6.2. Aturan Animasi Global
* [cite_start]**Bento Tilt Effect:** Menggunakan Motion One atau Vanilla JS agar kartu portofolio di Bento Grid bergerak miring secara 3D mengikuti arah pergerakan kursor pengguna (*3D hover effect*)[cite: 244].
* [cite_start]**Scroll Reveal:** Konten teks dan gambar muncul perlahan dari bawah (*fade-in slide-up*) menggunakan GSAP ScrollTrigger saat pengguna menggulir halaman ke bawah[cite: 245].
* [cite_start]**Page Transitions:** Transisi perpindahan antar-halaman dibuat mengalir halus (*seamless*) memanfaatkan fitur bawaan `Astro View Transitions`[cite: 246].

---

## 7. Alur Kerja Data & Pemeliharaan (Workflow)
1. [cite_start]Pengelola website mengisi atau mengubah data proyek, artikel, profil, atau daftar musik melalui *dashboard visual* web Sanity Studio[cite: 247].
2. [cite_start]Setiap kali ada perubahan data publik di Sanity CMS, sistem akan memicu *Webhook* otomatis[cite: 248].
3. [cite_start]*Webhook* memerintahkan server *hosting* (Vercel/Netlify) untuk melakukan *build* ulang proyek Astro[cite: 249].
4. [cite_start]Astro melakukan *fetching* data terbaru melalui API Sanity [cite: 250][cite_start], mengompilasinya menjadi file HTML statis yang bersih [cite: 250][cite_start], lalu menyajikannya secara instan kepada pengunjung website[cite: 250].

---
*Generated by Porto - 2026*