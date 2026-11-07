import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react'
import Lenis from 'lenis'
import TurbulentWaterCanvas from './components/TurbulentWaterCanvas'
import {
  MessageCircle,
  Send,
  ExternalLink,
  Mail,
  Code2,
  Sparkles,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  Clock,
  Shield,
  Zap,
  Cpu,
  Wrench,
  Activity,
  Layers,
  ChevronRight,
  Flame,
  Award,
  ChevronUp
} from 'lucide-react'
import { portfolioData } from './data/portfolioData'

export default function App() {
  const { profile, about, troubleshootingCases, skills, projects, certifications, contact } = portfolioData
  const [selectedQuest, setSelectedQuest] = useState(projects[0])
  const [customMsg, setCustomMsg] = useState(contact.defaultMessage)
  const [skillFilter, setSkillFilter] = useState('ALL')
  const [activeTrouble, setActiveTrouble] = useState(0)

  // Scroll Progress Logic for Continuous Animation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // Lenis Inertia Smooth Scrolling (Turbulent.ca style)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
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

  // Filter skills
  const filteredSkills = useMemo(() => {
    if (skillFilter === 'ALL') return skills
    if (skillFilter === 'FRONTEND') return skills.filter((s) => s.category.includes('Frontend'))
    if (skillFilter === 'SYSTEM') return skills.filter((s) => s.category.includes('Diagnostics') || s.category.includes('System') || s.category.includes('Software'))
    if (skillFilter === 'IOT_3D') return skills.filter((s) => s.category.includes('IoT') || s.category.includes('3D') || s.category.includes('Database') || s.category.includes('AI'))
    return skills
  }, [skills, skillFilter])

  // Official Click-to-Chat WhatsApp URL
  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(customMsg || contact.defaultMessage)
    return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`
  }, [contact.whatsappNumber, contact.defaultMessage, customMsg])

  const quickMessages = [
    { label: 'Tanya Proyek Web / Dashboard', text: 'Halo Bima, saya ingin mendiskusikan kebutuhan pembuatan web application/dashboard interaktif.' },
    { label: 'Peluang Magang & Kolaborasi', text: 'Halo Bima, saya tertarik berkolaborasi dalam proyek software & IoT bersama Anda.' },
    { label: 'Diskusi Troubleshooting Sistem', text: 'Halo Bima, saya ingin konsultasi mengenai diagnosis performa sistem & hardware.' },
  ]

  return (
    <div className="relative min-h-screen bg-[#020713] text-white overflow-x-hidden selection:bg-[#ff184c] selection:text-white p3r-water-bg p3r-scanlines">
      {/* Three.js 3D Floating Shards & Underwater Sparks (Persona 3 Reload Menu spec) */}
      <TurbulentWaterCanvas />

      {/* TOP SCROLL PROGRESS BAR (P3R Kinetic Progress Tracker) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0048d0] via-[#00d2ff] to-[#ff184c] origin-left z-[60] shadow-[0_0_12px_#00d2ff]"
        style={{ scaleX }}
      />

      {/* Background Animated Watermark Typography with Parallax Drift */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center select-none overflow-hidden z-0">
        <motion.span
          className="text-[24vw] font-black italic tracking-tighter text-white transform -rotate-12 translate-y-8"
          animate={{ x: [-25, 25, -25] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          PERSONA 3
        </motion.span>
      </div>

      {/* ============================================================== */}
      {/* TOP HUD BAR / P3R CALENDAR, CLOCK & STAT GAUGES                */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#020713]/85 border-b border-[#00d2ff]/30 px-3 md:px-8 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">

          {/* Left: SEES ID & Rig Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              className="w-3.5 h-3.5 bg-[#00d2ff] rotate-45 shadow-[0_0_12px_#00d2ff]"
              animate={{ scale: [1, 1.25, 1], rotate: [45, 225, 45] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="flex flex-col">
              <span className="font-mono text-[11px] md:text-xs tracking-widest text-[#00d2ff] font-bold">
                SEES ARCHIVE // NIM: {profile.nim}
              </span>
              <span className="hidden lg:inline text-[9px] font-mono text-gray-400">
                {profile.hud.rig}
              </span>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-black italic bg-[#ff184c] text-white transform -skew-x-12 border border-white/60 shadow-[2px_2px_0px_#000000]">
              {profile.classGroup}
            </span>
          </div>

          {/* Right: Date, Moon Phase & HP/SP Bars */}
          <div className="flex items-center gap-3">
            {/* Live Gauges (HP/SP) */}
            <div className="hidden md:flex items-center gap-2 font-mono text-[11px]">
              <div className="flex items-center gap-1">
                <span className="text-[#00d2ff] font-bold">HP</span>
                <div className="w-16 h-2 bg-[#050e24] border border-[#00d2ff]/40 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0048d0] to-[#00d2ff] w-full"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#ffcc00] font-bold">SP</span>
                <div className="w-12 h-2 bg-[#050e24] border border-[#ffcc00]/40 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ff184c] to-[#ffcc00] w-full"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>

            {/* Calendar & Moon Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#071330] border-2 border-[#00d2ff]/60 px-3 py-1 text-right transform -skew-x-12 shadow-[3px_3px_0px_#000000] cursor-default"
            >
              <div className="text-[9px] text-[#00d2ff] font-mono tracking-wider font-bold">
                DATE // MOON PHASE
              </div>
              <div className="text-xs md:text-sm font-black italic tracking-wide text-white flex items-center gap-2">
                <span>11/07 SAT</span>
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-[#ffcc00] inline-block shadow-[0_0_8px_#ffcc00]"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                <span className="text-[10px] text-[#ffcc00] font-normal hidden sm:inline">FULL MOON</span>
              </div>
            </motion.div>
          </div>

        </div>
      </header>


      {/* ============================================================== */}
      {/* MAIN CONTAINER                                                 */}
      {/* ============================================================== */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-14 flex flex-col gap-20 md:gap-32 relative z-10">

        {/* ============================================================== */}
        {/* 1. HERO SECTION (Ketentuan 3: Foto, Nama, Julukan, Ringkasan) */}
        {/* ============================================================== */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-2 md:pt-6"
        >

          {/* Background Watermark Section Tag */}
          <div className="absolute -left-6 -top-10 text-7xl md:text-9xl font-black italic text-white/5 pointer-events-none select-none tracking-tighter">
            PROTAGONIST
          </div>

          {/* Left: Text & Identification */}
          <div className="flex-1 flex flex-col gap-4 text-center lg:text-left z-10">

            {/* Status Pills with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="px-3 py-1 bg-[#0048d0] text-[#00d2ff] text-xs font-black italic tracking-wider transform -skew-x-12 border border-[#00d2ff]/60 shadow-[2px_2px_0px_#000000]">
                {profile.academicStatus}
              </span>
              <span className="px-3 py-1 bg-[#ff184c] text-white text-xs font-mono font-bold tracking-wider transform -skew-x-12 border border-white/60 shadow-[2px_2px_0px_#000000]">
                NIM: {profile.nim}
              </span>
              <span className="px-3 py-1 bg-[#071330] text-[#ffcc00] text-xs font-mono font-bold tracking-wider transform -skew-x-12 border border-[#ffcc00]/40 shadow-[2px_2px_0px_#000000]">
                {profile.level}
              </span>
            </motion.div>

            {/* Main Headline (Bold, Slanted, Kinetic) */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.92] text-white"
            >
              {profile.fullName}
            </motion.h1>

            {/* Nickname / Title Ribbon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative inline-block self-center lg:self-start my-1"
            >
              <span className="block px-4 py-2 bg-[#00d2ff] text-[#020713] font-black italic text-sm md:text-lg tracking-wide transform -skew-x-12 shadow-[5px_5px_0px_#000000] border-2 border-white">
                {profile.nickname}
              </span>
            </motion.div>

            {/* Brief Summary (1-2 sentences requirement) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl self-center lg:self-start font-medium border-l-4 border-[#00d2ff] pl-4 py-1.5 my-2 bg-gradient-to-r from-[#00d2ff]/15 via-[#0048d0]/10 to-transparent"
            >
              {profile.bio}
            </motion.p>

            {/* Quick Action CTA Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.05, skewX: -12 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group relative px-7 py-3.5 bg-[#ff184c] text-white font-black italic text-sm md:text-base tracking-wider uppercase transform -skew-x-12 border-2 border-white shadow-[5px_5px_0px_#000000] hover:bg-white hover:text-[#020713] transition-all duration-150 flex items-center gap-2"
              >
                <span className="inline-block transform skew-x-12 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-white group-hover:text-[#020713] animate-bounce" />
                  Hubungi via WhatsApp
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, skewX: -12 }}
                whileTap={{ scale: 0.98 }}
                href="#troubleshooting"
                className="px-6 py-3.5 bg-[#071330] text-[#00d2ff] font-black italic text-sm md:text-base tracking-wider uppercase transform -skew-x-12 border-2 border-[#00d2ff]/60 hover:bg-[#00d2ff] hover:text-[#020713] transition-all duration-150 flex items-center gap-2 shadow-[4px_4px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Lab Investigasi
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, skewX: -12 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3.5 bg-[#030a1c] text-gray-300 font-black italic text-sm md:text-base tracking-wider uppercase transform -skew-x-12 border border-white/30 hover:border-white hover:text-white transition-all duration-150 flex items-center gap-2 shadow-[3px_3px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Quest Log
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Floating Character / Profile Frame with Kinetic Pulse */}
          <div className="relative flex-shrink-0 w-64 h-64 sm:w-76 sm:h-76 lg:w-84 lg:h-84 flex items-center justify-center">

            {/* Dynamic Pulsing Aura */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#0048d0]/50 to-[#00d2ff]/40 rounded-full blur-3xl"
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* P3R Diagonal Frame with Breathing Motion */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [2, 1, 2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full h-full p-2.5 bg-gradient-to-b from-[#00d2ff] via-[#0048d0] to-[#020713] transform -skew-x-6 rotate-2 shadow-[10px_10px_0px_#000000] border-2 border-white"
            >
              <div className="w-full h-full bg-[#050e24] overflow-hidden relative flex items-center justify-center">
                {/* Profile Avatar with Atlus Blue Tint Effect */}
                <img
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-top filter contrast-125 brightness-105 hover:scale-105 transition-transform duration-300"
                />

                {/* Shimmer line across photo */}
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

                {/* Corner Slanted Tag */}
                <div className="absolute bottom-0 right-0 bg-[#ff184c] text-white text-[10px] font-black italic tracking-widest px-3 py-1 transform -skew-x-12 border-t-2 border-l-2 border-white shadow-[2px_2px_0px_#000000]">
                  OPERATIVE // P3R SPEC
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>


        {/* ============================================================== */}
        {/* 2. ABOUT ME SECTION (Velvet Room / Dialogue Box Style)        */}
        {/* ============================================================== */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-6 scroll-mt-20"
        >

          {/* Section Header Banner with kinetic slide */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
            >
              <span className="inline-block transform skew-x-12">TENTANG SAYA // VELVET ARCHIVE</span>
            </motion.div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/60 to-transparent" />
          </div>

          {/* Dialogue Box Container */}
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative p-6 sm:p-8 bg-[#071330]/90 border-2 border-[#00d2ff]/70 p3r-clip-dialog backdrop-blur-md shadow-[8px_8px_0px_#000000] flex flex-col gap-6"
          >

            {/* Speaker Tag */}
            <div className="flex items-center gap-2 -mb-2">
              <span className="px-3.5 py-1 bg-[#00d2ff] text-[#020713] font-black italic text-xs tracking-widest uppercase transform -skew-x-12 border border-white">
                TALK
              </span>
              <span className="text-white font-black italic tracking-wider text-base">
                {profile.fullName}
              </span>
              <span className="text-xs font-mono text-[#ffcc00] hidden sm:inline">
                [{profile.academicStatus}]
              </span>
            </div>

            {/* Dialogue Text */}
            <p className="text-gray-100 text-sm md:text-base leading-relaxed italic border-l-4 border-[#ff184c] pl-4 py-1 bg-white/[0.02]">
              "{about.dialogue}"
            </p>

            {/* 4 Pillars of Work Ethic & Character (Staggered On Scroll) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {about.pillars.map((pil, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -6, borderColor: '#00d2ff', scale: 1.02 }}
                  className="p-3.5 bg-[#020713]/85 border border-white/20 transform -skew-x-3 transition-colors shadow-[3px_3px_0px_#000000] flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#0048d0] text-[#00d2ff]">
                      {pil.badge}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#ffcc00]" />
                  </div>
                  <h4 className="font-black italic text-xs sm:text-sm text-white">
                    {pil.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    {pil.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education & Interests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-[#020713]/70 border border-[#00d2ff]/30 transform -skew-x-3"
              >
                <div className="flex items-center gap-2 mb-3 text-[#00d2ff]">
                  <Code2 className="w-4 h-4" />
                  <span className="font-black italic text-xs tracking-wider uppercase">Latar Belakang Pendidikan & Pengalaman</span>
                </div>
                <div className="flex flex-col gap-3">
                  {about.education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5 border-l-2 border-[#00d2ff]/40 pl-3">
                      <span className="font-bold text-white text-xs sm:text-sm">{edu.degree}</span>
                      <span className="text-[11px] text-[#00d2ff] font-mono">{edu.institution} ({edu.period})</span>
                      <p className="text-xs text-gray-400 mt-1">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Interests Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-[#020713]/70 border border-[#00d2ff]/30 transform -skew-x-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#ffcc00]">
                    <Zap className="w-4 h-4" />
                    <span className="font-black italic text-xs tracking-wider uppercase">Nilai Personal & Minat Eksplorasi</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {about.interests.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold bg-[#071330] text-gray-200 border border-[#00d2ff]/25 hover:border-[#ff184c] hover:text-white transition-all transform -skew-x-3"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>MINDSET: CONTINUOUS LEARNING</span>
                  <span className="text-[#00d2ff] font-bold">READY TO COLLABORATE</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom guide prompt */}
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 border-t border-white/10 pt-3">
              <span>SOCIAL LINK // STATUS: READY TO COMMUNICATE</span>
              <span className="text-[#00d2ff] flex items-center gap-1 font-bold">
                <Clock className="w-3.5 h-3.5" /> RESPON CEPAT VIA WHATSAPP
              </span>
            </div>
          </motion.div>
        </motion.section>


        {/* ============================================================== */}
        {/* 3. SHOWCASE LAB: HARDWARE & OS TROUBLESHOOTING (FITUR KHUSUS) */}
        {/* ============================================================== */}
        <motion.section
          id="troubleshooting"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-6 scroll-mt-20"
        >

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="px-5 py-1.5 bg-[#071330] text-[#00d2ff] font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#ffcc00] shadow-[4px_4px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12">LAB INVESTIGASI // DIAGNOSTICS & SYSTEM</span>
              </motion.div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
            </div>
            <span className="text-xs font-mono text-[#ffcc00] tracking-widest hidden md:inline">
              ROOT-CAUSE ANALYSIS
            </span>
          </div>

          {/* Interactive Case Study Grid with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {troubleshootingCases.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveTrouble(idx)}
                className={`p-4 bg-[#071330]/90 border-2 transition-all cursor-pointer shadow-[5px_5px_0px_#000000] flex flex-col justify-between ${
                  activeTrouble === idx ? 'border-[#ff184c] bg-[#0b1736]' : 'border-[#00d2ff]/30'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-[#ff184c] italic">
                      /{c.code}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#0048d0] text-white">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="font-black italic text-sm text-white leading-tight">
                    {c.title}
                  </h3>

                  <span className="text-[10px] font-mono text-[#00d2ff]">
                    CATEGORY: {c.category}
                  </span>

                  <p className="text-xs text-gray-300 leading-relaxed mt-1">
                    {c.detail}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>SPECS VERIFIED</span>
                  <span className="text-[#00d2ff] font-bold flex items-center gap-0.5">
                    DETAILS <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* ============================================================== */}
        {/* 4. SKILLS SECTION (Persona Stats & Affinity Style)           */}
        {/* ============================================================== */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-6 scroll-mt-20"
        >

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12">KEAHLIAN // SKILL AFFINITIES</span>
              </motion.div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {['ALL', 'FRONTEND', 'SYSTEM', 'IOT_3D'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSkillFilter(tab)}
                  className={`px-3 py-1 font-bold transform -skew-x-12 border transition-all ${
                    skillFilter === tab
                      ? 'bg-[#00d2ff] text-[#020713] border-white shadow-[2px_2px_0px_#000000]'
                      : 'bg-[#071330] text-gray-300 border-[#00d2ff]/30 hover:border-[#00d2ff]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  whileHover={{ y: -6, borderColor: '#ff184c', scale: 1.02 }}
                  className="relative p-4 bg-[#071330]/85 border-2 border-[#00d2ff]/40 transform -skew-x-3 transition-colors shadow-[5px_5px_0px_#000000] group flex flex-col justify-between"
                >
                  <div>
                    {/* Stat Symbol & Title */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center bg-[#0048d0] text-[#00d2ff] font-black text-xs italic border border-[#00d2ff] shadow-[1px_1px_0px_#000000]">
                          {skill.stat}
                        </span>
                        <span className="font-bold text-sm tracking-wide text-white group-hover:text-[#00d2ff] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#ffcc00]">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-300 leading-snug mb-3">
                      {skill.desc}
                    </p>
                  </div>

                  <div>
                    {/* Persona Gauge Bar with Dynamic Fill Animation */}
                    <div className="w-full h-2.5 bg-[#020713] border border-white/30 p-0.5 relative overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0048d0] via-[#00d2ff] to-[#ff184c]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      />
                      <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer" />
                    </div>

                    <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-gray-400">
                      <span>CAT: {skill.category}</span>
                      <span className="text-[#00d2ff] font-bold">READY</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>


        {/* ============================================================== */}
        {/* 5. PROJECTS / QUEST LOG (Persona 3 Reload Request List)       */}
        {/* ============================================================== */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-6 scroll-mt-20"
        >

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#ff184c] shadow-[4px_4px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12">PORTOFOLIO // QUEST BOARD</span>
              </motion.div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
            </div>
            <span className="text-xs font-mono text-[#00d2ff] tracking-widest">
              REQUESTS: {projects.length} LOGGED
            </span>
          </div>

          {/* Interactive Quest Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#071330]/90 border-2 border-[#00d2ff]/50 p-4 sm:p-6 backdrop-blur-md shadow-[8px_8px_0px_#000000]">

            {/* Left: Quest List Table */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <div className="grid grid-cols-12 text-[11px] font-mono text-gray-400 pb-2 border-b border-white/10 px-3">
                <span className="col-span-2">NO.</span>
                <span className="col-span-7">JUDUL PROYEK / QUEST</span>
                <span className="col-span-3 text-right">STATUS</span>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {projects.map((quest, idx) => {
                  const isSelected = selectedQuest.id === quest.id
                  return (
                    <motion.button
                      key={quest.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      whileHover={{ x: 6 }}
                      onClick={() => setSelectedQuest(quest)}
                      className={`w-full text-left grid grid-cols-12 items-center px-3 py-3 transition-all duration-150 transform -skew-x-6 border-2 ${
                        isSelected
                          ? 'bg-white text-[#020713] font-black border-white shadow-[5px_5px_0px_#ff184c]'
                          : 'bg-[#020713]/80 text-gray-200 border-[#00d2ff]/30 hover:border-[#00d2ff] hover:bg-[#0b1736]'
                      }`}
                    >
                      <span className={`col-span-2 font-mono text-xs italic ${isSelected ? 'text-[#ff184c]' : 'text-[#00d2ff]'}`}>
                        /{quest.id}
                      </span>
                      <span className="col-span-7 text-xs sm:text-sm font-bold truncate pr-2">
                        {quest.title}
                      </span>
                      <div className="col-span-3 flex justify-end">
                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider ${
                            quest.status === 'Done'
                              ? isSelected
                                ? 'bg-[#020713] text-[#00d2ff]'
                                : 'bg-[#00d2ff] text-[#020713]'
                              : 'bg-[#ff184c] text-white'
                          }`}
                        >
                          ✓ {quest.status}
                        </span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Right: Selected Quest Details (Inspect Card) */}
            <div className="lg:col-span-5 p-5 bg-[#020713]/90 border-2 border-[#00d2ff]/60 flex flex-col justify-between shadow-[5px_5px_0px_#000000]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedQuest.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono text-[#00d2ff] font-bold">
                      QUEST DETAILS // /{selectedQuest.id}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0048d0] text-white font-bold">
                      {selectedQuest.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black italic text-white leading-tight">
                    {selectedQuest.title}
                  </h3>

                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {selectedQuest.description}
                  </p>

                  {/* Impact highlight */}
                  <div className="p-2.5 bg-[#071330] border-l-2 border-[#ffcc00] text-[11px] text-gray-300">
                    <span className="text-[#ffcc00] font-bold font-mono block">OUTCOME / IMPACT:</span>
                    {selectedQuest.impact}
                  </div>

                  {/* Tech Stacks */}
                  <div className="mt-1">
                    <span className="block text-[10px] font-mono text-gray-400 mb-1">
                      TECH IMPLEMENTATION:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedQuest.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#071330] text-[#00d2ff] text-[11px] font-mono border border-[#00d2ff]/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" /> VERIFIED WORK
                </span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedQuest.link}
                  className="px-4 py-1.5 bg-[#00d2ff] text-[#020713] font-black italic text-xs tracking-wider uppercase transform -skew-x-12 hover:bg-[#ff184c] hover:text-white transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#000000]"
                >
                  <span className="inline-block transform skew-x-12 flex items-center gap-1">
                    Buka Proyek <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              </div>
            </div>

          </div>
        </motion.section>


        {/* ============================================================== */}
        {/* 6. CERTIFICATIONS (Ketentuan 3: Sertifikat Resmi BNSP & Cisco) */}
        {/* ============================================================== */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-6 scroll-mt-20"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#ffcc00] shadow-[4px_4px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-12">LISENSI & SERTIFIKASI // CERTIFIED</span>
              </motion.div>
              <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
            </div>
            <span className="text-xs font-mono text-[#ffcc00] tracking-widest hidden sm:inline">
              OFFICIAL CREDENTIALS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -6, borderColor: '#00d2ff', scale: 1.02 }}
                className="p-5 bg-[#071330]/90 border-2 border-[#00d2ff]/40 shadow-[6px_6px_0px_#000000] flex flex-col justify-between transform -skew-x-3 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-[#ff184c] italic">
                      /{cert.code}
                    </span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#ffcc00] text-[#020713]">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black italic text-white leading-tight">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-bold text-[#00d2ff]">
                    {cert.issuer}
                  </div>

                  <div className="text-[11px] font-mono text-gray-400">
                    {cert.period}
                  </div>

                  <p className="text-xs text-gray-300 mt-1">
                    <strong className="text-gray-400 font-mono text-[10px] block">BIDANG KOMPETENSI:</strong>
                    {cert.skills}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Kredensial Valid
                  </span>
                  <span className="text-gray-400">
                    STATUS: {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* ============================================================== */}
        {/* 7. CONTACT & WHATSAPP CTA (Ketentuan 3: CTA WhatsApp Resmi)  */}
        {/* ============================================================== */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col gap-6 scroll-mt-20 pb-12"
        >

          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="px-5 py-1.5 bg-[#ff184c] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-white shadow-[4px_4px_0px_#000000]"
            >
              <span className="inline-block transform skew-x-12">HUBUNGI SAYA // EVOKER COMMAND CTA</span>
            </motion.div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#ff184c]/60 to-transparent" />
          </div>

          {/* CTA Box with Persona Red & Blue contrast */}
          <div className="relative p-6 sm:p-10 bg-gradient-to-br from-[#071330] via-[#050e24] to-[#020713] border-2 border-[#00d2ff] shadow-[10px_10px_0px_#000000] flex flex-col gap-8">

            {/* Header copy */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#00d2ff] tracking-widest uppercase font-bold">
                DIRECT WHATSAPP COMMUNICATION
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                Siap Berkolaborasi atau Diskusi Proyek?
              </h2>
              <p className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed">
                Klik tombol di bawah untuk langsung membuka chat WhatsApp resmi saya. Anda bisa memilih template pesan instan atau menulis pesan kustom langsung dari sini.
              </p>
            </div>

            {/* Quick Template Chips */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-gray-400">PILIH TEMPLATE PESAN INSTAN:</span>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((item, idx) => (
                  <motion.button
                    key={idx}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCustomMsg(item.text)}
                    className="px-3.5 py-2 text-xs font-bold bg-[#071330] text-gray-200 border border-[#00d2ff]/40 hover:border-[#ff184c] hover:bg-[#ff184c] hover:text-white transform -skew-x-6 transition-all shadow-[2px_2px_0px_#000000]"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Interactive Message Preview Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="custom-msg" className="text-xs font-mono text-[#00d2ff] font-bold">
                PRATINJAU PESAN (AKAN DIKIRIM KE WHATSAPP):
              </label>
              <textarea
                id="custom-msg"
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full p-3.5 bg-[#020713] border-2 border-white/20 focus:border-[#00d2ff] text-white text-sm font-medium focus:outline-none transition-colors shadow-inner"
              />
            </div>

            {/* BIG PROMINENT WHATSAPP CTA BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.05, skewX: -12 }}
                whileTap={{ scale: 0.96 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 bg-[#ff184c] text-white font-black italic text-base md:text-lg tracking-wider uppercase transform -skew-x-12 border-2 border-white shadow-[6px_6px_0px_#000000] hover:bg-white hover:text-[#020713] hover:border-[#ff184c] transition-all duration-150 flex items-center justify-center gap-3 group"
              >
                <span className="inline-block transform skew-x-12 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-white group-hover:text-[#020713] animate-bounce" />
                  Hubungi Saya via WhatsApp
                </span>
              </motion.a>

              {/* Verified WhatsApp Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="font-bold text-white">Tautan Resmi Terverifikasi:</span>
                <span className="text-[#00d2ff]">wa.me/{contact.whatsappNumber}</span>
              </div>
            </div>

            {/* Secondary Direct Channels */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00d2ff]" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#020713] border border-[#00d2ff]/40 text-[#00d2ff] hover:border-[#ff184c] hover:text-white transition-all transform -skew-x-6 flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" /> GitHub (Bima565)
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#020713] border border-[#00d2ff]/40 text-[#00d2ff] hover:border-[#ff184c] hover:text-white transition-all transform -skew-x-6 flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" /> LinkedIn
                </motion.a>
              </div>
            </div>

          </div>
        </motion.section>

      </main>

      {/* FLOATING ACTION: SCROLL TO TOP WITH KINETIC HOVER */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#071330] border-2 border-[#00d2ff] text-[#00d2ff] flex items-center justify-center transform -skew-x-12 shadow-[4px_4px_0px_#000000] hover:bg-[#ff184c] hover:text-white hover:border-white transition-colors"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-5 h-5 transform skew-x-12" />
      </motion.a>

      {/* ============================================================== */}
      {/* FOOTER / P3R CONTROLLER COMMAND GUIDE                         */}
      {/* ============================================================== */}
      <footer className="border-t border-[#00d2ff]/30 bg-[#01040d] py-5 px-4 text-center font-mono text-xs text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>TUGAS INDIVIDU PEMBUATAN LANDING PAGE PROFIL // D3 TEKNOLOGI INFORMASI</span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#00d2ff] font-bold">
            <span className="hover:text-white transition-colors">(A) INSPECT</span>
            <span className="hover:text-white transition-colors">(B) WHATSAPP</span>
            <span className="hover:text-white transition-colors">(X) DIAGNOSTICS</span>
            <a href="#hero" className="hover:text-[#ff184c] transition-colors">(Y) TOP</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
