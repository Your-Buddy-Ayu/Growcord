"use client";

import { FormProvider } from "@/context/FormContext";
import { CalculatorOptionsProvider } from "@/context/CalculatorOptionsContext";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function CalculatorLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <CalculatorOptionsProvider>
                    <FormProvider>
                        {children}
                    </FormProvider>
                </CalculatorOptionsProvider>
            </div>
            <Footer />
        </div>
    );
}
