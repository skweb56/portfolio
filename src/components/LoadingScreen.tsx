'use client'

import { motion } from 'framer-motion'
import { Loader2, Code, Database, Globe, Zap } from 'lucide-react'

export function LoadingScreen() {
  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-20 left-20' },
    { icon: Database, delay: 0.5, position: 'top-20 right-20' },
    { icon: Globe, delay: 1, position: 'bottom-20 left-20' },
    { icon: Zap, delay: 1.5, position: 'bottom-20 right-20' },
  ]

  const progressSteps = [
    'Initializing...',
    'Loading Components...',
    'Setting up Portfolio...',
    'Almost Ready...',
    'Welcome!'
  ]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-primary/20 ${item.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: item.delay, duration: 1 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <item.icon size={48} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="text-center space-y-8 relative z-10">
        {/* Logo/Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Animated Logo Circle */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-1"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-2xl font-bold gradient-text"
              >
                ST
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="heading-1 gradient-text mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Sarvesh Tiwari
          </motion.h1>
          
          <motion.p 
            className="body-large text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PHP Developer & Full-Stack Engineer
          </motion.p>
        </motion.div>

        {/* Enhanced Loading Spinner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              className="w-16 h-16 border-4 border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Spinner */}
            <motion.div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Center Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Loader2 size={20} className="text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-3"
        >
          {progressSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 1.5 + index * 0.3, 
                duration: 0.5 
              }}
              className="flex items-center justify-center space-x-2"
            >
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
              <span className="text-sm text-muted-foreground">{step}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto relative"
        >
          {/* Progress Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2.8 }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ 
                x: [-100, 100]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: 3
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-xs text-muted-foreground"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading your portfolio experience...
          </motion.span>
        </motion.div>
      </div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
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
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      />
    </div>
  )
}
