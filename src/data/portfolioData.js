import myPhoto from '../assets/foto_me.jpg'

export const portfolioData = {
  // 1. Navigasi & Identitas Header
  navbar: {
    links: [
      { href: "#about", label: "Tentang" },
      { href: "#skills", label: "Keahlian" },
      { href: "#projects", label: "Proyek" },
      { href: "#certifications", label: "Sertifikasi" },
      { href: "#contact", label: "Kontak" },
    ],
    ctaButton: "WhatsApp",
  },

  // 2. Informasi Profil Utama & Hero
  profile: {
    fullName: "Bima Prawira Dharma",
    title: "Web Developer",
    bio: "Pengembang web dengan fokus pada frontend, basis data relasional, dan otomasi sistem. Berpengalaman membangun antarmuka web responsif dan utilitas pendukung perangkat lunak.",
    avatar: myPhoto,
    heroPills: ["WEB DEVELOPER", "FRONTEND & SYSTEM", "PORTFOLIO"],
    photoBadge: "PORTFOLIO",
    ctaButtons: {
      projects: "Lihat Portofolio Proyek",
      whatsapp: "Hubungi via WhatsApp",
    },
  },

  // 3. Tentang Saya & Kepribadian
  about: {
    sectionTitle: "TENTANG SAYA",
    statement: "Saya seseorang yang memiliki rasa penasaran tinggi terhadap teknologi dan pemrograman. Senang mengutak-atik sistem, mengeksplorasi alur kerja baru, dan mengubah ide menjadi aplikasi yang fungsional. Bagi saya, proses memecahkan masalah saat menemukan kendala adalah bagian paling menarik dari membangun sebuah perangkat lunak.",
    pillars: [
      {
        badge: "EKSPLORASI",
        title: "Rasa Penasaran Tinggi",
        desc: "Suka mengulik hal baru, mencoba tools yang belum pernah dipakai, dan mencari tahu cara kerjanya secara mandiri.",
      },
      {
        badge: "PRAGMATIS",
        title: "Fokus ke Solusi",
        desc: "Lebih menyukai pendekatan yang lugas dan efektif dalam menyelesaikan masalah tanpa membuat alur kerja jadi rumit.",
      },
      {
        badge: "KONSISTEN",
        title: "Kemauan Belajar",
        desc: "Terbiasa belajar secara mandiri dari dokumentasi resmi, komunitas, dan eksperimen langsung lewat proyek riil.",
      },
      {
        badge: "DETAIL",
        title: "Ketelitian Proses",
        desc: "Memperhatikan kerapian struktur, detail tampilan antarmuka, dan alur penggunaan agar nyaman dipakai.",
      },
    ],
    experienceTitle: "PENGALAMAN & MAGANG",
    experience: [
      {
        role: "Energy Monitoring System",
        company: "Smart Building Innovasi",
        type: "Magang",
        period: "Jan 2024 - Sekarang",
        location: "Sidoarjo, Jawa Timur",
        detail: "Pengembangan antarmuka web monitoring energi dan telemetri perangkat secara real-time terhubung gateway sistem IIoT.",
        skills: ["React.js", "Visual Studio", "REST API", "MySQL"],
      },
    ],
    educationTitle: "PENDIDIKAN",
    education: [
      {
        degree: "D3 - Information Technology",
        institution: "Politeknik Negeri Madiun",
        period: "2024 – 2027",
        detail: "Mendalami rekayasa perangkat lunak, sistem operasi Linux, jaringan komputer, dan perancangan basis data relasional.",
        skills: ["Arch Linux", "Linux"],
      },
    ],
    interestsTitle: "MINAT & EKSPLORASI",
    interests: [
      "Eksplorasi Sistem Operasi & Linux",
      "Desain Antarmuka & Interaktivitas",
      "Otomasi Skrip & Utilitas",
      "Gamepad & Hardware Utility",
      "Problem Solving",
    ],
  },

  // 4. Keahlian & Tools
  skillsSection: {
    sectionTitle: "TOOLS & TEKNOLOGI",
    tabs: ["SEMUA", "FRONTEND", "DATABASE", "SISTEM", "TOOLS"],
  },
  skills: [
    // Frontend
    { name: "HTML5", icon: "html5", category: "Frontend", color: "#E34F26" },
    { name: "CSS3", icon: "css3", category: "Frontend", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", category: "Frontend", color: "#F7DF1E" },
    { name: "React", icon: "react", category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend", color: "#06B6D4" },
    { name: "Vite", icon: "vite", category: "Frontend", color: "#646CFF" },

    // Database
    { name: "MySQL", icon: "mysql", category: "Database", color: "#4479A1" },
    { name: "Firebase", icon: "firebase", category: "Database", color: "#FFCA28" },

    // Sistem & OS
    { name: "Arch Linux", icon: "archlinux", category: "Sistem", color: "#1793D1" },
    { name: "Linux", icon: "linux", category: "Sistem", color: "#FCC624" },
    { name: "Kotlin", icon: "kotlin", category: "Sistem", color: "#7F52FF" },
    { name: "C#", icon: "csharp", category: "Sistem", color: "#9B4F96" },
    { name: ".NET", icon: "dotnet", category: "Sistem", color: "#512BD4" },
    { name: "PowerShell", icon: "powershell", category: "Sistem", color: "#5391FE" },
    { name: "Bash", icon: "bash", category: "Sistem", color: "#4EAA25" },

    // Tools & Desain
    { name: "Git", icon: "git", category: "Tools", color: "#F05032" },
    { name: "GitHub", icon: "github", category: "Tools", color: "#FFFFFF" },
    { name: "VS Code", icon: "vscode", category: "Tools", color: "#007ACC" },
    { name: "Python", icon: "python", category: "Tools", color: "#3776AB" },
    { name: "Figma", icon: "figma", category: "Tools", color: "#F24E1E" },
    { name: "Blender", icon: "blender", category: "Tools", color: "#EA7600" },
    { name: "Postman", icon: "postman", category: "Tools", color: "#FF6C37" },
  ],

  // 5. Portofolio & Proyek (Berdasarkan Repositori GitHub Resmi)
  projectsSection: {
    sectionTitle: "PORTOFOLIO PROYEK",
    totalLabel: "TOTAL:",
    projectWord: "PROYEK",
    tableHeaders: {
      no: "NO.",
      title: "NAMA PROYEK",
      status: "STATUS",
    },
    detailLabels: {
      detail: "DETAIL PROYEK",
      tech: "TEKNOLOGI DIGUNAKAN:",
      githubBtn: "Repositori GitHub",
    },
  },
  projects: [
    {
      id: "01",
      title: "DirectInput to XInput Controller Converter (Fix_L1)",
      category: "C# / Gamepad Utility",
      status: "Selesai",
      description: "Aplikasi utilitas konverter gamepad DirectInput (Generic USB Joystick) menjadi Virtual Xbox 360 Controller (XInput) berbasis .NET, SDL2, dan ViGEmBus. Dilengkapi fitur debounce filter anti-obrak L1, live input viewer, dan kalibrasi deadzone.",
      tech: ["C#", ".NET", "SDL2", "ViGEmBus", "JSON"],
      link: "https://github.com/Bima565/DirectInput_To_XInput",
    },
    {
      id: "02",
      title: "Web Portofolio Persona 3 Reload Theme",
      category: "Frontend Web",
      status: "Selesai",
      description: "Website portofolio interaktif pribadi yang mengadaptasi estetika Persona 3 Reload, dibangun menggunakan React, Tailwind CSS, Motion, dan Three.js.",
      tech: ["React", "Vite", "Tailwind CSS", "Motion", "Three.js"],
      link: "https://github.com/Bima565/Web_Portofolio",
    },
    {
      id: "03",
      title: "MotoManager - Manajemen Bengkel Motor",
      category: "Mobile App",
      status: "Selesai",
      description: "Aplikasi mobile berbasis Flutter dan Firebase untuk mempermudah pencatatan servis sepeda motor, inventaris suku cadang, dan riwayat perawatan kendaraan bagi bengkel.",
      tech: ["Flutter", "Dart", "Firebase", "Firestore", "Android"],
      link: "https://github.com/Bima565/proyek_motomanager_3",
    },
    {
      id: "04",
      title: "Rotten Bananas - Movie Rating & Discovery App",
      category: "Mobile App",
      status: "Selesai",
      description: "Aplikasi mobile katalog dan ulasan film berbasis Flutter dan REST API. Menampilkan rating film, trailer, sinopsis, dan pencarian film secara real-time.",
      tech: ["Flutter", "Dart", "REST API", "Dio", "Android"],
      link: "https://github.com/Bima565/Rotten_Bananas",
    },
    {
      id: "05",
      title: "Pongo Clevo Insyde Keyboard Effects",
      category: "C# / Hardware Utility",
      status: "Selesai",
      description: "Perangkat lunak pengendali efek pencahayaan keyboard RGB untuk laptop Axioo Pongo / Clevo berbasis C# .NET dan integrasi Insyde DCHU API.",
      tech: ["C#", ".NET", "Windows Forms", "Win32 API", "Insyde API"],
      link: "https://github.com/Bima565/Pongo-Clevo-Insyde-Keyboard-Effects",
    },
    {
      id: "06",
      title: "Web EMS Ewon (Energy Management System)",
      category: "Web & IoT",
      status: "Selesai",
      description: "Sistem monitoring energi dan daya listrik berbasis web yang terhubung dengan gateway IIoT Ewon Flexy 205, dilengkapi visualisasi grafik telemetri dan pencatatan log data.",
      tech: ["React", "TypeScript", "MySQL", "REST API", "ECharts", "Tailwind CSS"],
      link: "https://github.com/Bima565/web-EMS-Ewon",
    },
    {
      id: "07",
      title: "TopUpIN - Android Top-Up Game & Voucher App",
      category: "Mobile App (Android)",
      status: "Selesai",
      description: "Aplikasi mobile Android native berbasis Kotlin untuk platform layanan top-up game dan voucher digital dengan katalog produk, navigasi fragment, dan antarmuka pemesanan.",
      tech: ["Kotlin", "Android", "Gradle"],
      link: "https://github.com/Bima565/topup",
    },
  ],

  // 6. Sertifikasi Kompetensi
  certificationsSection: {
    sectionTitle: "LISENSI & SERTIFIKASI",
    badgeLabel: "SERTIFIKASI",
    fieldLabel: "BIDANG KOMPETENSI:",
    statusLabel: "STATUS:",
    verifiedText: "Sertifikat Valid",
  },
  certifications: [
    {
      code: "CERT-01",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "Diterbitkan Juli 2024 - Berlaku s.d. Juli 2027",
      skills: "Dasar Pemrograman Web, HTML, CSS, dan JavaScript",
      badge: "BNSP",
      status: "Aktif",
    },
    {
      code: "CERT-02",
      title: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      period: "Diterbitkan Mei 2024",
      skills: "Perintah Dasar Linux, Manajemen Berkas, dan CLI",
      badge: "CISCO",
      status: "Selesai",
    },
  ],

  // 7. Kontak & Footer
  contact: {
    whatsappNumber: "6283831911459",
    defaultMessage: "Halo Bima, saya ingin menghubungi Anda terkait portofolio web.",
    email: "bimaprawira92@gmail.com",
    github: "https://github.com/Bima565",
    linkedin: "https://www.linkedin.com/in/bima-prawira-dharma-0a2493328/",
    sectionTag: "KONTAK & DISKUSI",
    title: "Hubungi Saya untuk Diskusi Proyek",
    desc: "Terbuka untuk kolaborasi pembuatan aplikasi web dan utilitas perangkat lunak. Silakan pilih topik atau tulis pesan untuk langsung terhubung via WhatsApp.",
    inputPlaceholder: "Tulis pesan Anda untuk WhatsApp...",
    sendButton: "Kirim WhatsApp",
    quickMessages: [
      {
        label: "Tanya Pembuatan Web / Dashboard",
        text: "Halo Bima, saya ingin berdiskusi mengenai kebutuhan pembuatan aplikasi web atau dashboard.",
      },
      {
        label: "Diskusi Sistem & Utilitas",
        text: "Halo Bima, saya ingin berdiskusi mengenai otomasi sistem atau pengembangan perangkat lunak.",
      },
      {
        label: "Kolaborasi Proyek",
        text: "Halo Bima, saya tertarik berdiskusi mengenai peluang kolaborasi proyek bersama Anda.",
      },
    ],
    footerNavLinks: [
      { href: "#hero", label: "Profil" },
      { href: "#about", label: "Tentang Saya" },
      { href: "#skills", label: "Keahlian Teknis" },
      { href: "#projects", label: "Portofolio Proyek" },
      { href: "#certifications", label: "Sertifikasi" },
      { href: "#contact", label: "Kontak WhatsApp" },
    ],
    footerTagline: "Portofolio Pribadi - Pengembangan Web & Rekayasa Perangkat Lunak",
    copyright: "Seluruh hak cipta dilindungi.",
  },
}
