import { motion } from 'motion/react'

export default function AboutSection({ profile, about }) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-6 scroll-mt-24"
    >
      {/* Header Banner */}
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
        >
          <span className="inline-block transform skew-x-12">TENTANG SAYA</span>
        </motion.div>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/50 to-transparent" />
      </div>

      {/* Persona 3 Reload Styled Box Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 bg-[#071330]/85 border-2 border-[#00d2ff]/60 shadow-[8px_8px_0px_#000000] backdrop-blur-md flex flex-col gap-8"
      >
        {/* Statement */}
        <div className="flex flex-col gap-2 border-l-4 border-[#ff184c] pl-5 py-2 bg-gradient-to-r from-[#020713]/70 to-transparent">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d2ff]">
            <span className="font-bold text-white text-sm">{profile.fullName}</span>
            <span>[{profile.academicStatus} - {profile.classGroup}]</span>
          </div>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            {about.statement}
          </p>
        </div>

        {/* 4 Pillars of Work Ethic with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.pillars.map((pil, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -6, borderColor: '#00d2ff', scale: 1.02 }}
              className="p-4 bg-[#020713]/85 border border-white/20 transform -skew-x-3 transition-colors shadow-[4px_4px_0px_#000000] flex flex-col gap-2 cursor-default"
            >
              <span className="self-start px-2 py-0.5 text-[9px] font-mono font-bold bg-[#0048d0] text-[#00d2ff]">
                {pil.badge}
              </span>
              <h3 className="font-black italic text-sm text-white">
                {pil.title}
              </h3>
              <p className="text-xs text-gray-300 leading-snug">
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education & Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-[#020713]/80 border border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000]"
          >
            <span className="block font-black italic text-xs tracking-wider uppercase text-[#00d2ff] mb-4">
              Pendidikan & Pengalaman Industri
            </span>
            <div className="flex flex-col gap-4">
              {about.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#00d2ff]/40 pl-3">
                  <span className="font-bold text-white text-sm">{edu.degree}</span>
                  <span className="text-xs text-[#00d2ff] font-mono">{edu.institution} ({edu.period})</span>
                  <p className="text-xs text-gray-300 mt-0.5">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-[#020713]/80 border border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000] flex flex-col justify-between"
          >
            <div>
              <span className="block font-black italic text-xs tracking-wider uppercase text-[#ffcc00] mb-4">
                Fokus & Minat Teknis
              </span>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, borderColor: '#ff184c', color: '#ffffff' }}
                    className="px-3 py-1 text-xs font-semibold bg-[#071330] text-gray-200 border border-[#00d2ff]/30 transform -skew-x-3 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 text-xs font-mono text-gray-400">
              Status: Terbuka untuk magang dan proyek pengembangan web & IoT
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
