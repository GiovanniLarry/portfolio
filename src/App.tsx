import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar />
      <Suspense fallback={null}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

