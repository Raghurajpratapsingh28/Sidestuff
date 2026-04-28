import React, { useState } from "react";
import { TextInput, RadioCardGroup, CheckboxGroup } from "../ui/FormElements";

interface Step5Props {
  data: any;
  updateData: (fields: Partial<any>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const Step5: React.FC<Step5Props> = ({ data, updateData, onSubmit, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sourceOptions = [
    { value: "twitter", label: "Twitter / X" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "friend", label: "A friend" },
    { value: "reddit", label: "Reddit" },
    { value: "newsletter", label: "Newsletter" },
    { value: "search", label: "Search" },
    { value: "other", label: "Other" },
  ];

  const interviewOptions = [
    { value: "yes", label: "Yes, happy to" },
    { value: "maybe", label: "Maybe later" },
    { value: "no", label: "Not right now" },
  ];

  const payOptions = [
    { value: "yes", label: "Yes" },
    { value: "maybe", label: "Maybe, depends on price" },
    { value: "no", label: "No, prefer free access" },
  ];

  const isValid = data.source && data.interview && data.pay;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onSubmit();
    setIsSubmitting(false);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-NeueMontreal font-medium text-secondry mb-3">
        Last step. Almost in.
      </h2>
      <p className="text-gray-500 font-NeueMontreal text-lg mb-8">
        These help us reach the right people at launch and build the community intentionally.
      </p>

      <div className="space-y-4">
        <RadioCardGroup
          label="How did you hear about Katagoge?"
          name="source"
          options={sourceOptions}
          value={data.source || ""}
          onChange={(val) => updateData({ source: val })}
        />

        <div className="mt-4">
            <RadioCardGroup
            label="Would you be open to a 15-minute user interview?"
            name="interview"
            options={interviewOptions}
            value={data.interview || ""}
            onChange={(val) => updateData({ interview: val })}
            />
        </div>

        <div className="mt-4">
            <RadioCardGroup
            label="Would you pay for early access if it meant moving up the waitlist?"
            name="pay"
            options={payOptions}
            value={data.pay || ""}
            onChange={(val) => updateData({ pay: val })}
            />
        </div>

        <div className="mt-4">
            <TextInput
            label="Referral code (optional)"
            placeholder="Enter a code if you were referred"
            value={data.referralCode || ""}
            onChange={(e) => updateData({ referralCode: e.target.value })}
            />
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full font-FoundersGrotesk text-lg text-gray-500 hover:text-secondry uppercase tracking-wider transition-all duration-300 flex items-center disabled:opacity-50"
          disabled={isSubmitting}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isValid || isSubmitting}
          className={`px-8 py-3 rounded-full font-FoundersGrotesk text-lg uppercase tracking-wider transition-all duration-300 flex items-center ${
            isValid && !isSubmitting
              ? "bg-[#102c26] text-white hover:bg-opacity-90 shadow-lg shadow-[#102c26]/30"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          {!isSubmitting && (
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
