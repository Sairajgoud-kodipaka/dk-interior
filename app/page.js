'use client'

import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Factory from './components/Factory'
import OurWork from './components/OurWork'
import TrustedBrands from './components/TrustedBrands'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Page load animation
    setIsLoaded(true)
    
    // Smooth scroll polyfill for better cross-browser support
    if (typeof window !== 'undefined') {
      const scrollElements = document.querySelectorAll('a[href^="#"]')
      scrollElements.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.querySelector(element.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }
  }, [])

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Factory />
        <OurWork />
        <TrustedBrands />
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}