import { motion, AnimatePresence } from 'motion/react'
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiFirebase,
  SiArchlinux,
  SiDotnet,
  SiGit,
  SiGithub,
  SiPython,
  SiFigma,
  SiBlender,
  SiPostman,
  SiGnubash,
  SiKotlin,
} from 'react-icons/si'
import { FaCss3Alt, FaLinux } from 'react-icons/fa6'
import { TbBrandCSharp, TbBrandPowershell, TbBrandVscode } from 'react-icons/tb'

const iconMap = {
  html5: SiHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
  mysql: SiMysql,
  firebase: SiFirebase,
  archlinux: SiArchlinux,
  linux: FaLinux,
  kotlin: SiKotlin,
  csharp: TbBrandCSharp,
  dotnet: SiDotnet,
  powershell: TbBrandPowershell,
  bash: SiGnubash,
  git: SiGit,
  github: SiGithub,
  vscode: TbBrandVscode,
  python: SiPython,
  figma: SiFigma,
  blender: SiBlender,
  postman: SiPostman,
}

export default function SkillsSection({ skillsSection, filteredSkills, skillFilter, setSkillFilter }) {
  const sectionTitle = skillsSection?.sectionTitle || "TOOLS & TEKNOLOGI"
  const tabs = skillsSection?.tabs || ['SEMUA', 'FRONTEND', 'DATABASE', 'SISTEM', 'TOOLS']

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
            <span className="inline-block transform skew-x-12">{sectionTitle}</span>
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
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          <AnimatePresence>
            {filteredSkills.map((tool, index) => {
              const IconComp = iconMap[tool.icon]
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ delay: index * 0.02, duration: 0.25 }}
                  whileHover={{ y: -6, scale: 1.04, borderColor: '#00d2ff' }}
                  className="group relative p-4 bg-[#020713]/85 border-2 border-[#00d2ff]/30 transform -skew-x-3 shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#ff184c] flex flex-col items-center justify-center gap-2.5 transition-all cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded transition-transform group-hover:scale-110">
                    {IconComp ? (
                      <IconComp
                        className="text-4xl transition-colors drop-shadow-[0_0_8px_rgba(0,210,255,0.2)]"
                        style={{ color: tool.color }}
                      />
                    ) : (
                      <span className="font-mono text-xs text-[#00d2ff]">{tool.name}</span>
                    )}
                  </div>

                  <span className="font-bold text-xs text-center text-white tracking-wide group-hover:text-[#00d2ff] transition-colors line-clamp-1">
                    {tool.name}
                  </span>

                  <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-gray-400 bg-[#071330] border border-white/10 group-hover:border-[#00d2ff]/40">
                    {tool.category}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
