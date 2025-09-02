'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog'
import { useToast } from '@/components/CustomToast'
import { Send, Mail, Phone, MapPin, CheckCircle, X } from 'lucide-react'

const ContactForm = () => {
  const { error: showError, success: showSuccess } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    mobileNumber: '' // Added mobileNumber to formData
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

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

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else {
      const mobileRegex = /^[0-9]{10}$/ // Assuming 10 digits for Indian numbers
      if (!mobileRegex.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number'
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
        showSuccess('Message Sent!', 'Your message has been sent successfully. We\'ll get back to you within 24 hours.')
        setShowSuccessDialog(true)
        setFormData({ fullName: '', email: '', message: '', mobileNumber: '' }) // Clear mobile number on success
        setErrors({})
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
        showError('Submission Failed', errorMessage)
      }
    } catch (error) {
      const errorMessage = 'Network error. Please check your connection and try again.'
      setSubmitError(errorMessage)
      showError('Network Error', errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f5f4f2] to-[#e8e6e3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1115] mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our design experts and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#0f1115] mb-6">
                Get In Touch
              </h3>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                We'd love to hear about your project. Whether it's a complete fit-out, 
                renovation, or consultation, our team is here to help you create 
                exceptional spaces.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-[#B85042] to-[#A14237] p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Email</h4>
                  <p className="text-[#6b7280] hover:text-[#B85042] transition-colors duration-200">
                    dkinterior17@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-[#B85042] to-[#A14237] p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Mobile</h4>
                  <div className="text-[#6b7280] hover:text-[#B85042] transition-colors duration-200">
                    <p>+91 98858 09472</p>
                    <p>+91 97898 18047</p>
                    <p>+91 96772 92533</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-[#B85042] to-[#A14237] p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1115] mb-1">Factory Location</h4>
                  <p className="text-[#6b7280] hover:text-[#B85042] transition-colors duration-200">
                    Survey No.169, Vavilala Village, Jinnaram Mandal,<br />
                    Sangareddy, Hyderabad, Telangana -502319
                  </p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-[#6b7280]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-[#0f1115] font-medium text-sm">
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
                  className={`mt-2 transition-all duration-300 border-2 ${
                    errors.fullName 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#6b7280]/20 focus:border-[#B85042] focus:ring-[#B85042]/20'
                  } rounded-lg px-4 py-3 text-[#0f1115] placeholder-[#9CA3AF] focus:outline-none focus:ring-4`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-2 text-sm text-red-500 flex items-center gap-2" role="alert">
                    <X className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-[#0f1115] font-medium text-sm">
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
                  className={`mt-2 transition-all duration-300 border-2 ${
                    errors.email 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#6b7280]/20 focus:border-[#B85042] focus:ring-[#B85042]/20'
                  } rounded-lg px-4 py-3 text-[#0f1115] placeholder-[#9CA3AF] focus:outline-none focus:ring-4`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-500 flex items-center gap-2" role="alert">
                    <X className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="mobileNumber" className="text-[#0f1115] font-medium text-sm">
                  Mobile Number *
                </Label>
                
                <div className="flex items-center mt-2">
                  {/* Country Code Display */}
                  <div className="bg-gray-100 border-2 border-[#6b7280]/20 rounded-l-lg px-3 py-1.5 text-[#0f1115] font-medium border-r-0">
                    +91
                  </div>
                  
                  {/* Phone Number Input */}
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.mobileNumber ? 'true' : 'false'}
                    aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                    className={`flex-1 rounded-l-none border-l-0 transition-all duration-300 border-2 ${
                      errors.mobileNumber 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-[#6b7280]/20 focus:border-[#B85042] focus:ring-[#B85042]/20'
                    } rounded-r-lg px-4 py-3 text-[#0f1115] placeholder-[#9CA3AF] focus:outline-none focus:ring-4`}
                    placeholder="982XX XXXXX"
                    maxLength={10}
                  />
                </div>
                
                {errors.mobileNumber && (
                  <p id="mobileNumber-error" className="mt-2 text-sm text-red-500 flex items-center gap-2" role="alert">
                    <X className="w-4 h-4" />
                    {errors.mobileNumber}
                  </p>
                )}
                
               
              </div>

              <div>
                <Label htmlFor="message" className="text-[#0f1115] font-medium text-sm">
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
                  className={`mt-2 resize-none transition-all duration-300 border-2 ${
                    errors.message 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#6b7280]/20 focus:border-[#B85042] focus:ring-[#B85042]/20'
                  } rounded-lg px-4 py-3 text-[#0f1115] placeholder-[#9CA3AF] focus:outline-none focus:ring-4`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-500 flex items-center gap-2" role="alert">
                    <X className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Inline error message */}
              {submitError && (
                <div className="p-4 bg-red-50/80 border-2 border-red-200 rounded-lg backdrop-blur-sm" role="alert">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-sm text-red-700 font-medium">{submitError}</p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}

                className="w-full bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] focus:ring-4 focus:ring-[#B85042]/20 shadow-lg hover:shadow-xl"
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-md border-2 border-[#B85042]/20 shadow-2xl">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#0f1115]">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-[#6b7280] text-lg mt-2">
              Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-center">
            <Button
              onClick={closeSuccessDialog}
              className="bg-gradient-to-r from-[#B85042] to-[#A14237] hover:from-[#A14237] hover:to-[#8F3A2E] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-[#B85042]/20 shadow-lg"
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ContactForm