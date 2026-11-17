import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

export default function CertificationsSection({ certificationsSection, certifications }) {
  const sectionTitle = certificationsSection?.sectionTitle || "LISENSI & SERTIFIKASI"
  const badgeLabel = certificationsSection?.badgeLabel || "SERTIFIKASI"
  const fieldLabel = certificationsSection?.fieldLabel || "BIDANG KOMPETENSI:"
  const statusLabel = certificationsSection?.statusLabel || "STATUS:"
  const verifiedText = certificationsSection?.verifiedText || "Sertifikat Valid"

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
          <div
            className="px-5 py-1.5 bg-[#0048d0] text-white font-black italic text-lg md:text-xl tracking-wider uppercase transform -skew-x-12 hover:scale-105 transition-transform duration-150 border-l-4 border-[#ffcc00] shadow-[4px_4px_0px_#000000]"
          >
            <span className="inline-block transform skew-x-12">{sectionTitle}</span>
          </div>
          <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-[#00d2ff]/40 to-transparent" />
        </div>
        <span className="text-xs font-mono text-[#ffcc00] tracking-widest hidden sm:inline uppercase">
          {badgeLabel} // DATA 04
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-[#071330]/85 border-2 border-[#00d2ff]/60 shadow-[8px_8px_0px_#000000] backdrop-blur-md relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
              className="group relative p-5 bg-[#020713]/85 border-2 border-[#00d2ff]/40 shadow-[4px_4px_0px_#000000] flex flex-col justify-between transform -skew-x-3 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#00d2ff] hover:shadow-[0_0_16px_rgba(0,210,255,0.35),4px_4px_0px_#ffcc00] transition-all duration-200 cursor-default overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-[#ff184c] italic">
                    /{cert.code}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#ffcc00] text-[#020713]">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black italic text-white leading-tight group-hover:text-[#00d2ff] transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-bold text-[#00d2ff]">
                  {cert.issuer}
                </div>

                <div className="text-[11px] font-mono text-gray-400">
                  {cert.period}
                </div>

                <p className="text-xs text-gray-300 mt-1">
                  <strong className="text-gray-400 font-mono text-[10px] block">
                    {fieldLabel}
                  </strong>
                  {cert.skills}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {verifiedText}
                </span>
                <span className="text-gray-400">
                  {statusLabel} {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
