import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import HelpTooltip from "../../components/HelpTooltip";

const Step8Ads = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();

  // Get options from API or use defaults
  const platFormsOptions = options?.adsPlatforms || [
    { name: "Facebook", price: 5000 },
    { name: "Instagram", price: 2500 },
    { name: "Google Search", price: 2000 },
    { name: "Google Display Ads", price: 1000 },
    { name: "Youtube Ads", price: 1200 },
    { name: "Google My Business Ads", price: 1400 },
    { name: "Pinterest Ads", price: 1800 },
    { name: "Linkedin Ads", price: 1900 },
    { name: "Google Shopping Ads", price: 2200 },
  ];

  const handlePlatForm = (platForms) => {
    const exists = formData.ads.find((f) => f.name === platForms.name);
    let updated;
    if (exists) {
      updated = formData.ads.filter((f) => f.name !== platForms.name);
    } else {
      updated = [...formData.ads, platForms];
    }
    setFormData({ ...formData, ads: updated });
  };

  const handleOnChange = (e) =>
    setFormData({ ...formData, monthlyBudget: Number(e.target.value) });

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="modern-form-title">
          <span>📢</span>
          Ads Platforms
          <HelpTooltip tooltipKey="adsPlatforms" title="Ads Platforms" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {platFormsOptions.map((platForms) => {
            const checked = formData.ads.some((f) => f.name === platForms.name);
            return (
              <label
                key={platForms.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handlePlatForm(platForms)}
                      className="w-5 h-5 accent-orange-600"
                    />
                    <span className="font-semibold text-gray-900">{platForms.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">₹{platForms.price.toLocaleString()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>💰</span>
          Monthly Budget
          <HelpTooltip tooltipKey="monthlyBudget" title="Monthly Budget" />
        </h2>
        <div className="modern-form-group">
          <label className="modern-form-label">Monthly Ad Budget (₹)</label>
          <input
            type="number"
            min="0"
            value={formData.monthlyBudget || 0}
            onChange={handleOnChange}
            className="modern-form-input w-full sm:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Step8Ads;
