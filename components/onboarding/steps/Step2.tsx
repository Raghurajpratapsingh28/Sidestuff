import React from "react";
import { TextInput, RadioCardGroup } from "../ui/FormElements";

interface Step2Props {
  data: any;
  updateData: (fields: Partial<any>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2: React.FC<Step2Props> = ({ data, updateData, onNext, onBack }) => {
  const experienceOptions = [
    { value: "student", label: "Student" },
    { value: "0-2", label: "0–2 years" },
    { value: "3-5", label: "3–5 years" },
    { value: "6-10", label: "6–10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const isValid = data.jobTitle && data.experience;

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-NeueMontreal font-medium text-secondry mb-3">
        Tell us where you're coming from.
      </h2>
      <p className="text-gray-500 font-NeueMontreal text-lg mb-8">
        We use this to understand the people joining early and prioritise access accordingly.
      </p>

      <div className="space-y-4">
        <TextInput
          label="Current job title"
          placeholder="e.g. Product Manager, Full-stack Dev, VC Analyst"
          value={data.jobTitle || ""}
          onChange={(e) => updateData({ jobTitle: e.target.value })}
        />

        <TextInput
          label="Company or organisation (optional)"
          placeholder="Where you currently work or study"
          value={data.company || ""}
          onChange={(e) => updateData({ company: e.target.value })}
        />

        <TextInput
          label="LinkedIn or portfolio URL (optional)"
          type="url"
          placeholder="https://"
          value={data.portfolioUrl || ""}
          onChange={(e) => updateData({ portfolioUrl: e.target.value })}
        />

        <RadioCardGroup
          label="Experience level"
          name="experience"
          options={experienceOptions}
          value={data.experience || ""}
          onChange={(val) => updateData({ experience: val })}
          className="mt-4"
        />
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full font-FoundersGrotesk text-lg text-gray-500 hover:text-secondry uppercase tracking-wider transition-all duration-300 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
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
