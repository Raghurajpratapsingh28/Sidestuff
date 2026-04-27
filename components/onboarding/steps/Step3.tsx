import React from "react";
import { TextArea, RadioCardGroup, CheckboxGroup, TextInput } from "../ui/FormElements";

interface Step3Props {
  data: any;
  updateData: (fields: Partial<any>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step3: React.FC<Step3Props> = ({ data, updateData, onNext, onBack }) => {
  const toolOptions = [
    { value: "linkedin", label: "LinkedIn" },
    { value: "wellfound", label: "Wellfound" },
    { value: "github", label: "GitHub" },
    { value: "upwork", label: "Upwork" },
    { value: "twitter", label: "Twitter / X" },
    { value: "nothing", label: "Nothing yet" },
    { value: "other", label: "Other" },
  ];

  const timingOptions = [
    { value: "immediately", label: "Immediately" },
    { value: "1month", label: "Within a month" },
    { value: "3months", label: "Within 3 months" },
    { value: "exploring", label: "Just exploring" },
  ];

  const isValid = data.problem && data.timing; // Require at least problem and timing to be filled

  const handleToolToggle = (val: string[]) => {
    updateData({ tools: val });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-NeueMontreal font-medium text-secondry mb-3">
        What do you actually want from this?
      </h2>
      <p className="text-gray-500 font-NeueMontreal text-lg mb-8">
        Be honest. These answers directly influence what we build first.
      </p>

      <div className="space-y-4">
        <TextArea
          label="What's the one problem you're hoping Snypyr solves for you?"
          placeholder="Describe the gap you're facing right now..."
          value={data.problem || ""}
          onChange={(e) => updateData({ problem: e.target.value })}
        />

        <TextArea
          label="What would make you recommend Snypyr to someone else?"
          placeholder="What outcome would make it worth recommending..."
          value={data.recommendReason || ""}
          onChange={(e) => updateData({ recommendReason: e.target.value })}
        />

        <TextArea
          label="What's the one thing you're afraid this platform won't deliver?"
          placeholder="Your biggest concern or doubt..."
          value={data.fear || ""}
          onChange={(e) => updateData({ fear: e.target.value })}
        />

        <div className="mt-6">
            <CheckboxGroup
            label="What tools or platforms do you currently use instead?"
            options={toolOptions}
            values={data.tools || []}
            onChange={handleToolToggle}
            />
        </div>

        {data.tools?.includes("other") && (
          <TextInput
            label="Please specify 'Other' tool"
            placeholder="Name of tool"
            value={data.otherTool || ""}
            onChange={(e) => updateData({ otherTool: e.target.value })}
          />
        )}

        <RadioCardGroup
          label="How soon are you looking to use Snypyr?"
          name="timing"
          options={timingOptions}
          value={data.timing || ""}
          onChange={(val) => updateData({ timing: val })}
          className="mt-2"
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
