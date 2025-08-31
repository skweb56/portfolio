'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { useCursor } from '@/components/CursorProvider'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { setCursorVariant } = useCursor()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    // { value: 'system', icon: Monitor, label: 'System' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground hidden sm:block">
                Sarvesh Tiwari
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group text-sm sm:text-base font-medium"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="relative group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="Toggle theme"
              >
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </motion.button>
              
              {/* Theme Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-32 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors ${
                      theme === option.value ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <nav className="py-4 px-4 sm:px-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
