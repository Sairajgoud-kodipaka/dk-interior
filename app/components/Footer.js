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
    <footer className="bg-[#0f1115] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <img
                src="/dk Interior - Logo w.png"
                alt="DK Interiors Logo"
                className="h-20 w-auto mb-6 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming spaces with innovative design solutions. 
              Your trusted partner for premium interior fitouts across India.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042]">📧</span>
                <span>dkinterior17@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#B85042]">📱</span>
                <span>+91 98858 09472</span>
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
                <Link 
                  href="/fitout-solutions"
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Fit-out Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/residential-design"
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Residential Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#B85042] border-b-2 border-[#B85042] pb-2">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#our-work')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Our Work
                </button>
              </li>
              <li>
                <Link 
                  href="/factory"
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Factory
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#trusted-brands')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left hover:underline"
                >
                  Brands
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