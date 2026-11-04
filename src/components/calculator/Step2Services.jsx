import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import HelpTooltip from "../../components/HelpTooltip";

const Step2Services = () => {
  const { formData, setFormData } = useFormData();
  const { options, loading } = useCalculatorOptions();

  // Get services from API or use defaults
  const servicesList = options?.services || [
    "Company Registration",
    "Logo & Branding",
    "Website",
    "Social Media Marketing",
    "Digital Ads",
    "SEO",
    "Content Writing",
    "Marketplace Management",
  ];

  // ✅ Toggle service selection
  const handleToggle = (serviceName) => {
    const services = formData.services || [];
    const isSelected = services.includes(serviceName);

    if (isSelected) {
      setFormData({
        ...formData,
        services: services.filter((s) => s !== serviceName),
      });
    } else {
      setFormData({
        ...formData,
        services: [...services, serviceName],
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center py-8">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="modern-form-title">
        <span>🎯</span>
        Select the Services You Need
        <HelpTooltip tooltipKey="services" title="Services Selection" />
      </h2>
      <p className="text-sm text-gray-600 mb-4">Select one or more services to continue</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {servicesList.map((serviceName) => {
          const services = formData.services || [];
          const checked = services.includes(serviceName);
          return (
            <label
              key={serviceName}
              className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center w-full">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleToggle(serviceName)}
                  className="w-5 h-5 sm:w-6 sm:h-6 accent-orange-600 mr-3 flex-shrink-0"
                />
                <span className="font-semibold text-gray-900 text-sm sm:text-base flex-1">{serviceName}</span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Step2Services;
