import React, { useState } from "react";
import { TextInput, RadioCardGroup } from "../ui/FormElements";

interface Step1Props {
  data: any;
  updateData: (fields: Partial<any>) => void;
  onNext: () => void;
}

export const Step1: React.FC<Step1Props> = ({ data, updateData, onNext }) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState("");

  const roleOptions = [
    { value: "founder", label: "Founder" },
    { value: "developer", label: "Developer" },
    { value: "marketer", label: "Marketer" },
    { value: "analyst", label: "Analyst" },
    { value: "designer", label: "Designer" },
    { value: "bizdev", label: "Biz Dev / Ops" },
    { value: "investor", label: "Investor" },
  ];

  const handleVerifyClick = async () => {
    if (!data.email) return;
    setIsSendingOtp(true);
    setOtpError("");

    try {
      const res = await fetch("/api/waitlist/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await res.json();

      if (res.ok) {
        setIsOtpSent(true);
      } else {
        setOtpError(result.error || "Failed to send OTP");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleOtpVerify = async () => {
    if (otpValue.length < 4) return;
    setIsVerifyingOtp(true);
    setOtpError("");

    try {
      const res = await fetch("/api/waitlist/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, otp: otpValue }),
      });

      const result = await res.json();

      if (res.ok && result.verified) {
        updateData({ isEmailVerified: true });
        setIsOtpSent(false);
      } else {
        setOtpError(result.error || "Invalid OTP");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const isValid = data.fullName && data.email && data.country && data.role && data.isEmailVerified;

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-NeueMontreal font-medium text-secondry mb-3">
        Let's start with the basics.
      </h2>
      <p className="text-gray-500 font-NeueMontreal text-lg mb-8">
        This takes about 3 minutes. Your answers shape how we build Sidestuff.
      </p>

      <div className="space-y-4">
        <TextInput
          label="Full name"
          placeholder="e.g. Jane Doe"
          value={data.fullName || ""}
          onChange={(e) => updateData({ fullName: e.target.value })}
        />

        <TextInput
          label="Email address"
          type="email"
          placeholder="e.g. jane@example.com"
          value={data.email || ""}
          onChange={(e) => {
            updateData({ email: e.target.value, isEmailVerified: false });
            setIsOtpSent(false);
            setOtpValue("");
            setOtpError("");
          }}
          className={data.isEmailVerified ? "border-green-500 text-green-700 bg-green-50 focus:ring-green-500" : ""}
          disabled={data.isEmailVerified}
          rightElement={
            data.isEmailVerified ? (
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : data.email && !isOtpSent ? (
              <button
                onClick={handleVerifyClick}
                disabled={isSendingOtp}
                className="px-4 py-2 bg-[#102c26] text-white text-xs rounded-md font-FoundersGrotesk tracking-wide uppercase hover:bg-opacity-90 transition-colors disabled:opacity-50"
              >
                {isSendingOtp ? "Sending..." : "Verify"}
              </button>
            ) : null
          }
        />

        {otpError && (
          <p className="text-red-500 text-sm font-NeueMontreal -mt-2">{otpError}</p>
        )}

        {isOtpSent && !data.isEmailVerified && (
          <div className="pl-4 border-l-2 border-[#102c26] animate-fade-in my-4">
            <p className="text-gray-500 text-sm font-NeueMontreal mb-2">
              We've sent a 6-digit code to <strong>{data.email}</strong>
            </p>
            <TextInput
              label="Enter OTP"
              placeholder="123456"
              value={otpValue}
              onChange={(e) => setOtpValue(e.target.value)}
              rightElement={
                <button
                  onClick={handleOtpVerify}
                  disabled={otpValue.length < 4 || isVerifyingOtp}
                  className="px-4 py-2 bg-[#102c26] text-white text-xs rounded-md font-FoundersGrotesk tracking-wide uppercase hover:bg-opacity-90 transition-colors disabled:opacity-50"
                >
                  {isVerifyingOtp ? "Verifying..." : "Confirm"}
                </button>
              }
            />
            <button
              onClick={handleVerifyClick}
              disabled={isSendingOtp}
              className="text-[#102c26] text-sm font-NeueMontreal underline mt-1 hover:opacity-70 transition-opacity disabled:opacity-50"
            >
              Resend code
            </button>
          </div>
        )}

        <TextInput
          label="Country"
          placeholder="e.g. India"
          value={data.country || ""}
          onChange={(e) => updateData({ country: e.target.value })}
        />

        <RadioCardGroup
          label="I'm joining as a"
          name="role"
          options={roleOptions}
          value={data.role || ""}
          onChange={(val) => updateData({ role: val })}
          className="mt-4"
        />
      </div>

      <div className="mt-10 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-full font-FoundersGrotesk text-lg uppercase tracking-wider transition-all duration-300 flex items-center ${
            isValid
              ? "bg-[#102c26] text-white hover:bg-opacity-90"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};
