import { motion } from 'motion/react'

export default function AboutSection({ profile, about }) {
  const sectionTitle = about?.sectionTitle || "TENTANG SAYA"
  const experienceTitle = about?.experienceTitle || "PENGALAMAN & MAGANG"
  const educationTitle = about?.educationTitle || "PENDIDIKAN"
  const interestsTitle = about?.interestsTitle || "MINAT & EKSPLORASI"

  const hasExperience = Boolean(about?.experience && about.experience.length > 0)

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
        <div
          className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 hover:scale-105 transition-transform duration-150 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
        >
          <span className="inline-block transform skew-x-12">{sectionTitle}</span>
        </div>
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
            <span>[{profile.title}]</span>
          </div>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            {about.statement}
          </p>
        </div>

        {/* 4 Pillars with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.pillars.map((pil, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-4 bg-[#020713]/85 border border-white/20 transform -skew-x-3 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#00d2ff] transition-all duration-200 shadow-[4px_4px_0px_#000000] flex flex-col gap-2 cursor-default"
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

        {/* Experience, Education & Interests Grid */}
        <div className={`grid grid-cols-1 ${hasExperience ? 'lg:grid-cols-3' : 'md:grid-cols-2'} gap-6 pt-2`}>
          {/* Experience Card */}
          {hasExperience && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="p-5 bg-[#020713]/80 border border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000] flex flex-col justify-between"
            >
              <div>
                <span className="block font-black italic text-xs tracking-wider uppercase text-[#00d2ff] mb-4">
                  {experienceTitle}
                </span>
                <div className="flex flex-col gap-4">
                  {about.experience.map((exp, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#00d2ff]/40 pl-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-white text-sm">{exp.role}</span>
                        {exp.type && (
                          <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#0048d0] text-white">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#00d2ff] font-mono">
                        {exp.company}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {exp.period} {exp.location ? `· ${exp.location}` : ''}
                      </span>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">{exp.detail}</p>
                      {exp.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {exp.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 text-[10px] font-mono bg-[#071330] text-[#00d2ff] border border-[#00d2ff]/30 transform -skew-x-3"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-[#020713]/80 border border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000] flex flex-col justify-between"
          >
            <div>
              <span className="block font-black italic text-xs tracking-wider uppercase text-[#00d2ff] mb-4">
                {educationTitle}
              </span>
              <div className="flex flex-col gap-4">
                {about.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#00d2ff]/40 pl-3">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="text-xs text-[#00d2ff] font-mono">{edu.institution} ({edu.period})</span>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">{edu.detail}</p>
                    {edu.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {edu.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 text-[10px] font-mono bg-[#071330] text-[#00d2ff] border border-[#00d2ff]/30 transform -skew-x-3"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-[#020713]/80 border border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000] flex flex-col justify-start gap-4"
          >
            <div>
              <span className="block font-black italic text-xs tracking-wider uppercase text-[#ffcc00] mb-4">
                {interestsTitle}
              </span>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold bg-[#071330] text-gray-200 border border-[#00d2ff]/30 transform -skew-x-3 hover:scale-105 hover:border-[#ff184c] hover:text-white transition-all duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
