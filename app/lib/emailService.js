import { Resend } from 'resend'
import { customerConfirmationEmail, adminNotificationEmail } from './emailTemplates'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send customer confirmation email
 * @param {Object} data - Contact form data
 * @returns {Promise<Object>} - Resend response
 */
export const sendCustomerConfirmation = async (data) => {
  try {
    const emailData = customerConfirmationEmail(data)
    
    const result = await resend.emails.send({
      from: 'DK Interiors <noreply@yourdomain.com>', // Update with your verified domain
      to: [data.email],
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    })
    
    // Customer confirmation email sent
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

/**
 * Send admin notification email
 * @param {Object} data - Contact form data
 * @returns {Promise<Object>} - Resend response
 */
export const sendAdminNotification = async (data) => {
  try {
    const emailData = adminNotificationEmail(data)
    
    const result = await resend.emails.send({
      from: 'DK Interiors Website <noreply@yourdomain.com>', // Update with your verified domain
      to: ['dkinterior17@gmail.com'], // Admin email address
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    })
    
    // Admin notification email sent
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

/**
 * Send both customer confirmation and admin notification emails
 * @param {Object} data - Contact form data
 * @returns {Promise<Object>} - Results for both emails
 */
export const sendContactFormEmails = async (data) => {
  try {
    // Send emails in parallel for better performance
    const [customerResult, adminResult] = await Promise.allSettled([
      sendCustomerConfirmation(data),
      sendAdminNotification(data)
    ])
    
    const results = {
      customer: customerResult.status === 'fulfilled' ? customerResult.value : { success: false, error: customerResult.reason },
      admin: adminResult.status === 'fulfilled' ? adminResult.value : { success: false, error: adminResult.reason }
    }
    
    // Log results
    // Email sending completed
    
    return results
  } catch (error) {
    return {
      customer: { success: false, error: error.message },
      admin: { success: false, error: error.message }
    }
  }
}

/**
 * Test email service configuration
 * @returns {Promise<Object>} - Test result
 */
export const testEmailService = async () => {
  try {
    // Test with sample data
    const testData = {
      fullName: 'Test User',
      email: 'test@example.com',
      mobileNumber: '+91-1234567890',
      message: 'This is a test message to verify email service configuration.'
    }
    
    const result = await resend.emails.send({
      from: 'DK Interiors <noreply@yourdomain.com>',
      to: ['dkinterior17@gmail.com'],
      subject: '🧪 Email Service Test - DK Interiors Website',
      html: `
        <h1>Email Service Test</h1>
        <p>This is a test email to verify that your email service is working correctly.</p>
        <p><strong>Test Data:</strong></p>
        <ul>
          <li>Name: ${testData.fullName}</li>
          <li>Email: ${testData.email}</li>
          <li>Mobile: ${testData.mobileNumber}</li>
          <li>Message: ${testData.message}</li>
        </ul>
        <p>If you receive this email, your email service is configured correctly!</p>
        <p>Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      `,
      text: `
Email Service Test

This is a test email to verify that your email service is working correctly.

Test Data:
- Name: ${testData.fullName}
- Email: ${testData.email}
- Mobile: ${testData.mobileNumber}
- Message: ${testData.message}

If you receive this email, your email service is configured correctly!

Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `
    })
    
    // Email service test successful
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
