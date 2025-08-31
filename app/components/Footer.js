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
              src="/logo.png"
              alt="DK Interiors Logo"
              className="h-16 w-auto mb-6 object-contain"
            />
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming spaces with innovative design solutions. 
              Your trusted partner for premium interior fitouts across India.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042]">📧</span>
                <span>info@dkinteriors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042]">📞</span>
                <span>+91 99757 60266</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#B85042] mt-1">📍</span>
                <span className="text-sm leading-relaxed">VAILAL VILLAGE, JINNARAM MANDAL, SANGAREDDY DISTRICT, TELANGANA STATE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#B85042] border-b-2 border-[#B85042] pb-2">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Retail Fitouts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Commercial Spaces
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Residential Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Design Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#B85042] border-b-2 border-[#B85042] pb-2">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-work')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('factory')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Factory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('trusted-brands')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Our Clients
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-300 text-base">
            © {new Date().getFullYear()} DK Interiors — The Fitout Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer