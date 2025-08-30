import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { fullName, email, message } = await request.json()

    // Basic validation
    if (!fullName || !email || !message) {
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

    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    
    // Get timestamp
    const timestamp = new Date().toISOString()

    // Store in Supabase if environment variables are available
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      try {
        const { error: dbError } = await supabase
          .from('contact_messages')
          .insert({
            full_name: fullName,
            email: email,
            message: message,
            created_at: timestamp
          })

        if (dbError) {
          console.error('Supabase error:', dbError)
        }
      } catch (dbError) {
        console.error('Database storage failed:', dbError)
      }
    }

    // Send email if Resend API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'DK Interiors <onboarding@resend.dev>',
          to: 'sairajgoudkodipaka@gmail.com',
          subject: 'New Contact — DK Interiors',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #B85042;">New Contact Form Submission</h2>
              
              <div style="background-color: #f5f4f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #0f1115;">Contact Details</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #B85042;">
                <h3 style="margin-top: 0; color: #0f1115;">Message</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #6b7280; font-size: 14px;">
                <p>This email was sent from the DK Interiors website contact form.</p>
              </div>
            </div>
          `
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
      }
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}