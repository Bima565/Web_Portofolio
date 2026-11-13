import myPhoto from '../assets/foto_me.jpg'

export const portfolioData = {
  // 1. Informasi Profil Utama
  profile: {
    fullName: "Bima Prawira Dharma",
    nim: "243307039",
    classGroup: "Kelas 5B",
    title: "Mahasiswa D3 Teknologi Informasi | Web Developer & IoT",
    bio: "Mahasiswa D3 Teknologi Informasi semester 5 dengan fokus pada pengembangan aplikasi web, integrasi sistem IoT industri, dan otomasi. Terbiasa bekerja secara terstruktur, kolaboratif dalam tim, serta menyelesaikan tugas teknis secara tuntas dan bertanggung jawab.",
    avatar: myPhoto,
    academicStatus: "D3 Teknologi Informasi",
    semester: "Semester 5",
  },

  // 2. Tentang Saya & Prinsip Kerja
  about: {
    statement: "Fokus utama saya adalah membangun aplikasi web dan integrasi sistem yang fungsional, andal, dan mudah dirawat. Saya mengutamakan komunikasi yang terbuka dalam tim, pemahaman mendalam terhadap alur data, serta pengujian sistem secara berkala untuk memastikan solusi yang dibangun tepat sasaran.",
    pillars: [
      {
        badge: "KOLABORASI",
        title: "Komunikasi & Kerja Tim",
        desc: "Mengedepankan koordinasi yang transparan, aktif bertukar sudut pandang, dan fokus pada pencapaian target bersama.",
      },
      {
        badge: "ANALISIS",
        title: "Analisis Terstruktur",
        desc: "Menganalisis kebutuhan dan akar masalah secara sistematis sebelum menulis kode atau menentukan konfigurasi sistem.",
      },
      {
        badge: "IMPLEMENTASI",
        title: "Kualitas Hasil Kerja",
        desc: "Menulis kode yang rapi, memperhatikan aspek performa, serta memastikan setiap modul terintegrasi dengan baik.",
      },
      {
        badge: "DISIPLIN",
        title: "Komitmen & Ketelitian",
        desc: "Menjaga ritme kerja secara konsisten, teliti dalam pengujian fungsional, dan bertanggung jawab atas jadwal penyelesaian.",
      },
    ],
    education: [
      {
        institution: "D3 Teknologi Informasi",
        degree: "Mahasiswa Aktif Semester 5",
        period: "2024 - Sekarang (Kelas 5B)",
        detail: "Mempelajari rekayasa perangkat lunak, arsitektur basis data, jaringan komputer, serta manajemen proyek teknologi informasi.",
      },
      {
        institution: "PT. Smart Building Innovasi",
        degree: "Internship: Web EMS Developer",
        period: "Magang Industri",
        detail: "Mengembangkan dashboard monitoring energi berbasis IoT, integrasi data gateway IIoT, dan visualisasi grafik telemetri.",
      },
    ],
    interests: [
      "Pengembangan Web Modern (React & Vite)",
      "Integrasi IIoT & Telemetri Hardware",
      "Otomasi Skrip & Administrasi Linux",
      "Manajemen Basis Data Relasional (MySQL)",
      "Desain Antarmuka Pengguna & Interaktivitas",
    ],
  },

  // 3. Keahlian Teknis & Tools
  skills: [
    {
      name: "React, Vite & Tailwind CSS",
      category: "Frontend",
      level: 90,
      stat: "St",
      desc: "Komponen modular, state management reaktif, visualisasi grafik ECharts, dan tata letak responsif.",
    },
    {
      name: "Industrial IoT & REST API",
      category: "IoT",
      level: 88,
      stat: "En",
      desc: "Integrasi gateway IIoT Ewon Flexy 205, pembacaan data meter listrik, dan pertukaran data API.",
    },
    {
      name: "C# .NET & Input Interface",
      category: "Sistem",
      level: 85,
      stat: "Ma",
      desc: "Pemetaan DirectInput ke XInput API, otomasi input hardware, dan pengelolaan preset konfigurasi JSON.",
    },
    {
      name: "MySQL & Database Architecture",
      category: "Database",
      level: 86,
      stat: "Ag",
      desc: "Pemodelan skema data relasional, optimasi query telemetri, dan pengelolaan pencatatan log berkala.",
    },
    {
      name: "Linux & PowerShell Scripting",
      category: "Sistem",
      level: 87,
      stat: "Lu",
      desc: "Administrasi lingkungan Linux, pembuatan skrip otomasi tugas jaringan Windows, dan CLI debugging.",
    },
  ],

  // 4. Portofolio & Proyek Riil
  projects: [
    {
      id: "01",
      title: "Web EMS Ewon (Industrial Energy Management System)",
      category: "Industrial IoT & Web Dashboard",
      status: "Selesai",
      description: "Sistem pemantauan daya listrik real-time setiap 15 detik berbasis gateway IIoT Ewon Flexy 205 (Power Meter PM139). Menyimpan log telemetri ke database MySQL, menghitung estimasi biaya konsumsi listrik dan emisi CO2, serta menyediakan grafik interaktif via ECharts dengan fitur ekspor data ke Excel.",
      tech: ["React", "MySQL", "REST API", "ECharts", "Ewon Flexy 205", "Tailwind CSS"],
      link: "https://github.com/Bima565",
      impact: "Pemantauan daya otomatis 24/7 dengan polling 15 detik dan retensi data terstruktur.",
    },
    {
      id: "02",
      title: "Custom DirectInput to XInput Controller Mapper",
      category: "C# / Hardware Bridge Tool",
      status: "Selesai",
      description: "Perangkat lunak utilitas berbasis C# .NET untuk mengonversi sinyal input kontroler PlayStation atau generic menjadi format Xbox XInput. Mengatasi trigger aus melalui logika threshold digital, kalibrasi timeout, dukungan getaran, dan persistensi preset JSON.",
      tech: ["C#", ".NET", "DirectInput", "XInput API", "JSON Configuration"],
      link: "https://github.com/Bima565",
      impact: "Memulihkan fungsi kontroler perangkat keras melalui kompensasi logika perangkat lunak.",
    },
    {
      id: "03",
      title: "Web Portofolio Pribadi Persona 3 Reload Theme",
      category: "Frontend Web & Motion",
      status: "Selesai",
      description: "Laman portofolio interaktif yang mengadaptasi bahasa desain Atlus Persona 3 Reload: tata letak diagonal asimetris, palet warna oceanic navy dan aksen crimson, tipografi kinetik, serta integrasi tombol komunikasi langsung WhatsApp.",
      tech: ["React", "Vite", "Tailwind CSS v4", "Motion", "Three.js"],
      link: "https://github.com/Bima565",
      impact: "Antarmuka responsif dan terstruktur untuk menampilkan profil akademis serta riwayat proyek.",
    },
    {
      id: "04",
      title: "Wi-Fi & Network Interface Automator",
      category: "PowerShell & System Automation",
      status: "Selesai",
      description: "Skrip otomasi berbasis PowerShell untuk mendeteksi penurunan kestabilan adapter Wi-Fi, mereset antarmuka jaringan secara terprogram tanpa memulai ulang sistem, serta mengoptimalkan lebar kanal koneksi.",
      tech: ["PowerShell", "Windows Networking", "Automation Script"],
      link: "https://github.com/Bima565",
      impact: "Pemulihan kestabilan koneksi adapter jaringan secara cepat dalam satu eksekusi perintah.",
    },
  ],

  // 5. Sertifikasi Kompetensi Resmi
  certifications: [
    {
      code: "CERT-01",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "Diterbitkan Juli 2024 - Berlaku s.d. Juli 2027",
      skills: "Pengembangan Web, Frontend, dan Standar Arsitektur Web",
      badge: "BNSP NASIONAL",
      status: "BERLISENSI AKTIF",
    },
    {
      code: "CERT-02",
      title: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      period: "Diterbitkan Mei 2024",
      skills: "Perintah Dasar Linux, Pengelolaan Berkas, dan Administrasi Sistem CLI",
      badge: "CISCO VERIFIED",
      status: "TERVERIFIKASI",
    },
  ],

  // 6. Kontak & WhatsApp Call to Action
  contact: {
    whatsappNumber: "6283831911459",
    email: "bimaprawira92@gmail.com",
    github: "https://github.com/Bima565",
    linkedin: "https://www.linkedin.com/in/bima-prawira-dharma-0a2493328/",
  },
}
