'use client'

import { motion } from 'framer-motion'
import { useCursor } from '@/components/CursorProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  const { setCursorVariant } = useCursor()

  const handleMouseEnter = () => setCursorVariant('text')
  const handleMouseLeave = () => setCursorVariant('default')

  return (
    <>
      <ScrollProgress />
      <Header />
      
      <main 
        className="min-h-screen"
        role="main"
        aria-label="Main content of Sarvesh's portfolio"
      >
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-padding"
          aria-labelledby="about-heading"
        >
          <About />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-padding bg-muted/30"
          aria-labelledby="experience-heading"
        >
          <Experience />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-padding"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-padding bg-muted/30"
          aria-labelledby="contact-heading"
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </>
  )
}
