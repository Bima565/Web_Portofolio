import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import Lenis from 'lenis'
import TurbulentWaterCanvas from './components/TurbulentWaterCanvas'
import CustomCursor from './components/CustomCursor'
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Scroll,
  ArrowUpRight,
  Clock,
  Shield,
  Zap,
  Cpu,
  Award,
  ChevronUp,
  Compass,
  Star,
  BookOpen,
  Mail,
  Feather,
  MapPin,
  Flame,
  Wind,
  Droplets,
  Mountain,
} from 'lucide-react'
import { portfolioData } from './data/portfolioData'

export default function App() {
  const { profile, about, skills, projects, certifications, contact } = portfolioData
  const [selectedQuest, setSelectedQuest] = useState(projects[0])
  const [customMsg, setCustomMsg] = useState(contact.defaultMessage)
  const [skillFilter, setSkillFilter] = useState('ALL')

  // Smooth scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // Lenis Smooth Inertia Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Skill categorization
  const filteredSkills = useMemo(() => {
    if (skillFilter === 'ALL') return skills
    if (skillFilter === 'FRONTEND') return skills.filter((s) => s.category.includes('Frontend'))
    if (skillFilter === 'SYSTEM') return skills.filter((s) => s.category.includes('Diagnostics') || s.category.includes('Software'))
    if (skillFilter === 'IOT_3D') return skills.filter((s) => s.category.includes('IoT') || s.category.includes('3D') || s.category.includes('Database') || s.category.includes('AI') || s.category.includes('DevOps'))
    return skills
  }, [skills, skillFilter])

  // Direct Click-to-Chat WhatsApp URL
  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(customMsg || contact.defaultMessage)
    return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`
  }, [contact.whatsappNumber, contact.defaultMessage, customMsg])

  const quickMessages = [
    { label: 'Diskusi Aplikasi Web & Dashboard', text: 'Halo Bima, saya ingin mendiskusikan kebutuhan pembuatan web application atau dashboard interaktif.' },
    { label: 'Peluang Kolaborasi Software & IoT', text: 'Halo Bima, saya tertarik berkolaborasi dalam proyek software engineering dan sistem IoT bersama Anda.' },
    { label: 'Konsultasi Diagnostik Sistem', text: 'Halo Bima, saya ingin berkonsultasi mengenai diagnosis performa sistem dan pemeliharaan hardware.' },
  ]

  // Element icon helper
  const getElementBadge = (element) => {
    switch (element) {
      case 'Hydro':
        return { icon: <Droplets className="w-3.5 h-3.5 text-sky-400" />, color: 'text-sky-300 bg-sky-950/70 border-sky-500/30' }
      case 'Electro':
        return { icon: <Zap className="w-3.5 h-3.5 text-purple-400" />, color: 'text-purple-300 bg-purple-950/70 border-purple-500/30' }
      case 'Anemo':
        return { icon: <Wind className="w-3.5 h-3.5 text-teal-400" />, color: 'text-teal-300 bg-teal-950/70 border-teal-500/30' }
      case 'Geo':
        return { icon: <Mountain className="w-3.5 h-3.5 text-amber-400" />, color: 'text-amber-300 bg-amber-950/70 border-amber-500/30' }
      default:
        return { icon: <Sparkles className="w-3.5 h-3.5 text-yellow-300" />, color: 'text-yellow-200 bg-yellow-950/70 border-yellow-500/30' }
    }
  }

  return (
    <div className="relative min-h-screen frieren-landscape-bg text-[#f1f5f9] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#081614]">
      {/* Interactive Starlight Cursor */}
      <CustomCursor />

      {/* 3D Falling Leaves, Frieren Blue Petals & Gentle Breeze Canvas */}
      <TurbulentWaterCanvas />

      {/* Top Sunlight Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#38bdf8] to-[#fef08a] origin-left z-[60] shadow-[0_0_12px_rgba(212,175,55,0.7)]"
        style={{ scaleX }}
      />

      {/* ============================================================== */}
      {/* 1. TOP ADVENTURER JOURNAL HEADER BAR                            */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#081614]/90 border-b border-[#d4af37]/25 px-4 sm:px-8 lg:px-12 py-3 w-full">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: Wax Seal & Journal Title */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full guild-wax-seal flex items-center justify-center text-white text-[11px] font-serif font-bold shadow-md">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-wide text-[#fef08a] font-bold">
                JURNAL PETUALANG // BIMA PRAWIRA DHARMA
              </span>
              <span className="text-[10px] font-mono text-emerald-300/80">
                {profile.academicStatus} | {profile.classGroup}
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-serif text-xs text-gray-300">
            <a href="#hero" className="hover:text-[#fef08a] transition-colors">Profil</a>
            <a href="#grimoire" className="hover:text-[#fef08a] transition-colors">Lembar Filosofi</a>
            <a href="#skills" className="hover:text-[#fef08a] transition-colors">Grimoire Talenta</a>
            <a href="#expeditions" className="hover:text-[#fef08a] transition-colors">Papan Komisi</a>
            <a href="#credentials" className="hover:text-[#fef08a] transition-colors">Piagam Resmi</a>
            <a href="#contact" className="hover:text-[#fef08a] transition-colors">Pos Burung Merpati</a>
          </nav>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#102b25] border border-[#d4af37]/40 text-xs font-serif text-[#fef08a]">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              {profile.guildRank}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b89327] text-[#081614] font-serif font-bold text-xs tracking-wide hover:brightness-110 transition-all flex items-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Hubungi</span>
            </a>
          </div>

        </div>
      </header>


      {/* ============================================================== */}
      {/* MAIN ADVENTURE CONTENT                                         */}
      {/* ============================================================== */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-16 flex flex-col gap-24 md:gap-32 relative z-10">

        {/* ============================================================== */}
        {/* 2. HERO: ADVENTURER PASSPORT & CREDENTIALS SHOWCASE             */}
        {/* ============================================================== */}
        <section id="hero" className="relative w-full flex flex-col items-center gap-8 pt-4">

          {/* Intro Heading Banner */}
          <div className="text-center max-w-3xl flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102a24]/80 border border-[#d4af37]/40 shadow-sm"
            >
              <Wind className="w-4 h-4 text-[#38bdf8]" />
              <span className="text-xs font-serif font-bold text-[#fef08a] tracking-wider uppercase">
                First-Class Mage & Software Craftsman
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#183d34] text-emerald-300">
                {profile.level}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight"
            >
              {profile.fullName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-300 text-sm md:text-lg font-serif italic max-w-2xl text-center"
            >
              "Menenun logika, merangkai kode, dan menyelesaikan setiap tantangan teknis dengan tanggung jawab penuh."
            </motion.p>
          </div>

          {/* Grand Adventurer Passport Card (Landscape Journey Presentation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="w-full max-w-4xl rounded-2xl grimoire-card border-2 border-[#d4af37]/45 p-6 sm:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
            {/* Corner Filigree Ornaments */}
            <div className="absolute top-3 left-3 text-[#d4af37]/60 text-xs font-serif select-none pointer-events-none">✦ ───</div>
            <div className="absolute top-3 right-3 text-[#d4af37]/60 text-xs font-serif select-none pointer-events-none">─── ✦</div>
            <div className="absolute bottom-3 left-3 text-[#d4af37]/60 text-xs font-serif select-none pointer-events-none">✦ ───</div>
            <div className="absolute bottom-3 right-3 text-[#d4af37]/60 text-xs font-serif select-none pointer-events-none">─── ✦</div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">

              {/* Left Column: Portrait in Antique Guild Frame */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="relative w-48 h-56 sm:w-52 sm:h-64 rounded-xl p-2 bg-gradient-to-b from-[#d4af37] via-[#214a3f] to-[#0a1a17] shadow-xl">
                  <div className="w-full h-full rounded-lg overflow-hidden relative bg-[#0d2621]">
                    <img
                      src={profile.avatar}
                      alt={profile.fullName}
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-500"
                    />
                    {/* Soft vignette overlay to blend photo */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#d4af37]/40 pointer-events-none" />
                  </div>

                  {/* Wax Seal Stamp on Portrait Corner */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full guild-wax-seal flex items-center justify-center text-white text-xs font-serif font-bold shadow-lg">
                    PAS
                  </div>
                </div>

                <div className="text-center font-serif">
                  <span className="text-xs font-bold text-[#fef08a] block">ID REGISTRASI GUILD</span>
                  <span className="text-[11px] font-mono text-gray-400">NIM: {profile.nim}</span>
                </div>
              </div>

              {/* Right Column: Passport Registry Information */}
              <div className="flex-1 w-full flex flex-col justify-between gap-5 text-left">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/25 pb-3">
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#d4af37] block">GELAR RESMI PETUALANG</span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">{profile.fullName}</h2>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#102a24] text-[#fef08a] text-xs font-serif font-bold border border-[#d4af37]/40">
                      {profile.guildRank}
                    </span>
                  </div>

                  {/* Detail Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4 text-xs font-serif">
                    <div className="p-2.5 rounded-lg bg-[#0a1a17]/70 border border-[#d4af37]/25">
                      <span className="text-gray-400 block text-[10px] font-mono">STATUS AKADEMIK:</span>
                      <span className="text-white font-bold">{profile.academicStatus}</span>
                      <span className="text-emerald-400 text-[10px] block font-mono">{profile.classGroup}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0a1a17]/70 border border-[#d4af37]/25">
                      <span className="text-gray-400 block text-[10px] font-mono">ELEMENTAL VISION:</span>
                      <span className="text-purple-300 font-bold">{profile.vision}</span>
                      <span className="text-gray-400 text-[10px] block font-mono">Afinitas Logika Komputasi</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-l-2 border-[#d4af37] pl-3 py-1 italic">
                    "{profile.bio}"
                  </p>
                </div>

                {/* Quick Action Navigation */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#expeditions"
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b89327] text-[#081614] font-serif font-bold text-xs tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
                  >
                    <Scroll className="w-4 h-4 text-[#081614]" />
                    Papan Misi & Ekspedisi
                  </a>
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-lg bg-[#0e2722] text-[#fef08a] font-serif font-bold text-xs tracking-wider border border-[#d4af37]/40 hover:bg-[#143630] transition-all flex items-center gap-2"
                  >
                    <Feather className="w-4 h-4 text-[#d4af37]" />
                    Kirim Pesan Burung Pos
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </section>


        {/* ============================================================== */}
        {/* 3. SECTION: THE OPEN GRIMOIRE TOME (FILOSOFI & REFLEKSI DIRI)   */}
        {/* ============================================================== */}
        <section id="grimoire" className="relative flex flex-col gap-6 scroll-mt-24">

          {/* Section Header */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#102b25] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              LEMBAR PERJALANAN & FILOSOFI HIDUP
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
          </div>

          {/* Open Grimoire Layout: Two-Page Book Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left Page: Narrative & Study Chronicles */}
            <div className="grimoire-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 border border-[#d4af37]/35 shadow-lg relative">
              <div className="absolute top-0 right-8 w-6 h-12 bg-[#b91c1c] shadow-md rounded-b flex items-end justify-center pb-1 text-white text-[9px] font-serif">
                ★
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-serif text-[#fef08a] font-bold border-b border-[#d4af37]/20 pb-2">
                  <Feather className="w-4 h-4 text-[#d4af37]" />
                  <span>CATATAN NARATIF PETUALANG</span>
                </div>

                <p className="text-gray-200 text-sm leading-relaxed italic border-l-2 border-[#d4af37] pl-4 py-1">
                  "{about.dialogue}"
                </p>

                {/* Educational Timeline */}
                <div className="flex flex-col gap-3.5 mt-2">
                  <span className="text-[11px] font-serif text-[#d4af37] font-bold uppercase tracking-wider">
                    Jejak Pendidikan & Pengalaman Industri
                  </span>
                  {about.education.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#091a18]/70 border border-[#d4af37]/20 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs font-serif font-bold">
                        <span className="text-white">{edu.degree}</span>
                        <span className="text-emerald-400 font-mono text-[10px]">{edu.period}</span>
                      </div>
                      <span className="text-[11px] text-[#38bdf8] font-mono">{edu.institution}</span>
                      <p className="text-xs text-gray-300 mt-1">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Interests */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[11px] font-serif text-gray-400">MINAT DAN BIDANG EKSPLORASI:</span>
                <div className="flex flex-wrap gap-1.5">
                  {about.interests.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-serif rounded bg-[#0a1c19] text-[#fef08a] border border-[#d4af37]/25"
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Page: The 4 Elemental Sigils of Character */}
            <div className="grimoire-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-5 border border-[#d4af37]/35 shadow-lg">
              <div>
                <div className="flex items-center gap-2 text-xs font-serif text-[#fef08a] font-bold border-b border-[#d4af37]/20 pb-2">
                  <Shield className="w-4 h-4 text-[#d4af37]" />
                  <span>EMPAT SELEMBAR SEGEL NILAI KERJA</span>
                </div>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Prinsip fundamental yang senantiasa dipegang dalam setiap proses belajar, kerja tim, dan penyelesaian masalah teknis.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                  {about.pillars.map((pil, idx) => {
                    const badge = getElementBadge(pil.element)
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#091a18]/80 border border-[#d4af37]/25 hover:border-[#d4af37] transition-all flex flex-col gap-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#102b25] text-[#fef08a]">
                            {pil.badge}
                          </span>
                          <span className={`inline-flex items-center gap-1 text-[11px] font-serif font-bold px-2 py-0.5 rounded-full border ${badge.color}`}>
                            {badge.icon} {pil.element}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-sm text-white">
                          {pil.title}
                        </h3>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {pil.desc}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-serif text-gray-400">
                <span>DOKUMENTASI KEPRIBADIAN</span>
                <span className="text-[#38bdf8] font-bold">TERUJI DALAM TIM</span>
              </div>
            </div>

          </div>
        </section>


        {/* ============================================================== */}
        {/* 4. SECTION: GRIMOIRE TALENTA & PENGUASAAN SIHIR TEKNIS         */}
        {/* ============================================================== */}
        <section id="skills" className="relative flex flex-col gap-6 scroll-mt-24">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#102b25] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
                <Zap className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                GRIMOIRE TALENTA & PENGUASAAN TEKNIS
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
            </div>

            {/* Category Filter Bookmark Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-serif text-xs">
              {[
                { id: 'ALL', label: 'Semua Mantra' },
                { id: 'FRONTEND', label: 'Sihir Frontend' },
                { id: 'SYSTEM', label: 'Diagnostik & Sistem' },
                { id: 'IOT_3D', label: 'IoT & Pipeline 3D' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSkillFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                    skillFilter === tab.id
                      ? 'bg-[#d4af37] text-[#081614] shadow-md'
                      : 'bg-[#0f2622] text-gray-300 border border-[#d4af37]/30 hover:border-[#d4af37]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Spell Slots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const badge = getElementBadge(skill.element)
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="grimoire-card rounded-xl p-5 border border-[#d4af37]/30 grimoire-card-hover flex flex-col justify-between"
                  >
                    <div>
                      {/* Element Affinity & Spell Title */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-serif font-bold px-2 py-0.5 rounded-full border ${badge.color}`}>
                          {badge.icon} {skill.element}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#fef08a]">
                          {skill.level}%
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-sm text-white mb-1.5 leading-snug">
                        {skill.name}
                      </h3>

                      <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        {skill.desc}
                      </p>
                    </div>

                    <div>
                      {/* Mana Gauge Bar */}
                      <div className="w-full h-2 bg-[#091a18] rounded-full overflow-hidden border border-[#d4af37]/30 p-0.5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#d4af37] via-[#38bdf8] to-[#fef08a] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>

                      <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-gray-400">
                        <span>KAT: {skill.category}</span>
                        <span className="text-emerald-400 font-bold">TERUJI</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </section>


        {/* ============================================================== */}
        {/* 5. SECTION: PAPAN MISI & EKSPEDISI GUILD (PROYEK NYATA)         */}
        {/* ============================================================== */}
        <section id="expeditions" className="relative flex flex-col gap-6 scroll-mt-24">

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#102b25] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
                <Scroll className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                PAPAN KOMISI & EKSPEDISI GUILD
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
            </div>
            <span className="text-xs font-serif text-[#fef08a] tracking-wide hidden sm:inline">
              ✦ {projects.length} Komisi Terselesaikan
            </span>
          </div>

          {/* Expedition Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((quest) => (
              <div
                key={quest.id}
                className="grimoire-card rounded-2xl p-6 border border-[#d4af37]/35 grimoire-card-hover flex flex-col justify-between gap-4 relative overflow-hidden"
              >
                {/* Top Badge: Rank & Seal */}
                <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#b91c1c] text-white flex items-center justify-center text-[10px] font-serif font-bold shadow">
                      ✓
                    </span>
                    <span className="font-serif text-xs font-bold text-[#fef08a]">
                      {quest.rank}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#102b25] text-[#38bdf8] border border-[#38bdf8]/30">
                    {quest.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg font-serif font-bold text-white leading-snug">
                    {quest.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {quest.description}
                  </p>

                  {/* Impact Box */}
                  <div className="p-3 rounded-lg bg-[#081715]/80 border-l-2 border-[#d4af37] text-xs text-gray-300 mt-1">
                    <span className="text-[#fef08a] font-serif font-bold block text-[11px] mb-0.5">HASIL & DAMPAK EKSPEDISI:</span>
                    {quest.impact}
                  </div>
                </div>

                {/* Tech Badges & Action */}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {quest.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0c2420] text-[#38bdf8] border border-[#38bdf8]/25"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-2 rounded-lg bg-[#102a24] text-[#fef08a] font-serif font-bold text-xs tracking-wide border border-[#d4af37]/40 hover:bg-[#153830] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Konsultasikan Proyek Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </section>


        {/* ============================================================== */}
        {/* 6. SECTION: PIAGAM & LISENSI RESMI (KREDENSIAL NEGARA & GLOBAL) */}
        {/* ============================================================== */}
        <section id="credentials" className="relative flex flex-col gap-6 scroll-mt-24">

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#102b25] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
                <Award className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                PIAGAM & LISENSI RESMI
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
            </div>
            <span className="text-xs font-serif text-[#fef08a] tracking-wide hidden sm:inline">
              ✦ Standar Sertifikasi Kompetensi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="grimoire-card rounded-2xl p-6 sm:p-7 border border-[#d4af37]/40 shadow-lg flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xs font-bold text-[#d4af37] flex items-center gap-1">
                      <Scroll className="w-3.5 h-3.5" /> {cert.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#14352e] text-[#fef08a] border border-[#d4af37]/35">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-bold text-[#38bdf8]">
                    {cert.issuer}
                  </div>

                  <div className="text-[11px] font-mono text-gray-400">
                    {cert.period}
                  </div>

                  <div className="p-3 rounded-lg bg-[#081715]/70 border border-[#d4af37]/20 text-xs text-gray-300 mt-1">
                    <strong className="text-[#fef08a] font-serif text-[11px] block mb-0.5">BIDANG KOMPETENSI RESMI:</strong>
                    {cert.skills}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-serif">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Kredensial Valid & Terverifikasi
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </section>


        {/* ============================================================== */}
        {/* 7. SECTION: POS BURUNG MERPATI & HUBUNGI SAYA VIA WHATSAPP      */}
        {/* ============================================================== */}
        <section id="contact" className="relative flex flex-col gap-6 scroll-mt-24 pb-12">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#102b25] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
              <Mail className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              STASIUN POS BURUNG MERPATI // HUBUNGI SAYA
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
          </div>

          <div className="grimoire-card rounded-2xl p-6 sm:p-10 border-2 border-[#d4af37]/40 shadow-2xl flex flex-col gap-7">

            {/* Header copy */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-serif text-[#d4af37] tracking-widest uppercase font-bold flex items-center gap-1.5">
                ✦ TAUTAN KOMUNIKASI LANGSUNG
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                Siap Berkolaborasi atau Mendiskusikan Proyek?
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Kirim pesan langsung melalui tautan WhatsApp resmi saya. Anda bisa memilih template pesan instan di bawah atau menuliskan pesan kustom sendiri.
              </p>
            </div>

            {/* Quick Templates */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-serif text-[#fef08a] font-bold">PILIH TEMPLATE PESAN INSTAN:</span>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCustomMsg(item.text)}
                    className="px-3.5 py-2 text-xs font-serif rounded-lg bg-[#091b18] text-gray-200 border border-[#d4af37]/30 hover:border-[#fef08a] hover:bg-[#123029] hover:text-white transition-all text-left"
                  >
                    ✦ {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Preview Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="custom-msg" className="text-xs font-serif text-[#fef08a] font-bold">
                PRATINJAU PESAN (AKAN TERKIRIM LANGSUNG KE WHATSAPP):
              </label>
              <textarea
                id="custom-msg"
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full p-4 rounded-xl bg-[#071513] border border-[#d4af37]/40 focus:border-[#fef08a] text-white text-sm font-sans focus:outline-none transition-colors shadow-inner"
              />
            </div>

            {/* Prominent WhatsApp Dispatch Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c98c] to-[#bca16d] text-[#081614] font-serif font-bold text-base md:text-lg tracking-wide rounded-xl shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6 text-[#081614] group-hover:scale-110 transition-transform" />
                Hubungi Saya via WhatsApp
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="font-bold text-white">Tautan Resmi Terverifikasi:</span>
                <span className="text-[#38bdf8]">wa.me/{contact.whatsappNumber}</span>
              </div>
            </div>

            {/* Social & Channel Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-serif text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span className="text-gray-300 font-mono">{contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#091a18] border border-[#d4af37]/30 text-[#fef08a] hover:border-[#fef08a] hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" /> GitHub (Bima565)
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#091a18] border border-[#d4af37]/30 text-[#fef08a] hover:border-[#fef08a] hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* Floating Scroll to Top */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#102b25] border border-[#d4af37] text-[#fef08a] flex items-center justify-center shadow-lg hover:bg-[#d4af37] hover:text-[#081614] transition-all"
        title="Kembali ke Puncak Jurnal"
      >
        <ChevronUp className="w-5 h-5" />
      </a>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/20 bg-[#05100e] py-6 px-4 sm:px-8 text-center font-serif text-xs text-gray-400 w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>CATATAN PERJALANAN // BIMA PRAWIRA DHARMA : D3 TEKNOLOGI INFORMASI</span>
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <span>✦ KELAS 5B</span>
            <span>✦ TRANQUIL REALM ARCHIVE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
