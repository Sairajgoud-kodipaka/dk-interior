'use client'

import { useEffect, useRef } from 'react'

const Factory = () => {
  const scrollRef = useRef(null)

  const factoryImages = [
    {
      src: "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTY1NzUwNTB8MA&ixlib=rb-4.1.0&q=85",
      title: "Modern Manufacturing",
      description: "State-of-the-art equipment for precision craftsmanship"
    },
    {
      src: "https://images.unsplash.com/photo-1547609434-b732edfee020?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHx3b29kd29ya2luZ3xlbnwwfHx8fDE3NTY1NzUwNTd8MA&ixlib=rb-4.1.0&q=85",
      title: "Expert Woodworking",
      description: "Skilled artisans creating custom furniture pieces"
    },
    {
      src: "https://images.unsplash.com/photo-1610896813573-5c4bdd85b02f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTY1NzUwNTB8MA&ixlib=rb-4.1.0&q=85",
      title: "Production Facility",
      description: "Our modern factory equipped for large-scale projects"
    },
    {
      src: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx3b29kd29ya2luZ3xlbnwwfHx8fDE3NTY1NzUwNTd8MA&ixlib=rb-4.1.0&q=85",
      title: "Quality Tools",
      description: "Professional-grade tools for superior finishes"
    }
  ]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (scrollRef.current && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault()
        const scrollAmount = 320
        if (e.key === 'ArrowLeft') {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }
    }

    const carousel = scrollRef.current
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown)
      return () => carousel.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section id="factory" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f1115] mb-6">
              Our Factory
            </h2>
            <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
              Experience the heart of our operation where innovative design meets 
              precision manufacturing. Our state-of-the-art facility combines 
              traditional craftsmanship with modern technology.
            </p>
            <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
              From conceptualization to completion, every piece is crafted with 
              meticulous attention to detail, ensuring the highest quality standards 
              for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-[#B85042] mb-2">50,000</div>
                <div className="text-sm text-[#6b7280]">Sq Ft Facility</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#B85042] mb-2">24/7</div>
                <div className="text-sm text-[#6b7280]">Production Capability</div>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
              tabIndex="0"
              role="region"
              aria-label="Factory images carousel"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {factoryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-none snap-start w-80 bg-[#f5f4f2] rounded-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#0f1115] mb-2">
                      {image.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {factoryImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#6b7280]/30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Factory