import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import HelpTooltip from "../../components/HelpTooltip";

const Step4Branding = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();

  // Get options from API or use defaults
  const brandingOptions = options?.branding || [
    { name: "LetterHead", price: 500 },
    { name: "Visiting Card", price: 300 },
    { name: "Letter Envelope", price: 400 },
    { name: "Company Presentation", price: 1500 },
    { name: "Stamp", price: 250 },
    { name: "Catalog", price: 1000 },
    { name: "Invoice", price: 600 },
  ];

  const logoOptions = options?.logoOptions || [
    { name: "Logo only", price: 2000 },
    { name: "Logo & Raw Files", price: 3000 },
    { name: "Premium Logo with Raw Files", price: 5000 },
  ];

  // Toggle branding items
  const handleToggleBranding = (item) => {
    const isSelected = formData.branding.some((b) => b.name === item.name);
    if (isSelected) {
      setFormData({
        ...formData,
        branding: formData.branding.filter((b) => b.name !== item.name),
      });
    } else {
      setFormData({
        ...formData,
        branding: [...formData.branding, item],
      });
    }
  };

  // Handle logo selection
  const handleLogoSelect = (option) => {
    setFormData({
      ...formData,
      logoType: option.name,
      logoPrice: option.price,
    });
  };

  // Handle product packaging count
  const handlePackagingChange = async (e) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 100); // clamp between 0–100
    try {
      const { calculatorAPI } = await import("@/lib/api");
      const pricing = await calculatorAPI.getPricing();
      const packagingPrice = pricing?.packagingPrice || 1200;
      setFormData({
        ...formData,
        packagingCount: value,
        packagingPrice: value * packagingPrice,
        packagingPricingType: pricing?.packagingPricingType || 'one-time',
      });
    } catch (error) {
      setFormData({
        ...formData,
        packagingCount: value,
        packagingPrice: value * 1200,
        packagingPricingType: 'one-time',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* ✅ Branding Items */}
      <div>
        <h2 className="modern-form-title">
          <span>🎨</span>
          Select Your Branding Items
          <HelpTooltip tooltipKey="branding" title="Branding Items" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {brandingOptions.map((item) => {
            const checked = formData.branding.some((b) => b.name === item.name);
            return (
              <label
                key={item.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleToggleBranding(item)}
                      className="w-5 h-5 accent-orange-600"
                    />
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">₹{item.price.toLocaleString()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ✅ Logo Selection */}
      <div>
        <h2 className="modern-form-title">
          <span>🖼️</span>
          Choose Your Logo Package
          <HelpTooltip tooltipKey="logoPackage" title="Logo Package" />
        </h2>

        <div className="space-y-3">
          {logoOptions.map((option) => (
            <label
              key={option.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.logoType === option.name ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="logo"
                    value={option.name}
                    checked={formData.logoType === option.name}
                    onChange={() => handleLogoSelect(option)}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-semibold text-gray-900">{option.name}</span>
                </div>
                <span className="text-orange-600 font-bold">₹{option.price.toLocaleString()}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Product Packaging */}
      <div>
        <h2 className="modern-form-title">
          <span>📦</span>
          Product Packaging
          <HelpTooltip tooltipKey="productPackaging" title="Product Packaging" />
        </h2>

        <div className="modern-form-group">
          <label className="modern-form-label">
            Number of Packagings (₹1,200 each)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.packagingCount || 0}
            onChange={handlePackagingChange}
            className="modern-form-input w-full sm:w-32"
          />
          {formData.packagingCount > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              Total: ₹{(formData.packagingCount * 1200).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step4Branding;
