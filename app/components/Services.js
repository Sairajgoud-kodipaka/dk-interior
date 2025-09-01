'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Building2, Home } from 'lucide-react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, threshold: 0.1 })
  const [gridVisible, setGridVisible] = useState(false)
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

  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Fit-out Solutions",
      description: "Transform retail, commercial, and corporate spaces with our comprehensive fit-out services. From jewelry stores to office interiors, we deliver precision craftsmanship and innovative design solutions.",
      highlight: "End-to-End",
      redirectTo: "/fitout-solutions"
    },
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Residential Design",
      description: "Create your dream home with bespoke interior design. We transform houses into personalized sanctuaries, from kitchens to bedrooms, ensuring every space reflects your unique style and lifestyle.",
      highlight: "Premium Design",
      redirectTo: "/residential-design"
    }
  ]

  useEffect(() => {
    if (isInView) {
      setGridVisible(true)
    }
  }, [isInView])

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#B85042] to-gray-700">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of interior solutions. From retail fit-outs to residential transformations, 
            we bring your vision to life with precision craftsmanship and innovative design.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 interactive-element overflow-hidden relative ${
                gridVisible ? 'animate-reveal revealed' : 'animate-reveal'
              } ${index === 0 ? 'lg:col-span-1' : 'lg:col-span-1'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Card background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B85042]/5 via-[#B85042]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header Section with Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  {/* Icon container with enhanced styling */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#B85042] to-[#A14237] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="inline-block bg-[#B85042]/10 text-[#B85042] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#B85042]/20">
                    {service.highlight}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 kinetic-text group-hover:text-[#B85042] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-5 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <button 
                  onClick={() => handleNavigation(service.redirectTo)}
                  className="w-full bg-gradient-to-r from-[#B85042] to-[#A14237] text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group-hover:shadow-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services CTA - Enhanced Layout */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#B85042]/10 via-white/50 to-[#B85042]/10 backdrop-blur-sm border border-[#B85042]/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our detailed service pages to understand our process, view our portfolio, and get inspired. 
              Each service offers comprehensive information and showcases our expertise in that specific area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => handleNavigation('/fitout-solutions')}
                className="bg-gradient-to-r from-[#B85042] to-[#A14237] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-base min-w-[180px]"
              >
                Explore Fit-out Solutions
              </button>
              <button 
                onClick={() => handleNavigation('/residential-design')}
                className="border-2 border-[#B85042] text-[#B85042] px-8 py-4 rounded-xl font-semibold hover:bg-[#B85042] hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer text-base min-w-[180px]"
              >
                View Residential Design
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services