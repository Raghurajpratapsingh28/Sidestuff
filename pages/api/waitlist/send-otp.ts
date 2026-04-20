import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const otpServiceUrl = process.env.OTP_SERVICE_URL;
  const otpServiceApiKey = process.env.OTP_SERVICE_API_KEY;
  if (!otpServiceUrl || !otpServiceApiKey) {
    console.error("OTP_SERVICE_URL or OTP_SERVICE_API_KEY is not set");
    return res.status(500).json({ error: "OTP service not configured" });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

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

    const resp = await fetch(`${otpServiceUrl.replace(/\/$/, "")}/send-otp`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": otpServiceApiKey,
      },
      body: JSON.stringify({ email, otp }),
    });

    if (!resp.ok) {
      const data = (await resp.json().catch(() => ({}))) as { error?: string };
      console.error("OTP service responded with error:", resp.status, data);
      return res.status(502).json({ error: data.error || "Failed to send OTP" });
    }

    return res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Send OTP error:", error);
    return res.status(500).json({ error: "Failed to send OTP" });
  }
}
