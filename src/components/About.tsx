'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Lightbulb, GraduationCap, Users, Zap, Shield, Settings } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

const About = () => {
  const { setCursorVariant } = useCursor()

  const handleMouseEnter = () => setCursorVariant('button')
  const handleMouseLeave = () => setCursorVariant('default')
  
  // Mobile touch handlers
  const handleTouchStart = () => setCursorVariant('button')
  const handleTouchEnd = () => setCursorVariant('default')

  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-600' },
        { name: 'Next.js', level: 85, color: 'from-blue-500 to-cyan-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-cyan-600' },
        { name: 'Tailwind CSS', level: 95, color: 'from-blue-500 to-cyan-600' }
      ]
    },
    {
      name: 'Backend Development',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Laravel', level: 95, color: 'from-purple-500 to-pink-600' },
        { name: 'PHP', level: 90, color: 'from-purple-500 to-pink-600' },
        { name: 'Node.js', level: 85, color: 'from-purple-500 to-pink-600' },
        { name: 'MySQL', level: 88, color: 'from-purple-500 to-pink-600' }
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: Settings,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Git & GitHub', level: 92, color: 'from-green-500 to-emerald-600' },
        { name: 'Vercel', level: 75, color: 'from-green-500 to-emerald-600' },
        { name: 'Jira', level: 70, color: 'from-green-500 to-emerald-600' },
      ]
    }
  ]

  const languages = ['English', 'Hindi', 'Gujarati']

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Jain University, Surat',
      duration: 'July 2021 - October 2023',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vimal Tormal Poddar College, Surat, Gujarat',
      duration: 'June 2018 - April 2020',
    },
  ]

  const skillCards = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in both frontend and backend technologies',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL database management',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Modern frameworks and cutting-edge tools',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Innovative solutions for complex challenges',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20'
    }
  ]

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <article>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Passionate Developer & Technology Enthusiast
              </h3>
              
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p className="body-large">
                  I'm a dedicated Sr. Full Stack Developer with a Master's in Computer Applications, 
                  possessing a comprehensive understanding of both frontend and backend technologies. 
                  With over 4 years of professional experience, I've successfully delivered 50+ projects 
                  and led development teams to create innovative solutions.
                </p>
                
                <p className="body-large">
                  My expertise spans modern web technologies including Next.js, React.js, Laravel, and Node.js. 
                  I specialize in building scalable applications, optimizing performance, and implementing 
                  best practices in software development. I'm passionate about creating user-centric solutions 
                  that drive business growth and enhance user experiences.
                </p>
                
                <p className="body-large">
                  Currently working as a Full Stack Developer at Generation Next, I lead a team of 5 developers 
                  and manage end-to-end project delivery. I'm always eager to learn new technologies and 
                  contribute to challenging projects that push the boundaries of what's possible in web development.
                </p>
              </div>
            </article>
          </motion.div>

          {/* Right Column - Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            role="list"
            aria-label="Key skills and expertise areas"
          >
            {skillCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 sm:p-6 rounded-xl ${card.bgColor} border border-border/50 card-hover mt-4 pt-4`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                role="listitem"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                  <card.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Technical Skills Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Technical Skills */}
          <div className="pt-12">
            <h3 className="heading-3 mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-effect border border-border/50 relative overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">Frontend Development</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'React.js', level: 90 },
                      { name: 'Next.js', level: 85 },
                      { name: 'TypeScript', level: 80 },
                      { name: 'Tailwind CSS', level: 95 }
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-effect border border-border/50 relative overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">Backend Development</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Laravel', level: 95 },
                      { name: 'PHP', level: 90 },
                      { name: 'Node.js', level: 85 },
                      { name: 'MySQL', level: 88 }
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass-effect border border-border/50 relative overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground">Tools & Technologies</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Git & GitHub', level: 92 },
                      { name: 'Vercel', level: 75 },
                      { name: 'Jira', level: 70 },
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl glass-effect border border-border/50"
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Additional Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'RESTful APIs', 'WebSocket', 'JWT Authentication',
                  'Responsive Design', 'Progressive Web Apps', 'SEO Optimization',
                  'Performance Optimization', 'Unit Testing',
                  'Agile Methodology', 'Team Leadership', 'Project Management'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-2 mb-4">
              <span className="gradient-text">Education</span> Journey
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full animate-ping"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <motion.div
                      className="p-6 rounded-xl glass-effect card-hover border border-border/50 relative overflow-hidden"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                      
                      <div className="relative z-10">
                        {/* Degree Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full mb-4">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-xs font-semibold text-primary">
                            {edu.degree.includes('Master') ? 'Graduate Degree' : 'Undergraduate Degree'}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <p className="text-primary font-semibold">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-4 h-4 bg-muted rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">{edu.duration}</span>
                        </div>

                        {/* Achievement Highlights */}
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <div className="flex flex-wrap gap-2">
                            {edu.degree.includes('Master') ? (
                              <>
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                                  Advanced Research
                                </span>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                                  Thesis Project
                                </span>
                                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                                  Academic Excellence
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs font-medium">
                                  Foundation Studies
                                </span>
                                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium">
                                  Core Programming
                                </span>
                                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded text-xs font-medium">
                                  Practical Projects
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/20"
            >
              <div className="text-center">
                <h4 className="font-bold text-foreground mb-3">Educational Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Computer Applications Focus</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">5+ Years of Study</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-muted-foreground">Practical & Theoretical</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
