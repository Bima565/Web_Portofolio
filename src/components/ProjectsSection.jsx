import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiJson,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
  SiMysql,
  SiApacheecharts,
  SiPhp,
  SiHtml5,
  SiKotlin,
  SiGradle,
} from 'react-icons/si'
import { FaCss3Alt, FaWindows, FaGamepad, FaMicrochip } from 'react-icons/fa6'
import { TbApi } from 'react-icons/tb'
import csharpImg from '../assets/lcon/csharp.png'
import cppImg from '../assets/lcon/ISO_C++_Logo.svg'

const techIcons = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Motion': { icon: SiFramer, color: '#0055FF' },
  'Three.js': { icon: SiThreedotjs, color: '#FFFFFF' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'C#': { image: csharpImg, color: '#9B4F96' },
  'C++': { image: cppImg, color: '#00599C' },
  '.NET': { icon: SiDotnet, color: '#512BD4' },
  'SDL2': { icon: FaGamepad, color: '#1793D1' },
  'ViGEmBus': { icon: FaGamepad, color: '#00d2ff' },
  'JSON': { icon: SiJson, color: '#F7DF1E' },
  'Flutter': { icon: SiFlutter, color: '#02569B' },
  'Dart': { icon: SiDart, color: '#0175C2' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Firestore': { icon: SiFirebase, color: '#FF9100' },
  'Android': { icon: SiAndroid, color: '#3DDC84' },
  'REST API': { icon: TbApi, color: '#00d2ff' },
  'Dio': { icon: TbApi, color: '#00d2ff' },
  'Windows Forms': { icon: FaWindows, color: '#0078D7' },
  'Win32 API': { icon: FaWindows, color: '#0078D7' },
  'Insyde API': { icon: FaMicrochip, color: '#00d2ff' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'ECharts': { icon: SiApacheecharts, color: '#AA344D' },
  'PHP': { icon: SiPhp, color: '#777BB4' },
  'HTML5': { icon: SiHtml5, color: '#E34F26' },
  'CSS3': { icon: FaCss3Alt, color: '#1572B6' },
  'Kotlin': { icon: SiKotlin, color: '#7F52FF' },
  'Gradle': { icon: SiGradle, color: '#02303A' },
}

export default function ProjectsSection({
  projectsSection,
  projects,
  selectedProject,
  setSelectedProject,
}) {
  const sectionTitle = projectsSection?.sectionTitle || "PORTOFOLIO PROYEK"
  const totalLabel = projectsSection?.totalLabel || "TOTAL:"
  const projectWord = projectsSection?.projectWord || "PROYEK"
  const tableHeaders = projectsSection?.tableHeaders || {
    no: "NO.",
    title: "NAMA PROYEK",
    status: "STATUS",
  }
  const detailLabels = projectsSection?.detailLabels || {
    detail: "DETAIL PROYEK",
    tech: "TEKNOLOGI DIGUNAKAN:",
    githubBtn: "Repositori GitHub",
  }

  const currentProject = selectedProject || projects[0]

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
          <div
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 hover:scale-105 transition-transform duration-150 border-l-4 border-[#ff184c] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">{sectionTitle}</span>
          </div>
          <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
        </div>
        <span className="text-xs font-mono text-[#00d2ff] tracking-widest">
          {totalLabel} {projects.length} {projectWord}
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
            <span className="col-span-2">{tableHeaders.no}</span>
            <span className="col-span-7">{tableHeaders.title}</span>
            <span className="col-span-3 text-right">{tableHeaders.status}</span>
          </div>

          <div className="flex flex-col gap-2 mt-1">
            {projects.map((proj, idx) => {
              const isSelected = currentProject.id === proj.id
              return (
                <motion.button
                  key={proj.id}
                  type="button"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => setSelectedProject(proj)}
                  className={`w-full text-left grid grid-cols-12 items-center px-3 py-3 transition-all duration-150 transform -skew-x-6 hover:translate-x-1.5 border-2 ${
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
              key={currentProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono text-[#00d2ff] font-bold">
                  {detailLabels.detail} /{currentProject.id}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0048d0] text-white font-bold">
                  {currentProject.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black italic text-white leading-tight">
                {currentProject.title}
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                {currentProject.description}
              </p>

              <div>
                <span className="block text-[10px] font-mono text-gray-400 mb-2 tracking-wider">
                  {detailLabels.tech}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((t, idx) => {
                    const item = techIcons[t]
                    const IconComp = item?.icon
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#071330] text-gray-200 text-xs font-mono border border-[#00d2ff]/30 shadow-[2px_2px_0px_#000000] hover:border-[#00d2ff] transition-colors"
                      >
                        {item?.image ? (
                          <img src={item.image} alt={t} className="w-3.5 h-3.5 object-contain flex-shrink-0" />
                        ) : IconComp ? (
                          <IconComp
                            className="text-sm flex-shrink-0"
                            style={{ color: item.color }}
                          />
                        ) : null}
                        <span>{t}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-end">
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#00d2ff] text-[#020713] font-black italic text-xs tracking-wider uppercase transform -skew-x-12 hover:bg-[#ff184c] hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 flex items-center gap-1.5 shadow-[2px_2px_0px_#000000]"
            >
              <span className="inline-block transform skew-x-12 flex items-center gap-1.5">
                {detailLabels.githubBtn} <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
