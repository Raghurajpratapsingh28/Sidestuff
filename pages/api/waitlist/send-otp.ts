import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Set expiry to 5 minutes from now
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Upsert — if an OTP already exists for this email, replace it
    await prisma.otpVerification.deleteMany({
      where: { email: email.toLowerCase() },
    });

    await prisma.otpVerification.create({
      data: {
        email: email.toLowerCase(),
        otp,
        expiresAt,
      },
    });

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Sidestuff" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Sidestuff Verification Code",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px; background: #fafafa; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #102c26; font-size: 28px; margin: 0;">Sidestuff</h1>
          </div>
          <div style="background: white; border-radius: 8px; padding: 32px; border: 1px solid #e5e5e5;">
            <h2 style="color: #102c26; font-size: 20px; margin: 0 0 12px;">Verify your email</h2>
            <p style="color: #666; font-size: 15px; line-height: 1.5; margin: 0 0 24px;">
              Enter this code in the waitlist form to verify your email address:
            </p>
            <div style="background: #102c26; color: white; text-align: center; padding: 16px; border-radius: 8px; font-size: 32px; letter-spacing: 8px; font-weight: bold;">
              ${otp}
            </div>
            <p style="color: #999; font-size: 13px; margin: 20px 0 0; text-align: center;">
              This code expires in 5 minutes.
            </p>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 24px;">
            If you didn't request this code, you can safely ignore this email.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Send OTP error:", error);
    return res.status(500).json({ error: "Failed to send OTP" });
  }
}
