import { MessageCircle, Mail, Globe } from 'lucide-react'

export default function FooterContact({
  profile,
  contact,
  whatsappUrl,
  customMsg,
  setCustomMsg,
  quickMessages,
}) {
  return (
    <footer id="contact" className="w-full relative z-20 mt-16 scroll-mt-10">
      {/* 1. TOP SOCIAL ICONS ROW */}
      <div className="w-full bg-[#02050e] border-t border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 sm:gap-8 text-gray-400">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] hover:scale-110 transition-all p-1"
            title="Chat WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[#00d2ff] hover:scale-110 transition-all p-1"
            title="Kirim Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] hover:scale-110 transition-all p-1"
            title="Profil GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] hover:scale-110 transition-all p-1"
            title="Profil LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="#hero"
            className="hover:text-[#00d2ff] hover:scale-110 transition-all p-1"
            title="Portofolio Web"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* 2. MAIN CONTACT ROW */}
      <div className="w-full bg-[#040816] py-12 px-4 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1 flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-mono text-[#00d2ff] font-bold tracking-widest uppercase">
              KOMUNIKASI LANGSUNG RESMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-tight">
              Hubungi Saya untuk Diskusi Proyek
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Terbuka untuk peluang magang, kolaborasi pembuatan aplikasi web, dan integrasi sistem IoT. Silakan pilih topik atau tulis pesan untuk langsung terhubung via WhatsApp resmi.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {(quickMessages || []).map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCustomMsg(item.text)}
                  className="px-3 py-1 text-xs font-mono bg-[#071330] hover:bg-[#ff184c] text-gray-200 hover:text-white border border-[#00d2ff]/30 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-xl flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Tulis pesan Anda untuk WhatsApp..."
                className="flex-1 bg-[#02050e] border border-white/20 focus:border-[#00d2ff] px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#ff184c] hover:bg-white text-white hover:text-[#020713] font-black italic text-sm tracking-wider uppercase transform -skew-x-6 border border-white hover:border-[#ff184c] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-[3px_3px_0px_#000000]"
              >
                <span className="inline-block transform skew-x-6 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Kirim WhatsApp
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span className="text-[#00d2ff]">+{contact.whatsappNumber}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LEGAL, BRANDING & NAVIGATION LINKS */}
      <div className="w-full bg-[#010308] py-8 px-4 sm:px-8 lg:px-12 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] rotate-45" />
            <span className="font-mono text-sm font-black tracking-widest text-white uppercase">
              {profile.fullName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-gray-300">
            <a href="#hero" className="hover:text-[#00d2ff] transition-colors">Profil</a>
            <a href="#about" className="hover:text-[#00d2ff] transition-colors">Tentang Saya</a>
            <a href="#skills" className="hover:text-[#00d2ff] transition-colors">Keahlian Teknis</a>
            <a href="#projects" className="hover:text-[#00d2ff] transition-colors">Portofolio Proyek</a>
            <a href="#certifications" className="hover:text-[#00d2ff] transition-colors">Sertifikasi</a>
            <a href="#contact" className="hover:text-[#ff184c] transition-colors">Kontak WhatsApp</a>
          </div>

          <p className="text-[11px] text-gray-500 max-w-2xl font-mono leading-relaxed">
            Tugas Portofolio Individu Mahasiswa - {profile.academicStatus} ({profile.classGroup}) - NIM: {profile.nim}
          </p>

          <div className="text-[11px] text-gray-500 font-mono">
            Copyright © 2026 {profile.fullName}. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  )
}
