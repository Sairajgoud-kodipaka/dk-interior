'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)

  const tabs = [
    {
      title: "Our Story",
      content: "Founded with a vision to transform spaces into extraordinary experiences, DK-Interiors has been at the forefront of interior design innovation for over a decade. Our journey began with a simple belief: that every space has the potential to inspire, comfort, and delight.",
      icon: "🏛️"
    },
    {
      title: "Our Approach",
      content: "We believe in the power of thoughtful design that balances aesthetics with functionality. Every project starts with deep understanding of our clients' needs, followed by innovative solutions that exceed expectations and create lasting impact.",
      icon: "✨"
    },
    {
      title: "Our Values",
      content: "Excellence, creativity, and integrity form the foundation of everything we do. We're committed to sustainable practices, innovative solutions, and building lasting relationships with our clients and partners.",
      icon: "💎"
    }
  ]

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
            Crafting Spaces That
            <span className="block text-[#B85042]">Tell Your Story</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We transform ordinary spaces into extraordinary experiences through innovative design, 
            exceptional craftsmanship, and unwavering attention to detail.
          </motion.p>
        </motion.div>

        {/* Interactive Tabs Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Tab Navigation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#B85042] text-white shadow-lg shadow-[#B85042]/25'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:text-[#B85042] border border-gray-200 hover:border-[#B85042]/30'
                }`}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#B85042] rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-6">{tabs[activeTab].icon}</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Projects Completed", icon: "🏆" },
            { number: "50+", label: "Happy Clients", icon: "😊" },
            { number: "10+", label: "Years Experience", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-black/5 border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-[#B85042] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
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
            <button className="bg-white text-[#B85042] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Your Project
            </button>
                </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About