'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const sectionRef = useRef(null)
  const router = useRouter()

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'commercial', name: 'Commercial', count: 5 },
    { id: 'residential', name: 'Residential', count: 4 },
    { id: 'retail', name: 'Retail', count: 3 }
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Lobby",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A sophisticated hotel lobby design featuring marble finishes, custom lighting, and elegant seating arrangements.",
      tags: ["Luxury", "Hospitality", "Modern"]
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Contemporary office design with open-plan layouts, natural materials, and collaborative spaces.",
      tags: ["Office", "Collaborative", "Contemporary"]
    },
    {
      id: 3,
      title: "Penthouse Apartment",
      category: "residential",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2001&q=80",
      description: "Luxurious penthouse interior with panoramic views, custom furniture, and premium finishes.",
      tags: ["Luxury", "Residential", "Premium"]
    },
    {
      id: 4,
      title: "Boutique Retail Store",
      category: "retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Chic retail space with custom displays, ambient lighting, and seamless customer flow.",
      tags: ["Retail", "Boutique", "Chic"]
    },
    {
      id: 5,
      title: "Restaurant Interior",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Elegant restaurant design with warm lighting, comfortable seating, and atmospheric dining experience.",
      tags: ["Restaurant", "Elegant", "Atmospheric"]
    },
    {
      id: 6,
      title: "Family Villa",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      description: "Spacious family villa with open living areas, modern amenities, and outdoor integration.",
      tags: ["Family", "Villa", "Modern"]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.3 }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="our-work" 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B85042]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#B85042]/5 to-transparent rounded-full blur-3xl" />
            </div>
            
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Showcasing
            <span className="block text-[#B85042]">Excellence</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our portfolio of exceptional projects that demonstrate our commitment to 
            innovative design and superior craftsmanship.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#B85042] text-white shadow-lg shadow-[#B85042]/25'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:text-[#B85042] border border-gray-200 hover:border-[#B85042]/30'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[#B85042] rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20"
          >
            {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Overlay - Removed View Project button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#B85042]/10 text-[#B85042] text-xs font-medium rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B85042] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="bg-gradient-to-r from-[#B85042] to-[#A14237] rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold mb-8"
          >
            Our Impact in Numbers
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-gray-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <button 
                onClick={() => {
                  router.push('/#contact');
                }}
                className="border-2 border-[#B85042] text-[#B85042] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B85042] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </button>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurWork