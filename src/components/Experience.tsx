'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Users, Code, TrendingUp, Award, Zap, Target, Rocket } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

const Experience = () => {
  const { setCursorVariant } = useCursor()

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')
  
  // Mobile touch handlers
  const handleTouchStart = () => setCursorVariant('button')
  const handleTouchEnd = () => setCursorVariant('default')

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Generation Next',
      location: 'Surat, Gujarat',
      duration: 'March 2024 - Present',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      achievements: [
        'Led the development of projects using Next.js, Node.js, and Laravel, ensuring high-performance and scalable solutions',
        'Managed a team of 2 junior developers and 3 interns, providing technical guidance and mentorship',
        'Designed and implemented robust backend architectures and frontend interfaces, improving user experience and system efficiency',
        'Optimized project workflows and ensured timely delivery by coordinating with cross-functional teams'
      ],
      technologies: ['Next.js', 'Node.js', 'Laravel', 'React', 'TypeScript', 'MySQL'],
      highlights: ['Team Leadership', 'Architecture Design', 'Performance Optimization']
    },
    {
      title: 'Blockchain Frontend Developer',
      company: '24Task',
      location: 'Bangalore, Karnataka',
      duration: 'June 2022 - Dec 2023',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'Worked at 24Task, an MNC that developed the UPYO NFT marketplace, a blockchain-based platform for buying, selling, and trading NFTs',
        'Developed and maintained responsive UI components using Next.js, ensuring cross-browser compatibility and seamless performance on both mobile and desktop',
        'Collaborated with backend developers, blockchain engineers, and UI/UX designers to create a smooth and engaging user experience'
      ],
      technologies: ['Next.js', 'React', 'Blockchain', 'NFT', 'Web3', 'TypeScript'],
      highlights: ['Blockchain Development', 'UI/UX Design', 'Cross-platform']
    },
    {
      title: 'PHP Developer',
      company: 'Generation Next',
      location: 'Surat, Gujarat',
      duration: 'August 2020 - June 2022',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      achievements: [
        'Developed and maintained web applications using Laravel and PHP',
        'Delivered 2-3 application projects per month, ensuring high-quality standards',
        'Worked closely with clients to design custom website solutions based on business needs',
        'Implemented database optimization strategies to enhance application performance'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Git'],
      highlights: ['Client Management', 'Database Optimization', 'Project Delivery']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            My professional journey spans over 4 years, working with cutting-edge technologies and leading development teams to deliver exceptional results.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-8 sm:mb-16 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 relative z-10 self-center sm:self-start">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center shadow-lg border-4 border-background`}>
                    <experience.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/30 rounded-full animate-ping"></div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'sm:text-left'}`}>
                  <motion.div
                                       className="p-4 sm:p-6 md:p-8 rounded-xl glass-effect card-hover border border-border/50 relative overflow-hidden"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onTouchStart={handleTouchStart}
                   onTouchEnd={handleTouchEnd}
                   whileHover={{ scale: 1.02 }}
                 >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full -translate-y-20 translate-x-20"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-foreground">
                            {experience.title}
                          </h3>
                          <div className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-10 rounded-full`}>
                            <span className="text-xs font-semibold text-primary">
                              {index === 0 ? 'Current' : 'Previous'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 + achievementIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="pt-4 border-t border-border/30">
                        <div className="flex flex-wrap gap-2">
                          {experience.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { icon: Target, label: 'Years Experience', value: '4+', color: 'from-blue-500 to-cyan-600' },
            { icon: Rocket, label: 'Projects Delivered', value: '30+', color: 'from-purple-500 to-pink-600' },
            { icon: Users, label: 'Team Members Led', value: '5+', color: 'from-green-500 to-emerald-600' },
            { icon: Zap, label: 'Technologies', value: '5+', color: 'from-orange-500 to-amber-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
                             className="text-center p-6 rounded-xl glass-effect card-hover"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onTouchStart={handleTouchStart}
               onTouchEnd={handleTouchEnd}
             >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
