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
    educationTitle: "Latar Belakang & Pembelajaran",
    education: [
      {
        institution: "Pendidikan Formal",
        degree: "Teknologi Informasi",
        period: "2024 - Sekarang",
        detail: "Mendalami logika pemrograman, struktur data, jaringan komputer, dan rekayasa perangkat lunak.",
      },
      {
        institution: "Eksplorasi Mandiri",
        degree: "Proyek & Pembelajaran Mandiri",
        period: "Berkelanjutan",
        detail: "Mempraktikkan teori ke dalam proyek nyata, eksperimen utilitas sistem, dan eksplorasi antarmuka web.",
      },
    ],
    interestsTitle: "Minat & Eksplorasi",
    interests: [
      "Eksplorasi Sistem Operasi & Linux",
      "Desain Antarmuka & Interaktivitas",
      "Otomasi Skrip",
      "Eksplorasi Tools & Software",
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

  // 5. Portofolio & Proyek
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
      impact: "HASIL & DAMPAK:",
      tech: "TEKNOLOGI DIGUNAKAN:",
      verified: "Terverifikasi",
      githubBtn: "Repositori GitHub",
    },
  },
  projects: [
    {
      id: "01",
      title: "Web Dashboard Monitoring Daya (EMS)",
      category: "Web & IoT",
      status: "Selesai",
      description: "Aplikasi web dashboard untuk menampilkan data konsumsi daya listrik. Terhubung dengan database MySQL untuk pencatatan log dan menampilkan data dalam bentuk grafik visual.",
      tech: ["React", "MySQL", "REST API", "ECharts", "Tailwind CSS"],
      link: "https://github.com/Bima565",
      impact: "Memudahkan pemantauan riwayat penggunaan daya listrik melalui grafik interaktif.",
    },
    {
      id: "02",
      title: "Input Controller Mapper (DirectInput ke XInput)",
      category: "C# / Utilitas Sistem",
      status: "Selesai",
      description: "Aplikasi utilitas C# untuk menerjemahkan sinyal kontroler DirectInput (generic/PlayStation) menjadi format XInput agar dapat terbaca pada game PC modern.",
      tech: ["C#", ".NET", "DirectInput", "XInput API", "JSON"],
      link: "https://github.com/Bima565",
      impact: "Menghubungkan kontroler non-Xbox agar bisa digunakan tanpa perangkat tambahan.",
    },
    {
      id: "03",
      title: "Web Portofolio Persona 3 Reload Theme",
      category: "Frontend Web",
      status: "Selesai",
      description: "Website portofolio interaktif bertema Persona 3 Reload yang memuat profil pengembang, daftar keahlian teknis, dan galeri proyek.",
      tech: ["React", "Vite", "Tailwind CSS", "Motion"],
      link: "https://github.com/Bima565",
      impact: "Menampilkan riwayat proyek dan profil pengembang dalam satu antarmuka responsif.",
    },
    {
      id: "04",
      title: "Skrip Otomasi Reset Adapter Jaringan",
      category: "PowerShell / Otomasi",
      status: "Selesai",
      description: "Skrip PowerShell untuk mereset antarmuka adapter Wi-Fi secara terprogram saat koneksi jaringan mengalami gangguan, tanpa perlu restart perangkat.",
      tech: ["PowerShell", "Windows Networking", "CLI"],
      link: "https://github.com/Bima565",
      impact: "Membantu restart koneksi adapter jaringan secara cepat lewat satu baris perintah.",
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
      period: "",
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
    title: "Hubungi Saya untuk berdiskusi ",
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
        label: "Kolaborasi ",
        text: "",
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
  },
}
