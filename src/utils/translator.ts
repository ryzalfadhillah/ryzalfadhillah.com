// src/utils/translator.ts

/**
 * Mesin Penerjemah Otomatis Dinamis (i18n Client Engine - Edisi Cerdas Multibahasa)
 * Mampu mendeteksi bahasa asal secara otomatis (sl=auto) untuk menerjemahkan data Sanity
 * yang ditulis dalam Bahasa Inggris maupun Bahasa Indonesia secara dua arah.
 */
export async function runDynamicTranslationEngine() {
  const targetLang = localStorage.getItem('site-lang') || 'id';
  const elements = document.querySelectorAll('[data-translate]');

  for (const el of elements) {
    if (el.classList.contains('notranslate')) continue;

    const htmlEl = el as HTMLElement;
    
    // 1. Amankan teks visual asli pertama kali saat halaman dimuat
    if (!htmlEl.getAttribute('data-orig-text')) {
      // Bersihkan karakter enter (\n) dan spasi ganda bawaan teks editor Sanity
      const sanitizedText = htmlEl.innerText.replace(/\s+/g, ' ').trim() || '';
      htmlEl.setAttribute('data-orig-text', sanitizedText);
    }

    const originalText = htmlEl.getAttribute('data-orig-text') || '';
    if (!originalText) continue;

    // 🌟 PERBAIKAN EMAS 1: Sistem Pelacak Status Tema untuk Menghindari Tabrakan Beranda & Header
    const currentLangState = htmlEl.getAttribute('data-current-lang');
    if (currentLangState === targetLang || currentLangState === `fetching-${targetLang}`) {
      continue; // Skip jika elemen ini sudah beres diterjemahkan atau sedang dalam antrean
    }

    // Kunci status elemen agar tidak diduplikasi oleh skrip komponen lain
    htmlEl.setAttribute('data-current-lang', `fetching-${targetLang}`);

    // 2. Cek Cache Memory di Session Storage agar Hemat Kuota API & Performa Super Cepat
    const cacheKey = `trans-cache-${originalText}-${targetLang}`;
    const cachedText = sessionStorage.getItem(cacheKey);

    if (cachedText) {
      htmlEl.innerText = cachedText;
      htmlEl.setAttribute('data-current-lang', targetLang);
    } else {
      try {
        // 🌟 PERBAIKAN EMAS 2: Menggunakan parameter 'sl=auto' (Bukan sl=id)
        // Google API akan otomatis mendeteksi jika teks bawaan Sanity Anda adalah Bahasa Inggris,
        // lalu menerjemahkannya secara akurat ke Bahasa Indonesia saat targetLang === 'id'.
        const response = await fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`
        );
        
        if (!response.ok) throw new Error("Koneksi API Google Meredup");
        
        const result = await response.json();
        
        if (result && result[0]) {
          // Gabungkan pecahan array terjemahan (berguna jika paragraf bio sangat panjang)
          const translatedText = result[0].map((item: any) => item[0]).join('');
          
          htmlEl.innerText = translatedText;
          sessionStorage.setItem(cacheKey, translatedText);
          htmlEl.setAttribute('data-current-lang', targetLang);
        }
      } catch (error) {
        console.error("// Kendala modul translasi pada elemen siber:", error);
        // Lepas kunci pelacak jika terjadi eror jaringan agar bisa diunduh ulang nanti
        htmlEl.removeAttribute('data-current-lang');
      }
    }
  }
}