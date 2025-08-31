'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorProviderProps = {
  children: React.ReactNode
}

type CursorProviderState = {
  cursorVariant: string
  setCursorVariant: (variant: string) => void
}

const CursorProviderContext = createContext<CursorProviderState>({
  cursorVariant: 'default',
  setCursorVariant: () => null,
})

export function CursorProvider({ children }: CursorProviderProps) {
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)
  
  // Use motion values for smoother cursor tracking
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring animation for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Trail effect with slower spring
  const trailSpringConfig = { damping: 30, stiffness: 400 }
  const cursorXTrail = useSpring(cursorX, trailSpringConfig)
  const cursorYTrail = useSpring(cursorY, trailSpringConfig)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <CursorProviderContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 mix-blend-difference"
        style={{
          x: cursorXTrail,
          y: cursorYTrail,
          translateX: "-50%",
          translateY: "-50%",
          height: 8,
          width: 8,
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
      
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          height: cursorVariant === 'default' ? 20 : cursorVariant === 'text' ? 32 : 40,
          width: cursorVariant === 'default' ? 20 : cursorVariant === 'text' ? 32 : 40,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </motion.div>
      {children}
    </CursorProviderContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorProviderContext)
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}
