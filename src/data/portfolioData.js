import myPhoto from '../assets/foto_me.jpg'

export const portfolioData = {
  // 1. Informasi Profil Utama
  profile: {
    fullName: "Bima Prawira Dharma",
    nim: "243307039",
    classGroup: "Kelas 5B",
    nickname: "Adaptive Problem Solver & Continuous Learner",
    bio: "Mahasiswa D3 Teknologi Informasi semester 5 yang adaptif, komunikatif, dan memiliki dedikasi tinggi dalam belajar. Terbiasa berpikir terstruktur, berkolaborasi dengan empati dalam tim, serta konsisten menyelesaikan setiap tantangan secara tuntas dan bertanggung jawab.",
    avatar: myPhoto,
    academicStatus: "D3 Teknologi Informasi — Semester 5",
    level: "Lv. 24",
    wallet: "¥2,433,070",
    hud: {
      hp: "999/999",
      sp: "450/450",
      persona: "ORPHEUS / RE-SPEC",
      rig: "Axioo Pongo 725 // RTX 2050",
      os: "Linux / Windows Dual-Boot",
    },
  },

  // 2. Tentang Saya (About Me & Nilai Tambah Otentik)
  about: {
    dialogue: "Bagi saya, setiap tantangan adalah kesempatan berharga untuk belajar dan berproses. Saya percaya bahwa rasa ingin tahu yang tulus, cara berpikir yang terstruktur, dan komunikasi yang terbuka adalah kunci utama dalam membangun kolaborasi yang solid. Kepuasan terbesar saya adalah ketika sebuah ide dapat diwujudkan bersama menjadi dampak positif yang nyata dan dirasakan langsung oleh orang lain.",
    pillars: [
      {
        badge: "KOLABORASI",
        title: "Komunikatif & Solutif",
        desc: "Mengutamakan komunikasi dua arah yang terbuka, aktif mendengarkan perspektif tim, dan fokus mencari solusi bersama tanpa ego pribadi.",
      },
      {
        badge: "BERPIKIR KRITIS",
        title: "Kritis & Terstruktur",
        desc: "Melihat persoalan dari gambaran besar hingga ke akar masalah secara tenang, logis, dan tidak mudah panik dalam situasi yang serba cepat.",
      },
      {
        badge: "KREATIF",
        title: "Eksploratif & Inovatif",
        desc: "Senang mengeksplorasi ide-ide baru di luar kebiasaan, memadukan ketelitian proses dengan daya imajinasi untuk hasil yang segar.",
      },
      {
        badge: "DAYA TAHAN",
        title: "Disiplin & Tangguh",
        desc: "Memiliki komitmen jangka panjang, konsisten menjaga fokus dan ritme kerja, serta pantang menyerah sebelum tujuan tercapai.",
      },
    ],
    education: [
      {
        institution: "D3 Teknologi Informasi",
        degree: "Mahasiswa Aktif Semester 5",
        period: "2024 — Sekarang (Kelas 5B)",
        detail: "Membangun fondasi logika berpikir terstruktur, manajemen proyek kelompok, serta etika profesional di dunia teknologi.",
      },
      {
        institution: "PT. Smart Building Innovasi",
        degree: "Internship — Web EMS Developer",
        period: "Magang Industri",
        detail: "Belajar beradaptasi dengan budaya kerja profesional, koordinasi lintas divisi, serta penyampaian ide solusi yang mudah dipahami rekan kerja.",
      },
    ],
    interests: [
      "Eksplorasi Hal Baru & Belajar Cepat",
      "Komunikasi & Kerja Sama Tim",
      "Pemecahan Masalah Kolaboratif",
      "Manajemen Waktu & Produktivitas",
      "Desain Pengalaman & Estetika Visual",
      "Disiplin Diri & Kebugaran Mental",
      "Gaming Strategi & Narasi Mendalam",
    ],
  },

  // 3. Showcase Lab Investigasi & Troubleshooting Khusus
  troubleshootingCases: [
    {
      code: "CASE-01",
      title: "WinDbg Kernel Dump & Thermal Throttle Diagnosis",
      category: "OS & Hardware",
      detail: "Menganalisis crash dump BSOD menggunakan WinDbg pada laptop Axioo Pongo 725. Mengidentifikasi lonjakan panas VRM dan konflik driver GPU, diselesaikan via DDU purge, repasting thermal putty, dan fine-tuning power limit.",
      tag: "SOLVED",
    },
    {
      code: "CASE-02",
      title: "Industrial Gateway IIoT Data Pipeline (Ewon Flexy 205)",
      category: "IIoT & Telemetry",
      detail: "Menarik data telemetri kelistrikan (V, A, kW, kWh) dari Power Meter PM139 secara periodik tiap 15 detik ke MySQL server dengan perhitungan estimasi tarif listrik (Rp 1.444,7/kWh) dan emisi karbon (0,85 kg CO2/kWh).",
      tag: "VERIFIED",
    },
    {
      code: "CASE-03",
      title: "DirectInput to XInput Controller Bridge (C#)",
      category: "Hardware Remap",
      detail: "Mengatasi stik PlayStation/generic rusak (tombol L2/R2) dengan membangun mapper mandiri di C#. Menyediakan kalibrasi deadzone, dynamic vibration, menu konfigurasi JSON terstruktur, dan auto-launch.",
      tag: "DEPLOYED",
    },
    {
      code: "CASE-04",
      title: "Wi-Fi 5GHz Channel Width & Regulation Tuning",
      category: "Network Interface",
      detail: "Menyelesaikan isu adaptor laptop yang gagal mendeteksi sinyal hotspot HP 5GHz. Menguji variasi Channel Width (20MHz vs Auto) serta membuat skrip otomasi restart network adaptor di PowerShell.",
      tag: "AUTOMATED",
    },
  ],

  // 4. Keahlian Riil & Persona Stat Gauges
  skills: [
    { name: "React, Vite & Modern Web", category: "Frontend", level: 92, stat: "St", desc: "Komponen reaktif, hook modular, integrasi ECharts & Tailwind" },
    { name: "Troubleshooting & Hardware Diagnostic", category: "Diagnostics", level: 95, stat: "En", desc: "WinDbg dump analysis, thermal management, hardware modding" },
    { name: "C# & Hardware Interface", category: "Software Eng", level: 88, stat: "Ma", desc: "DirectInput, XInput API, automation tools, JSON configuration" },
    { name: "Industrial IoT & REST API", category: "Backend / IoT", level: 90, stat: "St", desc: "Ewon Flexy 205 gateway, telemetri real-time, API consumption" },
    { name: "MySQL & Database Architecture", category: "Database", level: 86, stat: "Ag", desc: "Skema relasional, optimasi query, auto-retention data log" },
    { name: "Linux Environment & Shell Scripting", category: "DevOps & OS", level: 88, stat: "Ma", desc: "NyArch/CachyOS, Bash, PowerShell automation, Proton runner" },
    { name: "3D Rigging & Unity Pipeline", category: "3D & Assets", level: 83, stat: "Lu", desc: "Blender modeling, FBX export, Bone End chain, DynamicBone" },
    { name: "AI MCP & Creative Tooling", category: "AI Workflows", level: 87, stat: "Ag", desc: "Model Context Protocol untuk Figma, Penpot, Blender & LLM" },
  ],

  // 5. Portofolio & Proyek (P3R Quest Board Format)
  projects: [
    {
      id: "01",
      title: "Web EMS Ewon (Industrial Energy Management System)",
      category: "Industrial IoT & Web Dashboard",
      status: "Done",
      description: "Sistem monitoring daya listrik real-time tiap 15 detik dari gateway IIoT Ewon Flexy 205 (Power Meter PM139). Menyimpan log terstruktur ke MySQL, menghitung estimasi biaya listrik dan emisi CO2, serta menyediakan grafik visual interaktif via ECharts dengan fitur ekspor Excel.",
      tech: ["React", "MySQL", "REST API", "ECharts", "Ewon Flexy 205", "Tailwind"],
      link: "#",
      impact: "Monitoring 24/7 dengan polling 15s & data retention otomatis",
    },
    {
      id: "02",
      title: "Custom DirectInput to XInput Controller Mapper",
      category: "C# / Hardware Bridge Tool",
      status: "Done",
      description: "Software utilitas C# yang mengonversi sinyal input controller PlayStation/generic menjadi Xbox XInput. Dirancang untuk mengatasi tombol L2/R2 rusak dengan logika digital threshold, kalibrasi timeout, dukungan getaran dinamis, dan persistensi setting JSON.",
      tech: ["C#", ".NET", "DirectInput", "XInput API", "JSON Preset"],
      link: "#",
      impact: "Memulihkan fungsi controller tanpa perlu beli unit baru",
    },
    {
      id: "03",
      title: "Persona 3 Reload UI Kinetic Portfolio",
      category: "Frontend Web & Motion Engineering",
      status: "Done",
      description: "Landing page profil interaktif berkecepatan tinggi terinspirasi estetika Atlus Persona 3 Reload: pergerakan ambient air samudra, skewed ribbons, dialog Velvet Room asimetris, dan tombol CTA WhatsApp Click-to-Chat resmi.",
      tech: ["React", "Vite", "Tailwind CSS v4", "Motion", "Lucide"],
      link: "#",
      impact: "Performa render 60 FPS, responsif, dan zero-bloat",
    },
    {
      id: "04",
      title: "3D Character Rigging & Dynamic Bone Physics",
      category: "3D Pipeline & Game Modding",
      status: "Done",
      description: "Alur kerja pembuatan aset pakaian dan karakter 3D dari Blender ke Unity Editor. Meliputi pemodelan mesh, FBX export, penambahan rantai Bone End, konfigurasi physics DynamicBone/HSPE2, dan pengujian di runtime game engine.",
      tech: ["Blender", "Unity Engine", "DynamicBone", "FBX Pipeline"],
      link: "#",
      impact: "Fisika cloth/bone stabil tanpa glitch clipping mesh",
    },
    {
      id: "05",
      title: "Wi-Fi 5GHz & Network Interface Automator",
      category: "PowerShell & System Automation",
      status: "Done",
      description: "Skrip diagnostik dan otomasi PowerShell satu klik untuk mendeteksi drop koneksi Wi-Fi 5GHz, me-reset interface card tanpa reboot PC, dan mengoptimalkan channel width adapter.",
      tech: ["PowerShell", "Windows Networking", "Batch Scripting"],
      link: "#",
      impact: "Solusi instan 1-klik untuk koneksi stabil saat kerja remote",
    },
  ],

  // 6. Sertifikasi Kompetensi Resmi (Sesuai Ketentuan Tugas)
  certifications: [
    {
      code: "CERT-01",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "Diterbitkan Jul 2024 · Berlaku s.d. Jul 2027",
      skills: "Web Development, Frontend & Standard Architecture",
      badge: "BNSP NASIONAL",
      status: "ACTIVE",
    },
    {
      code: "CERT-02",
      title: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      period: "Diterbitkan Mei 2024",
      skills: "Linux CLI, Arch Linux, System Management",
      badge: "CISCO VERIFIED",
      status: "BADGED",
    },
  ],

  // 7. Kontak & WhatsApp Call to Action
  contact: {
    whatsappNumber: "6283831911459",
    defaultMessage: "Halo Bima, saya melihat portofolio Persona 3 Anda dan tertarik mendiskusikan peluang proyek/kolaborasi.",
    email: "bima.prawira@example.com",
    github: "https://github.com/Bima565",
    linkedin: "https://www.linkedin.com/in/bima-prawira-dharma-0a2493328/",
  },
};
