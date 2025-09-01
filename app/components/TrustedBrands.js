'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

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

  // Duplicate to create a longer, smoother loop like the reference
  const displayBrands = [...brands, ...brands]

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
      x: -24
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 24,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const [api, setApi] = useState(null)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 2600)
    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="trusted-brands" className="py-28 bg-gradient-to-b from-[#17151A] via-[#1C1A20] to-[#141217]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-left mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Trusted By India's Leading Brands
          </h2>
          <p className="text-sm md:text-base text-white/60">Over 20+ years of delivering exceptional interior solutions</p>
        </motion.div>

        {/* Brands Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        >
          <div className="relative">
            {/* Side fade overlays for premium look */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-[#17151A] via-[#17151A]/80 to-transparent"/>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-[#141217] via-[#141217]/80 to-transparent"/>

            <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, skipSnaps: false }}
            className="relative"
            >
              <CarouselContent className="-ml-6">
              {displayBrands.map((brand, index) => (
                <CarouselItem key={index} className="pl-6 basis-[260px] sm:basis-[300px] md:basis-[320px] lg:basis-[340px]">
                  <motion.div className="h-full" variants={itemVariants}>
                    <div className="h-full p-8 md:p-10 rounded-[24px] bg-white/[0.06] border border-white/10 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-500">
                      {/* Logo */}
                      <div className="flex h-[180px] md:h-[220px] items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-28 h-28 md:w-32 md:h-32 object-contain opacity-95"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="hidden w-28 h-28 md:w-32 md:h-32 bg-white/10 rounded-2xl items-center justify-center text-white/70">
                          <div className="text-2xl md:text-3xl font-bold">{brand.name?.charAt(0)}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default TrustedBrands