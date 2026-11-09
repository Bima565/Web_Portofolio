import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target?.closest ? e.target.closest('button, a, input, textarea, [role="button"]') : null
      setIsHovered(Boolean(target))
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none">
      {/* Outer Stella Reticle */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 rounded-full border border-[#d3bc8e] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? '#f5e3b5' : '#d3bc8e',
          borderWidth: isHovered ? '2px' : '1px',
          backgroundColor: isHovered ? 'rgba(211, 188, 142, 0.2)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(211, 188, 142, 0.4)' : 'none',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* Center 4-Point Starlight Core */}
      <motion.div
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#f5e3b5] shadow-[0_0_8px_#d3bc8e]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
}
