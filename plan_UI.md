# Persona 3 Reload (P3R) UI/UX Design System & Implementation Plan
**Target Project**: Landing Page Portofolio Pribadi (Tugas Individu Mahasiswa Informatika)  
**File Referensi Video**: 
1. `YTDown.com_YouTube_Media_7v9VVHneO5U_The-Style-of-Persona-P3R-s-UI-design_003_720p.mp4` (Analisis Style & Rule of Thirds)
2. `YTDown.com_YouTube_Media_fXgKcM20M08_Persona-3-Reload-Menus_004_720p.mp4` (Showcase Camp Menu, Quest, Status, & Velvet Room)

---

## 1. Analisis Menyeluruh Estetika Persona 3 Reload

P3R memiliki identitas UI paling ikonik di industri game modern dengan menggabungkan tema **"Submersion" (Tenggelam di Lautan Biru)**, **High-Contrast Pop Anime**, dan **Asymmetric Kinetic Typography**.

### Karakteristik Visual Inti
1. **Atmosfer Deep Oceanic**:
   - Nuansa warna dominan biru samudra malam (`#001030` s.d. `#0055FF`), aksen neon cyan/aqua (`#00E5FF`), kontras tajam hitam-putih, serta aksen bahaya/fokus warna merah-magenta (`#FF1744` / `#FF0055`) dan kuning (`#FFE500`).
   - Efek visual caustics (pantulan cahaya bawah air), partikel pecahan kaca/gelembung terapung, dan siluet karakter.
2. **Geometri Asimetris & Diagonal Slices**:
   - Jarang menggunakan kotak 90 derajat simetris biasa.
   - Semua elemen memakai sudut miring (`skewX(-8deg)` s.d. `skewX(-15deg)`), `rotate(-2deg)` hingga `rotate(-5deg)`, dan pemotongan poligon (`clip-path`).
   - Kontainer berbentuk pita trapesium (angled ribbons) dan kartu terpotong diagonal.
3. **Typography & Watermark Brutalisme**:
   - Font sans-serif extra bold / heavy italic yang sengaja miring dan rapat.
   - Teks watermark raksasa di latar belakang yang sengaja terpotong pinggir layar (misal: tulisan "ITEM", "QUEST", "SYSTEM", "INFO").
   - Label nomor/indeks bergaya miring dengan slash (`/01`, `/02`).
4. **Kinetic Transitions**:
   - Transisi menu snappy dengan spring bounce (cepat masuk, sedikit overshoot lalu lock).
   - Diagonal stripe wipe (garis hitam, putih, dan biru memotong layar saat pindah section).
   - Efek hover invert kontras (teks cyan di latar gelap berubah jadi teks hitam di atas pita putih/merah menyala).

---

## 2. Design Tokens & Color Palette

```css
:root {
  /* Primary Oceanic Palette */
  --p3r-bg-dark: #050a18;       /* Deep abyss navy */
  --p3r-bg-surface: #0b1736;    /* Card & container dark blue */
  --p3r-blue-primary: #0048d0;  /* Main Persona Royal Blue */
  --p3r-blue-electric: #00d2ff; /* Neon Aqua / Cyan highlight */
  --p3r-blue-glow: #00f0ff88;   /* Ambient glow */

  /* Contrast & Accents */
  --p3r-white: #ffffff;         /* Pure crisp white */
  --p3r-black: #08090d;         /* True obsidian black */
  --p3r-red-accent: #ff184c;    /* Red/Pink active banner (SEES armband) */
  --p3r-yellow-stat: #ffcc00;   /* EXP / SP / Warning gold */

  /* Angles & Skew */
  --p3r-skew: -10deg;
  --p3r-skew-card: -6deg;
}
```

---

## 3. Mapping Kebutuhan Tugas ke Layout P3R

