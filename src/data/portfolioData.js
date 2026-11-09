import myPhoto from '../assets/foto_me.jpg'

export const portfolioData = {
  // 1. Informasi Profil Utama (Adventurer License / First-Class Mage Status)
  profile: {
    fullName: "Bima Prawira Dharma",
    nim: "243307039",
    classGroup: "Kelas 5B",
    title: "First-Class Software Mage & System Craftsman",
    nickname: "Adaptive Problem Solver & Continuous Learner",
    bio: "Mahasiswa D3 Teknologi Informasi semester 5 yang adaptif, komunikatif, dan memiliki dedikasi tinggi dalam belajar. Terbiasa berpikir terstruktur, berkolaborasi dengan empati dalam tim, serta konsisten menuntaskan setiap tantangan dengan penuh tanggung jawab.",
    avatar: myPhoto,
    academicStatus: "D3 Teknologi Informasi : Semester 5",
    level: "Lv. 58",
    vision: "Electro / Logic Catalyst",
    guildRank: "First-Class Mage / Rank S Adventurer",
  },

  // 2. Tentang Saya (Grimoire Philosophy & Values)
  about: {
    dialogue: "Bagi saya, setiap tantangan adalah kesempatan berharga untuk berproses. Rasa ingin tahu yang tulus, cara berpikir terstruktur, dan komunikasi terbuka adalah kunci utama membangun kolaborasi solid. Kepuasan terbesar saya adalah ketika sebuah baris logika dan kode dapat diwujudkan menjadi dampak nyata yang dirasakan langsung oleh banyak orang.",
    pillars: [
      {
        badge: "KOLABORASI",
        element: "Hydro",
        title: "Komunikatif & Solutif",
        desc: "Mengutamakan komunikasi dua arah yang terbuka, aktif mendengarkan perspektif rekan tim, dan fokus mencari solusi bersama tanpa ego pribadi.",
      },
      {
        badge: "LOGIKA",
        element: "Electro",
        title: "Kritis & Terstruktur",
        desc: "Menganalisis persoalan dari gambaran besar hingga ke akar masalah secara tenang, logis, dan tidak mudah goyah dalam situasi dinamis.",
      },
      {
        badge: "KREATIF",
        element: "Anemo",
        title: "Eksploratif & Inovatif",
        desc: "Senang mengeksplorasi ide-ide baru, memadukan ketelitian proses teknis dengan daya kreasi untuk menghasilkan karya yang segar.",
      },
      {
        badge: "KETAHANAN",
        element: "Geo",
        title: "Disiplin & Tangguh",
        desc: "Memiliki komitmen jangka panjang, konsisten menjaga ritme kerja, serta pantang menyerah sebelum tujuan terwujud sempurna.",
      },
    ],
    education: [
      {
        institution: "D3 Teknologi Informasi",
        degree: "Mahasiswa Aktif Semester 5",
        period: "2024 s.d. Sekarang (Kelas 5B)",
        detail: "Membangun fondasi logika berpikir terstruktur, arsitektur perangkat lunak, dan manajemen proyek kolaboratif.",
      },
      {
        institution: "PT. Smart Building Innovasi",
        degree: "Internship: Web EMS Developer",
        period: "Magang Industri",
        detail: "Beradaptasi dengan standar industri modern, integrasi telemetri IoT real-time, dan koordinasi lintas divisi.",
      },
    ],
    interests: [
      "Eksplorasi Teknologi Baru & Belajar Cepat",
      "Komunikasi & Kerja Sama Tim",
      "Pemecahan Masalah Kolaboratif",
      "Manajemen Waktu & Produktivitas",
      "Desain Antarmuka & Estetika Visual",
      "Disiplin Diri & Kebugaran Mental",
      "Game RPG Strategis & Narasi Mendalam",
    ],
  },

  // 3. Keahlian & Grimoire Spell Talents
  skills: [
    { name: "React, Vite & Modern Web", category: "Frontend", level: 92, element: "Anemo", desc: "Komponen reaktif, hook modular, integrasi ECharts dan Tailwind" },
    { name: "Troubleshooting & Hardware Diagnostic", category: "Diagnostics", level: 95, element: "Electro", desc: "Analisis dump WinDbg, manajemen termal, modifikasi hardware" },
    { name: "C# & Hardware Interface", category: "Software Eng", level: 88, element: "Geo", desc: "DirectInput, XInput API, otomasi perangkat, konfigurasi JSON" },
    { name: "Industrial IoT & REST API", category: "Backend / IoT", level: 90, element: "Electro", desc: "Gateway IIoT Ewon Flexy 205, telemetri real-time, konsumsi API" },
    { name: "MySQL & Database Architecture", category: "Database", level: 86, element: "Geo", desc: "Skema relasional, optimasi kueri, auto-retention data log" },
    { name: "Linux Environment & Shell Scripting", category: "DevOps & OS", level: 88, element: "Cryo", desc: "NyArch/CachyOS, Bash, otomasi PowerShell, runtime Proton" },
    { name: "3D Rigging & Unity Pipeline", category: "3D & Assets", level: 83, element: "Dendro", desc: "Modeling Blender, ekspor FBX, rantai Bone End, DynamicBone" },
    { name: "AI MCP & Creative Tooling", category: "AI Workflows", level: 87, element: "Arcane", desc: "Model Context Protocol untuk Figma, Penpot, Blender dan LLM" },
  ],

  // 4. Portofolio Proyek (Guild Commission Board)
  projects: [
    {
      id: "01",
      rank: "Rank S Quest",
      title: "Web EMS Ewon (Industrial Energy Management System)",
      category: "Industrial IoT & Realtime Dashboard",
      status: "Done",
      description: "Sistem monitoring daya listrik real-time tiap 15 detik dari gateway IIoT Ewon Flexy 205 (Power Meter PM139). Menyimpan log terstruktur ke MySQL, menghitung estimasi biaya listrik dan emisi CO2, serta menyediakan grafik visual interaktif via ECharts dengan fitur ekspor Excel.",
      tech: ["React", "MySQL", "REST API", "ECharts", "Ewon Flexy 205", "Tailwind"],
      link: "#",
      impact: "Monitoring 24/7 dengan polling 15s dan data retention otomatis",
    },
    {
      id: "02",
      rank: "Rank A Quest",
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
      rank: "Rank S Quest",
      title: "Interactive Web Portfolio Experience",
      category: "Frontend Web & Motion Engineering",
      status: "Done",
      description: "Halaman profil interaktif berperforma tinggi dengan tema fantasi Isekai (Genshin Impact & Frieren): kanvas Three.js partikel mana starlight, tata letak grimoire elegan, dan CTA komunikasi WhatsApp resmi yang responsif.",
      tech: ["React", "Vite", "Tailwind CSS v4", "Motion", "Three.js", "Lucide"],
      link: "#",
      impact: "Animasi mulus 60 FPS, responsif di semua perangkat, zero bloat",
    },
    {
      id: "04",
      rank: "Rank A Quest",
      title: "3D Character Rigging & Dynamic Bone Physics",
      category: "3D Pipeline & Game Modding",
      status: "Done",
      description: "Alur kerja pembuatan aset pakaian dan karakter 3D dari Blender ke Unity Editor. Meliputi pemodelan mesh, ekspor FBX, penambahan rantai Bone End, konfigurasi physics DynamicBone/HSPE2, dan pengujian runtime game engine.",
      tech: ["Blender", "Unity Engine", "DynamicBone", "FBX Pipeline"],
      link: "#",
      impact: "Fisika cloth/bone stabil tanpa glitch clipping mesh",
    },
    {
      id: "05",
      rank: "Rank B Quest",
      title: "Wi-Fi 5GHz & Network Interface Automator",
      category: "PowerShell & System Automation",
      status: "Done",
      description: "Skrip diagnostik dan otomasi PowerShell satu klik untuk mendeteksi drop koneksi Wi-Fi 5GHz, me-reset interface card tanpa reboot PC, dan mengoptimalkan channel width adapter.",
      tech: ["PowerShell", "Windows Networking", "Batch Scripting"],
      link: "#",
      impact: "Solusi instan 1-klik untuk koneksi stabil saat bekerja remote",
    },
  ],

  // 5. Sertifikasi Kompetensi Resmi (Guild Licenses)
  certifications: [
    {
      code: "GUILD-01",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "Diterbitkan Jul 2024 · Berlaku s.d. Jul 2027",
      skills: "Web Development, Frontend & Standard Architecture",
      badge: "BNSP NASIONAL",
      status: "ACTIVE LICENSE",
    },
    {
      code: "GUILD-02",
      title: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      period: "Diterbitkan Mei 2024",
      skills: "Linux CLI, System Operations & Scripting",
      badge: "CISCO VERIFIED",
      status: "CERTIFIED",
    },
  ],

  // 6. Kontak & WhatsApp Call to Action
  contact: {
    whatsappNumber: "6283831911459",
    defaultMessage: "Halo Bima, saya tertarik dengan portofolio Anda dan ingin mendiskusikan peluang proyek atau kolaborasi.",
    email: "bima.prawira@example.com",
    github: "https://github.com/Bima565",
    linkedin: "https://www.linkedin.com/in/bima-prawira-dharma-0a2493328/",
  },
};
