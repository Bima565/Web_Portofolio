import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'

export default function ProjectsSection({ projects, selectedProject, setSelectedProject }) {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-6 scroll-mt-24"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#ff184c] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">PORTOFOLIO PROYEK</span>
          </motion.div>
          <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
        </div>
        <span className="text-xs font-mono text-[#00d2ff] tracking-widest">
          TOTAL: {projects.length} PROYEK
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#071330]/85 border-2 border-[#00d2ff]/60 p-4 sm:p-6 backdrop-blur-md shadow-[8px_8px_0px_#000000]"
      >
        {/* Left: Project List Table */}
        <div className="lg:col-span-7 flex flex-col gap-2">
          <div className="grid grid-cols-12 text-[11px] font-mono text-gray-400 pb-2 border-b border-white/10 px-3">
            <span className="col-span-2">NO.</span>
            <span className="col-span-7">NAMA PROYEK</span>
            <span className="col-span-3 text-right">STATUS</span>
          </div>

          <div className="flex flex-col gap-2 mt-1">
            {projects.map((proj, idx) => {
              const isSelected = selectedProject.id === proj.id
              return (
                <motion.button
                  key={proj.id}
                  type="button"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  whileHover={{ x: 6 }}
                  onClick={() => setSelectedProject(proj)}
                  className={`w-full text-left grid grid-cols-12 items-center px-3 py-3 transition-all duration-150 transform -skew-x-6 border-2 ${
                    isSelected
                      ? 'bg-white text-[#020713] font-black border-white shadow-[4px_4px_0px_#ff184c]'
                      : 'bg-[#020713]/80 text-gray-200 border-[#00d2ff]/30 hover:border-[#00d2ff] hover:bg-[#0b1736]'
                  }`}
                >
                  <span className={`col-span-2 font-mono text-xs italic ${isSelected ? 'text-[#ff184c]' : 'text-[#00d2ff]'}`}>
                    /{proj.id}
                  </span>
                  <span className="col-span-7 text-xs sm:text-sm font-bold truncate pr-2">
                    {proj.title}
                  </span>
                  <div className="col-span-3 flex justify-end">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider ${
                        isSelected
                          ? 'bg-[#020713] text-[#00d2ff]'
                          : 'bg-[#00d2ff] text-[#020713]'
                      }`}
                    >
                      ✓ {proj.status}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Right: Selected Project Details */}
        <div className="lg:col-span-5 p-5 bg-[#020713]/90 border-2 border-[#00d2ff]/60 flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono text-[#00d2ff] font-bold">
                  DETAIL PROYEK /{selectedProject.id}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0048d0] text-white font-bold">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black italic text-white leading-tight">
                {selectedProject.title}
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-2.5 bg-[#071330] border-l-2 border-[#ffcc00] text-[11px] text-gray-300">
                <span className="text-[#ffcc00] font-bold font-mono block">HASIL & DAMPAK:</span>
                {selectedProject.impact}
              </div>

              <div className="mt-1">
                <span className="block text-[10px] font-mono text-gray-400 mb-1">
                  TEKNOLOGI DIGUNAKAN:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t, idx) => (
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

          <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
            <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" /> Terverifikasi
            </span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-[#00d2ff] text-[#020713] font-black italic text-xs tracking-wider uppercase transform -skew-x-12 hover:bg-[#ff184c] hover:text-white transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#000000]"
            >
              <span className="inline-block transform skew-x-12 flex items-center gap-1">
                Repositori GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
