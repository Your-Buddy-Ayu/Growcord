import { createContext, useState, useContext, useEffect } from "react";
import { calculatorAPI } from "@/lib/api";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
    services: [],
    companyType: "",
    compliances: [],
    logoType: "",
    logoPrice: 0,
    packagingCount: 0,
    packagingPrice: 0,
    branding: [], // ✅ branding array
    host: [],
    websiteType: "",
    websitePrice: 0,
    features: [],
    websitePages: 0,
    websitePagesPrice: 0,
    mockups: 0,
    mockupsPrice: 0,
    integrations: [],
    products: 0,
    EcomFeatures: [],
    PaidFeatures: [],
    socialType: "",
    socialPrice: 0,
    graphicPosts: 0,
    graphicPostsPrice: 0,
    videoPosts: 0,
    videoPostsPrice: 0,
    addOn: [],
    platForms: [],
    ads: [],
    monthlyBudget: 0,
    seoPages: 0,
    seoPagesPrice: 0,
    seoKeywords: 0,
    seoKeywordsPrice: 0,
    onPageSEO: [],
    offPageSEO: [],
    total: 0,
    oneTimeTotal: 0,
    monthlyTotal: 0,
    yearlyTotal: 0,
  });

  // ✅ Automatically calculate total whenever formData changes
  useEffect(() => {
    let total = 0;
    let oneTimeTotal = 0;
    let monthlyTotal = 0;
    let yearlyTotal = 0;

    // Helper function to get pricing type from an option
    const getPricingType = (item) => {
      return item?.pricingType || 'one-time';
    };

    // Helper function to add to appropriate total
    const addToTotal = (price, pricingType) => {
      const p = price || 0;
      total += p;
      if (pricingType === 'monthly') {
        monthlyTotal += p;
      } else if (pricingType === 'yearly') {
        yearlyTotal += p;
      } else {
        oneTimeTotal += p;
      }
    };

    // Load pricing types from API (will be set by components)
    // For now, use defaults but components will update these based on API
    const getPricingTypeFromAPI = async () => {
      try {
        const pricing = await calculatorAPI.getPricing();
        return pricing;
      } catch (error) {
        return null;
      }
    };

    // Use pricing types - components will set these in formData
    // For now, use defaults but these should be set by components
    addToTotal(formData.logoPrice, 'one-time');
    addToTotal(formData.mockupsPrice, formData.mockupPricingType || 'one-time');
    addToTotal(formData.socialPrice, 'monthly'); // Social media is typically monthly
    addToTotal(formData.seoPrice, 'monthly'); // SEO is typically monthly
    addToTotal(formData.monthlyBudget, 'monthly');
    addToTotal(formData.packagingPrice, formData.packagingPricingType || 'one-time');
    addToTotal(formData.websitePrice, 'one-time');
    addToTotal(formData.websitePagesPrice, formData.websitePagePricingType || 'one-time');
    addToTotal(formData.companyTypePrice, 'one-time');

    // Graphic and Video posts - use pricing types from API (set by components)
    addToTotal(formData.videoPostsPrice || 0, formData.videoPostPricingType || 'monthly');
    addToTotal(formData.graphicPostsPrice || 0, formData.graphicPostPricingType || 'monthly');
    // ✅ SEO-related totals
    addToTotal(formData.seoPagesPrice, formData.seoPagePricingType || 'one-time');
    addToTotal(formData.seoKeywordsPrice, formData.seoKeywordPricingType || 'one-time');

    if (Array.isArray(formData.onPageSEO))
      formData.onPageSEO.forEach(item => addToTotal(item.price, getPricingType(item)));

    if (Array.isArray(formData.offPageSEO))
      formData.offPageSEO.forEach(item => addToTotal(item.price, getPricingType(item)));

    // ✅ Add product pricing (will be updated from API)
    if (formData.products && formData.products > 0) {
      const productPrice = 150; // Default, will be updated from API
      addToTotal(formData.products * productPrice, formData.productPricingType || 'one-time');
    }

    // --- Arrays of objects with {name, price} ---
    const pricedArrays = [
      "services",
      "branding", // ✅ newly added
      "compliances",
      "host",
      "features",
      "integrations",
      "EcomFeatures",
      "PaidFeatures",
      "addOn",
      "platForms",
      "ads",
    ];

    pricedArrays.forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach(item => {
          // Don't add pre-included items to total (they're free)
          if (!item.preIncluded) {
            addToTotal(item.price, getPricingType(item));
          }
        });
      }
    });

    if (
      total !== formData.total ||
      oneTimeTotal !== formData.oneTimeTotal ||
      monthlyTotal !== formData.monthlyTotal ||
      yearlyTotal !== formData.yearlyTotal
    ) {
      setFormData((prev) => ({
        ...prev,
        total,
        oneTimeTotal,
        monthlyTotal,
        yearlyTotal
      }));
    }
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // dependencies (trigger recalculation when these change)
    formData.services,
    formData.branding,
    formData.compliances,
    formData.host,
    formData.features,
    formData.integrations,
    formData.EcomFeatures,
    formData.PaidFeatures,
    formData.addOn,
    formData.platForms,
    formData.ads,
    formData.logoPrice,
    formData.websitePrice,
    formData.websitePagesPrice,
    formData.mockupsPrice,
    formData.socialPrice,
    formData.monthlyBudget,
    formData.packagingPrice,
    formData.products,
    formData.graphicPosts,
    formData.graphicPostsPrice,
    formData.videoPosts,
    formData.videoPostsPrice,
    formData.seoPagesPrice,
    formData.seoKeywordsPrice,
    formData.onPageSEO,
    formData.offPageSEO,
    formData.companyTypePrice,
  ]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);

