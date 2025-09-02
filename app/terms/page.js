'use client'

import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function TermsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <NavBar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f1115] mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6b7280] mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Agreement to Terms</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Services</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  DK Interiors provides interior design and fit-out solutions including:
                </p>
                <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                  <li>Retail fit-out solutions</li>
                  <li>Commercial space design</li>
                  <li>Residential interior design</li>
                  <li>Factory manufacturing services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Project Terms</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  All projects are subject to:
                </p>
                <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                  <li>Written project agreements</li>
                  <li>Payment terms as specified in contracts</li>
                  <li>Timeline commitments</li>
                  <li>Quality standards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Intellectual Property</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  All designs, concepts, and materials created by DK Interiors remain our 
                  intellectual property unless otherwise specified in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Limitation of Liability</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  DK Interiors shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Contact Information</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-[#f5f4f2] p-6 rounded-lg">
                  <p className="text-[#0f1115] font-medium">DK Interiors</p>
                  <p className="text-[#6b7280]">Phone: +91 98858 09472, +91 97898 18047, +91 96772 92533</p>
                  <p className="text-[#6b7280]">Email: info@dk-interior.in</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
