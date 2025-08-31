'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Factory, Zap, Target } from 'lucide-react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import OurWork from './components/OurWork'
import WhyWorkWithUs from './components/WhyWorkWithUs'
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

  // Handle hash-based scrolling when page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if there's a hash in the URL
      if (window.location.hash) {
        // Wait for the page to fully load
        setTimeout(() => {
          const targetId = window.location.hash.substring(1)
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 500) // Small delay to ensure all components are rendered
      }
    }
  }, [])

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Main introduction */}
        <Hero showCTA={false} />
        
        {/* Services Section - Overview with CTAs to internal pages */}
        <Services />
        
        {/* Factory Section - Showcase manufacturing capabilities */}
        <section id="factory" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our State-of-the-Art Factory
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our 27,000+ SFT manufacturing facility equipped with advanced machinery for precision fit-outs and custom furniture.
              </p>
              <Link 
                href="/factory"
                className="inline-block bg-[#B85042] hover:bg-[#A14237] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Visit Our Factory
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Factory className="w-12 h-12 text-[#B85042]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Machinery</h3>
                <p className="text-gray-300">5+ specialized machines for precision cutting, edge banding, and finishing</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-[#B85042]" />
                </div>
                <h3 className="text-xl font-bold mb-2">In-House Production</h3>
                <p className="text-gray-300">100% control over quality, timelines, and customization</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="w-12 h-12 text-[#B85042]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-300">Rigorous testing and inspection at every stage</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Work Section - Portfolio showcase */}
        <OurWork />
        
        {/* Why Work With Us Section - Trust factors */}
        <WhyWorkWithUs />
        
        {/* Trusted Brands Section - Client showcase */}
        <TrustedBrands />
        
        {/* Contact Section - Get in touch */}
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}