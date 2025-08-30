'use client'

import { Home, Building2, Store, Palette, Hammer, Users, ArrowRight } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/lib/animations'

const Services = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 })
  const [subtitleRef, subtitleVisible] = useScrollReveal({ threshold: 0.3 })
  const [gridRef, gridVisible] = useStaggerReveal(6, { threshold: 0.1 })

  const services = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Retail Fitouts",
      description: "Creating compelling retail environments that drive sales and enhance customer experience with strategic layout design.",
      highlight: "500+ Retail Projects"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Spaces",
      description: "Modern office designs that boost productivity and reflect your company culture through innovative workspace solutions.",
      highlight: "Corporate Excellence"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Design",
      description: "Personalized home interiors that combine comfort, style, and functionality to create your perfect living space.",
      highlight: "Luxury Living"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Consultation",
      description: "Expert guidance on space planning, color schemes, and design direction to bring your vision to life.",
      highlight: "Expert Guidance"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project execution with timely delivery and quality assurance throughout the entire process.",
      highlight: "On-Time Delivery"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Tailored design solutions that meet your specific requirements and budget with personalized attention.",
      highlight: "Bespoke Design"
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#f5f4f2] via-[#f5f4f2] to-[#f0efed] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#B85042]/5 rounded-full blur-3xl transform -translate-x-36" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B85042]/3 rounded-full blur-3xl transform translate-x-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div 
              ref={titleRef}
              className={`mb-6 ${titleVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
            >
              <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-[#0f1115] kinetic-text">
                Our{' '}
                <span className="bg-gradient-to-r from-[#B85042] to-[#A14237] bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B85042] to-[#A14237] mx-auto rounded-full mt-4" />
            </div>
            
            <div 
              ref={subtitleRef}
              className={`${subtitleVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-fluid-lg text-[#6b7280] max-w-4xl mx-auto leading-relaxed font-medium">
                Comprehensive interior design solutions tailored to transform your vision into reality 
                with unmatched expertise and attention to detail
              </p>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div 
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-[#6b7280]/10 interactive-element overflow-hidden relative ${
                  gridVisible ? 'animate-reveal revealed' : 'animate-reveal'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Card background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B85042]/5 to-[#A14237]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with enhanced styling */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B85042] to-[#A14237] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="inline-block bg-[#B85042]/10 text-[#B85042] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {service.highlight}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-fluid-xl font-bold text-[#0f1115] mb-4 kinetic-text group-hover:text-[#B85042] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6b7280] leading-relaxed mb-6 group-hover:text-[#0f1115] transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Learn more arrow */}
                  <div className="flex items-center text-[#B85042] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B85042]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
          
          {/* Call-to-action section */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#6b7280]/10 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-fluid-xl font-bold text-[#0f1115] mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Let's discuss your project and create something extraordinary together
              </p>
              <button className="bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white px-8 py-3 rounded-full font-semibold interactive-element focus-enhanced">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services