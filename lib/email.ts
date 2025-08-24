import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Beat The Rat Race Account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000; background: #fde047; padding: 20px; text-align: center; font-weight: bold;">
          BEAT THE RAT RACE
        </h1>
        <div style="padding: 20px; background: #f5f5f4;">
          <h2 style="color: #000; font-weight: bold;">Welcome to the Club!</h2>
          <p style="font-size: 16px; color: #333;">
            Thanks for joining Beat The Rat Race. Click the button below to verify your email and complete your registration.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background: #000; color: #fff; padding: 15px 30px; text-decoration: none; font-weight: bold; border: 4px solid #000;">
              VERIFY EMAIL →
            </a>
          </div>
          <p style="font-size: 14px; color: #666;">
            If the button doesn't work, copy and paste this link: ${verificationUrl}
          </p>
        </div>
      </div>
    `,
  })
}

export async function sendBookingConfirmation(
  userEmail: string, 
  adminEmail: string, 
  bookingDetails: {
    type: 'monthly' | 'oneoff'
    date: string
    time: string
    duration: string
  }
) {
  const userSubject = `Consultation Booked - ${bookingDetails.date} at ${bookingDetails.time}`
  const adminSubject = `New Booking: ${bookingDetails.type} consultation`
  
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #000; background: #fde047; padding: 20px; text-align: center; font-weight: bold;">
        BEAT THE RAT RACE
      </h1>
      <div style="padding: 20px; background: #f5f5f4;">
        <h2 style="color: #000; font-weight: bold;">Consultation Confirmed!</h2>
        <div style="background: #fff; padding: 20px; border: 4px solid #000; margin: 20px 0;">
          <p><strong>Date:</strong> ${bookingDetails.date}</p>
          <p><strong>Time:</strong> ${bookingDetails.time}</p>
          <p><strong>Duration:</strong> ${bookingDetails.duration}</p>
          <p><strong>Type:</strong> ${bookingDetails.type === 'monthly' ? 'Monthly Membership Consultation' : 'Done-With-You Consulting'}</p>
        </div>
        <p>We'll send you a meeting link 24 hours before your consultation.</p>
      </div>
    </div>
  `
  
  const adminHtml = `
    <div style="font-family: Arial, sans-serif;">
      <h2>New Consultation Booking</h2>
      <p><strong>User:</strong> ${userEmail}</p>
      <p><strong>Date:</strong> ${bookingDetails.date}</p>
      <p><strong>Time:</strong> ${bookingDetails.time}</p>
      <p><strong>Duration:</strong> ${bookingDetails.duration}</p>
      <p><strong>Type:</strong> ${bookingDetails.type === 'monthly' ? 'Monthly Membership Consultation (30 min)' : 'Done-With-You Consulting (1.5 hours)'}</p>
    </div>
  `
  
  await Promise.all([
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    }),
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: adminSubject,
      html: adminHtml,
    })
  ])
}