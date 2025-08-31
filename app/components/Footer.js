const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0f1115] text-white py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7W1N74WxkHAhjXRyAx0pAKvu1HCXEU.png"
              alt="DK Interiors Logo"
              className="h-12 w-auto mb-4 object-contain filter brightness-0 invert"
            />
            <p className="text-[#6b7280] mb-4 max-w-md">
              Transforming spaces with innovative design solutions. 
              Your trusted partner for premium interior fitouts across India.
            </p>
            <div className="text-[#6b7280]">
              <p>📧 info@dkinteriors.com</p>
              <p>📞 +91 99757 60266</p>
              <p>📍 VAILAL VILLAGE, JINNARAM MANDAL, SANGAREDDY DISTRICT, TELANGANA STATE</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B85042]">Services</h3>
            <ul className="space-y-2 text-[#6b7280]">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Retail Fitouts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Commercial Spaces
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Residential Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Design Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B85042]">Company</h3>
            <ul className="space-y-2 text-[#6b7280]">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-work')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('factory')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Factory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('trusted-brands')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Our Clients
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6b7280]/20 mt-8 pt-8 text-center">
          <p className="text-[#6b7280]">
            © {new Date().getFullYear()} DK Interiors — The Fitout Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer