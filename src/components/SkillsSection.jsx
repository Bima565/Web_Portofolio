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
  SiDart,
  SiPhp,
  SiKalilinux,
  SiCachyos,
  SiProxmox,
  SiUbuntu,
  SiCentos,
  SiPopos,
  SiUnity,
  SiLaragon,
  SiVmware,
  SiFilezilla,
  SiNextcloud,
  SiMqtt,
  SiNodered,
  SiNpm,
  SiNodedotjs,
  SiXampp,
  SiTermius,
  SiOllama,
  SiLmstudio,
} from 'react-icons/si'
import { FaCss3Alt, FaLinux, FaJava } from 'react-icons/fa6'
import {
  TbBrandCSharp,
  TbBrandPowershell,
  TbBrandVscode,
  TbBrandVisualStudio,
  TbBrandAdobePhotoshop,
} from 'react-icons/tb'

const iconMap = {
  javascript: SiJavascript,
  python: SiPython,
  java: FaJava,
  csharp: TbBrandCSharp,
  kotlin: SiKotlin,
  php: SiPhp,
  dart: SiDart,
  html5: SiHtml5,
  css3: FaCss3Alt,
  bash: SiGnubash,
  powershell: TbBrandPowershell,
  archlinux: SiArchlinux,
  linux: FaLinux,
  kalilinux: SiKalilinux,
  cachyos: SiCachyos,
  proxmox: SiProxmox,
  ubuntu: SiUbuntu,
  centos: SiCentos,
  popos: SiPopos,
  visualstudio: TbBrandVisualStudio,
  vscode: TbBrandVscode,
  unity: SiUnity,
  photoshop: TbBrandAdobePhotoshop,
  laragon: SiLaragon,
  vmware: SiVmware,
  filezilla: SiFilezilla,
  nextcloud: SiNextcloud,
  mqtt: SiMqtt,
  nodered: SiNodered,
  npm: SiNpm,
  nodejs: SiNodedotjs,
  xampp: SiXampp,
  termius: SiTermius,
  ollama: SiOllama,
  lmstudio: SiLmstudio,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  figma: SiFigma,
  blender: SiBlender,
  mysql: SiMysql,
  firebase: SiFirebase,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
  dotnet: SiDotnet,
}

const getBadgeLabel = (cat = '') => {
  if (cat.includes('Bahasa')) return 'Language'
  if (cat.includes('Operating')) return 'OS'
  return 'Tool'
}

export default function SkillsSection({ skillsSection, filteredSkills, skillFilter, setSkillFilter }) {
  const sectionTitle = skillsSection?.sectionTitle || "TOOLS & TEKNOLOGI"
  const tabs = skillsSection?.tabs || ["SEMUA", "BAHASA PEMROGRAMAN", "OPERATING SYSTEM", "TOOLS"]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col gap-6 scroll-mt-24"
    >
      {/* Header and Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#00d2ff] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">{sectionTitle}</span>
          </motion.div>
          <div className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-[#00d2ff]/60 to-transparent" />
        </div>

        {/* 3 Categories + All Tab Bar */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {tabs.map((tab) => {
            const isActive = skillFilter === tab
            return (
              <motion.button
                key={tab}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSkillFilter(tab)}
                className={`px-3 py-1 font-bold transform -skew-x-12 border transition-all ${
                  isActive
                    ? 'bg-[#00d2ff] text-[#020713] border-white shadow-[2px_2px_0px_#000000]'
                    : 'bg-[#071330] text-gray-300 border-[#00d2ff]/30 hover:border-[#00d2ff] hover:text-white'
                }`}
              >
                <span className="inline-block transform skew-x-12 tracking-wide">
                  {tab}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* P3R Box Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="p-5 sm:p-6 bg-[#071330]/85 border-2 border-[#00d2ff]/60 shadow-[8px_8px_0px_#000000] backdrop-blur-md"
      >
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((tool) => {
              const IconComp = iconMap[tool.icon]
              const badge = getBadgeLabel(tool.category)

              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative p-3 sm:p-4 bg-[#020713]/90 border-2 border-[#00d2ff]/30 transform -skew-x-3 shadow-[3px_3px_0px_#000000] hover:border-[#00d2ff] hover:shadow-[0_0_16px_rgba(0,210,255,0.45),4px_4px_0px_#ff184c] flex flex-col items-center justify-between gap-2.5 transition-colors duration-150 cursor-pointer overflow-hidden"
                >
                  {/* Glowing Top Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: tool.color || '#00d2ff' }}
                  />

                  {/* Brand Icon or User Provided Image */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    {tool.image ? (
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_8px_rgba(0,210,255,0.3)]"
                      />
                    ) : IconComp ? (
                      <IconComp
                        className="text-3xl sm:text-4xl transition-all duration-200 drop-shadow-[0_0_6px_rgba(0,210,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]"
                        style={{ color: tool.color }}
                      />
                    ) : (
                      <span className="font-mono text-xs text-[#00d2ff]">{tool.name}</span>
                    )}
                  </div>

                  {/* Tool Name */}
                  <span className="font-bold text-xs text-center text-white tracking-wide group-hover:text-[#00d2ff] transition-colors line-clamp-1">
                    {tool.name}
                  </span>

                  {/* Category Pill */}
                  <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-gray-400 bg-[#071330] border border-white/10 group-hover:border-[#00d2ff]/50 group-hover:text-white transition-colors">
                    {badge}
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
