import React from "react";
import { TextArea, RadioCardGroup, CheckboxGroup } from "../ui/FormElements";

interface Step4Props {
  data: any;
  updateData: (fields: Partial<any>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step4: React.FC<Step4Props> = ({ data, updateData, onNext, onBack }) => {
  const workTypeOptions = [
    { value: "part-time", label: "Part-time contributor" },
    { value: "full", label: "Full commitment" },
    { value: "project", label: "Project-based" },
    { value: "anything", label: "Open to anything" },
  ];

  const startupInterestOptions = [
    { value: "saas", label: "SaaS" },
    { value: "fintech", label: "Fintech" },
    { value: "consumer", label: "Consumer apps" },
    { value: "aiml", label: "AI / ML" },
    { value: "social", label: "Social impact" },
    { value: "all", label: "Open to all" },
  ];

  const goalsOptions = [
    { value: "experience", label: "Real experience" },
    { value: "portfolio", label: "Portfolio / proof of work" },
    { value: "equity", label: "Equity or compensation" },
    { value: "network", label: "Network" },
    { value: "cofounder", label: "Find a co-founder" },
    { value: "transition", label: "Career transition" },
  ];

  const isValid = data.workType; // Minimum requirement

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-NeueMontreal font-medium text-secondry mb-3">
        Tell us about your work.
      </h2>
      <p className="text-gray-500 font-NeueMontreal text-lg mb-8">
        This helps us match you with the right startups and projects.
      </p>

      <div className="space-y-4">
        <RadioCardGroup
          label="What type of work are you looking to do on Sidestuff?"
          name="workType"
          options={workTypeOptions}
          value={data.workType || ""}
          onChange={(val) => updateData({ workType: val })}
        />

        <div className="mt-4">
            <CheckboxGroup
            label="What kind of startups interest you? (pick all that apply)"
            options={startupInterestOptions}
            values={data.startupInterests || []}
            onChange={(val) => updateData({ startupInterests: val })}
            />
        </div>

        <div className="mt-4">
            <CheckboxGroup
            label="What are you hoping to get out of contributing? (pick all that apply)"
            options={goalsOptions}
            values={data.contributionGoals || []}
            onChange={(val) => updateData({ contributionGoals: val })}
            />
        </div>

        <TextArea
          label="Anything else you want us to know?"
          placeholder="Anything else?"
          value={data.anythingElse || ""}
          onChange={(e) => updateData({ anythingElse: e.target.value })}
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
