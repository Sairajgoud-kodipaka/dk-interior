# 📧 Email Service Setup Guide - DK Interiors Website

## 🚀 Overview

Your contact form now includes a complete email notification system that sends:
1. **Customer Confirmation Email** - Professional thank you message with next steps
2. **Admin Notification Email** - Immediate alert with customer details and action items

## ⚙️ Setup Steps

### 1. **Resend Account Setup**

1. Go to [Resend.com](https://resend.com) and create an account
2. Verify your email address
3. Go to API Keys section and create a new API key
4. Copy the API key (starts with `re_`)

### 2. **Domain Verification (Required)**

1. In Resend dashboard, go to "Domains" section
2. Add your domain (e.g., `yourdomain.com`)
3. Follow DNS verification steps:
   - Add TXT record for domain verification
   - Add MX record for email delivery
   - Add SPF record for email authentication
4. Wait for verification (usually takes a few minutes)

### 3. **Environment Variables**

Create a `.env.local` file in your project root with:

```bash
# Resend Email Service
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=dkinterior17@gmail.com
```

### 4. **Update Email Templates**

In `app/lib/emailService.js`, update the `from` email addresses:

```javascript
// Line 25: Update with your verified domain
from: 'DK Interiors <noreply@yourdomain.com>',

// Line 45: Update with your verified domain  
from: 'DK Interiors Website <noreply@yourdomain.com>',
```

## 🧪 Testing the Email Service

### **Test Endpoint**
Visit: `http://localhost:3000/api/test-email`

This will send a test email to verify your configuration.

### **Test Contact Form**
1. Fill out the contact form on your website
2. Submit the form
3. Check both emails:
   - Customer confirmation email
   - Admin notification email

## 📧 Email Templates Features

### **Customer Confirmation Email**
- ✅ Professional branding with DK Interiors colors
- ✅ Customer's submitted information
- ✅ Clear next steps and timeline
- ✅ Contact information and business hours
- ✅ Mobile-responsive design
- ✅ Both HTML and text versions

### **Admin Notification Email**
- ✅ Immediate alert with customer details
- ✅ Quick action buttons (reply email, call customer)
- ✅ Submission timestamp
- ✅ Response guidelines
- ✅ Professional formatting

## 🔧 Customization Options

### **Update Email Content**
Edit templates in `app/lib/emailTemplates.js`:
- Change colors, fonts, and styling
- Modify messaging and tone
- Add your logo or branding
- Update contact information

### **Change Email Addresses**
Update in `app/lib/emailService.js`:
- Customer confirmation recipient
- Admin notification recipient
- From email addresses

### **Modify Email Subjects**
Edit in `app/lib/emailTemplates.js`:
- Customer confirmation subject
- Admin notification subject

## 🚨 Troubleshooting

### **Common Issues**

1. **"Invalid API Key" Error**
   - Verify your Resend API key is correct
   - Check if the key is active in Resend dashboard

2. **"Domain Not Verified" Error**
   - Complete domain verification in Resend
   - Wait for DNS propagation (can take up to 24 hours)

3. **Emails Not Sending**
   - Check browser console for errors
   - Verify environment variables are loaded
   - Test with the `/api/test-email` endpoint

4. **Emails Going to Spam**
   - Ensure domain verification is complete
   - Check SPF and DKIM records
   - Use a professional from address

### **Debug Steps**

1. Check server logs for error messages
2. Verify environment variables are loaded
3. Test email service independently
4. Check Resend dashboard for delivery status

## 📱 Mobile Optimization

All email templates are:
- ✅ Mobile-responsive
- ✅ Optimized for all screen sizes
- ✅ Tested on major email clients
- ✅ Accessible with proper contrast

## 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ Rate limiting (can be added)
- ✅ Environment variable protection
- ✅ Error handling without data exposure

## 📊 Monitoring & Analytics

Resend provides:
- Email delivery rates
- Bounce rates
- Open rates
- Click tracking (if enabled)
- Delivery logs

## 🎯 Next Steps

1. ✅ Set up Resend account
2. ✅ Verify your domain
3. ✅ Configure environment variables
4. ✅ Test email service
5. ✅ Customize email templates
6. ✅ Monitor email delivery

## 📞 Support

If you encounter issues:
1. Check Resend documentation
2. Review server logs
3. Test with the test endpoint
4. Verify all configuration steps

---

**Your contact form now provides a professional, automated email experience that will impress customers and keep you informed of new inquiries!** 🎉
