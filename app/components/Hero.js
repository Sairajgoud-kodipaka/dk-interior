'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useScrollReveal, useParallax } from '@/lib/animations'

const Hero = () => {
  const [logoRef, logoVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [headlineRef, headlineVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [subtitleRef, subtitleVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [buttonRef, buttonVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [parallaxRef, parallaxOffset] = useParallax(0.3)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToOurWork = () => {
    const element = document.getElementById('our-work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f4f2] via-[#f5f4f2] to-[#f0efed] relative overflow-hidden parallax-container"
      ref={parallaxRef}
    >
      {/* Floating background elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B85042]/5 rounded-full blur-3xl parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) translateY(${parallaxOffset * 0.2}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B85042]/3 rounded-full blur-3xl parallax-element"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) translateY(${parallaxOffset * 0.3}px)`
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo with reveal animation */}
          <div 
            ref={logoRef}
            className={`mb-12 ${logoVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7W1N74WxkHAhjXRyAx0pAKvu1HCXEU.png"
              alt="DK Interiors Logo"
              className="h-20 w-auto mx-auto object-contain interactive-element"
            />
          </div>

          {/* Kinetic headline with fluid typography */}
          <div 
            ref={headlineRef}
            className={`mb-8 ${headlineVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <h1 className="text-fluid-5xl lg:text-fluid-7xl font-bold text-[#0f1115] leading-tight tracking-tight">
              <span className="kinetic-text inline-block">Transform</span>{' '}
              <span className="kinetic-text inline-block">Spaces,</span>
              <br />
              <span className="text-[#B85042] kinetic-text inline-block bg-gradient-to-r from-[#B85042] to-[#A14237] bg-clip-text text-transparent">
                Create
              </span>{' '}
              <span className="text-[#B85042] kinetic-text inline-block bg-gradient-to-r from-[#B85042] to-[#A14237] bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
          </div>

          {/* Enhanced subtitle */}
          <div 
            ref={subtitleRef}
            className={`mb-12 ${subtitleVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-fluid-lg lg:text-fluid-xl text-[#6b7280] max-w-4xl mx-auto leading-relaxed font-medium">
              Premier interior design and fitout solutions for retail, commercial, 
              and residential spaces. Where{' '}
              <span className="text-[#B85042] font-semibold">vision</span> meets{' '}
              <span className="text-[#B85042] font-semibold">craftsmanship</span>.
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div 
            ref={buttonRef}
            className={`${buttonVisible ? 'animate-scale-in revealed' : 'animate-scale-in'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <Button
              onClick={scrollToOurWork}
              size="lg"
              className="bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white px-10 py-5 text-fluid-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 focus-enhanced group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Work
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero