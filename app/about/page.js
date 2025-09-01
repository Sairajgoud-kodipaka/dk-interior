import { Store, Building2, Gem, Briefcase } from 'lucide-react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function AboutPage() {
  const companyStats = [
    { number: "4\u00A0Lakh+", label: "Sq Ft Completed" },
    { number: "200+", label: "Projects Delivered" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" }
  ]

  const expertiseAreas = [
    {
      title: "Retail Fit-outs",
      icon: <Store className="w-8 h-8 text-white" />,
      description: "Complete retail space transformations including jewelry stores, lifestyle boutiques, and corporate showrooms.",
      color: "from-[#B85042] to-[#A14237]"
    },
    {
      title: "Commercial Spaces", 
      icon: <Building2 className="w-8 h-8 text-white" />,
      description: "Office interiors, conference rooms, and corporate environments designed for productivity and style.",
      color: "from-[#B85042] to-[#A14237]"
    },
    {
      title: "Jewelry Stores",
      icon: <Gem className="w-8 h-8 text-white" />,
      description: "Specialized fit-outs for jewelry retailers with premium display systems and security features.",
      color: "from-[#B85042] to-[#A14237]"
    },
    {
      title: "Lifestyle Brands",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      description: "Modern fit-outs for fashion, accessories, and lifestyle product retailers.",
      color: "from-[#B85042] to-[#A14237]"
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f4f2]">
      <NavBar />
      
      {/* Hero Section */}
      <Hero 
        title="About DK Interiors"
        subtitle="Crafting Excellence in Interior Design Since 2005"
        backgroundImage="/dk.jpg"
      />

      {/* Company Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over a decade of delivering exceptional interior solutions across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B85042] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for diverse commercial and retail spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                A Message from Our Founder
              </h2>
              <p className="text-lg text-gray-600 italic">
                A journey that began at just 14 years of age...
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Founder's Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="rounded-3xl bg-[#1F1A17] p-3 sm:p-2.5 shadow-2xl ring-1 ring-[#3B2F2F]">
                    <Image
                      src="/dk.jpg"
                      alt="Mr. Dinesh Kumar - Founder & Owner of DK Interiors"
                      width={256}
                      height={256}
                      className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                    Mr. Dinesh Kumar
                  </h3>
                  <div className="w-24 h-1 bg-[#B85042] mx-auto my-3"></div>
                  <p className="text-xl text-[#B85042] font-semibold">
                    Founder & Owner
                  </p>
                </div>
              </div>
              
              {/* Founder's Message */}
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Born in Samrau, near Jodhpur, Rajasthan in 1991, Mr. Dinesh Kumar discovered his passion for craftsmanship early. At the young age of 14 (in 2005), he began his journey in the world of interior design and fit-outs, starting with small projects in his hometown.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    What started as a passion project quickly evolved into a full-fledged business. Over the years, DK Interiors has grown from a small local operation to a recognized name in the interior design industry, completing over 200 projects across India.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Today, with over 15 years of experience and more than 4 lakh square feet of completed projects, DK Interiors continues to deliver exceptional interior solutions. Our commitment to quality, innovation, and customer satisfaction remains the cornerstone of our success.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    "Every space tells a story, and we're here to help you tell yours. From concept to completion, we ensure that your vision becomes reality with the highest standards of craftsmanship and attention to detail."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose DK Interiors?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#B85042] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">15+ Years Experience</h3>
              <p className="text-gray-600">
                Over a decade and a half of expertise in interior design and fit-out solutions across diverse industries.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#B85042] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in every project, ensuring lasting results and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#B85042] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and ensure timely completion of all projects without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}