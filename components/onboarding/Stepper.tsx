import React from "react";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, label: "BASICS" },
  { id: 2, label: "BACKGROUND" },
  { id: 3, label: "GOALS" },
  { id: 4, label: "WORK" },
  { id: 5, label: "FINAL" },
];

export const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-6 pl-4 lg:pl-0 mt-4 lg:mt-8">
      {steps.map((step) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;
        const isUpcoming = step.id > currentStep;

        return (
          <div key={step.id} className="flex items-center group">
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-FoundersGrotesk text-base transition-colors duration-300 ${
                isCompleted
                  ? "bg-about text-[#102c26]"
                  : isActive
                  ? "bg-white text-[#102c26]"
                  : "border border-white border-opacity-30 text-white text-opacity-50"
              }`}
            >
              {isCompleted ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              ) : (
                step.id
              )}
            </div>
            
            <span
              className={`ml-5 font-FoundersGrotesk tracking-widest text-base transition-colors duration-300 uppercase ${
                isActive
                  ? "text-white font-medium"
                  : isCompleted
                  ? "text-white text-opacity-70"
                  : "text-white text-opacity-30"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
