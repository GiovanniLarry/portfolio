# 📧 Formspree Setup Guide

## ✅ Form Integration Complete

The contact form has been set up to work with Formspree. Follow these steps to activate it:

## 🔧 Setup Instructions

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (or log in if you already have one)
3. Click "New Form" to create a new form

### Step 2: Get Your Form ID

1. After creating a form, Formspree will give you a form endpoint URL like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy the `YOUR_FORM_ID` part (the unique ID after `/f/`)

### Step 3: Update the Form ID in Code

1. Open `src/components/Contact.tsx`
2. Find this line (around line 25):
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```tsx
   const response = await fetch('https://formspree.io/f/abc123xyz', {
   ```

### Step 4: Verify Email (First Time Only)

1. Formspree will send a verification email to the email address you used to sign up
2. Click the verification link in the email
3. Your form is now active!

## 📋 Form Configuration

The form is configured to send:
- **Name**: Sender's name
- **Email**: Sender's email address
- **Message**: The message content
- **Subject**: Auto-generated as "New Contact Form Message from [Name]"

## 🎨 Features Included

✅ **Loading State**: Button shows "Sending..." while submitting  
✅ **Success Message**: Green success message appears after successful submission  
✅ **Error Handling**: Red error message if submission fails  
✅ **Form Reset**: Form clears automatically after successful submission  
✅ **Disabled State**: Form fields are disabled during submission to prevent double-submission  

## 🔒 Formspree Free Plan Limits

- **50 submissions per month** (free plan)
- **Spam protection** included
- **Email notifications** for each submission
- **No backend code required**

## 💰 Upgrade Options

If you need more submissions:
- **Starter Plan**: $10/month - 250 submissions
- **Pro Plan**: $25/month - 1,000 submissions
- **Business Plan**: Custom pricing

## 🧪 Testing

1. Fill out the form on your portfolio
2. Submit it
3. Check your email (the one you used for Formspree)
4. You should receive an email with the form submission

## 🔍 Troubleshooting

**Form not submitting?**
- Check that you've replaced `YOUR_FORM_ID` with your actual form ID
- Verify your Formspree account email
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify your email in Formspree dashboard
- Make sure you verified your Formspree account email

**CORS errors?**
- Formspree handles CORS automatically
- If issues persist, check Formspree status page

## 📝 Alternative: Use HTML Form Action (Simpler)

If you prefer a simpler approach without JavaScript, you can also use:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

But the current implementation provides better UX with loading states and success/error messages.

---

**Need help?** Check [Formspree Documentation](https://help.formspree.io/hc/en-us)

