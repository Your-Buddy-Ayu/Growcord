import { useEffect } from "react";
import { useFormData } from "@/context/FormContext";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";
import { useRouter } from "next/navigation";
import { calculatorAPI } from "@/lib/api";
import HelpTooltip from "../../components/HelpTooltip";

const Step6Ecom = () => {
  const { formData, setFormData } = useFormData();
  const { options } = useCalculatorOptions();
  const router = useRouter();

  // Get options from API or use defaults
  const EcomFeaturesWithPrice = options?.ecomFeatures || [
    { name: "Payment Gateway", price: 300 },
    { name: "Product Management", price: 400 },
    { name: "Stock & Inventory Management", price: 300 },
    { name: "Order Management", price: 500 },
    { name: "Shipping Management", price: 400 },
    { name: "Order Tracking", price: 400 },
    { name: "Product Reviews", price: 200 },
    { name: "Cash On Delivery", price: 300 },
    { name: "Policies & Compliances", price: 200 },
  ];

  const PaidFeaturesWithPrice = options?.paidFeatures || [
    { name: "OTP verified COD", price: 300 },
    { name: "Photo & Video Reviews", price: 400 },
    { name: "Insta reels on product Page", price: 300 },
    { name: "Order Notification on whatsapp", price: 500 },
  ];

  const handleOnChange = async (e) => {
    const value = Number(e.target.value);
    try {
      const pricing = await calculatorAPI.getPricing();
      const productPrice = pricing?.productPrice || 150;
      setFormData({
        ...formData,
        products: value,
        productPricingType: pricing?.productPricingType || 'one-time'
      });
    } catch (error) {
      setFormData({
        ...formData,
        products: value,
        productPricingType: 'one-time'
      });
    }
  };

  useEffect(() => {
    if (!formData.products) {
      setFormData((prev) => ({ ...prev, products: 20 }));
    }
  }, []);

  // ✅ Auto-select pre-included ecom features
  useEffect(() => {
    if (EcomFeaturesWithPrice && EcomFeaturesWithPrice.length > 0) {
      const preIncludedFeatures = EcomFeaturesWithPrice.filter(opt => opt.preIncluded === true);
      if (preIncludedFeatures.length > 0) {
        setFormData((prev) => {
          const existingFeatureNames = prev.EcomFeatures.map(f => f.name);
          const newFeatures = preIncludedFeatures.filter(opt => !existingFeatureNames.includes(opt.name));
          if (newFeatures.length > 0) {
            return {
              ...prev,
              EcomFeatures: [...prev.EcomFeatures, ...newFeatures]
            };
          }
          return prev;
        });
      }
    }
  }, [EcomFeaturesWithPrice, setFormData]);

  // ✅ Auto-select pre-included paid features
  useEffect(() => {
    if (PaidFeaturesWithPrice && PaidFeaturesWithPrice.length > 0) {
      const preIncludedFeatures = PaidFeaturesWithPrice.filter(opt => opt.preIncluded === true);
      if (preIncludedFeatures.length > 0) {
        setFormData((prev) => {
          const existingFeatureNames = prev.PaidFeatures.map(f => f.name);
          const newFeatures = preIncludedFeatures.filter(opt => !existingFeatureNames.includes(opt.name));
          if (newFeatures.length > 0) {
            return {
              ...prev,
              PaidFeatures: [...prev.PaidFeatures, ...newFeatures]
            };
          }
          return prev;
        });
      }
    }
  }, [PaidFeaturesWithPrice, setFormData]);

  const handleEcomFeature = (EcomFeature) => {
    const exists = formData.EcomFeatures.find(
      (f) => f.name === EcomFeature.name
    );
    let updated;
    if (exists) {
      updated = formData.EcomFeatures.filter(
        (f) => f.name !== EcomFeature.name
      );
    } else {
      updated = [...formData.EcomFeatures, EcomFeature];
    }
    setFormData({ ...formData, EcomFeatures: updated });
  };
  const handlePaidFeature = (PaidFeature) => {
    const exists = formData.PaidFeatures.find(
      (f) => f.name === PaidFeature.name
    );
    let updated;
    if (exists) {
      updated = formData.PaidFeatures.filter(
        (f) => f.name !== PaidFeature.name
      );
    } else {
      updated = [...formData.PaidFeatures, PaidFeature];
    }
    setFormData({ ...formData, PaidFeatures: updated });
  };

  // Redirect if not ecommerce website
  useEffect(() => {
    if (formData.websiteType !== "Ecommerce Website") {
      router.push("/calculator/step7");
    }
  }, [formData.websiteType, router]);

  if (formData.websiteType !== "Ecommerce Website") {
    return <div className="text-center py-8">Redirecting...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="modern-form-title">
          <span>🛍️</span>
          Number of Products
          <HelpTooltip tooltipKey="products" title="Number of Products" />
        </h2>
        <div className="modern-form-group">
          <label className="modern-form-label">Number of Products</label>
          <input
            type="number"
            min="1"
            max="100"
            value={formData.products || 20}
            onChange={handleOnChange}
            className="modern-form-input w-full sm:w-32"
          />
          {formData.products > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              Total: ₹{(formData.products * 150).toLocaleString()} (₹150 each)
            </p>
          )}
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>⚡</span>
          E-commerce Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {EcomFeaturesWithPrice.map((EcomFeature) => {
            const checked = formData.EcomFeatures.some((f) => f.name === EcomFeature.name);
            const isPreIncluded = EcomFeature.preIncluded === true;
            return (
              <label
                key={EcomFeature.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  } ${isPreIncluded ? "border-green-300 bg-green-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleEcomFeature(EcomFeature)}
                      className="w-5 h-5 accent-orange-600"
                      disabled={isPreIncluded}
                    />
                    <span className="font-semibold text-gray-900">{EcomFeature.name}</span>
                    {isPreIncluded && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isPreIncluded && (
                      <span className="text-xs text-gray-500 line-through">₹{EcomFeature.price.toLocaleString()}</span>
                    )}
                    <span className={`font-bold ${isPreIncluded ? 'text-green-600' : 'text-orange-600'}`}>
                      {isPreIncluded ? 'FREE' : `₹${EcomFeature.price.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="modern-form-title">
          <span>💎</span>
          Paid Features
          <HelpTooltip tooltipKey="paidFeatures" title="Paid Features" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {PaidFeaturesWithPrice.map((PaidFeature) => {
            const checked = formData.PaidFeatures.some((f) => f.name === PaidFeature.name);
            const isPreIncluded = PaidFeature.preIncluded === true;
            return (
              <label
                key={PaidFeature.name}
                className={`modern-card cursor-pointer transition-all duration-300 ${checked ? "modern-card-selected bg-orange-50" : ""
                  } ${isPreIncluded ? "border-green-300 bg-green-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handlePaidFeature(PaidFeature)}
                      className="w-5 h-5 accent-orange-600"
                      disabled={isPreIncluded}
                    />
                    <span className="font-semibold text-gray-900">{PaidFeature.name}</span>
                    {isPreIncluded && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isPreIncluded && (
                      <span className="text-xs text-gray-500 line-through">₹{PaidFeature.price.toLocaleString()}</span>
                    )}
                    <span className={`font-bold ${isPreIncluded ? 'text-green-600' : 'text-orange-600'}`}>
                      {isPreIncluded ? 'FREE' : `₹${PaidFeature.price.toLocaleString()}`}
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

export default Step6Ecom;
