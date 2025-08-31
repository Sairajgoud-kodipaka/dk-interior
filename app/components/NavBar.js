'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'factory', name: 'Factory' },
    { id: 'our-work', name: 'Our Work' },
    { id: 'trusted-brands', name: 'Brands' },
    { id: 'contact', name: 'Contact' },
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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#f5f4f2]/95 backdrop-blur-sm border-b border-[#6b7280]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="DK Interiors Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 rounded-sm px-2 py-1 ${
                    activeSection === section.id
                      ? 'text-[#B85042] border-b-2 border-[#B85042]'
                      : 'text-[#0f1115]'
                  }`}
                >
                  {section.name}
                </button>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Sidebar */}
                      <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b">
              <img
                src="/logo.png"
                alt="DK Interiors Logo"
                className="h-8 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <nav className="p-6" role="navigation" aria-label="Mobile navigation">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-[#B85042]/10 hover:text-[#B85042] focus:outline-none focus:ring-2 focus:ring-[#B85042] focus:ring-offset-2 ${
                        activeSection === section.id
                          ? 'text-[#B85042] bg-[#B85042]/10'
                          : 'text-[#0f1115]'
                      }`}
                      aria-current={activeSection === section.id ? 'page' : undefined}
                    >
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar