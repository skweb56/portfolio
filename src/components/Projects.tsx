'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Smartphone, ShoppingCart, Truck, Gem, Store, Utensils, Star, Users, Zap } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

const Projects = () => {
  const { setCursorVariant } = useCursor()

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')
  
  // Mobile touch handlers
  const handleTouchStart = () => setCursorVariant('button')
  const handleTouchEnd = () => setCursorVariant('default')

  const projects = [
    {
      title: '4Ways Express',
      subtitle: 'Courier Management System',
      description: 'A comprehensive courier management system with task assignment, customer history tracking, invoice generation, and driver payroll management.',
      features: [
        'Complete courier management system with task assignment',
        'Customer history tracking and invoice generation',
        'Driver payroll management system',
        'Four user roles: Admin, Super Admin, Customer, Customer Employee',
        'Optimized backend queries reducing response time by 35%'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Bootstrap'],
      icon: Truck,
      category: 'Enterprise',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      liveUrl: 'https://4wayexpress.ca/',
      githubUrl: '#',
      stats: { users: '1000+', performance: '35%', rating: '4.8' }
    },
    {
      title: 'Dev Jewels',
      subtitle: 'Jewelry Management System',
      description: 'Enhanced frontend and backend stability by fixing critical bugs in a Livewire-based jewelry management system.',
      features: [
        'Fixed critical bugs in Livewire-based system',
        'Enhanced functionality with click-based updates',
        'Improved frontend and backend stability',
        'Streamlined jewelry inventory management'
      ],
      technologies: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Alpine.js'],
      icon: Gem,
      category: 'E-commerce',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      liveUrl: 'https://devjewels.com/home',
      githubUrl: '#',
      stats: { users: '500+', performance: '40%', rating: '4.9' }
    },
    {
      title: 'OLX Mini & OnlineShop',
      subtitle: 'Marketplace Platform',
      description: 'A marketplace platform allowing users to log in, upload, and sell products with a Flutter-based mobile app.',
      features: [
        'Marketplace platform for buying and selling products',
        'User authentication and product upload system',
        'Flutter-based mobile app with Laravel API integration',
        'Real-time product management and tracking'
      ],
      technologies: ['Laravel', 'Flutter', 'NextJS', 'MySQL', 'REST API'],
      icon: Store,
      category: 'Marketplace',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      liveUrl: 'https://olxmini.vercel.app/',
      githubUrl: '#',
      stats: { users: '2000+', performance: '50%', rating: '4.7' }
    },
    {
      title: 'Food Booking Admin Panel',
      subtitle: 'Food Ordering System',
      description: 'A food ordering system using Node.js with EJS-based frontend, featuring real-time order tracking and food management.',
      features: [
        'Food ordering system with real-time tracking',
        'Admin panel for food management',
        'EJS-based frontend with Node.js backend',
        'Order management and delivery tracking'
      ],
      technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Socket.io'],
      icon: Utensils,
      category: 'Food & Beverage',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      liveUrl: 'https://restaurant-rms.vercel.app/',
      githubUrl: '#',
      stats: { users: '800+', performance: '45%', rating: '4.6' }
    },
    {
      title: 'Fitness and Diet Chart Plan',
      subtitle: 'Health Management System',
      description: 'A web-based BMI calculator with personalized exercise and diet recommendations for health management.',
      features: [
        'BMI calculator with personalized recommendations',
        'Exercise and diet chart generation',
        'Health tracking and progress monitoring',
        'User-friendly interface for health management'
      ],
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Chart.js'],
      icon: Code,
      category: 'Health & Fitness',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/20',
      liveUrl: '#',
      githubUrl: '#',
      stats: { users: '300+', performance: '30%', rating: '4.5' }
    },
    {
      title: 'One Place for Entertainment',
      subtitle: 'Entertainment Platform',
      description: 'A web-based platform for accessing and downloading entertainment content in one centralized location.',
      features: [
        'Centralized entertainment content platform',
        'Content download and streaming capabilities',
        'User-friendly content organization',
        'Multi-media content support'
      ],
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'FFmpeg'],
      icon: Smartphone,
      category: 'Entertainment',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20',
      liveUrl: '#',
      githubUrl: '#',
      stats: { users: '1500+', performance: '25%', rating: '4.4' }
    }
  ]

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my professional and personal projects, demonstrating expertise in full-stack development, 
            mobile applications, and innovative solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-xl glass-effect card-hover border border-border/50 overflow-hidden relative">
                {/* Header with Icon */}
                <div className={`p-4 sm:p-6 ${project.bgColor} border-b border-border/50`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground rounded-full text-xs font-medium border border-border/50">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground">{project.stats.rating}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border/30">
                                         <motion.a
                       href={project.liveUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors min-h-[44px] touch-friendly"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                       onTouchStart={handleTouchStart}
                       onTouchEnd={handleTouchEnd}
                     >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      Live Demo
                    </motion.a>
                                         <motion.a
                       href={project.githubUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2 border border-border text-muted-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-muted transition-colors min-h-[44px] touch-friendly"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                       onTouchStart={handleTouchStart}
                       onTouchEnd={handleTouchEnd}
                     >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life!
            </p>
                         <motion.button
               onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="btn-primary"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onTouchStart={handleTouchStart}
               onTouchEnd={handleTouchEnd}
             >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
