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
    <div className="flex flex-col lg:flex-row h-screen bg-background lg:overflow-hidden">
      {/* Left Sidebar - Brand Color */}
      <div className="w-full lg:w-[40%] xl:w-[35%] bg-[#102c26] text-white p-6 lg:p-12 flex flex-col justify-between sticky top-0 lg:h-screen z-10 shadow-lg lg:shadow-none">
        
        <div>
          <div className="mb-8">
            {/* Logo placeholder - replace with actual Sidestuff logo if needed */}
            <h1 onClick={() => router.push("/")} className="text-3xl cursor-pointer lg:text-4xl font-FoundersGrotesk tracking-wide text-white font-bold">Sidestuff.</h1>
          </div>
          
          <div className="hidden lg:block mt-8">
            <h2 className="text-4xl lg:text-5xl font-NeueMontreal font-medium leading-tight mb-4">
              Building the <br /> ecosystem.
            </h2>
            <p className="text-white text-opacity-80 font-NeueMontreal max-w-sm text-base lg:text-lg">
              Your answers shape how we prioritize access and build features. Takes ~3 minutes.
            </p>
          </div>
        </div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block relative z-10 w-full mb-4">
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Mobile Stepper Header */}
        <div className="lg:hidden flex items-center justify-between w-full">
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
      <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col bg-background relative lg:h-screen overflow-y-auto">
        <div className="flex-grow flex flex-col px-6 py-10 sm:px-12 lg:px-16 xl:px-24 max-w-3xl lg:max-w-4xl mx-auto w-full min-h-full">
          <div className="my-auto w-full py-8 lg:py-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
