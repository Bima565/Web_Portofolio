export default function Navbar({ profile, whatsappUrl }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#020713]/90 border-b border-[#00d2ff]/25 px-4 sm:px-8 lg:px-12 py-3 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Identity */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="w-3 h-3 bg-[#00d2ff] rotate-45 shadow-[0_0_8px_#00d2ff] group-hover:bg-[#ff184c] transition-colors" />
          <div className="flex flex-col">
            <span className="font-mono text-xs md:text-sm font-bold tracking-wider text-white group-hover:text-[#00d2ff] transition-colors">
              {profile.fullName}
            </span>
            <span className="font-mono text-[10px] text-gray-400">
              NIM: {profile.nim} | {profile.classGroup}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          <a href="#about" className="text-gray-300 hover:text-[#00d2ff] transition-colors">Tentang</a>
          <a href="#skills" className="text-gray-300 hover:text-[#00d2ff] transition-colors">Keahlian</a>
          <a href="#projects" className="text-gray-300 hover:text-[#00d2ff] transition-colors">Proyek</a>
          <a href="#certifications" className="text-gray-300 hover:text-[#00d2ff] transition-colors">Sertifikasi</a>
          <a href="#contact" className="text-gray-300 hover:text-[#ff184c] transition-colors">Kontak</a>
        </nav>

        {/* Quick CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 bg-[#071330] hover:bg-[#ff184c] text-[#00d2ff] hover:text-white border border-[#00d2ff]/50 hover:border-white font-mono text-xs font-bold transform -skew-x-12 transition-all shadow-[2px_2px_0px_#000000]"
        >
          <span className="inline-block transform skew-x-12">
            WhatsApp
          </span>
        </a>

      </div>
    </header>
  )
}
