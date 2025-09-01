'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, Award, Users, Clock, Shield, Star } from 'lucide-react'

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (href) => {
    if (href.startsWith('/')) {
      // External page navigation
      router.push(href)
    } else if (href.startsWith('#')) {
      // Internal section navigation
      if (window.location.pathname === '/') {
        // Already on home page, scroll to section
        scrollToSection(href.substring(1))
      } else {
        // On different page, navigate to home page first, then scroll
        router.push('/')
        // Set a flag to scroll after navigation
        sessionStorage.setItem('scrollToSection', href)
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('why-work-with-us')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Over two decades of expertise in premium interior fit-outs and craftsmanship'
    },
    {
      icon: Users,
      title: '300+ Projects Delivered',
      description: 'Successfully completed over 300 projects across retail, corporate, and residential spaces'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Commitment to meeting deadlines without compromising quality'
    },
    {
      icon: Shield,
      title: '4 Lakh+ Sq. Ft. Delivered',
      description: 'Managed over 4 lakh square feet of premium interior projects'
    },
    {
      icon: Star,
      title: 'Premium Brand Partner',
      description: 'Trusted by top brands like Raymond, PMJ Jewels, Manyavar, and Anu Jewellers'
    },
    {
      icon: CheckCircle,
      title: 'In-House Manufacturing',
      description: '22,000+ SFT factory with advanced machinery for complete quality control'
    }
  ]

  return (
    <section id="why-work-with-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl font-bold text-[#0f1115] mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Why Work With Us
          </h2>
          <p className={`text-fluid-lg md:text-fluid-xl text-[#6b7280] max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We combine creativity, craftsmanship, and commitment to deliver exceptional interior solutions that transform spaces and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-[#f5f4f2] to-white border border-[#6b7280]/10 hover:border-[#B85042]/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#B85042] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f1115] mb-4 group-hover:text-[#B85042] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button  onClick={() => handleNavigation('#contact')} 
          className="bg-[#B85042] hover:bg-[#B85042]/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs
