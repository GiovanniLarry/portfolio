import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      id: 1,
      role: 'Bachelor Degree',
      company: 'IUGET Douala, Cameroon',
      period: '2025',
      description: 'Completed Bachelor\'s degree in Computer Science/Information Technology. Gained comprehensive knowledge in software development, database management, and system architecture.',
      achievements: [
        'Specialized in full-stack development',
        'Completed major projects including voting system and GPS tracker',
        'Developed expertise in multiple programming languages',
      ],
    },
    {
      id: 2,
      role: 'Higher National Diploma (HND)',
      company: 'IUGET Douala, Cameroon',
      period: '2024',
      description: 'Earned HND with Upper Credits, focusing on practical software development skills and real-world application building. Developed strong foundation in both front-end and back-end technologies.',
      achievements: [
        'Achieved Upper Credits classification',
        'Built real-time chat application (Bawi)',
        'Gained proficiency in web development technologies',
      ],
    },
    {
      id: 3,
      role: 'GCE Advanced Level',
      company: 'Cameroon',
      period: '2022',
      description: 'Completed GCE Advanced Level examinations, establishing strong academic foundation for higher education in technology and computer science.',
      achievements: [
        'Prepared for university-level studies',
        'Developed analytical and problem-solving skills',
      ],
    },
    {
      id: 4,
      role: 'GCE Ordinary Level',
      company: 'Cameroon',
      period: '2020',
      description: 'Completed GCE Ordinary Level, marking the beginning of my academic journey in technology and setting the stage for advanced studies.',
      achievements: [
        'Established academic foundation',
        'Developed interest in technology and programming',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Experience</span>
            <h2 className="section-title">
              Professional <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-item"
                variants={itemVariants}
              >
                <div className="experience-marker">
                  <div className="marker-dot"></div>
                  {index !== experiences.length - 1 && (
                    <div className="marker-line"></div>
                  )}
                </div>
                <div className="experience-content glass">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

