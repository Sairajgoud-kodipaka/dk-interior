'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#f5f4f2] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0f1115] mb-3">
            Oops! Something went wrong
          </h1>
          <p className="text-[#6b7280] leading-relaxed">
            We encountered an unexpected error. Our team has been notified and we're working to fix it as soon as possible.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-[#B85042] hover:bg-[#A14237] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border-2 border-[#B85042] text-[#B85042] hover:bg-[#B85042] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 p-4 bg-white/50 rounded-lg">
          <p className="text-sm text-[#6b7280] mb-2">
            Still having trouble?
          </p>
          <a 
            href="tel:+919885809472"
            className="text-[#B85042] hover:text-[#A14237] font-medium transition-colors duration-200"
          >
            Call us at +91 98858 09472
          </a>
        </div>
      </div>
    </div>
  )
}
