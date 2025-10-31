# Contact Form Setup Guide

## Overview
The contact form uses **Resend** to send emails. Resend is a modern email API service with a generous free tier (3,000 emails/month).

## Setup Steps

### 1. Sign up for Resend
1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Once logged in, go to **API Keys** in the dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "Red Tower Website")
4. Copy the API key (it starts with `re_`)

### 3. Configure Environment Variables
1. Create a `.env.local` file in the `rtd/` directory (if it doesn't exist)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
3. **Important**: Never commit `.env.local` to git (it should already be in `.gitignore`)

### 4. Update Email Addresses
Edit `rtd/app/api/contact/route.ts`:
- Line 24: Update the `from` address after verifying your domain with Resend
  - For now, you can use `onboarding@resend.dev` (Resend's test domain)
  - After verifying your domain, change to: `"Red Tower Contact Form <noreply@yourdomain.com>"`
- Line 25: Update the `to` address to your actual email: `["Hello@RedTowerDigital.com"]`

### 5. Domain Verification (Optional but Recommended)
For production, you should verify your domain with Resend:
1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Follow the DNS setup instructions
4. Once verified, update the `from` address in the API route

## Testing
1. Start your dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email inbox (and spam folder)

## How It Works
1. User fills out the form on the frontend
2. Form validates using Zod schema
3. On submit, sends POST request to `/api/contact`
4. API route uses Resend to send email
5. Email is delivered to your inbox with form data

## Free Tier Limits
- **3,000 emails/month** (free tier)
- **100 emails/day** rate limit
- Perfect for small to medium websites

## Troubleshooting
- **Emails not sending?** Check that `RESEND_API_KEY` is set correctly
- **API errors?** Check the browser console and server logs
- **Emails going to spam?** Verify your domain with Resend
- **Rate limiting?** You're hitting the 100/day limit on free tier

## Alternative Options
If you prefer a different email service:
- **SendGrid**: Similar service, also has free tier
- **Mailgun**: Popular option, free tier available
- **AWS SES**: Very cheap, but requires AWS setup
- **Postmark**: Great deliverability, paid only

For most websites, Resend is the easiest and most developer-friendly option.

