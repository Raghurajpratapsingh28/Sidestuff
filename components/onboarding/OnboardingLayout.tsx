import React from "react";
import { Stepper } from "./Stepper";
import { useRouter } from "next/router";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps,
}) => {
    const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row bg-background lg:h-screen xl:h-screen lg:overflow-hidden xl:overflow-hidden">
      {/* Left Sidebar - Brand Color */}
      <div
        className="w-full lg:w-[40%] xl:w-[35%] bg-[#102c26] text-white p-6 lg:p-10 xl:p-12 flex flex-col justify-between z-10 lg:shadow-none xl:shadow-none lg:h-full xl:h-full lg:overflow-y-auto xl:overflow-y-auto"
        style={{ flexShrink: 0 }}
      >
        <div>
          <div className="mb-6 lg:mb-8">
            <h1 onClick={() => router.push("/")} className="text-3xl cursor-pointer lg:text-4xl font-FoundersGrotesk tracking-wide text-white font-bold">Katagoge.</h1>
          </div>
          
          <div className="hidden lg:block xl:block mt-6 xl:mt-8">
            <h2 className="text-3xl xl:text-5xl font-NeueMontreal font-medium leading-tight mb-3 xl:mb-4">
              Building the <br /> ecosystem.
            </h2>
            <p className="text-white text-opacity-80 font-NeueMontreal max-w-sm text-base">
              Your answers shape how we prioritize access and build features. Takes ~3 minutes.
            </p>
          </div>
        </div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block xl:block relative z-10 w-full mt-6 xl:mt-8 mb-2">
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Mobile Stepper Header */}
        <div className="lg:hidden xl:hidden flex items-center justify-between w-full mt-4">
            <h2 className="text-lg font-NeueMontreal font-medium">Step {currentStep} of {totalSteps}</h2>
            <div className="flex space-x-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1.5 w-6 rounded-full ${i < currentStep ? "bg-about" : "bg-white bg-opacity-20"}`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col bg-background relative lg:h-full xl:h-full lg:overflow-y-auto xl:overflow-y-auto lg:flex-1 xl:flex-1">
        <div className="flex-grow flex flex-col px-6 py-8 sm:px-12 lg:px-14 xl:px-20 max-w-3xl lg:max-w-4xl mx-auto w-full">
          <div className="w-full py-8 xl:py-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
