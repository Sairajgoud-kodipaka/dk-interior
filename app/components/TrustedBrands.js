const TrustedBrands = () => {
  const brands = [
    {
      name: "ANU Jewellers",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LEI3fuvbtEE7c7V0dJtP8QKOVTdwnq.png"
    },
    {
      name: "Manyavar",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jngAkFy7nwqECDsCXgLEKcktszXBjW.png"
    },
    {
      name: "Raymond",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAYMOND.NS_BIG-02a3e63e-JHILOg6YXmycWVWKqRFlor7YkE7WIB.png"
    },
    {
      name: "PMJ Jewels",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yABqjo2j1QpO2YN88jemoO6ycZ1Q1m.png"
    },
    {
      name: "Soi Ombré",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-GKLJ6IyRYqGMfY9LyXPQoF9FmydGBJ.png"
    }
  ]

  return (
    <section id="trusted-brands" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1115] mb-6">
            Trusted By India's Leading Brands
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            We're proud to partner with some of India's most prestigious brands, delivering exceptional interior solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-24 sm:h-28 md:h-32 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center border border-[#6b7280]/10 group"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands