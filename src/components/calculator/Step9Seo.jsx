import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import { calculatorAPI } from "@/lib/api";
import HelpTooltip from "../../components/HelpTooltip";
import { useState, useEffect } from "react";

const Step9SEO = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();
  const [pricing, setPricing] = useState({
    seoPagePrice: 250,
    seoKeywordPrice: 300
  });

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const pricingData = await calculatorAPI.getPricing();
        if (pricingData) {
          setPricing({
            seoPagePrice: pricingData.seoPagePrice || 250,
            seoKeywordPrice: pricingData.seoKeywordPrice || 300
          });
        }
      } catch (error) {
        console.error('Error loading pricing:', error);
      }
    };
    loadPricing();
  }, []);

  // Get options from API or use defaults
  const seoOptions = options?.seoPlans || [
    { name: "Basic SEO", price: 2000 },
    { name: "Advanced SEO", price: 4000 },
    { name: "Premium SEO", price: 7000 },
  ];

  const onPageOptions = options?.onPageSEO || [
    { name: "Image Optimization", price: 400 },
    { name: "PageSpeed Optimization", price: 600 },
    { name: "Content Optimization", price: 800 },
    { name: "URL Schema Optimization", price: 500 },
    { name: "Meta Tags", price: 300 },
    { name: "Video Optimization", price: 700 },
  ];

  const offPageOptions = options?.offPageSEO || [
    { name: "Guest Post", price: 800 },
    { name: "Forums", price: 400 },
    { name: "Directories", price: 300 },
    { name: "Social Listing", price: 600 },
    { name: "Backlinks", price: 900 },
    { name: "Outreach & Collaboration", price: 1000 },
  ];

  // ✅ Handle SEO plan radio
  const handleSEOSelect = (option) => {
    setFormData({
      ...formData,
      seo: option.name,
      seoPrice: option.price,
    });
  };

  // ✅ Handle input change for number of optimized pages - use API pricing
  const handlePagesChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricing = await calculatorAPI.getPricing();
      const pagePrice = pricing?.seoPagePrice || 250;
      setFormData({
        ...formData,
        seoPages: value,
        seoPagesPrice: value * pagePrice,
        seoPagePricingType: pricing?.seoPagePricingType || 'one-time',
      });
    } catch (error) {
      setFormData({
        ...formData,
        seoPages: value,
        seoPagesPrice: value * 250,
        seoPagePricingType: 'one-time',
      });
    }
  };

  // ✅ Handle input change for number of keywords - use API pricing
  const handleKeywordsChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricing = await calculatorAPI.getPricing();
      const keywordPrice = pricing?.seoKeywordPrice || 300;
      setFormData({
        ...formData,
        seoKeywords: value,
        seoKeywordsPrice: value * keywordPrice,
        seoKeywordPricingType: pricing?.seoKeywordPricingType || 'one-time',
      });
    } catch (error) {
      setFormData({
        ...formData,
        seoKeywords: value,
        seoKeywordsPrice: value * 300,
        seoKeywordPricingType: 'one-time',
      });
    }
  };

  // ✅ Handle On-Page SEO checkboxes
  const handleOnPageToggle = (option) => {
    const selected = formData.onPageSEO || [];
    const isSelected = selected.some((f) => f.name === option.name);
    setFormData({
      ...formData,
      onPageSEO: isSelected
        ? selected.filter((f) => f.name !== option.name)
        : [...selected, option],
    });
  };

  // ✅ Handle Off-Page SEO checkboxes
  const handleOffPageToggle = (option) => {
    const selected = formData.offPageSEO || [];
    const isSelected = selected.some((f) => f.name === option.name);
    setFormData({
      ...formData,
      offPageSEO: isSelected
        ? selected.filter((f) => f.name !== option.name)
        : [...selected, option],
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* ✅ SEO Type */}
      <div>
        <h2 className="modern-form-title">
          <span>🔍</span>
          SEO Plan
          <HelpTooltip tooltipKey="seoPlan" title="SEO Plan" />
        </h2>
        <div className="space-y-3">
          {seoOptions.map((option) => (
            <label
              key={option.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.seo === option.name ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="seoType"
                    checked={formData.seo === option.name}
                    onChange={() => handleSEOSelect(option)}
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

      {/* ✅ Number of Pages */}
      <div>
        <h2 className="modern-form-title">
          <span>📄</span>
          Number of Pages that need Optimization
          <HelpTooltip tooltipKey="seoPages" title="SEO Pages" />
        </h2>
        <p className="text-sm text-gray-600 mb-3">How many pages need SEO optimization? (0-100)</p>
        <div className="modern-form-group">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={formData.seoPages || 0}
              onChange={handlePagesChange}
              className="w-full slider-orange"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((formData.seoPages || 0) / 100) * 100}%, #e5e7eb ${((formData.seoPages || 0) / 100) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">{formData.seoPages || 0}</span>
              <span className="text-gray-600 text-sm">Page{formData.seoPages !== 1 ? 's' : ''}</span>
              <span className="text-gray-400">×</span>
              <span className="text-orange-600 font-bold">₹{pricing.seoPagePrice.toLocaleString()}</span>
            </div>
            <div className="px-3 py-1.5 bg-orange-100 rounded-lg">
              <span className="font-bold text-orange-700 text-base sm:text-lg">
                ₹{(formData.seoPagesPrice || 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Number of Keywords */}
      <div>
        <h2 className="modern-form-title">
          <span>🔑</span>
          Number of Keywords
          <HelpTooltip tooltipKey="seoKeywords" title="SEO Keywords" />
        </h2>
        <p className="text-sm text-gray-600 mb-3">How many keywords do you want to rank for? (0-100)</p>
        <div className="modern-form-group">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={formData.seoKeywords || 0}
              onChange={handleKeywordsChange}
              className="w-full slider-orange"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((formData.seoKeywords || 0) / 100) * 100}%, #e5e7eb ${((formData.seoKeywords || 0) / 100) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">{formData.seoKeywords || 0}</span>
              <span className="text-gray-600 text-sm">Keyword{formData.seoKeywords !== 1 ? 's' : ''}</span>
              <span className="text-gray-400">×</span>
              <span className="text-orange-600 font-bold">₹{pricing.seoKeywordPrice.toLocaleString()}</span>
            </div>
            <div className="px-3 py-1.5 bg-orange-100 rounded-lg">
              <span className="font-bold text-orange-700 text-base sm:text-lg">
                ₹{(formData.seoKeywordsPrice || 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ On-Page SEO */}
      <div>
        <h2 className="modern-form-title">
          <span>📝</span>
          On-Page SEO
          <HelpTooltip tooltipKey="onPageSEO" title="On-Page SEO" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {onPageOptions.map((option) => {
            const selected = formData.onPageSEO?.some((f) => f.name === option.name) || false;
            return (
              <label
                key={option.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${selected ? "modern-card-selected bg-orange-50" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => handleOnPageToggle(option)}
                      className="w-5 h-5 accent-orange-600"
                    />
                    <span className="font-semibold text-gray-900">{option.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">₹{option.price.toLocaleString()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* ✅ Off-Page SEO */}
      <div>
        <h2 className="modern-form-title">
          <span>🌐</span>
          Off-Page SEO
          <HelpTooltip tooltipKey="offPageSEO" title="Off-Page SEO" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {offPageOptions.map((option) => {
            const selected = formData.offPageSEO?.some((f) => f.name === option.name) || false;
            return (
              <label
                key={option.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${selected ? "modern-card-selected bg-orange-50" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => handleOffPageToggle(option)}
                      className="w-5 h-5 accent-orange-600"
                    />
                    <span className="font-semibold text-gray-900">{option.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">₹{option.price.toLocaleString()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step9SEO;
