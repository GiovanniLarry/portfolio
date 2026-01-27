import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skills = [
    { name: 'Frontend Development', level: 90, icon: 'FE' },
    { name: 'Backend Development', level: 88, icon: 'BE' },
    { name: 'Python', level: 85, icon: 'PY' },
    { name: 'JavaScript', level: 92, icon: 'JS' },
    { name: 'Java', level: 85, icon: 'JV' },
    { name: 'PHP', level: 88, icon: 'PH' },
    { name: 'C++', level: 80, icon: 'C+' },
    { name: 'C', level: 82, icon: 'C' },
    { name: 'MySQL', level: 87, icon: 'DB' },
    { name: 'Vite', level: 90, icon: 'VT' },
    { name: 'CSS', level: 93, icon: 'CS' },
    { name: 'AI Integration', level: 85, icon: 'AI' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Skills</span>
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level-wrapper">
                  <div className="skill-level-bar">
                    <motion.div
                      className="skill-level-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="skill-level-text">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

