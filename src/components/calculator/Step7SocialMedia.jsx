import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import { calculatorAPI } from "@/lib/api";
import HelpTooltip from "../../components/HelpTooltip";
import { useState, useEffect } from "react";

const Step7SocialMedia = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();
  const [pricing, setPricing] = useState({
    videoPostPrice: 1500,
    graphicPostPrice: 250
  });

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const pricingData = await calculatorAPI.getPricing();
        if (pricingData) {
          setPricing({
            videoPostPrice: pricingData.videoPostPrice || 1500,
            graphicPostPrice: pricingData.graphicPostPrice || 250
          });
        }
      } catch (error) {
        console.error('Error loading pricing:', error);
      }
    };
    loadPricing();
  }, []);

  // Get options from API or use defaults
  const socialOptions = options?.socialTypes || [
    { name: "Starter", price: 1000 },
    { name: "Professional", price: 2000 },
    { name: "Creative", price: 3000 },
    { name: "Viral", price: 5000 },
  ];

  const addOnptions = options?.addOns || [
    { name: "Strategy & Planning", price: 5000 },
    { name: "Weekly Calendars", price: 2500 },
    { name: "Weekly Report", price: 2000 },
    { name: "Monthly Report", price: 1000 },
    { name: "Analytics & Analysis", price: 1200 },
  ];

  const platFormsOptions = options?.platforms || [
    { name: "Facebook", price: 5000 },
    { name: "Instagram", price: 2500 },
    { name: "Linkedin", price: 2000 },
    { name: "X (Twiiter)", price: 1000 },
    { name: "Youtube", price: 1200 },
    { name: "Google My Business", price: 1400 },
    { name: "Pinterest", price: 1800 },
    { name: "Threads", price: 1900 },
    { name: "Tiktok", price: 2200 },
  ];

  const handleSocialSelection = (option) => {
    setFormData({
      ...formData,
      socialType: option.name,
      socialPrice: option.price,
    });
  };

  const handleOnChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricingData = await calculatorAPI.getPricing();
      const graphicPostPrice = pricingData?.graphicPostPrice || 250;
      setFormData({
        ...formData,
        graphicPosts: value,
        graphicPostsPrice: value * graphicPostPrice,
        graphicPostPricingType: pricingData?.graphicPostPricingType || 'monthly'
      });
      // Update pricing state
      if (pricingData) {
        setPricing(prev => ({
          ...prev,
          graphicPostPrice: pricingData.graphicPostPrice || 250
        }));
      }
    } catch (error) {
      setFormData({
        ...formData,
        graphicPosts: value,
        graphicPostsPrice: value * 250,
        graphicPostPricingType: 'monthly'
      });
    }
  };

  // Handle number of videoPosts seekbar
  const handlevideoPostsChange = async (e) => {
    const videoPosts = Number(e.target.value);
    try {
      const pricingData = await calculatorAPI.getPricing();
      const videoPostPrice = pricingData?.videoPostPrice || 1500;
      setFormData({
        ...formData,
        videoPosts,
        videoPostsPrice: videoPosts * videoPostPrice,
        videoPostPricingType: pricingData?.videoPostPricingType || 'monthly'
      });
      // Update pricing state
      if (pricingData) {
        setPricing(prev => ({
          ...prev,
          videoPostPrice: pricingData.videoPostPrice || 1500
        }));
      }
    } catch (error) {
      setFormData({
        ...formData,
        videoPosts,
        videoPostsPrice: videoPosts * 1500,
        videoPostPricingType: 'monthly'
      });
    }
  };

  const handleAddOn = (addOn) => {
    const exists = formData.addOn.find((f) => f.name === addOn.name);
    let updated;
    if (exists) {
      updated = formData.addOn.filter((f) => f.name !== addOn.name);
    } else {
      updated = [...formData.addOn, addOn];
    }
    setFormData({ ...formData, addOn: updated });
  };


  const handlePlatForm = (platForms) => {
    const exists = formData.platForms.find((f) => f.name === platForms.name);
    let updated;
    if (exists) {
      updated = formData.platForms.filter((f) => f.name !== platForms.name);
    } else {
      updated = [...formData.platForms, platForms];
    }
    setFormData({ ...formData, platForms: updated });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="modern-form-title">
          <span>📱</span>
          Social Media Plan
          <HelpTooltip tooltipKey="socialPlan" title="Social Media Plan" />
        </h2>
        <div className="space-y-3">
          {socialOptions.map((option) => (
            <label
              key={option.name}
              className={`modern-card cursor-pointer transition-all duration-300 ${formData.socialType === option.name ? "modern-card-selected bg-orange-50" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="socialType"
                    checked={formData.socialType === option.name}
                    onChange={() => handleSocialSelection(option)}
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

      <div>
        <h2 className="modern-form-title">
          <span>🖼️</span>
          Graphic Posts (Monthly Recurring)
          <HelpTooltip tooltipKey="graphicPosts" title="Graphic Posts" />
        </h2>
        <p className="text-sm text-gray-600 mb-3">How many graphic posts do you need per month?</p>
        <div className="modern-form-group">
          <label className="modern-form-label">Number of Graphic Posts per Month</label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.graphicPosts || 0}
            onChange={handleOnChange}
            className="modern-form-input w-full sm:w-32"
          />
          {formData.graphicPosts > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              Monthly Cost: ₹{((formData.graphicPosts || 0) * pricing.graphicPostPrice).toLocaleString()}
              <span className="text-gray-500"> (₹{pricing.graphicPostPrice.toLocaleString()} per post/month)</span>
            </p>
          )}
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>🎥</span>
          Video Posts (Monthly Recurring)
          <HelpTooltip tooltipKey="videoPosts" title="Video Posts" />
        </h2>
        <p className="text-sm text-gray-600 mb-3">How many video posts do you need per month? (0-50)</p>
        <div className="modern-form-group">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="50"
              value={formData.videoPosts || 0}
              onChange={handlevideoPostsChange}
              className="w-full slider-orange"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((formData.videoPosts || 0) / 50) * 100}%, #e5e7eb ${((formData.videoPosts || 0) / 50) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">{formData.videoPosts || 0}</span>
              <span className="text-gray-600 text-sm">Video{formData.videoPosts !== 1 ? 's' : ''}</span>
              <span className="text-gray-400">×</span>
              <span className="text-orange-600 font-bold">₹{pricing.videoPostPrice.toLocaleString()}</span>
              <span className="text-xs text-gray-500">/month</span>
            </div>
            <div className="px-3 py-1.5 bg-orange-100 rounded-lg">
              <span className="font-bold text-orange-700 text-base sm:text-lg">
                ₹{((formData.videoPosts || 0) * pricing.videoPostPrice).toLocaleString()}
              </span>
              <span className="text-xs text-gray-600 ml-1">/month</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>➕</span>
          Included Add-ons
          <HelpTooltip tooltipKey="addOns" title="Add-ons" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {addOnptions.map((addOn) => {
            const checked = formData.addOn.some((f) => f.name === addOn.name);
            return (
              <label
                key={addOn.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleAddOn(addOn)}
                      className="w-5 h-5 accent-orange-600"
                    />
                    <span className="font-semibold text-gray-900">{addOn.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold">₹{addOn.price.toLocaleString()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>🌐</span>
          Platforms
          <HelpTooltip tooltipKey="platforms" title="Platforms" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {platFormsOptions.map((platForms) => {
            const checked = formData.platForms.some((f) => f.name === platForms.name);
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
    </div>
  );
};

export default Step7SocialMedia;
