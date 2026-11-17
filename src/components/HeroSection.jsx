import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export default function HeroSection({ profile }) {
  const pills = profile?.heroPills || ["PORTOFOLIO PRIBADI", "EKSPLORASI MANDIRI", "PROYEK KREATIF"]
  const cta = profile?.ctaButtons || {
    projects: "Lihat Portofolio Proyek",
    whatsapp: "Hubungi via WhatsApp",
  }
  const photoBadge = profile?.photoBadge || "PORTFOLIO"

  // 3D Tilt & Parallax Physics for P3R Character Cut-in Frame
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 22, stiffness: 190 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig)
  const layerX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig)
  const layerY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-4"
    >
      <div className="flex-1 w-full flex flex-col gap-4 text-left items-start">
        {/* Status Pills with P3R Glow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2"
        >
          {pills.map((pill, idx) => {
            const styles = [
              "bg-[#0048d0] text-[#00d2ff] border-[#00d2ff]/60 shadow-[0_0_8px_rgba(0,210,255,0.3)]",
              "bg-[#ff184c] text-white border-white/60 shadow-[0_0_8px_rgba(255,24,76,0.3)]",
              "bg-[#071330] text-[#ffcc00] border-[#ffcc00]/40 shadow-[0_0_8px_rgba(255,204,0,0.3)]",
            ]
            const cls = styles[idx % styles.length]
            return (
              <span
                key={idx}
                className={`px-3 py-1 text-xs font-mono font-bold tracking-wider transform -skew-x-12 border shadow-[2px_2px_0px_#000000] hover:scale-105 transition-transform duration-150 ${cls}`}
              >
                {pill}
              </span>
            )
          })}
        </motion.div>

        {/* Name Heading + P3R Soundwave Equalizer */}
        <div className="flex flex-col gap-1 items-start">
          <div className="flex items-center gap-3">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.95] text-white text-left drop-shadow-[0_0_12px_rgba(0,210,255,0.25)]"
            >
              {profile.fullName}
            </motion.h1>

            {/* P3R Tartarus / Battle Soundwave Equalizer */}
            <div className="hidden sm:flex items-end gap-1 h-6 pb-1 opacity-85">
              {[8, 20, 12, 24, 15, 22, 10].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [4, h, 4] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.55 + (i * 0.12),
                    ease: 'easeInOut',
                  }}
                  className={`w-1 transform -skew-x-12 ${i % 2 === 0 ? 'bg-[#00d2ff]' : 'bg-[#ff184c]'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title Ribbon with Persona 3 Reload Angled Cut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative inline-block self-start hover:scale-105 transition-transform duration-150 group"
        >
          <span className="block px-4 py-2 bg-[#00d2ff] text-[#020713] font-black italic text-sm md:text-base tracking-wide transform -skew-x-12 shadow-[4px_4px_0px_#000000] border-2 border-white group-hover:bg-[#ffffff] transition-colors">
            {profile.title}
          </span>
        </motion.div>

        {/* Bio Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl font-medium border-l-4 border-[#00d2ff] pl-4 py-2 bg-[#071330]/40 backdrop-blur-sm"
        >
          {profile.bio}
        </motion.p>

        {/* Action Buttons (Permanent Skew, Zero Square Bug, P3R Slash Sheen) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 bg-[#ff184c] text-white font-black italic text-sm tracking-wider uppercase transform -skew-x-12 border-2 border-white hover:bg-white hover:text-[#020713] hover:border-[#ff184c] hover:scale-105 active:scale-95 transition-all duration-150 shadow-[4px_4px_0px_#000000] overflow-hidden"
          >
            {/* Animated slash sheen across button on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />

            <span className="inline-flex items-center gap-2 transform skew-x-12">
              <span>{cta.projects}</span>
              <span className="text-xs transition-transform duration-150 group-hover:translate-x-1">&gt;&gt;</span>
            </span>
          </a>

          <a
            href="#contact"
            className="group relative px-6 py-3 bg-[#071330] text-[#00d2ff] font-black italic text-sm tracking-wider uppercase transform -skew-x-12 border-2 border-[#00d2ff]/60 hover:bg-[#00d2ff] hover:text-[#020713] hover:border-white hover:scale-105 active:scale-95 transition-all duration-150 shadow-[4px_4px_0px_#000000] overflow-hidden"
          >
            {/* Animated sheen */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00d2ff]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />

            <span className="inline-flex items-center gap-2 transform skew-x-12">
              <span>{cta.whatsapp}</span>
              <span className="text-xs transition-transform duration-150 group-hover:translate-x-1">&gt;&gt;</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Right: Persona 3 Reload Styled Character Cut-In Frame */}
      <div
        className="relative flex-shrink-0 w-72 h-72 sm:w-84 sm:h-84 lg:w-96 lg:h-96 flex items-center justify-center self-center cursor-pointer select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
      >
        {/* Floating Ambient P3R Geometric Shards & Crystals */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-6, 6, -6],
            rotate: [10, 50, 10],
          }}
          transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
          className="absolute -top-6 -left-6 w-9 h-9 bg-[#ff184c] transform -skew-x-12 opacity-90 pointer-events-none shadow-[0_0_18px_#ff184c] z-20"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [8, -8, 8],
            rotate: [45, 95, 45],
          }}
          transition={{ repeat: Infinity, duration: 5.6, ease: 'easeInOut' }}
          className="absolute -bottom-7 -right-4 w-8 h-8 border-2 border-[#00d2ff] bg-[#0048d0]/70 transform -rotate-12 pointer-events-none shadow-[0_0_16px_#00d2ff] z-20"
        />
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [15, -20, 15],
          }}
          transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-8 w-4 h-10 bg-[#ffcc00] transform -skew-x-12 opacity-90 pointer-events-none shadow-[0_0_14px_#ffcc00] z-20"
        />

        {/* Extra P3R Shard: Diamond Star */}
        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
            rotate: [0, 180, 360],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          className="absolute -top-2 right-12 w-3.5 h-3.5 bg-white transform rotate-45 pointer-events-none shadow-[0_0_12px_#ffffff] z-20"
        />

        {/* 3D Tilted Card Root Container */}
        <motion.div
          style={{ rotateX, rotateY }}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
          }}
          className="relative w-full h-full"
        >
          {/* Back Crimson Layer (Offset Slanted Background Plate) */}
          <motion.div
            style={{ x: layerX, y: layerY }}
            className="absolute -inset-3.5 bg-[#ff184c] transform -skew-x-12 rotate-2 shadow-[0_0_28px_rgba(255,24,76,0.65)]"
          />

          {/* Back Cyan Frame Layer */}
          <div className="absolute -inset-1.5 bg-[#0048d0] border-2 border-[#00d2ff] transform -skew-x-6 -rotate-1 shadow-[0_0_22px_#00d2ff]" />

          {/* Main Photo Card */}
          <div className="relative w-full h-full p-2.5 bg-gradient-to-b from-[#00d2ff] via-[#0048d0] to-[#020713] transform -skew-x-6 rotate-1 shadow-[8px_8px_0px_#000000] border-2 border-white overflow-hidden group">
            {/* Inner Container */}
            <div className="w-full h-full bg-[#050e24] overflow-hidden relative flex items-center justify-center">
              {/* Halftone Dot Matrix Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#00d2ff_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />

              {/* Character Photo */}
              <img
                src={profile.avatar}
                alt={profile.fullName}
                className="w-full h-full object-cover object-top filter contrast-110 brightness-105 transition-transform duration-500 group-hover:scale-108"
              />

              {/* Diagonal Light Slash (All-Out Attack Sheen) */}
              <motion.div
                animate={{ x: ['-150%', '250%'] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3.2,
                  duration: 1.1,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-2/3 h-[250%] -top-3/4 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-45 pointer-events-none"
              />

              {/* Scanline CRT Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.35)_51%)] bg-[length:100%_4px] opacity-35 pointer-events-none" />

              {/* P3R HUD Tag in Top Left */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 bg-[#020713]/90 border border-[#00d2ff]/70 text-[9px] font-mono font-bold text-[#00d2ff] tracking-widest shadow-[2px_2px_0px_#000000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                <span>P3R // ACT_03</span>
              </div>

              {/* Tech Crosshair in Bottom Left */}
              <div className="absolute bottom-2 left-2 text-[#00d2ff]/80 font-mono text-[9px] font-bold tracking-tighter">
                + [SYS.35-08]
              </div>

              {/* Persona 3 Reload Corner Badge */}
              <div className="absolute bottom-0 right-0 bg-[#ff184c] text-white text-[10px] font-mono font-black tracking-widest px-3 py-1 transform -skew-x-12 border-t-2 border-l-2 border-white shadow-[2px_2px_0px_#000000]">
                {photoBadge}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
