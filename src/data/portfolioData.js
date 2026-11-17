import myPhoto from '../assets/foto_me.jpg'
import navicatImg from '../assets/lcon/00_navicat_logo_gold.png'
import photoshopImg from '../assets/lcon/adobe-photoshop-logo.png'
import csharpImg from '../assets/lcon/csharp.png'
import cppImg from '../assets/lcon/ISO_C++_Logo.svg'
import vsImg from '../assets/lcon/Visual_Studio_2026_icon.webp'
import vmwareImg from '../assets/lcon/vmware-workstation.png'
import vscodeImg from '../assets/lcon/VS Code.png'

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
    title: "IT Technician & Full-Stack Enthusiast",
    bio: "Senang mengulik hal baru, bereksperimen, dan mencari tahu cara kerja sesuatu dari nol. Terbiasa belajar mandiri lewat praktik langsung dan mencari solusi praktis ketika menemui kendala.",
    avatar: myPhoto,
    heroPills: ["PORTOFOLIO", "EKSPLORASI MANDIRI", "PROYEK KREATIF"],
    photoBadge: "PORTFOLIO",
    ctaButtons: {
      projects: "Lihat Portofolio Proyek",
      whatsapp: "Hubungi via WhatsApp",
    },
  },

  // 3. Tentang Saya & Kepribadian
  about: {
    sectionTitle: "TENTANG SAYA",
    statement: "Saya orang yang punya rasa penasaran tinggi dan senang mengutak-atik sesuatu untuk melihat bagaimana hal itu bekerja. Bagi saya, proses mencari tahu dan menemukan jalan keluar saat menemui kebuntuan adalah bagian paling seru dalam mempelajari hal baru.",
    pillars: [
      {
        badge: "EKSPLORASI",
        title: "Rasa Penasaran Tinggi",
        desc: "Suka mengulik hal baru dan mencari tahu cara kerjanya secara mandiri lewat rasa ingin tahu.",
      },
      {
        badge: "PRAGMATIS",
        title: "Fokus ke Solusi",
        desc: "Lebih menyukai pendekatan yang lugas dan praktis tanpa membuat alur kerja berbelit-belit.",
      },
      {
        badge: "KONSISTEN",
        title: "Kemauan Belajar",
        desc: "Terbiasa belajar mandiri secara bertahap lewat eksperimen langsung dan rasa pantang menyerah.",
      },
      {
        badge: "DETAIL",
        title: "Ketelitian Proses",
        desc: "Memperhatikan kerapian langkah, ketepatan proses, dan kenyamanan hasil akhir.",
      },
    ],
    experienceTitle: "PENGALAMAN & MAGANG",
    experience: [
      {
        role: "Energy Monitoring System",
        company: "PT.Smart Building Innovasi",
        type: "Magang",
        period: "Jan 2026 - Juni 2026",
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

  // 4. Keahlian & Tools (Tanpa SEMUA, dikelompokkan per kategori)
  skillsSection: {
    sectionTitle: "TOOLS & TEKNOLOGI",
    tabs: [
      "WEB DEVELOPMENT",
      "NATIVE WINDOWS",
      "MOBILE & IOT",
      "DATABASE",
      "OPERATING SYSTEM",
      "TOOLS & INFRA",
    ],
  },
  skills: [
    // --- 1. WEB DEVELOPMENT ---
    { name: "HTML5", icon: "html5", category: "Web Development", color: "#E34F26" },
    { name: "CSS3", icon: "css3", category: "Web Development", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", category: "Web Development", color: "#F7DF1E" },
    { name: "PHP", icon: "php", category: "Web Development", color: "#777BB4" },
    { name: "React", icon: "react", category: "Web Development", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Web Development", color: "#06B6D4" },
    { name: "Vite", icon: "vite", category: "Web Development", color: "#646CFF" },
    { name: "Node.js", icon: "nodejs", category: "Web Development", color: "#5FA04E" },
    { name: "NPM", icon: "npm", category: "Web Development", color: "#CB3837" },
    { name: "Laragon", icon: "laragon", category: "Web Development", color: "#0E83CD" },
    { name: "XAMPP", icon: "xampp", category: "Web Development", color: "#FB7A24" },

    // --- 2. NATIVE WINDOWS ---
    { name: "C#", image: csharpImg, category: "Native Windows", color: "#9B4F96" },
    { name: "C++", image: cppImg, category: "Native Windows", color: "#00599C" },
    { name: ".NET", icon: "dotnet", category: "Native Windows", color: "#512BD4" },
    { name: "Visual Studio", image: vsImg, category: "Native Windows", color: "#5C2D91" },
    { name: "PowerShell", icon: "powershell", category: "Native Windows", color: "#5391FE" },

    // --- 3. MOBILE & IOT ---
    { name: "Dart", icon: "dart", category: "Mobile & IoT", color: "#0175C2" },
    { name: "Kotlin", icon: "kotlin", category: "Mobile & IoT", color: "#7F52FF" },
    { name: "Java", icon: "java", category: "Mobile & IoT", color: "#ED8B00" },
    { name: "MQTT", icon: "mqtt", category: "Mobile & IoT", color: "#660066" },
    { name: "Node-RED", icon: "nodered", category: "Mobile & IoT", color: "#8F0000" },

    // --- 4. DATABASE ---
    { name: "Navicat", image: navicatImg, category: "Database", color: "#E0A824" },
    { name: "MySQL", icon: "mysql", category: "Database", color: "#4479A1" },
    { name: "Firebase", icon: "firebase", category: "Database", color: "#FFCA28" },

    // --- 5. OPERATING SYSTEM ---
    { name: "Arch Linux", icon: "archlinux", category: "Operating System", color: "#1793D1" },
    { name: "Linux", icon: "linux", category: "Operating System", color: "#FCC624" },
    { name: "Kali Linux", icon: "kalilinux", category: "Operating System", color: "#557C94" },
    { name: "Cachy OS", icon: "cachyos", category: "Operating System", color: "#00C2A8" },
    { name: "Proxmox", icon: "proxmox", category: "Operating System", color: "#E57000" },
    { name: "Ubuntu", icon: "ubuntu", category: "Operating System", color: "#E95420" },
    { name: "CentOS", icon: "centos", category: "Operating System", color: "#93227F" },
    { name: "Pop!_OS", icon: "popos", category: "Operating System", color: "#48B9C7" },
    { name: "Bash", icon: "bash", category: "Operating System", color: "#4EAA25" },

    // --- 6. TOOLS & INFRA ---
    { name: "VS Code", image: vscodeImg, category: "Tools & Infra", color: "#007ACC" },
    { name: "Python", icon: "python", category: "Tools & Infra", color: "#3776AB" },
    { name: "VMware", image: vmwareImg, category: "Tools & Infra", color: "#607078" },
    { name: "Termius", icon: "termius", category: "Tools & Infra", color: "#0088CC" },
    { name: "FileZilla", icon: "filezilla", category: "Tools & Infra", color: "#BF0000" },
    { name: "Nextcloud", icon: "nextcloud", category: "Tools & Infra", color: "#0082C9" },
    { name: "Git", icon: "git", category: "Tools & Infra", color: "#F05032" },
    { name: "GitHub", icon: "github", category: "Tools & Infra", color: "#FFFFFF" },
    { name: "Postman", icon: "postman", category: "Tools & Infra", color: "#FF6C37" },
    { name: "Photoshop", image: photoshopImg, category: "Tools & Infra", color: "#31A8FF" },
    { name: "Figma", icon: "figma", category: "Tools & Infra", color: "#F24E1E" },
    { name: "Blender", icon: "blender", category: "Tools & Infra", color: "#EA7600" },
    { name: "Unity", icon: "unity", category: "Tools & Infra", color: "#FFFFFF" },
    { name: "LM Studio", icon: "lmstudio", category: "Tools & Infra", color: "#7C3AED" },
    { name: "Ollama", icon: "ollama", category: "Tools & Infra", color: "#FFFFFF" },
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
    fieldLabel: "BIDANG KOMPETSI:",
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
    title: "Hubungi Saya untuk Diskusi",
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
    footerTagline: "Portofolio Pribadi - Eksplorasi Kode & Utilitas Sistem",
    copyright: "Seluruh hak cipta dilindungi.",
  },
}