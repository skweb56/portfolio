'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee, MapPin, Phone, Globe, Star, Clock } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

const Footer = () => {
  const { setCursorVariant } = useCursor()

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sarvesh-tiwari-45315b162/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/skweb56',
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-900/20'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/skweb56',
      icon: Twitter,
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
      name: 'Email',
      url: 'mailto:skweb790@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-950/20'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const contactInfo = [
    { icon: MapPin, text: 'Surat, Gujarat, India' },
    { icon: Mail, text: 'skweb790@gmail.com' },
    { icon: Phone, text: '+91 7600221121' } //My phone number
  ]

  const currentYear = new Date().getFullYear()

  return (
    // <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden mt-16 sm:mt-20">
      <footer className="bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/50 relative 
    overflow-hidden mt-16 sm:mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-max px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-8 sm:pb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Sarvesh</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs">
              Passionate about creating innovative web solutions and delivering exceptional user experiences.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-foreground font-medium">Email</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">skweb790@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-foreground font-medium">Location</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Surat, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-foreground font-medium">Response Time</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-foreground">Follow Me</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 sm:p-3 rounded-lg ${social.bgColor} border border-border/50 hover:scale-110 transition-all duration-200 touch-manipulation`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-border/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <span>© 2025 Sarvesh. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.div>
              <span>in India</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm sm:text-base font-medium touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
    </footer>
  )
}

export default Footer
