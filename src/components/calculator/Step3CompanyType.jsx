import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import HelpTooltip from "../../components/HelpTooltip";

const Step3CompanyType = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();

  // Get options from API or use defaults
  const companyTypes = options?.companyTypes || [
    { name: "Private Limited", price: 2500 },
    { name: "Limited Liability Partnership (LLP)", price: 2000 },
    { name: "Sole Proprietorship", price: 1500 },
    { name: "One Person Company (OPC)", price: 1800 },
  ];

  const complianceOptions = options?.compliances || [
    { name: "GST Registration", price: 500 },
    { name: "Trademark", price: 800 },
    { name: "MSME Registration", price: 400 },
    { name: "Startup India Registration", price: 600 },
    { name: "Trade License", price: 300 },
  ];

  const handleCompanyType = (type) => {
    setFormData({
      ...formData,
      companyType: type.name,
      companyTypePrice: type.price, // ✅ store price for total calculation
    });
  };

  const toggleCompliance = (item) => {
    const isSelected = formData.compliances.some((c) => c.name === item.name);
    const updatedCompliances = isSelected
      ? formData.compliances.filter((c) => c.name !== item.name)
      : [...formData.compliances, item];

    setFormData({ ...formData, compliances: updatedCompliances });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Company Type */}
      <div>
        <h2 className="modern-form-title">
          <span>🏢</span>
          Company Type
          <HelpTooltip tooltipKey="companyType" title="Company Type" />
        </h2>
        <div className="space-y-3">
          {companyTypes.map((type) => (
            <label
              key={type.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.companyType === type.name ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="companyType"
                    checked={formData.companyType === type.name}
                    onChange={() => handleCompanyType(type)}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-semibold text-gray-900">{type.name}</span>
                </div>
                <span className="text-orange-600 font-bold">₹{type.price.toLocaleString()}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Registration & Compliances */}
      <div>
        <h2 className="modern-form-title">
          <span>📋</span>
          Registration & Compliances
          <HelpTooltip tooltipKey="compliances" title="Compliances" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complianceOptions.map((item) => (
            <label
              key={item.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.compliances.some((c) => c.name === item.name)
                ? "modern-card-selected bg-orange-50"
                : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.compliances.some((c) => c.name === item.name)}
                    onChange={() => toggleCompliance(item)}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
                <span className="text-orange-600 font-bold">₹{item.price.toLocaleString()}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3CompanyType;
