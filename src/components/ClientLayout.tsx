'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { CursorProvider } from '@/components/CursorProvider'
import { ParticleBackground } from '@/components/ParticleBackground'
import { LoadingScreen } from '@/components/LoadingScreen'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <CursorProvider>
        <ParticleBackground />
        <div className="relative z-10">
          {children}
        </div>
      </CursorProvider>
    </ThemeProvider>
  )
}
