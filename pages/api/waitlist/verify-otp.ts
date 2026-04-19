import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  try {
    // Find the latest OTP record for this email
    const record = await prisma.otpVerification.findFirst({
      where: {
        email: email.toLowerCase(),
        verified: false,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return res
        .status(400)
        .json({ error: "No OTP found. Please request a new one." });
    }

    // Check expiry
    if (new Date() > record.expiresAt) {
      // Clean up expired record
      await prisma.otpVerification.delete({ where: { id: record.id } });
      return res
        .status(400)
        .json({ error: "OTP has expired. Please request a new one." });
    }

    // Check match
    if (record.otp !== otp.toString().trim()) {
      return res.status(400).json({ error: "Invalid OTP. Please try again." });
    }

    // Mark as verified
    await prisma.otpVerification.update({
      where: { id: record.id },
      data: { verified: true },
    });

    return res
      .status(200)
      .json({ success: true, verified: true, message: "Email verified" });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return res.status(500).json({ error: "Failed to verify OTP" });
  }
}
