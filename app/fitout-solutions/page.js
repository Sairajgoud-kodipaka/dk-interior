'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Star, Users, Clock, Award } from 'lucide-react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const FitoutSolutions = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: "🏪",
      title: "Retail Fit-outs",
      description: "Complete retail space transformations including jewelry stores, lifestyle boutiques, and corporate showrooms."
    },
    {
      icon: "🏢",
      title: "Commercial Spaces",
      description: "Office interiors, conference rooms, and corporate environments designed for productivity and style."
    },
    {
      icon: "💎",
      title: "Jewelry Stores",
      description: "Specialized fit-outs for jewelry retailers with premium display systems and security features."
    },
    {
      icon: "👔",
      title: "Lifestyle Brands",
      description: "Modern fit-outs for fashion, accessories, and lifestyle product retailers."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Initial meeting to understand your vision, requirements, and project scope."
    },
    {
      step: "02",
      title: "Design & 3D Visualization",
      description: "Detailed design concepts with 3D renderings to bring your vision to life."
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Premium material selection ensuring quality, durability, and aesthetic appeal."
    },
    {
      step: "04",
      title: "Fabrication & Installation",
      description: "Precision manufacturing in our factory followed by professional on-site installation."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Final inspection and testing to ensure everything meets our high standards."
    }
  ]

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Custom Hero Section */}
        <Hero 
          customTitle="Fit-out Solutions"
          customSubtitle="Transform your space with our comprehensive fit-out solutions. From concept to completion, we deliver exceptional results that exceed expectations."
          showCTA={false}
        />

        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Fit-out Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in creating stunning retail and commercial spaces that drive business success 
                and create memorable customer experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-black/5 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures quality, efficiency, and satisfaction at every step.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-black/5 border border-white/20">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#B85042] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#B85042] to-[#A14237] rounded-3xl p-12 text-white max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-6">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Let's discuss your fit-out project and create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-[#B85042] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#B85042] transition-all duration-300 hover:scale-105"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FitoutSolutions
