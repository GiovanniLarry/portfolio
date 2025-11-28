import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: 'Online Voting System',
      description: 'A secure and efficient online voting platform with real-time vote counting, user authentication, and result visualization. Built with modern web technologies for reliable and transparent elections.',
      tags: ['JavaScript', 'PHP', 'MySQL'],
      image: '🗳️',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    {
      id: 2,
      title: 'Bawi - Realtime Chat App',
      description: 'A real-time messaging application with instant message delivery, user presence indicators, and group chat capabilities. Features modern UI/UX with seamless communication experience.',
      tags: ['JavaScript', 'WebSocket', 'Node.js'],
      image: '💬',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
      id: 3,
      title: 'Realtime GPS Tracker',
      description: 'A comprehensive GPS tracking system with real-time location updates, route history, and geofencing capabilities. Perfect for fleet management and personal tracking applications.',
      tags: ['JavaScript', 'Python', 'GPS API'],
      image: '📍',
      gradient: 'linear-gradient(135deg, #ec4899, #00f5ff)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Projects</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-icon">{project.image}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="https://github.com/GiovanniLarry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

