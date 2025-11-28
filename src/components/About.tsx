import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              About <span className="gradient-text">Touani Giovanni Larry</span>
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                I'm Touani Giovanni Larry, a passionate full-stack developer from Cameroon with expertise
                in both front-end and back-end development. I specialize in creating robust, scalable
                applications using modern technologies and AI integration.
              </p>
              <p>
                My educational journey includes GCE Ordinary Level (2020), GCE Advanced Level (2022),
                HND with Upper Credits (2024), and a Bachelor's degree (2025) from IUGET Douala, Cameroon.
                I'm proficient in multiple programming languages and frameworks, enabling me to tackle
                diverse development challenges.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Major Projects</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">5</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Technologies</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-image-wrapper" variants={itemVariants}>
              <div className="about-image glass">
                <img 
                  src="/profile-image.jpg" 
                  alt="Touani Giovanni Larry" 
                  className="profile-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <div className="placeholder-content">
                    <span className="gradient-text">Touani G. Larry</span>
                    <p>Add profile-image.jpg to public folder</p>
                  </div>
                </div>
              </div>
              <div className="about-image-glow"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

