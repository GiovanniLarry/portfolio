import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              © {currentYear} Portfolio. Crafted with{' '}
              <span className="heart">♥</span> and attention to detail.
            </p>
          </motion.div>
          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#hero">Back to Top</a>
            <span>•</span>
            <a href="#about">About</a>
            <span>•</span>
            <a href="#contact">Contact</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

