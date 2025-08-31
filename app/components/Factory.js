'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Factory = () => {
  const [activeMachine, setActiveMachine] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const machines = [
    {
      name: "MAXWOOD Panel Saw – MPS 3200",
      description: "High-precision cutting machine for processing large wooden boards, plywood, MDF, and laminates. Ensures straight & accurate cuts with smooth finishing, large cutting capacity for big panels (3200 mm), and heavy-duty sliding table for stability & efficiency.",
      features: [
        "Straight & accurate cuts with smooth finishing",
        "Large cutting capacity for big panels (3200 mm)",
        "Heavy-duty sliding table for stability & efficiency",
        "Ideal for mass production of furniture & fit-outs"
      ],
      icon: "🔹"
    },
    {
      name: "Hunnyimpex HI-400 – Auto Edge Bander",
      description: "Next-generation machine for precise and automated edge finishing. Offers automatic feeding & trimming for faster production, high accuracy in edge gluing & finishing, and works with multiple edge materials – PVC, ABS, veneer, melamine.",
      features: [
        "Automatic feeding & trimming for faster production",
        "High accuracy in edge gluing & finishing",
        "Works with multiple edge materials – PVC, ABS, veneer, melamine",
        "Polished, premium finish for high-end furniture & interiors"
      ],
      icon: "🔹"
    },
    {
      name: "CAC Compressor – CTB 600",
      description: "High-performance air compressor built to power heavy-duty factory operations. Provides continuous compressed air supply for multiple machines, energy-efficient operation with reliable output, and low maintenance & high durability.",
      features: [
        "Continuous compressed air supply for multiple machines",
        "Energy-efficient operation with reliable output",
        "Low maintenance & high durability",
        "Ensures uninterrupted production flow across cutting, pressing & finishing lines"
      ],
      icon: "🔹"
    },
    {
      name: "Hunnyimpex HI-90R – Edge Bander",
      description: "Fully automatic edge banding machine designed for premium furniture finishing. Delivers seamless edge binding on plywood, MDF, particle board & laminates, strong adhesive bonding for durability, and smooth, chip-free finish that enhances aesthetics.",
      features: [
        "Seamless edge binding on plywood, MDF, particle board & laminates",
        "Strong adhesive bonding for durability",
        "Smooth, chip-free finish that enhances aesthetics",
        "High speed & consistency, ideal for large-scale fit-out production"
      ],
      icon: "🔹"
    },
    {
      name: "JAI Wood Planner",
      description: "Precision woodworking machine used for surfacing, thicknessing, and planing wooden boards to achieve smooth, uniform, and accurate finishes. Ensures flat and even surfaces for carpentry and furniture work.",
      features: [
        "Ensures flat and even surfaces for carpentry and furniture work",
        "Heavy-duty build for long-term industrial use",
        "Provides high accuracy in shaping and finishing wood",
        "Ideal for custom furniture & detailed fit-out projects"
      ],
      icon: "🔹"
    }
  ]

  const factoryStats = [
    { number: "20+", label: "Years of Production Excellence" },
    { number: "27,000+", label: "SFT Factory Size" },
    { number: "5", label: "State-of-the-art Machines" },
    { number: "100%", label: "In-House Production" }
  ]

  return (
    <section 
      ref={containerRef}
      id="factory" 
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
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
              Our Factory
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art in-house production facility with 20+ years of excellence, 
            delivering precision craftsmanship for premium interior fit-outs
          </p>
        </motion.div>

        {/* Factory Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {factoryStats.map((stat, index) => (
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

        {/* Factory Location & Size */}
        <motion.div 
          className="bg-gradient-to-r from-[#B85042]/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Factory Details
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-[#B85042] mb-2">Location</h4>
                <p className="text-gray-300">
                  VAILAL VILLAGE, JINNARAM MANDAL,<br />
                  SANGAREDDY DISTRICT, TELANGANA STATE
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#B85042] mb-2">Size</h4>
                <p className="text-3xl font-bold text-white">27,000+ SFT</p>
                <p className="text-gray-400">Dedicated production facility</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Machines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {machines.map((machine, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 cursor-pointer transition-all duration-500 ${
                activeMachine === index 
                  ? 'border-[#B85042]/50 bg-gradient-to-br from-[#B85042]/10 to-white/15 scale-105' 
                  : 'hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveMachine(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl text-[#B85042]">{machine.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {machine.name}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {machine.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#B85042]">Key Features:</h4>
                <ul className="space-y-2">
                  {machine.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#B85042] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Production Excellence CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-[#B85042]/20 to-white/10 backdrop-blur-sm border border-[#B85042]/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our In-House Production?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Faster Execution</h4>
              <p className="text-gray-300">No external dependencies, direct control over timelines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">Quality Control</h4>
              <p className="text-gray-300">Rigorous checks at every stage of production</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold text-white mb-2">Cost Effective</h4>
              <p className="text-gray-300">Eliminate middleman costs, better value for clients</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Our in-house factory production ensures consistent quality, faster execution, and cost-effective solutions 
            for all your interior fit-out needs. From concept to completion, everything under one roof.
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

export default Factory