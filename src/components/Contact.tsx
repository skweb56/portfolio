'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Clock, MessageSquare, User, Mail as MailIcon } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'
import { useState } from 'react'

const Contact = () => {
  const { setCursorVariant } = useCursor()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '' // honeypot
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')
  
  // Mobile touch handlers
  const handleTouchStart = () => setCursorVariant('button')
  const handleTouchEnd = () => setCursorVariant('default')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(process.env.NEXT_PUBLIC_CONTACT_API_KEY
            ? { 'x-api-key': process.env.NEXT_PUBLIC_CONTACT_API_KEY }
            : {}),
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', company: '' })
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7600221121',
      description: 'Available Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'skweb790@gmail.com',
      description: 'I\'ll respond within 24 hours',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Surat, Gujarat, India',
      description: 'Open to remote opportunities',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sarvesh-tiwari-45315b162/',
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
    }
  ]

  const quickInfo = [
    { icon: Clock, text: 'Response within 24 hours' },
    { icon: MessageSquare, text: 'Available for freelance work' },
    { icon: User, text: 'Open to full-time opportunities' }
  ]

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="heading-2 text-2xl sm:text-3xl md:text-4xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                                     className={`p-4 sm:p-6 rounded-xl ${info.bgColor} border border-border/50 relative overflow-hidden touch-manipulation`}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onTouchStart={handleTouchStart}
                   onTouchEnd={handleTouchEnd}
                   whileHover={{ scale: 1.02 }}
                 >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12"></div>
                  
                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Connect With Me</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                                         className={`p-3 sm:p-4 rounded-xl ${social.bgColor} border border-border/50 flex items-center gap-3 sm:gap-4 hover:scale-105 transition-all duration-200 touch-manipulation min-h-[44px] touch-friendly`}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                     viewport={{ once: true }}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onTouchStart={handleTouchStart}
                     onTouchEnd={handleTouchEnd}
                   >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}>
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">{social.name}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-xl glass-effect border border-border/50"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Quick Info</h3>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p>📍 Based in Surat, Gujarat, India</p>
                <p>🕒 Available for freelance & full-time opportunities</p>
                <p>💼 Open to remote work & relocation</p>
                <p>🚀 Quick response time: Within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="glass-effect rounded-xl p-6 sm:p-8 border border-border/50">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-friendly"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-friendly"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-friendly"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base resize-none"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Honeypot field (hidden visually) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                  <motion.button
                   type="submit"
                   className="w-full btn-primary py-3 sm:py-4 text-sm sm:text-base font-medium"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onTouchStart={handleTouchStart}
                   onTouchEnd={handleTouchEnd}
                 >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <p className="text-red-800 dark:text-red-200 text-sm sm:text-base">
                    ❌ {errorMessage}
                  </p>
                </motion.div>
              )}

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-200 text-sm sm:text-base">
                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
