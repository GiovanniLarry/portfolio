import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import FloatingShapes from './3D/FloatingShapes'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="hero" className="hero section" ref={heroRef}>
      <div className="hero-background">
        <Canvas className="hero-canvas" dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
          <FloatingShapes />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="neon-glow">Full Stack Developer</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Touani Giovanni Larry</span>
            <br />
            Full Stack Developer & AI Enthusiast
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            A passionate Cameroonian developer specializing in front-end and back-end development.
            I build innovative solutions using modern technologies including Python, JavaScript, Java, PHP, and AI.
            Transforming ideas into functional, scalable applications.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-gradient-overlay"></div>
    </section>
  )
}

export default Hero

