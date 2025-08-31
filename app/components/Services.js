'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, threshold: 0.1 })
  const [gridVisible, setGridVisible] = useState(false)

  const services = [
    {
      icon: "🏠",
      title: "Interior Design",
      description: "Comprehensive interior design solutions tailored to transform your vision into reality with unmatched expertise and attention to detail",
      highlight: "Premium Design"
    },
    {
      icon: "🏗️",
      title: "Fit-out Solutions",
      description: "Complete fit-out services for retail, commercial, and residential spaces, ensuring precision and quality at every step",
      highlight: "End-to-End"
    },
    {
      icon: "🏭",
      title: "In-House Production",
      description: "State-of-the-art factory with advanced machinery for custom furniture, partitions, and interior elements",
      highlight: "Quality Control"
    },
    {
      icon: "⚡",
      title: "Project Management",
      description: "Professional project management ensuring timely delivery, budget adherence, and exceptional results",
      highlight: "On-Time Delivery"
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "24/7 post-sales support, maintenance services, and long-term care for your interior investments",
      highlight: "24/7 Support"
    },
    {
      icon: "🎨",
      title: "Custom Solutions",
      description: "Tailor-made interior solutions that reflect your brand identity and meet specific requirements",
      highlight: "Bespoke Design"
    }
  ]

  useEffect(() => {
    if (isInView) {
      setGridVisible(true)
    }
  }, [isInView])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            Comprehensive interior design and fit-out solutions for retail, commercial, and residential spaces. 
            From concept to completion, we deliver excellence at every step.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 interactive-element overflow-hidden relative ${
                gridVisible ? 'animate-reveal revealed' : 'animate-reveal'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B85042]/5 to-[#A14237]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with enhanced styling */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B85042] to-[#A14237] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                </div>
                
                {/* Highlight badge */}
                <div className="inline-block bg-[#B85042]/10 text-[#B85042] text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-3 sm:mb-4">
                  {service.highlight}
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 kinetic-text group-hover:text-[#B85042] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Learn more arrow */}
                <div 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center text-[#B85042] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer hover:text-[#A14237] p-2 -m-2"
                >
                  <span className="text-xs sm:text-sm mr-2">Learn More</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#B85042]/10 to-white/50 backdrop-blur-sm border border-[#B85042]/20 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss your project requirements and create exceptional interior experiences together. 
              Our team of experts is ready to bring your vision to life.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#B85042] to-[#A14237] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services