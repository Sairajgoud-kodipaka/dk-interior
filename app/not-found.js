'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft, Search, Factory, Info, Briefcase } from 'lucide-react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Factory', href: '/factory', icon: Factory },
    { name: 'Our Work', href: '/#our-work', icon: Briefcase },
  ]

  const handleNavigation = (href) => {
    if (href.startsWith('/')) {
      router.push(href)
    } else if (href.startsWith('#')) {
      router.push('/')
      sessionStorage.setItem('scrollToSection', href)
    }
  }

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="relative">
        {/* 404 Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1115] via-[#1a1d23] to-[#2d3748]">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B85042]/5 via-transparent to-[#B85042]/10" />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full blur-sm animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/5 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/6 w-16 h-16 border border-white/8 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Main Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white/20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
                  404
                </h1>
              </div>
            </div>

            {/* Error Message */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Page Not Found
              </h2>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
                Oops! The page you're looking for seems to have wandered off. 
                Don't worry, even the best interior designs sometimes need a little reorganization.
              </p>
              
              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B85042] to-transparent mx-auto opacity-80" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => router.push('/')}
                className="group relative bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#B85042]/50 overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <button
                onClick={() => router.back()}
                className="group relative border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-[#B85042] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </div>
              </button>
            </div>

            {/* Quick Links */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white/90 mb-6">
                Or explore these popular pages:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleNavigation(link.href)}
                      className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent className="w-6 h-6 text-white group-hover:text-[#B85042] transition-colors duration-300" />
                        <span className="text-sm font-medium text-white group-hover:text-[#B85042] transition-colors duration-300">
                          {link.name}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Particles */}
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-16 right-12 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-[#B85042]/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
