'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B85042]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#B85042]/5 to-transparent rounded-full blur-3xl" />
      </div>
          
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#B85042]/10 text-[#B85042] text-sm font-medium rounded-full border border-[#B85042]/20">
              About Us
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            The Story of
            <span className="block text-[#B85042]">DK Interiors</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            From a 14-year-old apprentice in Mumbai to a trusted fit-out entrepreneur, Dinesh Kumar has built DK Interiors into a name known for quality, speed, and precision.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#B85042]">
                  <path d="M3 21h18M3 7h18M3 3h18M7 21V7M17 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11h2M13 11h2M9 15h2M13 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
            </div>
            
            <div className="prose prose-lg prose-gray max-w-none text-left">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#B85042]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#B85042]">
                    <h4 className="text-xl font-semibold text-[#B85042] mb-3">The Beginning</h4>
                    <p className="text-gray-700 leading-relaxed">
                      A journey that began at just 14 years of age… Born in Samrau, near Jodhpur, Rajasthan in 1991, Mr. Dinesh Kumar discovered his passion for craftsmanship early.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#B85042]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#B85042]">
                    <h4 className="text-xl font-semibold text-[#B85042] mb-3">Learning & Growth</h4>
                    <p className="text-gray-700 leading-relaxed">
                      At the young age of 14 (in 2005), he began learning carpentry in Mumbai under the guidance of his mentor, Mistry Mohan Lal. Starting as a labourer, he absorbed the skills, discipline, and eye for detail that later became the foundation of his entrepreneurial journey.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#B85042]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#B85042]">
                    <h4 className="text-xl font-semibold text-[#B85042] mb-3">Building Expertise</h4>
                    <p className="text-gray-700 leading-relaxed">
                      After 3 years in Mumbai and 3 years in Chennai, Dinesh continued to sharpen his expertise, working across diverse projects and learning every aspect of the fit-out industry. In 2014, he moved to Hyderabad, determined to turn his experience into his own enterprise.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#B85042]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#B85042]">
                    <h4 className="text-xl font-semibold text-[#B85042] mb-3">Family Partnership</h4>
                    <p className="text-gray-700 leading-relaxed">
                      In 2010, his younger brother Subhash Kumar joined hands to support the expansion. Together, they nurtured DK Interiors into a growing business, guided by a simple philosophy: quality work, timely delivery, and long-term client trust.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-[#B85042]/10 to-transparent p-8 rounded-2xl border border-[#B85042]/20">
                <h4 className="text-2xl font-bold text-[#B85042] mb-4 text-center">Today's Success</h4>
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  Today, with 20+ years of collective experience, DK Interiors stands as a trusted fit-out partner for premium retail, jewellery, lifestyle, and corporate spaces. The firm proudly collaborates with renowned brands like PMJ Jewels, Manyavar, Raymond, Anu Jewellers, and more — delivering interiors that combine craftsmanship with modern innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#B85042] to-[#A14237] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary together. 
              Your vision, our expertise.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block bg-white text-[#B85042] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B85042]"
              >
                Read Our Full Story
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About