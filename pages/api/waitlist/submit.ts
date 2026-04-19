import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  // Validate required fields
  const requiredFields = [
    "fullName",
    "email",
    "country",
    "role",
    "jobTitle",
    "experience",
    "problem",
    "timing",
    "workType",
    "source",
    "interview",
    "pay",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  try {
    // Verify that the email was OTP-verified
    const otpRecord = await prisma.otpVerification.findFirst({
      where: {
        email: data.email.toLowerCase(),
        verified: true,
      },
    });

    if (!otpRecord) {
      return res
        .status(403)
        .json({ error: "Email has not been verified. Please verify your email first." });
    }

    // Check for existing submission
    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: data.email.toLowerCase() },
    });

    if (existing) {
      return res
        .status(409)
        .json({ error: "This email is already on the waitlist." });
    }

    // Create the waitlist entry
    const entry = await prisma.waitlistEntry.create({
      data: {
        fullName: data.fullName,
        email: data.email.toLowerCase(),
        country: data.country,
        role: data.role,
        jobTitle: data.jobTitle,
        company: data.company || null,
        portfolioUrl: data.portfolioUrl || null,
        experience: data.experience,
        problem: data.problem,
        recommendReason: data.recommendReason || null,
        fear: data.fear || null,
        tools: data.tools || [],
        otherTool: data.otherTool || null,
        timing: data.timing,
        workType: data.workType,
        startupInterests: data.startupInterests || [],
        contributionGoals: data.contributionGoals || [],
        anythingElse: data.anythingElse || null,
        source: data.source,
        interview: data.interview,
        pay: data.pay,
        referralCode: data.referralCode || null,
      },
    });

    // Clean up OTP records for this email
    await prisma.otpVerification.deleteMany({
      where: { email: data.email.toLowerCase() },
    });

    return res
      .status(201)
      .json({ success: true, id: entry.id, message: "Welcome to the waitlist!" });
  } catch (error) {
    console.error("Submit waitlist error:", error);
    return res.status(500).json({ error: "Failed to submit waitlist entry" });
  }
}
