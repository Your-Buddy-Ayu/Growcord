"use client";

import { FormProvider } from "@/context/FormContext";
import { CalculatorOptionsProvider } from "@/context/CalculatorOptionsContext";

export default function CalculatorProviders({ children }) {
  return (
    <CalculatorOptionsProvider>
      <FormProvider>{children}</FormProvider>
    </CalculatorOptionsProvider>
  );
}
