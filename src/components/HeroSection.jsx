import { motion } from 'motion/react'

export default function HeroSection({ profile }) {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 pt-4"
    >
      <div className="flex-1 w-full flex flex-col gap-4 text-left items-start">
        {/* Status Pills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="px-3 py-1 bg-[#0048d0] text-[#00d2ff] text-xs font-bold tracking-wider transform -skew-x-12 border border-[#00d2ff]/60 shadow-[2px_2px_0px_#000000]">
            {profile.academicStatus}
          </span>
          <span className="px-3 py-1 bg-[#ff184c] text-white text-xs font-mono font-bold tracking-wider transform -skew-x-12 border border-white/60 shadow-[2px_2px_0px_#000000]">
            NIM: {profile.nim}
          </span>
          <span className="px-3 py-1 bg-[#071330] text-[#ffcc00] text-xs font-mono font-bold tracking-wider transform -skew-x-12 border border-[#ffcc00]/40 shadow-[2px_2px_0px_#000000]">
            {profile.semester}
          </span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.95] text-white text-left"
        >
          {profile.fullName}
        </motion.h1>

        {/* Title Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative inline-block self-start"
        >
          <span className="block px-4 py-2 bg-[#00d2ff] text-[#020713] font-black italic text-sm md:text-base tracking-wide transform -skew-x-12 shadow-[4px_4px_0px_#000000] border-2 border-white">
            {profile.title}
          </span>
        </motion.div>

        {/* Bio Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl font-medium border-l-4 border-[#00d2ff] pl-4 py-2 bg-[#071330]/40"
        >
          {profile.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-6 py-3 bg-[#ff184c] text-white font-black italic text-sm tracking-wider uppercase transform -skew-x-12 border-2 border-white hover:bg-white hover:text-[#020713] hover:border-[#ff184c] transition-all shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">
              Lihat Portofolio Proyek
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-6 py-3 bg-[#071330] text-[#00d2ff] font-black italic text-sm tracking-wider uppercase transform -skew-x-12 border-2 border-[#00d2ff]/60 hover:bg-[#00d2ff] hover:text-[#020713] transition-all shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">
              Hubungi via WhatsApp
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Right: Profile Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-88 lg:h-88 flex items-center justify-center self-center"
      >
        <div className="relative w-full h-full p-2.5 bg-gradient-to-b from-[#00d2ff] via-[#0048d0] to-[#020713] transform -skew-x-6 rotate-1 shadow-[8px_8px_0px_#000000] border-2 border-white">
          <div className="w-full h-full bg-[#050e24] overflow-hidden relative flex items-center justify-center">
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="w-full h-full object-cover object-top filter contrast-110 brightness-105"
            />
            <div className="absolute bottom-0 right-0 bg-[#ff184c] text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1 transform -skew-x-12 border-t-2 border-l-2 border-white">
              {profile.classGroup}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
