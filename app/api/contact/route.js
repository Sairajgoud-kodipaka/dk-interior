import { NextResponse } from 'next/server'

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

    // Log the submission (for development)
    console.log('Contact form submission:', {
      fullName,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // For now, just return success
    // In production, you can add email sending or database storage here
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        data: { fullName, email, message }
      },
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