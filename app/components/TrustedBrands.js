'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const TrustedBrands = () => {
  const [activeBrand, setActiveBrand] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const brands = [
    {
      name: "PMJ Jewels",
      description: "South India's leading premium jewellery brand with 41+ stores across South India. DK Interiors has proudly partnered with PMJ Jewels for 20+ store fit-outs, delivering world-class interiors that reflect the brand's elegance, trust, and legacy.",
      highlights: [
        "41+ stores across South India",
        "20+ store fit-outs completed",
        "Premium jewellery retail expertise",
        "World-class interior solutions"
      ],
      category: "Premium Jewellery",
      icon: "💎"
    },
    {
      name: "Soi Ombré",
      description: "Luxury lifestyle brand requiring sophisticated interior design that reflects their premium positioning and attention to detail.",
      highlights: [
        "Luxury lifestyle brand",
        "Sophisticated interior design",
        "Premium positioning",
        "Attention to detail"
      ],
      category: "Luxury Lifestyle",
      icon: "✨"
    },
    {
      name: "Anu Jewellers",
      description: "Established jewellery brand requiring elegant and trustworthy interior design that builds customer confidence and showcases their collections beautifully.",
      highlights: [
        "Established jewellery brand",
        "Elegant interior design",
        "Customer confidence building",
        "Collection showcase expertise"
      ],
      category: "Jewellery Retail",
      icon: "💍"
    },
    {
      name: "Manyavar",
      description: "Leading ethnic wear brand requiring cultural authenticity and modern retail experience in their store designs.",
      highlights: [
        "Leading ethnic wear brand",
        "Cultural authenticity",
        "Modern retail experience",
        "Store design expertise"
      ],
      category: "Ethnic Wear",
      icon: "👔"
    },
    {
      name: "Raymond",
      description: "Iconic textile and lifestyle brand requiring sophisticated retail environments that reflect their heritage and premium quality.",
      highlights: [
        "Iconic textile brand",
        "Sophisticated retail environments",
        "Heritage reflection",
        "Premium quality showcase"
      ],
      category: "Textiles & Lifestyle",
      icon: "🧵"
    }
  ]

  const brandStats = [
    { number: "20+", label: "Years of Partnership" },
    { number: "100+", label: "Store Fit-outs" },
    { number: "5+", label: "Major Brands" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <section 
      ref={containerRef}
      id="trusted-brands" 
      className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.03) 2px, transparent 2px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B85042]/5 via-transparent to-[#B85042]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#B85042]">
              Trusted By India's Leading Brands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Over the last 20+ years, DK Interiors has delivered high-quality fit-outs for leading retail and lifestyle brands, 
            building lasting partnerships based on trust, quality, and excellence
          </p>
        </motion.div>

        {/* Brand Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {brandStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#B85042] mb-2 group-hover:text-white transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Brand - PMJ Jewels */}
        <motion.div 
          className="bg-gradient-to-r from-[#B85042]/20 to-white/10 backdrop-blur-sm border border-[#B85042]/30 rounded-2xl p-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium Client – PMJ Jewels
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              PMJ Jewels is one of South India's leading premium jewellery brands, headquartered in Hyderabad. 
              With 41+ stores across South India (and growing), PMJ Jewels is a benchmark in luxury jewellery retail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-[#B85042] mb-4">Partnership Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                  <span>20+ store fit-outs completed successfully</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                  <span>World-class interiors reflecting brand elegance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                  <span>Trust and legacy building through design</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                  <span>Premium retail experience creation</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏆</div>
              <p className="text-lg text-gray-300">
                DK Interiors has proudly partnered with PMJ Jewels for 20+ store fit-outs, 
                delivering world-class interiors that reflect the brand's elegance, trust, and legacy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* All Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {brands.slice(1).map((brand, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 ${
                activeBrand === index 
                  ? 'border-[#B85042]/50 bg-gradient-to-br from-[#B85042]/10 to-white/15 scale-105' 
                  : 'hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveBrand(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{brand.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                    {brand.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#B85042]/20 text-[#B85042] text-sm rounded-full border border-[#B85042]/30">
                    {brand.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {brand.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#B85042]">Key Highlights:</h4>
                <ul className="space-y-2">
                  {brand.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-white/10 to-[#B85042]/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Trusted Partners?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-white mb-2">Trusted Partnership</h4>
              <p className="text-gray-300">20+ years of reliable service and quality delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold text-white mb-2">Creative Excellence</h4>
              <p className="text-gray-300">Innovative designs that reflect your brand identity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Timely Delivery</h4>
              <p className="text-gray-300">On-time project completion without compromise</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Let's create exceptional interior experiences together. Join the ranks of India's leading brands 
            who trust DK Interiors for their fit-out needs.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full blur-sm"
        style={{ y, opacity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 border border-[#B85042]/20 rounded-full blur-md"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
      />
    </section>
  )
}

export default TrustedBrands