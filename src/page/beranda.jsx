import { useState, useMemo, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Lenis from 'lenis'
import TurbulentWaterCanvas from '../components/TurbulentWaterCanvas'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificationsSection from '../components/CertificationsSection'
import FooterContact from '../components/FooterContact'
import ScrollToTop from '../components/ScrollToTop'
import { portfolioData } from '../data/portfolioData'

export default function Beranda() {
  const { profile, about, skills, projects, certifications, contact } = portfolioData
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [customMsg, setCustomMsg] = useState(contact.defaultMessage)
  const [skillFilter, setSkillFilter] = useState('SEMUA')

  // Scroll Progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
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
    if (skillFilter === 'SEMUA') return skills
    if (skillFilter === 'FRONTEND') return skills.filter((s) => s.category.includes('Frontend'))
    if (skillFilter === 'IOT') return skills.filter((s) => s.category.includes('IoT'))
    if (skillFilter === 'SISTEM') return skills.filter((s) => s.category.includes('Sistem'))
    if (skillFilter === 'DATABASE') return skills.filter((s) => s.category.includes('Database'))
    return skills
  }, [skills, skillFilter])

  // Click-to-Chat WhatsApp URL
  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(customMsg || contact.defaultMessage)
    return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`
  }, [contact.whatsappNumber, contact.defaultMessage, customMsg])

  const quickMessages = [
    {
      label: 'Tanya Pembuatan Web / Dashboard',
      text: 'Halo Bima, saya ingin berdiskusi mengenai kebutuhan pembuatan aplikasi web atau dashboard interaktif.',
    },
    {
      label: 'Diskusi Integrasi IoT & Sistem',
      text: 'Halo Bima, saya ingin berdiskusi mengenai implementasi IoT atau integrasi sistem perangkat lunak.',
    },
    {
      label: 'Peluang Magang & Kolaborasi',
      text: 'Halo Bima, saya tertarik berdiskusi mengenai peluang kolaborasi teknis bersama Anda.',
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#020713] text-white overflow-x-hidden selection:bg-[#ff184c] selection:text-white p3r-water-bg flex flex-col justify-between">
      <CustomCursor />
      <TurbulentWaterCanvas />

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0048d0] via-[#00d2ff] to-[#ff184c] origin-left z-[60] shadow-[0_0_10px_#00d2ff]"
        style={{ scaleX }}
      />

      {/* Header Navigation */}
      <Navbar profile={profile} whatsappUrl={whatsappUrl} />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-16 flex flex-col gap-24 md:gap-32 relative z-10 w-full flex-grow">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} about={about} />
        <SkillsSection
          filteredSkills={filteredSkills}
          skillFilter={skillFilter}
          setSkillFilter={setSkillFilter}
        />
        <ProjectsSection
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <CertificationsSection certifications={certifications} />
      </main>

      {/* Full-width Hoyoverse Style Footer & Contact */}
      <FooterContact
        profile={profile}
        contact={contact}
        whatsappUrl={whatsappUrl}
        customMsg={customMsg}
        setCustomMsg={setCustomMsg}
        quickMessages={quickMessages}
      />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  )
}
