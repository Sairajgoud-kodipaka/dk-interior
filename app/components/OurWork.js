'use client'

import { useState } from 'react'
import { useScrollReveal, useStaggerReveal } from '@/lib/animations'
import { Eye, ArrowUpRight } from 'lucide-react'

const OurWork = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 })
  const [subtitleRef, subtitleVisible] = useScrollReveal({ threshold: 0.3 })
  const [gridRef, gridVisible] = useStaggerReveal(6, { threshold: 0.1 })
  const [filterRef, filterVisible] = useScrollReveal({ threshold: 0.3 })
  
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTY1NzEyNzR8MA&ixlib=rb-4.1.0&q=85",
      title: "Modern Residential Living",
      category: "Residential",
      description: "Contemporary living space with minimalist design and premium finishes",
      year: "2024"
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTY1NzEyNzR8MA&ixlib=rb-4.1.0&q=85",
      title: "Sophisticated Lounge",
      category: "Commercial",
      description: "Elegant commercial lounge with warm tones and luxurious materials",
      year: "2023"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc3BhY2V8ZW58MHx8fHwxNzU2NTc1MDA4fDA&ixlib=rb-4.1.0&q=85",
      title: "Executive Boardroom",
      category: "Corporate",
      description: "Professional boardroom design optimized for productivity and style",
      year: "2024"
    },
    {
      src: "https://images.unsplash.com/photo-1718220268527-4477fd170775?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwc3BhY2V8ZW58MHx8fHwxNzU2NTc1MDA4fDA&ixlib=rb-4.1.0&q=85",
      title: "Modern Office Lobby",
      category: "Commercial",
      description: "Impressive office entrance with contemporary design elements",
      year: "2023"
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Premium Home Interior",
      category: "Residential",
      description: "Luxurious residential interior with custom furnishings",
      year: "2024"
    },
    {
      src: "https://images.pexels.com/photos/33662970/pexels-photo-33662970.jpeg",
      title: "Retail Space Design",
      category: "Retail",
      description: "Strategic retail layout designed to maximize customer engagement",
      year: "2023"
    }
  ]

  const filters = ['All', 'Residential', 'Commercial', 'Corporate', 'Retail']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="our-work" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B85042]/3 rounded-full blur-3xl transform -translate-y-48" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#B85042]/5 rounded-full blur-3xl transform translate-y-36" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div 
              ref={titleRef}
              className={`mb-6 ${titleVisible ? 'animate-reveal revealed' : 'animate-reveal'}`}
            >
              <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-[#0f1115] kinetic-text">
                Our{' '}
                <span className="bg-gradient-to-r from-[#B85042] to-[#A14237] bg-clip-text text-transparent">
                  Work
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
                Discover our portfolio of exceptional interior design projects that showcase 
                innovation, quality, and meticulous attention to detail
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div 
            ref={filterRef}
            className={`flex flex-wrap justify-center gap-4 mb-12 ${filterVisible ? 'animate-scale-in revealed' : 'animate-scale-in'}`}
            style={{ animationDelay: '0.4s' }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 focus-enhanced ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#B85042] to-[#A14237] text-white shadow-lg'
                    : 'bg-white text-[#6b7280] hover:text-[#B85042] hover:bg-[#f5f4f2] border border-[#6b7280]/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div 
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#6b7280]/10 interactive-element ${
                  gridVisible ? 'animate-reveal revealed' : 'animate-reveal'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Image Container with Overlay */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay with View Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mb-2 inline-block">
                          {project.year}
                        </div>
                      </div>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 group/btn">
                        <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-gradient-to-r from-[#B85042]/10 to-[#A14237]/10 text-[#B85042] text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#B85042] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-fluid-xl font-bold text-[#0f1115] mb-3 kinetic-text group-hover:text-[#B85042] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6b7280] text-sm leading-relaxed group-hover:text-[#0f1115] transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-[#B85042] to-[#A14237] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
          
          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white px-8 py-4 rounded-full font-semibold text-fluid-base interactive-element focus-enhanced group">
              <span className="flex items-center gap-3">
                View All Projects
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork