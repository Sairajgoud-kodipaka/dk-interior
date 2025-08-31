import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (href) => {
    if (href.startsWith('/')) {
      // External page navigation
      router.push(href)
    } else if (href.startsWith('#')) {
      // Internal section navigation
      if (window.location.pathname === '/') {
        // Already on home page, scroll to section
        scrollToSection(href.substring(1))
      } else {
        // On different page, navigate to home page first, then scroll
        router.push('/')
        // Set a flag to scroll after navigation
        sessionStorage.setItem('scrollToSection', href)
      }
    }
  }

  return (
    <footer className="bg-[#0f1115] text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/">
              <img
                src="/dk Interior - Logo w.png"
                alt="DK Interiors Logo"
                className="h-16 w-auto sm:h-18 md:h-20 mb-4 sm:mb-6 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Transforming spaces with innovative design solutions. 
              Your trusted partner for premium interior fitouts across India.
            </p>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042] text-lg sm:text-xl">📧</span>
                <span className="break-all">dkinterior17@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042] text-lg sm:text-xl">📱</span>
                <span>+91 98858 09472</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#B85042] mt-1 text-lg sm:text-xl">📍</span>
                <span className="text-xs sm:text-sm leading-relaxed">VAILAL VILLAGE, JINNARAM MANDAL, SANGAREDDY DISTRICT, TELANGANA STATE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#B85042] border-b-2 border-[#B85042] pb-2">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/fitout-solutions"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1"
                >
                  Fit-out Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/residential-design"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1"
                >
                  Residential Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#B85042] border-b-2 border-[#B85042] pb-2">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/about"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#our-work')}
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1 w-full text-left"
                >
                  Our Work
                </button>
              </li>
              <li>
                <Link 
                  href="/factory"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1"
                >
                  Factory
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#contact')}
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1 w-full text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#trusted-brands')}
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline block py-1 w-full text-left"
                >
                  Brands
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © {new Date().getFullYear()} DK Interiors — The Fitout Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer