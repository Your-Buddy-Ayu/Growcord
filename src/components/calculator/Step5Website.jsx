import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import { useState, useEffect } from "react";
import { calculatorAPI } from "@/lib/api";
import HelpTooltip from "../../components/HelpTooltip";

const Step5Website = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();

  // Get options from API or use defaults
  const baseHostingOptions = options?.hostingOptions || [
    { name: "Hosting", price: 2000 },
    { name: "Domain", price: 1000 },
  ];

  const websiteTypes = options?.websiteTypes || [
    { name: "Static Website", price: 5000 },
    { name: "Ecommerce Website", price: 15000 },
    { name: "CMS Website", price: 10000 },
  ];

  const featureOptions = options?.websiteFeatures || [
    { name: "Contact Form", price: 500 },
    { name: "Photo Gallery", price: 800 },
    { name: "Blog / News Section", price: 1000 },
    { name: "Testimonials Section", price: 600 },
    { name: "Admin Panel (Basic CMS)", price: 1500 },
    { name: "Chat Integration", price: 1000 },
    { name: "Payment Gateway Integration", price: 1200 },
  ];

  const integrationOptions = options?.integrations || [
    { name: "Google Analytics", price: 500 },
    { name: "Google Search Console", price: 400 },
    { name: "Google Business Live Reviews", price: 700 },
    { name: "Meta Pixel", price: 600 },
    { name: "Live Chat", price: 800 },
    { name: "Clarity AI", price: 900 },
  ];

  // Get pricing from API for calculations
  const [pricing, setPricing] = useState({
    websitePagePrice: 500,
    mockupPrice: 700
  });

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const pricingData = await calculatorAPI.getPricing();
        if (pricingData) {
          setPricing({
            websitePagePrice: pricingData.websitePagePrice || 500,
            mockupPrice: pricingData.mockupPrice || 700
          });
        }
      } catch (error) {
        console.error('Error loading pricing:', error);
      }
    };
    loadPricing();
  }, []);

  // ✅ Initialize Hosting + Domain prechecked (but editable)
  useEffect(() => {
    if (!formData.host || formData.host.length === 0) {
      setFormData((prev) => ({
        ...prev,
        host: [...baseHostingOptions], // preselect both
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Auto-select pre-included features
  useEffect(() => {
    if (featureOptions && featureOptions.length > 0) {
      const preIncludedFeatures = featureOptions.filter(opt => opt.preIncluded === true);
      if (preIncludedFeatures.length > 0) {
        setFormData((prev) => {
          const existingFeatureNames = prev.features.map(f => f.name);
          const newFeatures = preIncludedFeatures.filter(opt => !existingFeatureNames.includes(opt.name));
          if (newFeatures.length > 0) {
            return {
              ...prev,
              features: [...prev.features, ...newFeatures]
            };
          }
          return prev;
        });
      }
    }
  }, [featureOptions, setFormData]);

  // ✅ Auto-select pre-included integrations
  useEffect(() => {
    if (integrationOptions && integrationOptions.length > 0) {
      const preIncludedIntegrations = integrationOptions.filter(opt => opt.preIncluded === true);
      if (preIncludedIntegrations.length > 0) {
        setFormData((prev) => {
          const existingIntegrationNames = prev.integrations.map(i => i.name);
          const newIntegrations = preIncludedIntegrations.filter(opt => !existingIntegrationNames.includes(opt.name));
          if (newIntegrations.length > 0) {
            return {
              ...prev,
              integrations: [...prev.integrations, ...newIntegrations]
            };
          }
          return prev;
        });
      }
    }
  }, [integrationOptions, setFormData]);

  // ✅ Handle host checkbox toggle
  const handleHostToggle = (option) => {
    const isSelected = formData.host.some((h) => h.name === option.name);
    setFormData({
      ...formData,
      host: isSelected
        ? formData.host.filter((h) => h.name !== option.name)
        : [...formData.host, option],
    });
  };

  // ✅ Handle website type radio selection
  const handleWebsiteType = (option) => {
    setFormData({
      ...formData,
      websiteType: option.name,
      websitePrice: option.price,
    });
  };

  // ✅ Handle feature toggle
  const handleFeatureToggle = (option) => {
    const isSelected = formData.features.some((f) => f.name === option.name);
    setFormData({
      ...formData,
      features: isSelected
        ? formData.features.filter((f) => f.name !== option.name)
        : [...formData.features, option],
    });
  };

  // ✅ Handle integration toggle
  const handleIntegrationToggle = (option) => {
    const isSelected = formData.integrations.some(
      (f) => f.name === option.name
    );
    setFormData({
      ...formData,
      integrations: isSelected
        ? formData.integrations.filter((f) => f.name !== option.name)
        : [...formData.integrations, option],
    });
  };

  // ✅ Handle website pages (seekbar) - use pricing from API
  const handlePagesChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricing = await calculatorAPI.getPricing();
      const pagePrice = pricing?.websitePagePrice || 500;
      setFormData({
        ...formData,
        websitePages: value,
        websitePagesPrice: value * pagePrice,
        websitePagePricingType: pricing?.websitePagePricingType || 'one-time',
      });
    } catch (error) {
      setFormData({
        ...formData,
        websitePages: value,
        websitePagesPrice: value * 500,
        websitePagePricingType: 'one-time',
      });
    }
  };

  // ✅ Handle mockups (seekbar) - use pricing from API
  const handleMockupsChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricing = await calculatorAPI.getPricing();
      const mockupPrice = pricing?.mockupPrice || 700;
      setFormData({
        ...formData,
        mockups: value,
        mockupsPrice: value * mockupPrice,
        mockupPricingType: pricing?.mockupPricingType || 'one-time',
      });
    } catch (error) {
      setFormData({
        ...formData,
        mockups: value,
        mockupsPrice: value * 700,
        mockupPricingType: 'one-time',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* ✅ Hosting & Domain */}
      <div>
        <h2 className="modern-form-title">
          <span>🌐</span>
          Hosting & Domain
          <HelpTooltip tooltipKey="hostingDomain" title="Hosting & Domain" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {baseHostingOptions.map((item) => {
            const checked = formData.host.some((h) => h.name === item.name);
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
                      onChange={() => handleHostToggle(item)}
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

      {/* ✅ Website Type */}
      <div>
        <h2 className="modern-form-title">
          <span>💻</span>
          Website Type
          <HelpTooltip tooltipKey="websiteType" title="Website Type" />
        </h2>
        <div className="space-y-3">
          {websiteTypes.map((option) => (
            <label
              key={option.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.websiteType === option.name ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="websiteType"
                    checked={formData.websiteType === option.name}
                    onChange={() => handleWebsiteType(option)}
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

      {/* ✅ Website Features */}
      <div>
        <h2 className="modern-form-title">
          <span>⚡</span>
          Website Features
          <HelpTooltip tooltipKey="websiteFeatures" title="Website Features" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {featureOptions.map((option) => {
            const checked = formData.features.some((f) => f.name === option.name);
            const isPreIncluded = option.preIncluded === true;
            return (
              <label
                key={option.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  } ${isPreIncluded ? "border-green-300 bg-green-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleFeatureToggle(option)}
                      className="w-5 h-5 accent-orange-600"
                      disabled={isPreIncluded}
                    />
                    <span className="font-semibold text-gray-900">{option.name}</span>
                    {isPreIncluded && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isPreIncluded && (
                      <span className="text-xs text-gray-500 line-through">₹{option.price.toLocaleString()}</span>
                    )}
                    <span className={`font-bold ${isPreIncluded ? 'text-green-600' : 'text-orange-600'}`}>
                      {isPreIncluded ? 'FREE' : `₹${option.price.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ✅ Website Pages (seekbar) */}
      <div>
        <h2 className="modern-form-title">
          <span>📄</span>
          Number of Website Pages
          <HelpTooltip tooltipKey="websitePages" title="Website Pages" />
        </h2>
        <div className="modern-form-group">
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={formData.websitePages || 1}
            onChange={handlePagesChange}
            className="w-full slider-orange"
            style={{
              background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((formData.websitePages || 1) / 50) * 100}%, #e5e7eb ${((formData.websitePages || 1) / 50) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">{formData.websitePages || 1}</span>
              <span className="text-gray-600 text-sm">Page{formData.websitePages !== 1 ? 's' : ''}</span>
              <span className="text-gray-400">×</span>
              <span className="text-orange-600 font-bold">₹{pricing.websitePagePrice.toLocaleString()}</span>
            </div>
            <div className="px-3 py-1.5 bg-orange-100 rounded-lg">
              <span className="font-bold text-orange-700 text-base sm:text-lg">
                ₹{(formData.websitePagesPrice || pricing.websitePagePrice).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mockups (seekbar) */}
      <div>
        <h2 className="modern-form-title">
          <span>🎨</span>
          Mockup Pages
          <HelpTooltip tooltipKey="mockups" title="Mockup Pages" />
        </h2>
        <p className="text-sm text-gray-600 mb-3">How many mockup designs do you need? (0-5)</p>
        <div className="modern-form-group">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={formData.mockups || 0}
              onChange={handleMockupsChange}
              className="w-full slider-orange"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((formData.mockups || 0) / 5) * 100}%, #e5e7eb ${((formData.mockups || 0) / 5) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">{formData.mockups || 0}</span>
              <span className="text-gray-600 text-sm">Mockup{formData.mockups !== 1 ? 's' : ''}</span>
              <span className="text-gray-400">×</span>
              <span className="text-orange-600 font-bold">₹{pricing.mockupPrice.toLocaleString()}</span>
            </div>
            <div className="px-3 py-1.5 bg-orange-100 rounded-lg">
              <span className="font-bold text-orange-700 text-base sm:text-lg">
                ₹{(formData.mockupsPrice || 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Integrations */}
      <div>
        <h2 className="modern-form-title">
          <span>🔗</span>
          Website Integrations
          <HelpTooltip tooltipKey="integrations" title="Website Integrations" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {integrationOptions.map((option) => {
            const checked = formData.integrations.some((f) => f.name === option.name);
            const isPreIncluded = option.preIncluded === true;
            return (
              <label
                key={option.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  } ${isPreIncluded ? "border-green-300 bg-green-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleIntegrationToggle(option)}
                      className="w-5 h-5 accent-orange-600"
                      disabled={isPreIncluded}
                    />
                    <span className="font-semibold text-gray-900">{option.name}</span>
                    {isPreIncluded && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isPreIncluded && (
                      <span className="text-xs text-gray-500 line-through">₹{option.price.toLocaleString()}</span>
                    )}
                    <span className={`font-bold ${isPreIncluded ? 'text-green-600' : 'text-orange-600'}`}>
                      {isPreIncluded ? 'FREE' : `₹${option.price.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step5Website;
