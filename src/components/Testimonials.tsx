import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Testimonials.css'

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      content: 'Working with this developer was an absolute pleasure. The attention to detail and creative vision brought our project to life in ways we never imagined.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Creative Director',
      content: 'Exceptional work! The combination of technical expertise and artistic flair resulted in a stunning product that exceeded all expectations.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      content: 'Professional, innovative, and reliable. Delivered on time and went above and beyond to ensure every detail was perfect. Highly recommended!',
      rating: 5,
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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">
              What Clients <span className="gradient-text">Say</span>
            </h2>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card glass"
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ perspective: 1000 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

