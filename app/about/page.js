'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
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
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const companyStats = [
    { number: "25+", label: "Years of Experience" },
    { number: "300+", label: "Projects Completed" },
    { number: "4 Lakh+", label: "Sq. Ft. Delivered" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  const coreValues = [
    {
      title: "Excellence in Craftsmanship",
      description: "We maintain the highest standards of quality in every project, ensuring precision and attention to detail that exceeds expectations."
    },
    {
      title: "Timely Delivery",
      description: "Our commitment to meeting deadlines is unwavering. We understand the value of time in business and deliver projects on schedule."
    },
    {
      title: "Innovation & Technology",
      description: "We combine traditional craftsmanship with modern technology and innovative solutions to create cutting-edge interior spaces."
    },
    {
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success. Your vision becomes our mission."
    }
  ]

  const expertiseAreas = [
    "Luxury Retail Fit-outs",
    "Jewellery Showrooms", 
    "Corporate Offices",
    "Hospitality Spaces",
    "Residential Interiors",
    "Exhibition Stands"
  ]

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <NavBar />

      <Hero
        customTitle="About DK Interiors"
        customSubtitle="Leading the industry with 20+ years of excellence in premium interior fit-outs"
        showCTA={false}
      />

      <main className="relative">
        <section
          ref={sectionRef}
          id="about"
          className="relative py-20 lg:py-32 bg-white overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Overview */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="text-center mb-20"
            >
             

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              >
                The Story of <span className="text-[#B85042]">DK Interiors</span>
              </motion.h1>

              
            </motion.div>

        

            {/* Company Journey - Journal Style */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="mb-20"
            >
              <div className="bg-white rounded-3xl p-10 lg:p-16 border border-gray-200 shadow-sm">
                
                <div className="max-w-6xl mx-auto">
                  <div className="prose prose-lg prose-gray max-w-none">
                    <div className="text-center mb-8">
                      <p className="text-xl text-[#B85042] font-semibold italic">
                        A journey that began at just 14 years of age…
                      </p>
                    </div>
                    
                    {/* Founder's Image Section - Centered, refined frame (no glow) */}
                    <div className="flex flex-col items-center mb-12">
                      <div className="relative">
                        <div className="rounded-3xl bg-[#1F1A17] p-3 sm:p-2.5 shadow-2xl ring-1 ring-[#3B2F2F]">
                          <img
                            src="/dk.jpg"
                            alt="Mr. Dinesh Kumar - Founder & Owner of DK Interiors"
                            className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                          Mr. Dinesh Kumar
                        </h3>
                        <div className="h-1 w-24 bg-[#B85042] rounded-full mx-auto my-3"></div>
                        <p className="text-base sm:text-lg text-gray-700 tracking-wide">
                          Founder & Owner
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        Born in Samrau, near Jodhpur, Rajasthan in 1991, Mr. Dinesh Kumar discovered his passion for craftsmanship early. 
                        At the young age of 14 (in 2005), he began learning carpentry in Mumbai under the guidance of his mentor, 
                        Mistry Mohan Lal. Starting as a labourer, he absorbed the skills, discipline, and eye for detail that later 
                        became the foundation of his entrepreneurial journey.
                      </p>
                      
                      <p className="text-lg">
                        After 3 years in Mumbai and 3 years in Chennai, Dinesh continued to sharpen his expertise, working across 
                        diverse projects and learning every aspect of the fit-out industry. In 2014, he moved to Hyderabad, determined 
                        to turn his experience into his own enterprise.
                      </p>
                      
                      <p className="text-lg">
                        In 2010, his younger brother Subhash Kumar joined hands to support the expansion. Together, they nurtured 
                        DK Interiors into a growing business, guided by a simple philosophy: quality work, timely delivery, and 
                        long-term client trust.
                      </p>
                      
                      <p className="text-lg">
                        Today, with 25+ years of collective experience, DK Interiors stands as a trusted fit-out partner for premium 
                        retail, jewellery, lifestyle, and corporate spaces. The firm proudly collaborates with renowned brands like 
                        PMJ Jewels, Manyavar, Raymond, Anu Jewellers, and more — delivering interiors that combine craftsmanship 
                        with modern innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company Stats Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-[#B85042] to-[#A14237] rounded-3xl p-10 lg:p-16 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                  Our Achievements
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {companyStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm md:text-base text-white/90">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Our Design Process */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-16 border border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
                  Our Design Process
                </h2>
                
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#B85042] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery & Consultation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We begin with a comprehensive consultation to understand your vision, requirements, and objectives. 
                        This phase involves site analysis, budget assessment, and timeline planning.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#B85042] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Concept Development</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our design team creates initial concepts and mood boards that align with your brand identity. 
                        We present multiple options for your review and feedback.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#B85042] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Planning</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Once the concept is approved, we develop detailed technical drawings, material specifications, 
                        and project timelines to ensure precise execution.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#B85042] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-xl font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Execution & Delivery</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our skilled craftsmen bring the design to life with meticulous attention to detail. 
                        We maintain regular communication and ensure timely project completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="mb-20"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
                Our Core Values
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Areas of Expertise */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-16 border border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
                  Areas of Expertise
                </h2>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                  We specialize in creating exceptional interior spaces across diverse sectors, 
                  delivering innovative solutions that enhance brand value and customer experience.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#B85042]/30">
                      <div className="text-gray-900 font-semibold text-lg">{area}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="text-center"
            >
              <div className="bg-white rounded-3xl p-10 lg:p-16 border border-gray-200 shadow-sm">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Partner with DK Interiors to create exceptional interior spaces that reflect your brand's 
                  vision and exceed your expectations. Let's discuss your project requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleNavigation('#contact')}
                    className="inline-block bg-[#B85042] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#A14237] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#B85042]/30"
                  >
                    Start Your Project
                  </button>
                  <button
                    onClick={() => handleNavigation('#contact')}
                    className="inline-block bg-white text-[#B85042] font-bold py-4 px-8 rounded-xl border-2 border-[#B85042] hover:bg-[#B85042] hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#B85042]/30"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

