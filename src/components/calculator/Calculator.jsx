"use client";

import { useRouter, usePathname } from "next/navigation";
import { useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stepper from "./Stepper";
import Step1Phone from "./Step1Phone";
import Step2Services from "./Step2Services";
import Step3CompanyType from "./Step3CompanyType";
import Step4Branding from "./Step4Branding";
import Step5Website from "./Step5Website";
import Step6Ecom from "./Step6Ecom";
import Step7SocialMedia from "./Step7SocialMedia";
import Step8Ads from "./Step8Ads";
import Step9Seo from "./Step9Seo";
import SummaryCard from "./SummaryCard";
import FormSubmitButton from "./FormSubmitButton";
import { useFormData } from "@/context/FormContext";

const allSteps = [
  { path: "/calculator/step1", label: "Phone", key: "phone" },
  { path: "/calculator/step2", label: "Services", key: "services" },
  { path: "/calculator/step3", label: "Company Type", key: "company", requiredService: "Company Registration" },
  { path: "/calculator/step4", label: "Branding", key: "branding", requiredService: "Logo & Branding" },
  { path: "/calculator/step5", label: "Website", key: "website", requiredService: "Website" },
  { path: "/calculator/step6", label: "E-commerce", key: "ecommerce", conditional: true },
  { path: "/calculator/step7", label: "Social Media", key: "social", requiredService: "Social Media Marketing" },
  { path: "/calculator/step8", label: "Ads", key: "ads", requiredService: "Digital Ads" },
  { path: "/calculator/step9", label: "SEO", key: "seo", requiredService: "SEO" },
  { path: "/calculator/summary", label: "Summary", key: "summary" },
];

const Calculator = () => {
  const { formData } = useFormData();
  const router = useRouter();
  const pathname = usePathname();

  // Filter steps based on selected services
  const visibleSteps = useMemo(() => {
    const services = formData.services || [];

    return allSteps.filter(step => {
      // Always show step1, step2, and summary
      if (step.key === "phone" || step.key === "services" || step.key === "summary") {
        return true;
      }

      // Step6 (E-commerce) is conditional - only show if Ecommerce Website is selected
      if (step.key === "ecommerce" && step.conditional) {
        return formData.websiteType === "Ecommerce Website";
      }

      // For other steps, check if required service is selected
      if (step.requiredService) {
        return services.includes(step.requiredService);
      }

      return true;
    });
  }, [formData.services, formData.websiteType]);

  // Handle default logic (if path is just /calculator)
  useEffect(() => {
    if (pathname === "/calculator" || pathname === "/calculator/") {
      router.replace("/calculator/step1");
    }
  }, [pathname, router]);

  // Determine current path to use in logic
  const currentPath = pathname;
  console.log('Calculator Render - Path:', currentPath);

  // Find current step in visible steps
  let currentIndex = visibleSteps.findIndex((s) => s.path === currentPath);
  console.log('Calculated Index:', currentIndex);

  // If path not found and not root calculator, might need redirect
  if (currentIndex === -1 && currentPath !== "/calculator" && currentPath !== "/calculator/") {
    // If not on a valid step, just default to 0 for rendering safety, useEffect handles redirect
    // console.log("Invalid path for current state:", currentPath);
  }

  // If current step is not visible, redirect to appropriate step
  useEffect(() => {
    const isRoot = currentPath === "/calculator" || currentPath === "/calculator/";
    if (!isRoot && currentIndex === -1) {
      // Find the first visible step after step2
      const step2Index = visibleSteps.findIndex(s => s.key === "services");
      // Safety fallback
      router.push("/calculator/step1");
    }
  }, [visibleSteps, currentPath, currentIndex, router]);

  const handleNext = () => {
    console.log('handleNext called');
    console.log('Current Index:', currentIndex);
    console.log('Visible Steps:', visibleSteps);
    if (currentIndex < visibleSteps.length - 1) {
      const nextPath = visibleSteps[currentIndex + 1].path;
      console.log('Navigating to:', nextPath);
      router.push(nextPath);
    } else {
      console.log('Cannot navigate: End of steps or invalid index');
    }
  };

  // ✅ BACK button logic
  const handleBack = () => {
    if (currentIndex > 0) {
      const prevPath = visibleSteps[currentIndex - 1].path;
      router.push(prevPath);
    } else {
      // If at step1, go back to home
      router.push("/");
    }
  };

  return (
    <div className="calculator-container min-h-screen py-4 sm:py-8 bg-gray-50" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ width: '100%', maxWidth: '100%' }}>
          {/* Left side: stepper + forms */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
            <div className="w-full overflow-hidden" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
              <div className="overflow-x-auto overflow-y-visible" style={{ width: '100%', maxWidth: '100%', WebkitOverflowScrolling: 'touch', boxSizing: 'border-box' }}>
                <Stepper steps={visibleSteps} currentStep={currentIndex + 1} />
              </div>
            </div>

            <div className="modern-form-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPath}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {currentPath.includes("/step1") && <Step1Phone next={handleNext} />}
                  {currentPath.includes("/step2") && <Step2Services />}
                  {currentPath.includes("/step3") && (formData.services?.includes("Company Registration") ? <Step3CompanyType /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Company Registration&quot; service first</p></div>)}
                  {currentPath.includes("/step4") && (formData.services?.includes("Logo & Branding") ? <Step4Branding /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Logo & Branding&quot; service first</p></div>)}
                  {currentPath.includes("/step5") && (formData.services?.includes("Website") ? <Step5Website /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Website&quot; service first</p></div>)}
                  {currentPath.includes("/step6") && (formData.websiteType === "Ecommerce Website" ? <Step6Ecom /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Ecommerce Website&quot; type first</p></div>)}
                  {currentPath.includes("/step7") && (formData.services?.includes("Social Media Marketing") ? <Step7SocialMedia /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Social Media Marketing&quot; service first</p></div>)}
                  {currentPath.includes("/step8") && (formData.services?.includes("Digital Ads") ? <Step8Ads /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;Digital Ads&quot; service first</p></div>)}
                  {currentPath.includes("/step9") && (formData.services?.includes("SEO") ? <Step9Seo /> : <div className="text-center py-8"><p className="text-gray-500">Please select &quot;SEO&quot; service first</p></div>)}
                  {currentPath.includes("/summary") && (
                    <>
                      <SummaryCard />
                      <FormSubmitButton />
                    </>
                  )}
                  {/* Fallback or loading if path matches nothing known */}
                  {!currentPath.includes("/step") && !currentPath.includes("/summary") && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Loading calculator...</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            {!currentPath.includes("/step1") && !currentPath.includes("/summary") && (
              <div className="modern-nav-buttons">
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= visibleSteps.length - 1}
                  className="modern-button modern-button-primary"
                >
                  Next →
                </button>
                <button
                  onClick={handleBack}
                  disabled={currentIndex <= 0}
                  className="modern-button modern-button-secondary"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>

          {/* Right side: Summary (always visible on desktop) */}
          {currentIndex !== visibleSteps.length - 1 && (
            <div className="hidden lg:block">
              <SummaryCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
