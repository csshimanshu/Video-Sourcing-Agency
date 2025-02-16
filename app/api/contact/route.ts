import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

export async function POST(req: Request) {
  try {
    // Debug log for environment variables
    console.log('Email Config:', {
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_APP_PASSWORD
    });

    const body = await req.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'himsingh2k16@gmail.com',
      subject: `[Vidsource] New Contact Form Submission from ${name}`,
      text: `
New contact form submission from Vidsource Website:

Name: ${name}
Email: ${email}
Message: ${message}

--
This email was sent from the contact form at Vidsource (Video Sourcing Agency)
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin: 0; font-size: 24px;">Vidsource</h1>
            <p style="color: #666; margin: 5px 0 0;">Video Sourcing Agency</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2563eb; margin: 0 0 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0 0 5px;">From:</p>
              <p style="color: #333; margin: 0; font-size: 16px;"><strong>${name}</strong></p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0 0 5px;">Email Address:</p>
              <p style="color: #333; margin: 0; font-size: 16px;"><strong>${email}</strong></p>
            </div>
            
            <div>
              <p style="color: #666; margin: 0 0 5px;">Message:</p>
              <p style="color: #333; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            <p>This email was sent from the contact form at Vidsource website.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
