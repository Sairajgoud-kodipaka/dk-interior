'use client'

import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/lib/animations'

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 })
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 })
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.3 })
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.2 })
  
  // Counter animation for stats
  const [projectCount, setProjectCount] = useState(0)
  const [yearCount, setYearCount] = useState(0)

  useEffect(() => {
    if (statsVisible) {
      // Animate project counter
      const projectInterval = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 500) return prev + 15
          clearInterval(projectInterval)
          return 500
        })
      }, 30)

      // Animate year counter
      const yearInterval = setInterval(() => {
        setYearCount(prev => {
          if (prev < 10) return prev + 1
          clearInterval(yearInterval)
          return 10
        })
      }, 150)

      return () => {
        clearInterval(projectInterval)
        clearInterval(yearInterval)
      }
    }
  }, [statsVisible])

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B85042]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B85042]/3 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 ${titleVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
          >
            <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-[#0f1115] mb-6 kinetic-text">
              About{' '}
              <span className="bg-gradient-to-r from-[#B85042] to-[#A14237] bg-clip-text text-transparent">
                DK Interiors
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B85042] to-[#A14237] mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div 
              ref={contentRef}
              className={`space-y-8 ${contentVisible ? 'animate-reveal-left revealed' : 'animate-reveal-left'}`}
            >
              <div className="space-y-6">
                <p className="text-fluid-lg text-[#6b7280] leading-relaxed font-medium">
                  With over a decade of expertise in interior design and fitouts, 
                  DK Interiors has established itself as India's{' '}
                  <span className="text-[#B85042] font-semibold">premier destination</span> 
                  {' '}for transformative spaces.
                </p>
                
                <p className="text-fluid-base text-[#6b7280] leading-relaxed">
                  We specialize in creating bespoke solutions that blend 
                  functionality with aesthetic excellence, serving clients across 
                  retail, commercial, and residential sectors with unmatched precision.
                </p>
              </div>
              
              {/* Animated Stats */}
              <div 
                ref={statsRef}
                className={`grid grid-cols-2 gap-8 pt-8 ${statsVisible ? 'animate-scale-in revealed' : 'animate-scale-in'}`}
                style={{ animationDelay: '0.3s' }}
              >
                <div className="text-center p-6 bg-gradient-to-br from-[#f5f4f2] to-white rounded-2xl shadow-lg interactive-element">
                  <div className="text-fluid-3xl font-bold text-[#B85042] mb-2 font-mono">
                    {projectCount}+
                  </div>
                  <div className="text-fluid-sm text-[#6b7280] font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#f5f4f2] to-white rounded-2xl shadow-lg interactive-element">
                  <div className="text-fluid-3xl font-bold text-[#B85042] mb-2 font-mono">
                    {yearCount}+
                  </div>
                  <div className="text-fluid-sm text-[#6b7280] font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Vision/Mission Cards */}
            <div 
              ref={cardsRef}
              className={`space-y-8 ${cardsVisible ? 'animate-reveal-right revealed' : 'animate-reveal-right'}`}
            >
              <div className="bg-gradient-to-br from-[#f5f4f2] via-white to-[#f5f4f2] p-8 rounded-2xl shadow-lg border border-[#6b7280]/10 interactive-element group">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#B85042] to-[#A14237] rounded-full mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-fluid-xl font-semibold text-[#0f1115] kinetic-text">Our Vision</h3>
                </div>
                <p className="text-[#6b7280] leading-relaxed">
                  To be the leading interior design company that creates spaces 
                  where functionality meets beauty, enhancing lives and businesses 
                  through innovative design solutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#f5f4f2] via-white to-[#f5f4f2] p-8 rounded-2xl shadow-lg border border-[#6b7280]/10 interactive-element group">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#B85042] to-[#A14237] rounded-full mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-fluid-xl font-semibold text-[#0f1115] kinetic-text">Our Mission</h3>
                </div>
                <p className="text-[#6b7280] leading-relaxed">
                  Delivering exceptional interior solutions through innovative design, 
                  quality craftsmanship, and personalized service that exceeds 
                  client expectations.
                </p>
              </div>
              
              {/* Additional highlight card */}
              <div className="bg-gradient-to-r from-[#B85042] to-[#A14237] p-8 rounded-2xl shadow-xl text-white interactive-element group overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-fluid-xl font-semibold mb-4">Why Choose Us?</h3>
                  <p className="text-white/90 leading-relaxed">
                    From concept to completion, we ensure every detail reflects your vision 
                    while maintaining the highest standards of quality and craftsmanship.
                  </p>
                </div>
                {/* Animated background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About