import { NextResponse } from 'next/server'
import { sendContactFormEmails } from '../../lib/emailService'

export async function POST(request) {
  try {
    const { fullName, email, mobileNumber, message } = await request.json()

    // Basic validation
    if (!fullName || !email || !mobileNumber || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Mobile number validation - must be exactly 10 digits
    const cleanMobile = mobileNumber.replace(/[-\s]/g, '')
    if (cleanMobile.length !== 10 || !/^\d{10}$/.test(cleanMobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format. Must be exactly 10 digits.' },
        { status: 400 }
      )
    }

    // Format mobile number for display (add +91 prefix)
    const formattedMobile = `+91-${cleanMobile}`

    // Process contact form submission

    // Send emails
    const emailResults = await sendContactFormEmails({
      fullName,
      email,
      mobileNumber: formattedMobile,
      message
    })

    // Email sending completed

    // Check if emails were sent successfully
    const customerEmailSent = emailResults.customer?.success
    const adminEmailSent = emailResults.admin?.success

    // Return success response with email status
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        data: { 
          fullName, 
          email, 
          mobileNumber: formattedMobile, 
          message,
          emailsSent: {
            customer: customerEmailSent,
            admin: adminEmailSent
          }
        }
      },
      { status: 200 }
    )

  } catch (error) {
    // Check if it's an email-related error
    if (error.message?.includes('email') || error.message?.includes('Resend')) {
      return NextResponse.json(
        { 
          error: 'Form submitted successfully, but there was an issue sending confirmation emails. We\'ll contact you soon.',
          details: 'Email service temporarily unavailable'
        },
        { status: 200 } // Still return 200 since form was processed
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}