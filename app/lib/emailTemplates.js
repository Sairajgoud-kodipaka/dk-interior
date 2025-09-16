// Email templates for DK Interiors contact form

export const customerConfirmationEmail = (data) => ({
  subject: 'Thank you for contacting DK Interiors - We\'ll get back to you soon!',
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting DK Interiors</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f4f2;
        }
        .header {
          background: linear-gradient(135deg, #B85042 0%, #A14237 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #0f1115;
        }
        .details {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #B85042;
        }
        .detail-row {
          display: flex;
          margin-bottom: 10px;
        }
        .detail-label {
          font-weight: 600;
          width: 120px;
          color: #6b7280;
        }
        .detail-value {
          color: #0f1115;
        }
        .next-steps {
          background: #d1ecf1;
          border: 1px solid #bee5eb;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .next-steps h3 {
          color: #0c5460;
          margin-top: 0;
        }
        .contact-info {
          background: #e2e3e5;
          border: 1px solid #d6d8db;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Thank You!</h1>
        <p>We've received your message and are excited to work with you!</p>
      </div>
      
      <div class="content">
        <div class="greeting">
          Dear <strong>${data.fullName}</strong>,
        </div>
        
        <p>Thank you for reaching out to DK Interiors! We're thrilled that you're considering us for your interior design and fit-out project.</p>
        
        <div class="details">
          <h3 style="margin-top: 0; color: #B85042;">Your Message Details:</h3>
          <div class="detail-row">
            <span class="detail-label">Name:</span>
            <span class="detail-value">${data.fullName}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${data.email}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Mobile:</span>
            <span class="detail-value">${data.mobileNumber}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Message:</span>
            <span class="detail-value">${data.message}</span>
          </div>
        </div>
        
        <div class="next-steps">
          <h3>📋 What Happens Next?</h3>
          <ol style="margin: 0; padding-left: 20px;">
            <li><strong>Within 24 hours:</strong> Our design team will review your requirements</li>
            <li><strong>Initial consultation:</strong> We'll schedule a call to discuss your project in detail</li>
            <li><strong>Proposal:</strong> Receive a customized proposal tailored to your needs</li>
            <li><strong>Project kickoff:</strong> Begin transforming your space!</li>
          </ol>
        </div>
        
        <div class="contact-info">
          <h3 style="margin-top: 0; color: #B85042;">📞 Need to reach us quickly?</h3>
          <p style="margin: 5px 0;"><strong>Email:</strong> dkinterior17@gmail.com</p>
          <p style="margin: 5px 0;"><strong>Mobile:</strong> +91 98858 09472, +91 97898 18047, +91 96772 92533</p>
          <p style="margin: 5px 0;"><strong>Business Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM</p>
        </div>
        
        <p>We're committed to delivering exceptional results and creating spaces that exceed your expectations. Your vision is our priority!</p>
        
        <p>Best regards,<br>
        <strong>The DK Interiors Team</strong></p>
      </div>
      
      <div class="footer">
        <p>© 2024 DK Interiors. All rights reserved.</p>
        <p> 3-94/1/A/1,Survey No.169, Vavilala Village, Jinnaram Mandal, Sangareddy, Hyderabad, Telangana -502319</p>
      </div>
    </body>
    </html>
  `,
  text: `
Thank you for contacting DK Interiors!

Dear ${data.fullName},

Thank you for reaching out to DK Interiors! We're thrilled that you're considering us for your interior design and fit-out project.

Your Message Details:
- Name: ${data.fullName}
- Email: ${data.email}
- Mobile: ${data.mobileNumber}
- Message: ${data.message}

What Happens Next?
1. Within 24 hours: Our design team will review your requirements
2. Initial consultation: We'll schedule a call to discuss your project in detail
3. Proposal: Receive a customized proposal tailored to your needs
4. Project kickoff: Begin transforming your space!

Need to reach us quickly?
- Email: dkinterior17@gmail.com
- Mobile: +91 98858 09472, +91 97898 18047, +91 96772 92533
- Business Hours: Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM

We're committed to delivering exceptional results and creating spaces that exceed your expectations. Your vision is our priority!

Best regards,
The DK Interiors Team

© 2024 DK Interiors. All rights reserved.
3-94/1/A/1, Survey No.169, Vavilala Village, Jinnaram Mandal, Sangareddy, Hyderabad, Telangana -502319
  `
})

export const adminNotificationEmail = (data) => ({
  subject: '🚨 New Contact Form Submission - DK Interiors Website',
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f4f2;
        }
        .header {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .alert-box {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          text-align: center;
        }
        .customer-details {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #dc3545;
        }
        .detail-row {
          display: flex;
          margin-bottom: 10px;
        }
        .detail-label {
          font-weight: 600;
          width: 120px;
          color: #6b7280;
        }
        .detail-value {
          color: #0f1115;
        }
        .message-content {
          background: #e9ecef;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
        }
        .action-buttons {
          text-align: center;
          margin: 30px 0;
        }
        .action-btn {
          display: inline-block;
          padding: 12px 24px;
          margin: 0 10px;
          background: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
        }
        .action-btn:hover {
          background: #0056b3;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6b7280;
          font-size: 14px;
        }
        .timestamp {
          background: #e2e3e5;
          border: 1px solid #d6d8db;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          text-align: center;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚨 New Contact Form Submission</h1>
        <p>DK Interiors Website - Immediate Action Required</p>
      </div>
      
      <div class="content">
        <div class="alert-box">
          <strong>⚠️ IMPORTANT:</strong> A new customer has submitted a contact form on your website. 
          Please respond within 24 hours to maintain excellent customer service.
        </div>
        
        <h2 style="color: #dc3545; margin-top: 0;">Customer Information:</h2>
        
        <div class="customer-details">
          <div class="detail-row">
            <span class="detail-label">Full Name:</span>
            <span class="detail-value"><strong>${data.fullName}</strong></span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Email Address:</span>
            <span class="detail-value"><strong>${data.email}</strong></span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Mobile Number:</span>
            <span class="detail-value"><strong>${data.mobileNumber}</strong></span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Submission Time:</span>
            <span class="detail-value"><strong>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</strong></span>
          </div>
        </div>
        
        <h3 style="color: #dc3545;">Customer Message:</h3>
        <div class="message-content">
          <p style="margin: 0; font-style: italic;">"${data.message}"</p>
        </div>
        
        <div class="action-buttons">
          <a href="mailto:${data.email}?subject=Re: Your DK Interiors Inquiry&body=Dear ${data.fullName},%0D%0A%0D%0AThank you for contacting DK Interiors! We're excited about your project.%0D%0A%0D%0AI'll be in touch within 24 hours to discuss your requirements in detail.%0D%0A%0D%0ABest regards,%0D%0AThe DK Interiors Team" class="action-btn">📧 Reply via Email</a>
          <a href="tel:${data.mobileNumber.replace(/[+\-\s]/g, '')}" class="action-btn">📱 Call Customer</a>
        </div>
        
        <div class="timestamp">
          <strong>Form submitted at:</strong> ${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        
        <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 15px; margin: 20px 0;">
          <h4 style="margin: 0; color: #155724;">💡 Quick Response Tips:</h4>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Send acknowledgment email within 2 hours</li>
            <li>Call within 24 hours for detailed discussion</li>
            <li>Prepare project requirements questionnaire</li>
            <li>Schedule site visit if needed</li>
          </ul>
        </div>
      </div>
      
      <div class="footer">
        <p>© 2024 DK Interiors. This is an automated notification from your website.</p>
        <p>Website: Your DK Interiors Website</p>
      </div>
    </body>
    </html>
  `,
  text: `
🚨 NEW CONTACT FORM SUBMISSION - DK Interiors Website

A new customer has submitted a contact form on your website. Please respond within 24 hours.

CUSTOMER INFORMATION:
- Full Name: ${data.fullName}
- Email Address: ${data.email}
- Mobile Number: ${data.mobileNumber}
- Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

CUSTOMER MESSAGE:
"${data.message}"

IMMEDIATE ACTIONS REQUIRED:
1. Send acknowledgment email within 2 hours
2. Call customer within 24 hours for detailed discussion
3. Prepare project requirements questionnaire
4. Schedule site visit if needed

QUICK LINKS:
- Reply via Email: mailto:${data.email}?subject=Re: Your DK Interiors Inquiry
- Call Customer: ${data.mobileNumber.replace(/[+\-\s]/g, '')}

Form submitted at: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})}

© 2024 DK Interiors. This is an automated notification from your website.
  `
})
