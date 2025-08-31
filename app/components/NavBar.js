'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Home, Info, Settings, Factory, Briefcase, Users, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const router = useRouter()

  const sections = [
    { id: 'hero', name: 'Home', href: '/', icon: Home },
    { id: 'about', name: 'About', href: '/about', icon: Info },
    { id: 'services', name: 'Services', href: '#services', icon: Settings },
    { id: 'factory', name: 'Factory', href: '/factory', icon: Factory },
    { id: 'our-work', name: 'Our Work', href: '#our-work', icon: Briefcase },
    { id: 'trusted-brands', name: 'Brands', href: '#trusted-brands', icon: Users },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Phone },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let section of sections) {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  const handleNavigation = (section) => {
    if (section.href.startsWith('/')) {
      // Use Next.js router for page navigation
      router.push(section.href)
    } else if (section.href.startsWith('#')) {
      // Scroll to section on same page
      scrollToSection(section.href)
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-30 bg-[#f5f4f2]/95 backdrop-blur-sm border-b border-[#6b7280]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/dk Interior - Logo.png"
                  alt="DK Interiors Logo"
                  className="h-16 w-16 object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  onError={(e) => {
                    e.target.src = "/logo.svg"
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <div key={section.id} className="relative group">
                  {section.id === 'services' ? (
                    // Services dropdown
                    <div className="relative">
                      <button className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 rounded-sm px-2 py-1 text-[#0f1115]">
                        Services
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-[#6b7280]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <Link
                          href="/fitout-solutions"
                          className="block w-full text-left px-4 py-3 text-sm text-[#0f1115] hover:bg-[#B85042]/10 hover:text-[#B85042] transition-colors duration-200 rounded-lg"
                        >
                          Fit-out Solutions
                        </Link>
                        <Link
                          href="/residential-design"
                          className="block w-full text-left px-4 py-3 text-sm text-[#0f1115] hover:bg-[#B85042]/10 hover:text-[#B85042] transition-colors duration-200 rounded-lg"
                        >
                          Residential Design
                        </Link>
                      </div>
                    </div>
                  ) : section.id === 'about' ? (
                    // About dropdown
                    <div className="relative">
                      <button className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 rounded-sm px-2 py-1 text-[#0f1115]">
                        About Us
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-[#6b7280]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <Link
                          href="/about"
                          className="block w-full text-left px-4 py-3 text-sm text-[#0f1115] hover:bg-[#B85042]/10 hover:text-[#B85042] transition-colors duration-200 rounded-lg"
                        >
                          Our Story
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // Regular navigation item
                    <button
                      onClick={() => handleNavigation(section)}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 rounded-sm px-2 py-1 ${
                        section.href === '/' && activeSection === 'hero'
                          ? 'text-[#B85042] border-b-2 border-[#B85042]'
                          : 'text-[#0f1115]'
                      }`}
                    >
                      {section.name}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsOpen(true)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Open mobile menu"
              aria-haspopup="true"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Sidebar */}
          <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-300 ease-out animate-in slide-in-from-right-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img
                  src="/dk Interior - Logo.png"
                  alt="DK Interiors Logo"
                  className="h-8 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  onError={(e) => {
                    e.target.src = "/logo.svg"
                  }}
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#B85042]/10 rounded-full"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>
            
            {/* Navigation */}
            <nav className="p-6" role="navigation" aria-label="Mobile navigation">
              <ul className="space-y-2">
                {sections.map((section, index) => {
                  const IconComponent = section.icon
                  return (
                    <li key={section.id} className="animate-in fade-in-up duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                      {section.id === 'services' ? (
                        // Services dropdown for mobile
                        <div className="space-y-2">
                          <div className="flex items-center text-lg font-semibold text-[#0f1115] px-4 py-3 bg-gradient-to-r from-[#B85042]/5 to-transparent rounded-xl">
                            <IconComponent className="w-5 h-5 mr-3 text-[#B85042]" />
                            Services
                          </div>
                          <div className="ml-6 space-y-1">
                            <Link
                              href="/fitout-solutions"
                              className="flex items-center w-full text-left text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-[#B85042]/10 hover:text-[#B85042] text-gray-600 hover:translate-x-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="w-2 h-2 bg-[#B85042] rounded-full mr-3"></span>
                              Fit-out Solutions
                            </Link>
                            <Link
                              href="/residential-design"
                              className="flex items-center w-full text-left text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-[#B85042]/10 hover:text-[#B85042] text-gray-600 hover:translate-x-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="w-2 h-2 bg-[#B85042] rounded-full mr-3"></span>
                              Residential Design
                            </Link>
                          </div>
                        </div>
                      ) : section.id === 'about' ? (
                        // About dropdown for mobile
                        <div className="space-y-2">
                          <div className="flex items-center text-lg font-semibold text-[#0f1115] px-4 py-3 bg-gradient-to-r from-[#B85042]/5 to-transparent rounded-xl">
                            <IconComponent className="w-5 h-5 mr-3 text-[#B85042]" />
                            About Us
                          </div>
                          <div className="ml-6 space-y-1">
                            <Link
                              href="/about"
                              className="flex items-center w-full text-left text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-[#B85042]/10 hover:text-[#B85042] text-gray-600 hover:translate-x-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="w-2 h-2 bg-[#B85042] rounded-full mr-3"></span>
                              Our Story
                            </Link>
                          </div>
                        </div>
                      ) : (
                        // Regular navigation item
                        <button
                          onClick={() => handleNavigation(section)}
                          className={`flex items-center w-full text-left text-lg font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:bg-[#B85042]/10 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 ${
                            section.href === '/' && activeSection === 'hero'
                              ? 'text-[#B85042] bg-[#B85042]/10 border border-[#B85042]/20'
                              : 'text-[#0f1115]'
                          }`}
                          aria-current={section.href === '/' && activeSection === 'hero' ? 'page' : undefined}
                        >
                          <IconComponent className="w-5 h-5 mr-3 text-[#B85042]" />
                          {section.name}
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
              
              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">Need immediate assistance?</p>
                  <Link
                    href="tel:+919885809472"
                    className="inline-flex items-center justify-center w-full bg-[#B85042] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#A14237] transition-all duration-200 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar