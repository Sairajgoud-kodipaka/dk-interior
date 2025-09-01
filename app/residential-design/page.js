'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, Palette, Ruler, Heart, Shield, Clock, Users, Bed, ChefHat, ShowerHead, BookOpen, Baby } from 'lucide-react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const ResidentialDesign = () => {
  const [isLoaded, setIsLoaded] = useState(false)
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
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: <Home className="w-12 h-12 text-[#B85042]" />,
      title: "Living Spaces",
      description: "Transform your living room, dining area, and family spaces into warm, inviting environments that reflect your lifestyle."
    },
    {
      icon: <Bed className="w-12 h-12 text-[#B85042]" />,
      title: "Bedrooms",
      description: "Create peaceful sanctuaries with custom wardrobes, storage solutions, and elegant bedroom furniture."
    },
    {
      icon: <ChefHat className="w-12 h-12 text-[#B85042]" />,
      title: "Kitchens",
      description: "Modern kitchen designs with premium materials, smart storage, and beautiful finishes that make cooking a joy."
    },
    {
      icon: <ShowerHead className="w-12 h-12 text-[#B85042]" />,
      title: "Bathrooms",
      description: "Luxurious bathroom designs with premium fixtures, elegant tiles, and spa-like atmospheres."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#B85042]" />,
      title: "Home Offices",
      description: "Productive workspaces designed for comfort, functionality, and professional aesthetics."
    },
    {
      icon: <Baby className="w-12 h-12 text-[#B85042]" />,
      title: "Children's Rooms",
      description: "Fun, safe, and inspiring spaces that grow with your children and encourage creativity."
    }
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#B85042]" />,
      title: "Personalized Design",
      description: "Every design is tailored to your unique preferences, lifestyle, and family needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#B85042]" />,
      title: "Quality Materials",
      description: "We use only premium materials that ensure durability, beauty, and long-term satisfaction."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#B85042]" />,
      title: "Timely Delivery",
      description: "Efficient project management ensures your dream space is ready when promised."
    },
    {
      icon: <Users className="w-8 h-8 text-[#B85042]" />,
      title: "Expert Team",
      description: "Our skilled craftsmen and designers bring years of experience to every project."
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
          customTitle="Residential Design"
          customSubtitle="Create the home of your dreams with our bespoke residential design services. We transform houses into personalized sanctuaries that reflect your unique style and needs."
          showCTA={false}
        />

       

        {/* Services Section */}
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
                Complete Home Design Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we handle every aspect of your residential design project, 
                ensuring a seamless and satisfying experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-black/5 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose DK Interiors?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine creativity, craftsmanship, and customer service to deliver exceptional results 
                that exceed your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 bg-white/80 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process Section */}
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
                Our Design Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A collaborative journey that transforms your vision into reality, step by step.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Initial Consultation",
                    description: "We meet to understand your vision, lifestyle, and requirements for your dream home."
                  },
                  {
                    step: "2",
                    title: "Concept Development",
                    description: "Our designers create initial concepts and mood boards that capture your style preferences."
                  },
                  {
                    step: "3",
                    title: "Detailed Design",
                    description: "Comprehensive design plans with 3D visualizations, material selections, and cost estimates."
                  },
                  {
                    step: "4",
                    title: "Fabrication",
                    description: "Skilled craftsmen bring your designs to life in our state-of-the-art factory."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#B85042] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                  Ready to Create Your Dream Home?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Let's transform your living space into something extraordinary that reflects your unique style and personality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleNavigation('#contact')}
                    className="inline-block bg-white text-[#B85042] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Start Your Project
                  </button>
                  <button
                    onClick={() => handleNavigation('#our-work')}
                    className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#B85042] transition-all duration-300 hover:scale-105"
                  >
                    View Our Work
                  </button>
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

export default ResidentialDesign
