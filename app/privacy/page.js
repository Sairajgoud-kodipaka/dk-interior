'use client'

import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6b7280] mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Information We Collect</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                  <li>Fill out our contact form</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via phone or email</li>
                </ul>
                <p className="text-[#6b7280] leading-relaxed">
                  This information may include your name, email address, phone number, 
                  project details, and any other information you choose to provide.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">How We Use Your Information</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you project updates and communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Information Sharing</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information 
                  to third parties without your consent, except as described in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Data Security</h2>
                <p className="text-[#6b7280] leading-relaxed">
                  We implement appropriate security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f1115] mb-4">Contact Us</h2>
                <p className="text-[#6b7280] leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-[#f5f4f2] p-6 rounded-lg">
                  <p className="text-[#0f1115] font-medium">DK Interiors</p>
                  <p className="text-[#6b7280]">Phone: +91 98858 09472, +91 97898 18047, +91 96772 92533</p>
                  <p className="text-[#6b7280]">Email: info@dkinteriors.com</p>
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
