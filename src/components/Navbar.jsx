import { useState } from 'react'
import { motion } from 'motion/react'

export default function Navbar({ navbar, profile, whatsappUrl }) {
  const links = navbar?.links || [
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#certifications", label: "Sertifikasi" },
    { href: "#contact", label: "Kontak" },
  ]
  const ctaBtnText = navbar?.ctaButton || "WhatsApp"
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#020713]/90 border-b border-[#00d2ff]/25 px-4 sm:px-8 lg:px-12 py-3 w-full">
      <div className="w-full flex items-center justify-between gap-4">

        {/* Identity & P3R System Beacon */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-4 h-4 flex items-center justify-center">
            <span className="absolute inset-0 bg-[#00d2ff] rotate-45 shadow-[0_0_10px_#00d2ff] group-hover:bg-[#ff184c] group-hover:shadow-[0_0_12px_#ff184c] transition-all duration-300" />
            <span className="w-1.5 h-1.5 bg-white rotate-45 z-10" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs md:text-sm font-black tracking-wider text-white group-hover:text-[#00d2ff] transition-colors uppercase">
                {profile.fullName}
              </span>
              <span className="hidden xl:inline-block px-1.5 py-0.2 bg-[#0048d0]/60 border border-[#00d2ff]/40 text-[9px] font-mono text-[#00d2ff]">
                ONLINE
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-400">
              {profile.title}
            </span>
          </div>
        </a>

        {/* Persona 3 Reload Styled Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative px-3.5 py-1.5 text-gray-300 hover:text-white transition-colors group flex items-center gap-1.5 uppercase font-bold tracking-wider"
            >
              {/* Animated P3R Hover Ribbon */}
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="navHoverRibbon"
                  initial={{ opacity: 0, scaleX: 0.8 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 bg-[#0048d0] border border-[#00d2ff] transform -skew-x-12 shadow-[0_0_10px_rgba(0,210,255,0.4)]"
                />
              )}

              <span className="relative z-10 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-150">
                <span className="w-1 h-1 bg-[#00d2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Quick CTA with P3R Ribbon Pop */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group px-4 py-1.5 bg-[#071330] hover:bg-[#ff184c] text-[#00d2ff] hover:text-white border border-[#00d2ff]/60 hover:border-white font-mono text-xs font-black transform -skew-x-12 hover:scale-105 active:scale-95 transition-all duration-150 shadow-[3px_3px_0px_#000000] overflow-hidden"
        >
          {/* Subtle light sheen sweep */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />
          
          <span className="relative z-10 inline-flex items-center gap-1.5 transform skew-x-12">
            <span>{ctaBtnText}</span>
            <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
              &gt;&gt;
            </span>
          </span>
        </a>

      </div>
    </header>
  )
}
