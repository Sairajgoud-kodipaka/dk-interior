'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    
    // Clear submit errors
    if (submitError) {
      setSubmitError('')
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitSuccess(false)
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        if (element) element.focus()
      }
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setSubmitSuccess(true)
        toast.success('Thank you! Your message has been sent successfully.')
        setFormData({ fullName: '', email: '', message: '' })
      } else {
        let errorMessage = 'Failed to send message. Please try again.'
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (e) {
          // Response might not be JSON
          errorMessage = `Server error (${response.status}). Please try again.`
        }
        setSubmitError(errorMessage)
        toast.error(errorMessage)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      const errorMessage = 'Network error. Please check your connection and try again.'
      setSubmitError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#f5f4f2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1115] mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our design experts and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f1115] mb-6">
                Get In Touch
              </h3>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                We'd love to hear about your project. Whether it's a complete fitout, 
                renovation, or consultation, our team is here to help you create 
                exceptional spaces.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#B85042] p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Email</h4>
                  <p className="text-[#6b7280]">info@dkinteriors.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B85042] p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Phone</h4>
                  <p className="text-[#6b7280]">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B85042] p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Location</h4>
                  <p className="text-[#6b7280]">
                    123 Design Street,<br />
                    Interior District, Mumbai 400001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#6b7280]/10">
              <h4 className="font-semibold text-[#0f1115] mb-3">Business Hours</h4>
              <div className="space-y-2 text-[#6b7280]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#6b7280]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-[#0f1115] font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`mt-2 transition-all duration-300 ${
                    errors.fullName 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : submitSuccess && formData.fullName
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : 'border-[#6b7280]/30 focus:border-[#B85042] focus:ring-[#B85042]'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-[#0f1115] font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`mt-2 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : submitSuccess && formData.email
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : 'border-[#6b7280]/30 focus:border-[#B85042] focus:ring-[#B85042]'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-[#0f1115] font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`mt-2 resize-none transition-all duration-300 ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : submitSuccess && formData.message
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : 'border-[#6b7280]/30 focus:border-[#B85042] focus:ring-[#B85042]'
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Inline error message */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-red-800">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Success message */}
              {submitSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-green-800">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] focus:ring-4 focus:ring-[#B85042]/20"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm