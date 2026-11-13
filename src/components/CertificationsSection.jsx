import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

export default function CertificationsSection({ certifications }) {
  return (
    <motion.section
      id="certifications"
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
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 border-l-4 border-[#ffcc00] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">LISENSI & SERTIFIKASI</span>
          </motion.div>
          <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
        </div>
        <span className="text-xs font-mono text-[#ffcc00] tracking-widest hidden sm:inline">
          KREDENSIAL RESMI
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-[#071330]/85 border-2 border-[#00d2ff]/60 shadow-[8px_8px_0px_#000000] backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
              whileHover={{ y: -6, borderColor: '#00d2ff', scale: 1.02 }}
              className="p-5 bg-[#020713]/85 border-2 border-[#00d2ff]/40 shadow-[4px_4px_0px_#000000] flex flex-col justify-between transform -skew-x-3 transition-colors cursor-default"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-[#ff184c] italic">
                    /{cert.code}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#ffcc00] text-[#020713]">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black italic text-white leading-tight">
                  {cert.title}
                </h3>

                <div className="text-xs font-bold text-[#00d2ff]">
                  {cert.issuer}
                </div>

                <div className="text-[11px] font-mono text-gray-400">
                  {cert.period}
                </div>

                <p className="text-xs text-gray-300 mt-1">
                  <strong className="text-gray-400 font-mono text-[10px] block">BIDANG KOMPETENSI:</strong>
                  {cert.skills}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Kredensial Valid
                </span>
                <span className="text-gray-400">
                  STATUS: {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
