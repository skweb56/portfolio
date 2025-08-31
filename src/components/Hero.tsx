'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

const Hero = () => {
  const { setCursorVariant } = useCursor()

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')
  
  // Mobile touch handlers
  const handleTouchStart = () => setCursorVariant('button')
  const handleTouchEnd = () => setCursorVariant('default')

     const floatingElements = [
     { icon: '⚡', delay: 0, position: 'top-20 left-4 sm:left-20', animation: 'bounce' },
     { icon: '🚀', delay: 0.5, position: 'top-40 right-4 sm:right-20', animation: 'float' },
     { icon: '💻', delay: 1, position: 'bottom-40 left-2 sm:left-10', animation: 'pulse' },
     { icon: '🎯', delay: 1.5, position: 'bottom-20 right-2 sm:right-10', animation: 'spin' },
   ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/skweb56', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarvesh-tiwari-45315b162/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  const downloadCV = () => {
    // Simple PDF download
    const link = document.createElement('a')
    link.href = '/Sarvesh_Tiwari_Resume.pdf' // Path to your resume file in public folder
    link.download = 'Sarvesh_Tiwari_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center section-padding pt-16 sm:pt-20 relative overflow-hidden"
      aria-label="Hero section - Introduction to Sarvesh"
    >
             {/* Enhanced Floating Elements - Hidden on mobile for better performance */}
       {floatingElements.map((element, index) => (
         <motion.div
           key={index}
           className={`absolute text-2xl sm:text-4xl opacity-20 ${element.position} hidden sm:block`}
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 0.2, scale: 1 }}
           transition={{ delay: element.delay, duration: 1 }}
           aria-hidden="true"
         >
           <motion.div
             transition={{ 
               duration: element.animation === 'spin' ? 4 : 3, 
               repeat: Infinity, 
               delay: element.delay,
               ease: element.animation === 'spin' ? 'linear' : 'easeInOut'
             }}
           >
             {element.icon}
           </motion.div>
         </motion.div>
       ))}

             {/* Enhanced Gradient Background */}
       <div className="absolute inset-0 gradient-bg opacity-30" />
       
       {/* Dynamic Gradient Overlay */}
       <motion.div
         className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"
         animate={{ 
           opacity: [0.3, 0.6, 0.3],
         }}
         transition={{ 
           duration: 10, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         aria-hidden="true"
       />
       
       {/* Animated Light Rays */}
       <motion.div
         className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden sm:block"
         animate={{ 
           opacity: [0, 0.5, 0],
           scaleY: [0, 1, 0],
         }}
         transition={{ 
           duration: 6, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         aria-hidden="true"
       />
       
       <motion.div
         className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent hidden sm:block"
         animate={{ 
           opacity: [0, 0.4, 0],
           scaleY: [0, 1, 0],
         }}
         transition={{ 
           duration: 8, 
           repeat: Infinity, 
           ease: "easeInOut",
           delay: 2
         }}
         aria-hidden="true"
       />
       
       <motion.div
         className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-500/10 to-transparent hidden sm:block"
         animate={{ 
           opacity: [0, 0.4, 0],
           scaleY: [0, 1, 0],
         }}
         transition={{ 
           duration: 7, 
           repeat: Infinity, 
           ease: "easeInOut",
           delay: 4
         }}
         aria-hidden="true"
       />

      <div className="container-max text-center relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 sm:px-6 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
          >
            👋 Welcome to My Portfolio
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="heading-1 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl px-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Sarvesh Tiwari</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="heading-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground px-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Developer & Software Engineer 
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="body-large text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto text-balance px-3 sm:px-4 md:px-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Passionate about creating robust web applications with NextJs, NodeJs, Laravel and modern technologies. 
            Delivering high-quality solutions that drive business growth and user experience.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3 min-h-[44px] touch-friendly"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-label="Get in touch with Sarvesh"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Get In Touch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3 min-h-[44px] touch-friendly"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-label="Download Sarvesh's resume"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download CV
            </motion.button>
          </motion.div>
  
          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 pt-4 sm:pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            role="navigation"
            aria-label="Social media links"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                                 className="p-2.5 sm:p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 whileTap={{ scale: 0.9 }}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}
                 aria-label={`Visit Sarvesh's ${social.label} profile`}
               >
                <social.icon size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          role="navigation"
          aria-label="Scroll to explore more content"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ChevronDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Animated Background Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/5 rounded-full blur-3xl hidden sm:block"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/5 rounded-full blur-3xl hidden sm:block"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      />
      
      {/* New Floating Particles */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-cyan-500/10 rounded-full blur-2xl hidden sm:block"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 15, 0],
          y: [0, -25, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-20 sm:w-32 h-20 sm:h-32 bg-pink-500/10 rounded-full blur-2xl hidden sm:block"
        animate={{ 
          scale: [1.1, 0.7, 1.1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      {/* Enhanced Floating Orbs */}
      <motion.div
        className="absolute top-1/6 left-1/3 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full hidden sm:block"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 30, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute top-2/3 right-1/6 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full hidden sm:block"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.7, 0.3],
          x: [0, -25, 0],
          y: [0, 35, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/6 left-1/2 w-14 h-14 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full hidden sm:block"
        animate={{ 
          scale: [1.2, 0.7, 1.2],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 20, 0],
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          delay: 1
        }}
        aria-hidden="true"
      />
      
      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 hidden sm:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{ 
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/2 left-1/6 w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg rotate-45 hidden sm:block"
        animate={{ 
          rotate: [45, 405, 45],
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute top-1/3 right-1/6 w-6 h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full hidden sm:block"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 25, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg hidden sm:block"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      {/* Animated Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 via-transparent to-transparent hidden sm:block"
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      {/* Dynamic Color Shifts */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 hidden sm:block"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
            "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))"
          ]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400/40 rounded-full hidden sm:block"
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute top-1/3 left-1/6 w-1.5 h-1.5 bg-cyan-400/40 rounded-full hidden sm:block"
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-pink-400/40 rounded-full hidden sm:block"
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />
      
      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/10 rounded-3xl hidden sm:block"
        animate={{ 
          borderColor: [
            "rgba(59, 130, 246, 0.1)",
            "rgba(147, 51, 234, 0.2)",
            "rgba(236, 72, 153, 0.1)",
            "rgba(59, 130, 246, 0.1)"
          ],
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.1)",
            "0 0 30px rgba(147, 51, 234, 0.2)",
            "0 0 20px rgba(236, 72, 153, 0.1)",
            "0 0 20px rgba(59, 130, 246, 0.1)"
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
