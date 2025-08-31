'use client'

import { useState } from 'react'

const Factory = () => {
  const machines = [
    {
      name: "MAXWOOD Panel Saw - MPS 3200",
      description: "High-precision cutting machine for processing large wooden boards, plywood, MDF, and laminates. Ensures straight & accurate cuts with smooth finishing for premium interior fitouts.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MPS3200.jpg-irOObkC1XFXXuKU38KR7xn74o3bHjZ.jpeg"
    },
    {
      name: "Hunnyimpex HI-400 - Auto Edge Bander",
      description: "Next-generation machine for precise and automated edge finishing. Offers automatic feeding & trimming for faster production with high accuracy in edge gluing & finishing.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hi-400-Auto-Edge-Bander.jpg-PCLtwrbqRRyeZxs4ZubejuT7dZ00AA.jpeg"
    },
    {
      name: "CAC Compressor - CTB 600",
      description: "High-performance air compressor built to power heavy-duty factory operations. Provides continuous compressed air supply for multiple machines with energy-efficient operation.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CAC-bSe6a7QMTwCnLRbFjw33cSrDb9JWSc.png"
    },
    {
      name: "Hunnyimpex HI-90R - Edge Bander",
      description: "Fully automatic edge banding machine designed for premium furniture finishing. Delivers seamless edge binding on plywood, MDF, particle board & laminates with strong adhesive bonding.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hunny-impex-hi-90-r-bf7TVUNMl2ox6X9BdJVNLOocdJ0Dmu.webp"
    },
    {
      name: "JAI Wood Planner",
      description: "Precision woodworking machine used for surfacing, thicknessing, and planing wooden boards to achieve smooth, uniform, and accurate finishes for carpentry and furniture work.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/combiplaners-j-303-new.jpg-sRAhUmdhvMVA5bYmnZBq5nH7ZgHnca.jpeg"
    }
  ]

  return (
    <section id="factory" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Factory
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where Precision Meets Power
          </p>
        </div>

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
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {machine.description}
                </p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Address Information */}
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">📍</div>
                <h4 className="text-xl font-bold text-white">Our Factory Address</h4>
              </div>
              <div className="text-gray-300 space-y-3">
                <p className="text-lg">
                  <strong>DK Interiors Factory</strong>
                </p>
                <p>Vailal Village, Jinnaram Mandal</p>
                <p>Sangareddy District, Telangana</p>
                <p className="text-[#B85042] font-semibold">27,000+ SFT Facility</p>
              </div>
              <a 
                href="https://www.google.com/maps?q=Vailal+Village,+Jinnaram+Mandal,+Sangareddy+District,+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-[#B85042] hover:text-[#A73E3A] transition-colors duration-300"
              >
                View on Google Maps →
              </a>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Interactive Map</h4>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15210.334848118217!2d78.353118!3d17.622492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8b0accb7d0ab%3A0xd023ce2b40c36967!2sillamma%20colony%20vailal%20village%20jinnaram%20mandal!5e0!3m2!1sen!2sus!4v1756618944871!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DK Interiors Factory Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Factory Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-[#B85042] mb-2">20+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#B85042] mb-2">27,000+</div>
              <div className="text-gray-300 text-sm">SFT Factory</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#B85042] mb-2">5</div>
              <div className="text-gray-300 text-sm">Machines</div>
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
  )
}

export default Factory