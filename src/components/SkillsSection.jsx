import { motion, AnimatePresence } from 'motion/react'

export default function SkillsSection({ filteredSkills, skillFilter, setSkillFilter }) {
  const tabs = ['SEMUA', 'FRONTEND', 'IOT', 'SISTEM', 'DATABASE']

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-6 scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">KEAHLIAN TEKNIS</span>
          </motion.div>
          <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSkillFilter(tab)}
              className={`px-3 py-1 font-bold transform -skew-x-12 border transition-all ${
                skillFilter === tab
                  ? 'bg-[#00d2ff] text-[#020713] border-white shadow-[2px_2px_0px_#000000]'
                  : 'bg-[#071330] text-gray-300 border-[#00d2ff]/30 hover:border-[#00d2ff]'
              }`}
            >
              <span className="inline-block transform skew-x-12">
                {tab}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* P3R Section Box Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-[#071330]/85 border-2 border-[#00d2ff]/60 shadow-[8px_8px_0px_#000000] backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -6, borderColor: '#ff184c', scale: 1.02 }}
                className="p-4 bg-[#020713]/85 border-2 border-[#00d2ff]/40 transform -skew-x-3 shadow-[4px_4px_0px_#000000] flex flex-col justify-between transition-colors cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 flex items-center justify-center bg-[#0048d0] text-[#00d2ff] font-black text-xs italic border border-[#00d2ff]">
                        {skill.stat}
                      </span>
                      <h3 className="font-bold text-sm tracking-wide text-white">
                        {skill.name}
                      </h3>
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
                  <div className="w-full h-2 bg-[#020713] border border-white/20 p-0.5 relative overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#0048d0] via-[#00d2ff] to-[#ff184c]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.04 }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-gray-400">
                    <span>Kategori: {skill.category}</span>
                    <span className="text-[#00d2ff] font-bold">Teruji</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  )
}