| Section Tugas | Konsep P3R UI | Implementasi Visual |
|---|---|---|
| **1. Header / Hero** | **Title Screen & Protagonist Silhouette** | Siluet foto profil bergaya high-contrast anime/vector dengan efek air. Nama besar italic miring, badge status/tanggal ala pojok kanan atas P3R (`5/13 Wed - Informatics S5`). |
| **2. Tentang Saya** | **Dialogue Box / Social Link Card** | Panel asimetris ala kotak bicara Velvet Room/Aohige Pharmacy. Avatar pembicara di kiri, teks narasi latar belakang pendidikan & minat di speech container bersudut trapesium. |
| **3. Skills & Keahlian** | **Persona Stats & Affinity Icons** | Grid keahlian bergaya stat bar (St, Ma, En, Ag, Lu) dengan pill warna cyan/hitam, lengkap dengan badge icon tools (React, Tailwind, Git, dll). |
| **4. Portofolio Proyek** | **Quest Board / Request List** | Daftar proyek bergaya quest menu: kolom nomor miring (`/01`, `/02`), nama proyek, deadline/tahun, dan status badge (`[In Progress]` hijau/cyan, `[Done]` navy). Hover menampilkan snapshot proyek. |
| **5. WhatsApp CTA** | **Command Prompt: "TALK / SEND MESSAGE"** | Tombol aksi berbentuk pita miring warna merah khas P3R (`#ff184c`) dengan teks kapital tebal "HUBUNGI SAYA VIA WHATSAPP". Form chat cepat langsung terformat ke link resmi WA `https://wa.me/...`. |

---

## 4. Spesifikasi Komponen & Snippet UI P3R

### A. Skewed Ribbon Button (Active Menu Style)
```html
<button class="relative px-8 py-3 bg-[#ff184c] text-white font-black italic tracking-wider uppercase transform -skew-x-12 border-2 border-white shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-black hover:border-[#ff184c] transition-all duration-150">
  <span class="inline-block transform skew-x-12">
    Hubungi Saya via WhatsApp
  </span>
</button>
```

### B. Dialogue / About Box (Velvet Room Asymmetric Polygon)
```css
.p3r-dialog-box {
  background: rgba(11, 23, 54, 0.92);
  border: 2px solid #00d2ff;
  clip-path: polygon(0 0, 96% 0, 100% 25%, 98% 100%, 3% 97%, 0 75%);
  box-shadow: 0 0 25px rgba(0, 210, 255, 0.25);
  backdrop-filter: blur(12px);
}
```

### C. Quest / Portfolio Row (List Format)
- Background default: Gelap transparan dengan border tipis cyan.
- Hover/Active state: Pita putih solid dengan strip aksen merah di bawahnya, teks berubah menjadi hitam pekat.

---

## 5. Rekomendasi Framework & Tools (Ringkas, Cepat & Gampang)

Agar kode tidak kepanjangan dan development selesai cepat tanpa over-engineering:

### 1. Framework Utama: **React + Vite**
- **Alasan**: Sangat cepat dibuat, file komponen terorganisir rapi, dan mudah dideploy gratis ke Vercel atau GitHub Pages.

### 2. Styling: **Tailwind CSS v3**
- **Alasan**: Semua efek Persona (skew, border kontras, warna hex custom, backdrop-filter, clip-path) bisa langsung ditulis inline di class tanpa bolak-balik file CSS terpisah.

### 3. Animasi: **Framer Motion**
- **Alasan**: Cukup pakai prop `initial`, `animate`, `whileHover` dengan easing `type: "spring", stiffness: 300, damping: 20` untuk mendapatkan rasa snappy khas menu game Atlus.

### 4. Icon: **Lucide React**
- **Alasan**: Icon ringan, minimalis, dan mudah di-style miring mengikuti tema.

### 5. Utility Tambahan:
- `canvas-confetti` (efek serpihan kaca/air saat tombol WA diklik).
- Background ambient: CSS radial-gradient animasi air bergerak sederhana (tanpa Three.js agar ringan dan tidak lag).

---

## 6. Action Plan Eksekusi
1. Bersihkan npm config `allow-scripts` yang sempat error.
2. Setup Vite + React + Tailwind CSS di direktori proyek.
3. Buat struktur 1 file utama modular (`App.jsx` + data JSON portofolio).
4. Aplikasikan layout P3R (Hero -> About -> Skills -> Quests/Projects -> WhatsApp CTA).
5. Testing responsivitas mobile & deploy ke hosting publik (Vercel / GitHub Pages).
