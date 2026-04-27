import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Curve } from "@/components";
import SEOHead from "@/components/SEOHead";
import { 
  OnboardingLayout, 
  Step1, 
  Step2, 
  Step3, 
  Step4, 
  Step5 
} from "@/components/onboarding";
import { useRouter } from "next/router";
import { generateBreadcrumbSchema, SITE_CONFIG } from "@/utils/seo";

export default function Waitlist() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stepsList = ['basic', 'background', 'goals', 'work', 'final'];
  
  // Compute current step based on the dynamic route parameter
  const stepParam = router.query.step as string;
  const currentStepIndex = stepsList.indexOf(stepParam);
  const currentStep = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;
  const totalSteps = 5;

  // Protect routes from direct access if previous steps aren't valid
  useEffect(() => {
    if (!router.isReady) return;

    const isStep1Valid = formData.fullName && formData.email && formData.country && formData.role && formData.isEmailVerified;
    const isStep2Valid = formData.jobTitle && formData.experience;
    const isStep3Valid = formData.problem && formData.timing;
    const isStep4Valid = formData.workType;

    if (currentStep > 1 && !isStep1Valid) {
      router.replace('/waitlist/basic', undefined, { shallow: true });
    } else if (currentStep > 2 && !isStep2Valid) {
      router.replace('/waitlist/background', undefined, { shallow: true });
    } else if (currentStep > 3 && !isStep3Valid) {
      router.replace('/waitlist/goals', undefined, { shallow: true });
    } else if (currentStep > 4 && !isStep4Valid) {
      router.replace('/waitlist/work', undefined, { shallow: true });
    }
  }, [currentStep, formData, router]);

  const updateData = (fields: Partial<any>) => {
    setFormData((prev: any) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      router.push(`/waitlist/${stepsList[currentStep]}`, undefined, { shallow: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      router.push(`/waitlist/${stepsList[currentStep - 2]}`, undefined, { shallow: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push("/");
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/waitlist/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        router.push("/waitlist/final", undefined, { shallow: true });
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  };

  // Render the current step
  const renderStep = () => {
    if (isSubmitted) {
      return (
        <div className="flex flex-col items-center justify-center text-center animate-fade-in h-[60vh]">
          <div className="w-20 h-20 bg-[#102c26] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-[#102c26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-NeueMontreal font-medium text-secondry mb-4">
            You&apos;re on the list.
          </h2>
          <p className="text-gray-500 font-NeueMontreal text-lg max-w-md mx-auto mb-10">
            Thank you for sharing. We use this to understand the people joining early and prioritize access accordingly. We&apos;ll be in touch soon.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 rounded-full bg-[#102c26] text-white font-FoundersGrotesk text-lg uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return <Step1 data={formData} updateData={updateData} onNext={handleNext} />;
      case 2:
        return <Step2 data={formData} updateData={updateData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step3 data={formData} updateData={updateData} onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Step4 data={formData} updateData={updateData} onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Step5 data={formData} updateData={updateData} onSubmit={handleSubmit} onBack={handleBack} />;
      default:
        return <Step1 data={formData} updateData={updateData} onNext={handleNext} />;
    }
  };

  const metadata = {
    title: "Join the Waitlist | Crossgaze",
    description: "Join the Crossgaze waitlist. Built for founders, contributors, and investors who believe execution matters more than pitch decks.",
    canonical: `${SITE_CONFIG.url}/waitlist`,
    keywords: [
      "Crossgaze waitlist",
      "join startup waitlist",
      "early access startup platform",
      "founder team building",
      "startup contributor platform"
    ]
  };

  const schemas = [
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Waitlist", url: `${SITE_CONFIG.url}/waitlist` }
    ])
  ];

  return (
    <>
      {isSubmitted ? (
        <Head>
          <title>Thank You | Crossgaze Waitlist</title>
          <meta name="description" content="You are on the Crossgaze waitlist. We will be in touch soon." />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" href={`${SITE_CONFIG.url}/waitlist`} />
        </Head>
      ) : (
        <SEOHead metadata={metadata} schema={schemas} />
      )}

      <Curve backgroundColor="#f1f1f1">
        {isSubmitted ? (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
                {renderStep()}
            </div>
        ) : (
            <OnboardingLayout currentStep={currentStep} totalSteps={totalSteps}>
                {renderStep()}
            </OnboardingLayout>
        )}
      </Curve>
    </>
  );
}
