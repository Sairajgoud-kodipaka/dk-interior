import { NextResponse } from 'next/server'
import { testEmailService } from '../../lib/emailService'

export async function GET(request) {
  try {
    // Only allow in development or with proper authentication
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Test endpoint not available in production' },
        { status: 403 }
      )
    }

    const result = await testEmailService()
    
    if (result.success) {
      return NextResponse.json({
        message: 'Email service test completed successfully',
        success: true,
        data: result.data
      })
    } else {
      return NextResponse.json({
        message: 'Email service test failed',
        success: false,
        error: result.error
      }, { status: 500 })
    }
    
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to test email service',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
