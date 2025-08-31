'use client'

import { motion } from 'framer-motion'

const TrustedBrands = () => {
  const brands = [
    {
      name: "PMJ Jewels",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yABqjo2j1QpO2YN88jemoO6ycZ1Q1m.png",
      category: "Premium Jewellery"
    },
    {
      name: "Soi Ombré",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jngAkFy7nwqECDsCXgLEKcktszXBjW.png",
      category: "Luxury Lifestyle"
    },
    {
      name: "Raymond",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAYMOND.NS_BIG-02a3e63e-JHILOg6YXmycWVWKqRFlor7YkE7WIB.png",
      category: "Textiles & Lifestyle"
    },
    {
      name: "Manyavar",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-GKLJ6IyRYqGMfY9LyXPQoF9FmydGBJ.png",
      category: "Ethnic Wear"
    },
    {
      name: "Anu Jewellers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anu.jpg-l6DqoQoROqFS7ru0wnt2LFcwVdMPer.jpeg",
      category: "Jewellery Retail"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="trusted-brands" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted By India's Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 20+ years of delivering exceptional interior solutions
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="mb-4 transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-20 mx-auto object-contain drop-shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-20 h-20 mx-auto bg-gray-700 rounded-lg items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">B</div>
                  </div>
                </div>
              </div>
              <div className="text-gray-800 font-semibold mb-1 group-hover:text-[#B85042] transition-colors duration-300">
                {brand.name}
              </div>
              <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                {brand.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBrands