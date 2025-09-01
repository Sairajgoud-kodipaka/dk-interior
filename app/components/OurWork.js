'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [modalTouchStart, setModalTouchStart] = useState(null)
  const [modalTouchEnd, setModalTouchEnd] = useState(null)
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [itemsPerView, setItemsPerView] = useState(1)
  const [gapPx, setGapPx] = useState(12)
  const router = useRouter()

  const projects = [
    {
      id: 'pmj',
      title: 'PMJ Jewels',
      subtitle: 'Premium Jewellery Showroom',
      category: 'Jewelry',
      image: '/PMJ/pmj-1.jpg',
      images: [
        '/PMJ/pmj-1.jpg',
        '/PMJ/pmj-2.jpg',
        '/PMJ/pmj-3.jpg',
        '/PMJ/pmj-4.jpg',
        '/PMJ/pmj-5.jpg',
        '/PMJ/pmj-6.jpg',
        '/PMJ/pmj-7.jpg',
        '/PMJ/pmj-8.jpg',
        '/PMJ/pmj-9.jpg',
        '/PMJ/pmj-10.jpg'
      ],
      features: ['Custom Display Units', 'Luxury Lighting', 'Premium Materials']
    },
    {
      id: 'raymond',
      title: 'RAYMOND',
      subtitle: 'Premium Menswear Store',
      category: 'Fashion',
      image: '/RAYMOND/R-1.jpeg',
      images: [
        '/RAYMOND/R-1.jpeg',
        '/RAYMOND/R--2.jpeg',
        '/RAYMOND/R-3.jpeg'
      ],
      features: ['Sophisticated Interior', 'Custom Fitting Areas', 'Premium Display Systems']
    },
    {
      id: 'anu-jewellers',
      title: 'ANU Jewellers',
      subtitle: 'Elegant Jewellery Boutique',
      category: 'Jewelry',
      image: '/anu jewellers/ANU-1.jpeg',
      images: [
        '/anu jewellers/ANU-1.jpeg',
        '/anu jewellers/ANU-2.jpeg',
        '/anu jewellers/ANU-3.jpeg',
        '/anu jewellers/ANU-4.jpeg',
        '/anu jewellers/ANU-5.jpeg',
        '/anu jewellers/ANU-6.jpeg'
      ],
      features: ['Sophisticated Display', 'Premium Lighting', 'Luxury Interiors']
    },
    {
      id: 'manyavar',
      title: 'MANYAVAR',
      subtitle: 'Traditional Wedding Wear',
      category: 'Fashion',
      image: '/MANYAVAR/MV-1.jpeg',
      images: [
        '/MANYAVAR/MV-1.jpeg',
        '/MANYAVAR/MV-2.jpeg',
        '/MANYAVAR/MV-3.jpeg'
      ],
      features: ['Cultural Design Elements', 'Luxury Fitting Rooms', 'Traditional Craftsmanship']
    },
    {
      id: 'soi-ombre',
      title: 'SOI OMBRE',
      subtitle: 'Contemporary Lifestyle Store',
      category: 'Lifestyle',
      image: '/SOI OMBRE/SOI-1.jpeg',
      images: [
        '/SOI OMBRE/SOI-1.jpeg',
        '/SOI OMBRE/SOI-2.jpeg',
        '/SOI OMBRE/SOI-3.jpeg',
        '/SOI OMBRE/SOI-4.jpeg'
      ],
      features: ['Modern Aesthetic', 'Flexible Layout', 'Premium Finishes']
    },
    {
      id: 'fabindia',
      title: 'FABINDIA',
      subtitle: 'Ethnic Fashion Store',
      category: 'Fashion',
      image: '/fabindia/fab.jpeg',
      images: [
        '/fabindia/fab.jpeg',
        '/fabindia/fab-2.jpeg',
        '/fabindia/fab-3.jpeg',
        '/fabindia/fab-4.jpeg'
      ],
      features: ['Traditional Craftsmanship', 'Cultural Aesthetics', 'Premium Textiles']
    },
    {
      id: 'jade-blue',
      title: 'JADE BLUE',
      subtitle: 'Luxury Fashion Boutique',
      category: 'Fashion',
      image: '/JADE BLUE/JB-1.jpeg',
      images: [
        '/JADE BLUE/JB-1.jpeg',
        '/JADE BLUE/JB-2.jpeg',
        '/JADE BLUE/JB-3.jpeg'
      ],
      features: ['Elegant Store Layout', 'Premium Fixtures', 'Modern Design Elements']
    },
    {
      id: 'gkb-opticals',
      title: 'GKB OPTICALS',
      subtitle: 'Premium Eyewear Store',
      category: 'Retail',
      image: '/gkb opticals/gkb-1.jpeg',
      images: [
        '/gkb opticals/gkb-1.jpeg',
        '/gkb opticals/gkb-2.jpeg',
        '/gkb opticals/gkb-3.jpeg',
        '/gkb opticals/gkb-4.jpeg'
      ],
      features: ['Modern Display Systems', 'Professional Consultation', 'Premium Eyewear Collection']
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

  // Add scroll listener to update current index
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const handleScroll = () => {
        updateCurrentIndex()
      }
      
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine items per view and gap based on viewport (mobile:1, tablet:2, desktop:3)
  useEffect(() => {
    const updateLayoutMetrics = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerView(3)
        setGapPx(24) // md:gap-6 applies at >=768
      } else if (width >= 768) {
        setItemsPerView(2)
        setGapPx(24)
      } else if (width >= 640) {
        setItemsPerView(1)
        setGapPx(16) // sm:gap-4
      } else {
        setItemsPerView(1)
        setGapPx(12) // gap-3
      }
    }

    updateLayoutMetrics()
    window.addEventListener('resize', updateLayoutMetrics)
    return () => window.removeEventListener('resize', updateLayoutMetrics)
  }, [])

  // Align index to page boundary whenever itemsPerView changes (e.g., on resize)
  useEffect(() => {
    const maxStartIndex = Math.max(0, projects.length - itemsPerView)
    const aligned = Math.max(0, Math.min(
      Math.floor(currentIndex / itemsPerView) * itemsPerView,
      maxStartIndex
    ))
    if (aligned !== currentIndex) {
      setCurrentIndex(aligned)
      scrollToIndex(aligned)
    }
  }, [itemsPerView, projects.length])

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cards = container.children
      if (cards.length > 0) {
        const targetCard = cards[index]
        if (targetCard) {
          const containerRect = container.getBoundingClientRect()
          const cardRect = targetCard.getBoundingClientRect()
          const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left)
          
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          })
          setCurrentIndex(index)
        }
      }
    }
  }

  const scrollToNext = () => {
    if (currentIndex < projects.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const scrollToPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  const nextProject = () => {
    const maxStartIndex = Math.max(0, projects.length - itemsPerView)
    const nextIndex = Math.min(currentIndex + itemsPerView, maxStartIndex)
    if (nextIndex !== currentIndex) {
      scrollToIndex(nextIndex)
    }
  }

  const prevProject = () => {
    const prevIndex = Math.max(0, currentIndex - itemsPerView)
    if (prevIndex !== currentIndex) {
      scrollToIndex(prevIndex)
    }
  }

  // Touch/Swipe functionality
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    const maxStartIndex = Math.max(0, projects.length - itemsPerView)
    if (isLeftSwipe && currentIndex < maxStartIndex) {
      scrollToIndex(Math.min(currentIndex + itemsPerView, maxStartIndex))
    } else if (isRightSwipe && currentIndex > 0) {
      scrollToIndex(Math.max(currentIndex - itemsPerView, 0))
    }
  }

  // Update current index based on scroll position
  const updateCurrentIndex = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstCard = container.children[0]
      if (!firstCard) return
      const cardWidth = firstCard.offsetWidth
      const scrollAmount = cardWidth + gapPx
      const rawIndex = Math.round(container.scrollLeft / scrollAmount)
      const pageAlignedIndex = Math.max(0, Math.min(
        Math.round(rawIndex / itemsPerView) * itemsPerView,
        Math.max(0, projects.length - itemsPerView)
      ))
      setCurrentIndex(pageAlignedIndex)
    }
  }

  // Modal functions
  const openModal = (project) => {
    setSelectedProject(project)
    setModalImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setModalImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setModalImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  // Modal swipe handlers (mobile)
  const onModalTouchStart = (e) => {
    setModalTouchEnd(null)
    setModalTouchStart(e.targetTouches[0].clientX)
  }

  const onModalTouchMove = (e) => {
    setModalTouchEnd(e.targetTouches[0].clientX)
  }

  const onModalTouchEnd = () => {
    if (!modalTouchStart || !modalTouchEnd) return
    const distance = modalTouchStart - modalTouchEnd
    const minSwipe = 40
    if (distance > minSwipe) {
      nextImage()
    } else if (distance < -minSwipe) {
      prevImage()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    <section 
        ref={sectionRef}
      id="our-work" 
        className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Work
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our portfolio of exceptional projects that demonstrate our commitment to 
            innovative design and superior craftsmanship.
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <button
              onClick={prevProject}
              className="bg-white hover:bg-gray-50 text-gray-600 hover:text-[#B85042] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={nextProject}
              className="bg-white hover:bg-gray-50 text-gray-600 hover:text-[#B85042] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= Math.max(0, projects.length - itemsPerView)}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6"
            style={{ 
              scrollSnapType: 'x mandatory'
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[85%] xs:w-64 sm:w-72 md:w-80 lg:w-96 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => openModal(project)}
              >
                                {/* Project Image */}
                <div className="relative h-36 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                    <span className="bg-[#B85042] text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                    </h3>
                  <p className="text-[#B85042] font-medium mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                    {project.subtitle}
                  </p>
                  
                  <div className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600 text-xs sm:text-sm">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#B85042] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation: hide buttons on mobile, keep for sm+ */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Image with swipe on mobile */}
            <div
              className="relative"
              onTouchStart={onModalTouchStart}
              onTouchMove={onModalTouchMove}
              onTouchEnd={onModalTouchEnd}
            >
              <img
                src={selectedProject.images[modalImageIndex]}
                alt={`${selectedProject.title} - Image ${modalImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Counter - hidden on mobile, visible on sm+ */}
              {selectedProject.images.length > 1 && (
                <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {modalImageIndex + 1} / {selectedProject.images.length}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300">{selectedProject.subtitle}</p>
              {/* Mobile thumbnails (belt) */}
              {selectedProject.images.length > 1 && (
                <div className="mt-3 sm:hidden -mx-2 px-2">
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalImageIndex(idx)}
                        className={`relative h-14 w-20 flex-none rounded-lg overflow-hidden border ${idx === modalImageIndex ? 'border-white' : 'border-white/30'} focus:outline-none`}
                        style={{ scrollSnapAlign: 'start' }}
                        aria-label={`Show image ${idx + 1}`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        {idx === modalImageIndex && (
                          <span className="absolute inset-0 ring-2 ring-white/80 rounded-lg"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
    </section>
    </>
  )
}

export default OurWork