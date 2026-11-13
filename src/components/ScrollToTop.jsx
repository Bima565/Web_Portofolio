import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  return (
    <a
      href="#hero"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-[#071330] border-2 border-[#00d2ff] text-[#00d2ff] flex items-center justify-center transform -skew-x-12 shadow-[3px_3px_0px_#000000] hover:bg-[#ff184c] hover:text-white hover:border-white transition-colors"
      title="Kembali ke Atas"
    >
      <ChevronUp className="w-5 h-5 transform skew-x-12" />
    </a>
  )
}
