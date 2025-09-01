'use client'

import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function FactoryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const machines = [
    {
      name: "MAXWOOD Panel Saw - MPS 3200",
      description: "High-precision cutting machine for processing large wooden boards, plywood, MDF, and laminates. Ensures straight & accurate cuts with smooth finishing, large cutting capacity for big panels (3200 mm), and heavy-duty sliding table for stability & efficiency. Ideal for mass production of furniture & fit-outs.",
      features: [
        "Straight & accurate cuts with smooth finishing",
        "Large cutting capacity for big panels (3200 mm)",
        "Heavy-duty sliding table for stability & efficiency",
        "Ideal for mass production of furniture & fit-outs"
      ],
      image: "/factory/MPS3200.jpg"
    },
    {
      name: "Hunnyimpex HI-400 - Auto Edge Bander",
      description: "Next-generation machine for precise and automated edge finishing. Perfect for large-scale projects where speed and precision matter most. Offers automatic feeding & trimming for faster production with high accuracy in edge gluing & finishing.",
      features: [
        "Automatic feeding & trimming for faster production",
        "High accuracy in edge gluing & finishing",
        "Works with multiple edge materials - PVC, ABS, veneer, melamine",
        "Polished, premium finish for high-end furniture & interiors"
      ],
      image: "/factory/Hi-400-Auto-Edge-Bander.jpg"
    },
    {
      name: "CAC Compressor - CTB 600",
      description: "High-performance air compressor built to power heavy-duty factory operations. The backbone of smooth factory operations — powering every machine with precision air support. Provides continuous compressed air supply for multiple machines with energy-efficient operation.",
      features: [
        "Continuous compressed air supply for multiple machines",
        "Energy-efficient operation with reliable output",
        "Low maintenance & high durability",
        "Ensures uninterrupted production flow across cutting, pressing & finishing lines"
      ],
      image: "/factory/CAC.png"
    },
    {
      name: "Hunnyimpex HI-90R - Edge Bander",
      description: "Fully automatic edge banding machine designed for premium furniture finishing. Essential tool in an in-house production line, enabling top-quality finishes before further processing. Delivers seamless edge binding on plywood, MDF, particle board & laminates with strong adhesive bonding.",
      features: [
        "Seamless edge binding on plywood, MDF, particle board & laminates",
        "Strong adhesive bonding for durability",
        "Smooth, chip-free finish that enhances aesthetics",
        "High speed & consistency, ideal for large-scale fit-out production"
      ],
      image: "/factory/hunny-impex-hi-90-r.webp"
    },
    {
      name: "JAI Wood Planner",
      description: "Precision woodworking machine used for surfacing, thicknessing, and planing wooden boards to achieve smooth, uniform, and accurate finishes. Ensures flat and even surfaces for carpentry and furniture work with heavy-duty build for long-term industrial use.",
      features: [
        "Ensures flat and even surfaces for carpentry and furniture work",
        "Heavy-duty build for long-term industrial use",
        "Provides high accuracy in shaping and finishing wood",
        "Ideal for custom furniture & detailed fit-out projects"
      ],
      image: "/factory/combiplaners-j-303-new.jpg"
    }
  ]

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Navigation */}
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        customTitle="Our Factory"
        customSubtitle="Complete edge-banding & panel processing in our own facility. Controlled quality, faster timelines, and cost efficiency. From raw panel to final polish – everything under one roof."
        showCTA={false}
      />
      
      {/* Main Content */}
      <main className="relative">
        {/* Factory Content */}
        <section id="factory" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="max-w-7xl mx-auto px-6">
            {/* Machines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {machines.map((machine, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  {/* Machine Image - Fixed Aspect Ratio */}
                  <div className="aspect-square w-full mb-4 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className={`w-full h-full object-cover ${machine.name.includes('Hunnyimpex HI-400') ? 'hunnyimpex-image' : ''}`}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🏭</div>
                        <div className="text-sm">Machine Image</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Machine Info */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {machine.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {machine.description}
                    </p>
                    
                    {/* Features List */}
                    {machine.features && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[#B85042] mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {machine.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                              <span className="text-[#B85042] mr-2 mt-1">•</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Factory Location Section */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Factory Location
                </h3>
                <p className="text-lg text-gray-300">
                  Visit our state-of-the-art manufacturing facility
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                {/* Address and Map Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Address Information */}
                  <div className="bg-white/5 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-3xl mr-3">📍</div>
                      <h4 className="text-2xl font-bold text-white">Our Factory Address</h4>
                    </div>
                    <div className="text-gray-300 space-y-4">
                      <p className="text-xl">
                        <strong>DK Interiors Factory</strong>
                      </p>
                      <p className="text-lg">Vailal Village, Jinnaram Mandal</p>
                      <p className="text-lg">Sangareddy District, Telangana</p>
                      <p className="text-[#B85042] font-semibold text-xl">22,000+ SFT Facility</p>
                    </div>
                  </div>
                  
                  {/* Google Maps */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1914.4205031142044!2d78.35909433038215!3d17.6156913237612!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM2JzU3LjgiTiA3OMKwMjEnMzguMyJF!5e1!3m2!1sen!2sin!4v1756725513741!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Stats */}
            <div className="text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#B85042] mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B85042] mb-2">22,000+</div>
                  <div className="text-gray-300 text-sm">SFT Factory</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B85042] mb-2">5</div>
                  <div className="text-gray-300 text-sm">State-of-the-art machinery for precision cutting & finishing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B85042] mb-2">100%</div>
                  <div className="text-gray-300 text-sm">In-House</div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom CSS for Hunnyimpex image */}
          <style jsx>{`
            .hunnyimpex-image {
              transform: translateX(12px) scale(1.1);
              object-position: center left;
            }
          `}</style>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
