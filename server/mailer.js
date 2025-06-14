const nodemailer = require('nodemailer');
const config = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS
  }
});

async function sendOwnerNotification({ name, email, phone, subject, message }) {
  return transporter.sendMail({
    from: `"Website Contact" <${config.EMAIL_USER}>`,
    to: config.OWNER_EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`
  });
}

async function sendWelcomeEmail({ name, email, phone }) {
  return transporter.sendMail({
    from: `"Shiva Tours & Travels" <${config.EMAIL_USER}>`,
    to: email,
    subject: 'நன்றி! | Thank you for contacting us!',
    text: `வணக்கம் ${name},\n
Shiva Tours & Travels (உங்கள் நம்பகமான கார் வாடகை சேவை) ஐ தொடர்புகொண்டதற்கு நன்றி!\n
உங்கள் தகவலை பெற்றுள்ளோம். எங்கள் குழு விரைவில் உங்களை தொடர்புகொள்வார்கள்.
\n
விரைவான உதவிக்கு அல்லது முன்பதிவுக்கு, எங்களை 637-976-8118 என்ற WhatsApp எண்ணில் தொடர்புகொள்ளலாம்.
\n
உங்கள் பயணம் இனிமையாக அமைய வாழ்த்துகள்!
\n
- Shiva Tours & Travels குழு
\n
----------------------------
\n
Hi ${name},
\n
Thank you for reaching out to Shiva Tours & Travels, your trusted car rental service!\n
We have received your enquiry and our team will get back to you soon.
\n
For quick assistance or bookings, you can call or WhatsApp us at: 637-976-8118
\n
We look forward to making your journey comfortable and memorable!
\n
- Shiva Tours & Travels Team
`
  });
}

module.exports = { sendOwnerNotification, sendWelcomeEmail };