
'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(true) // Set to true by default
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isCursorVisible, setIsCursorVisible] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const cursorRef = useRef(null)



  useEffect(() => {
    // Enhanced mouse movement for parallax and cursor effects
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setMousePosition({
        x: (clientX - window.innerWidth / 2) * 0.02,
        y: (clientY - window.innerHeight / 2) * 0.02
      })
      
      // Custom cursor positioning
      setCursorPosition({ x: clientX, y: clientY })
      setIsCursorVisible(true)
    }

    // Enhanced scroll position for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }



    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsCursorVisible(false)
    const handleMouseEnter = () => setIsCursorVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])



  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    setTimeout(() => setCurrentTextIndex(1), 500)
  }

  const scrollToOurWork = () => {
    const element = document.getElementById('our-work')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor - Double Play Studio Style */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 transition-all duration-100 ease-out ${
          isCursorVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        }}
      >
        <div className="w-full h-full bg-white/20 rounded-full backdrop-blur-sm border border-white/30" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#B85042]/40 to-white/20 rounded-full animate-pulse" />
      </div>

      {/* Background with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback background color */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1115] via-[#1a1d23] to-[#2d3748]" />
        
        {/* Video Background with Enhanced Effects */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-1000"
          onLoadedData={handleVideoLoad}
          style={{
            transform: `scale(${isHovering ? 1.15 : 1.1}) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            filter: isHovering ? 'brightness(1.1) contrast(1.05) saturate(1.1)' : 'brightness(1) contrast(1) saturate(1)'
          }}
        >
          <source src="/Luxury_Lobby_Video_Generation (1).mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Video Overlay - Multiple layers for depth */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#B85042]/10 via-transparent to-[#B85042]/5" />
      </div>

      {/* Enhanced Floating Geometric Elements with Kinetic Movement */}
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/15 rounded-full blur-sm floating-element kinetic-element"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.5}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/8 rounded-full blur-md floating-element kinetic-element"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.3}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Additional floating elements for more depth */}
      <div 
        className="absolute top-1/3 left-1/6 w-16 h-16 border border-white/10 rounded-full blur-sm floating-element kinetic-element"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.2}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Main Content Container - Perfectly centered with better spacing */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        


        {/* Main Hero Title - Single, powerful statement */}
        <div 
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-6xl mx-auto leading-tight tracking-tight">
            <span className="font-light">Transforming</span>{' '}
            <span className="font-bold text-[#B85042]">Spaces</span>{' '}
            <span className="font-light">and Creating</span>{' '}
            <span className="font-bold text-[#B85042]">Experiences</span>
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#B85042] to-transparent mx-auto mt-6 opacity-90"></div>
        </div>



        {/* Enhanced Subtitle - Improved spacing and line height */}
        <div 
          className="mb-12 transition-all duration-1000 ease-out opacity-100 translate-y-0"
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed font-normal px-8 py-8 rounded-2xl glass-effect backdrop-blur-sm">
            We design and build{' '}
            <span className="font-semibold">beautiful interiors</span> for{' '}
            <span className="font-semibold">homes</span>,{' '}
            <span className="font-semibold">offices</span>, and{' '}
            <span className="font-semibold">stores</span>.{' '}
            <span className="text-[#B85042] font-bold">Your vision</span>,{' '}
            <span className="text-[#B85042] font-bold">our expertise</span>.
          </p>
        </div>

        {/* Enhanced CTA Button - Reduced spacing */}
        <div 
          className="mb-12 transition-all duration-1000 ease-out opacity-100 translate-y-0 scale-100"
          style={{ transitionDelay: '1s' }}
        >
          <Button
            onClick={scrollToOurWork}
            size="lg"
            className="group relative bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white px-8 md:px-12 py-5 text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-[#B85042]/50 overflow-hidden btn-premium kinetic-button"
          >
            <span className="relative z-10">
              Explore Our Work
            </span>
            {/* Enhanced shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#B85042]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </Button>
        </div>

        {/* Enhanced Scroll indicator - Better positioned for eye contact */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out opacity-100 translate-y-0"
          style={{ transitionDelay: '1.2s' }}
        >
          <div className="animate-bounce group cursor-pointer" onClick={scrollToOurWork}>
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {/* Scroll indicator glow */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Additional floating elements for enhanced depth */}
      <div 
        className="absolute top-1/2 left-8 w-2 h-2 bg-white/20 rounded-full floating-element kinetic-element"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute top-1/3 right-12 w-3 h-3 bg-white/15 rounded-full floating-element kinetic-element"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Particle effects for premium feel */}
      <div 
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse kinetic-particle"
        style={{
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#B85042]/40 rounded-full animate-pulse kinetic-particle"
        style={{
          transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </section>
  )
}

export default Hero