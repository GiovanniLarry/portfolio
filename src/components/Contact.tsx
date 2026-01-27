import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Use FormData for Formspree compatibility
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', `New Contact Form Message from ${formData.name}`)

      const response = await fetch('https://formspree.io/f/mdkjgqdy', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        const data = await response.json()
        console.error('Formspree error:', data)
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: 'Email', icon: 'EM', url: 'mailto:touanilarry@icloud.com' },
    { name: 'Phone', icon: 'PH', url: 'tel:+237672467369' },
    { name: 'GitHub', icon: 'GH', url: 'https://github.com/GiovanniLarry' },
    { name: 'LinkedIn', icon: 'LI', url: 'https://www.linkedin.com/in/larry-giovanni-touani-52717b251?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { name: 'Twitter/X', icon: 'TW', url: 'https://x.com/giovans_fb?s=11' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing together.
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-card glass">
                <h3>Get In Touch</h3>
                <p>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="detail-icon">LOC</span>
                    <span>Douala, Cameroon</span>
                  </div>
                  <div className="contact-detail">
                    <span className="detail-icon">EM</span>
                    <span>touanilarry@icloud.com</span>
                  </div>
                  <div className="contact-detail">
                    <span className="detail-icon">PH</span>
                    <span>+237 672467369</span>
                  </div>
                </div>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form className="contact-form glass" onSubmit={handleSubmit} variants={itemVariants}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
              </div>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="form-message form-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="form-message form-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

