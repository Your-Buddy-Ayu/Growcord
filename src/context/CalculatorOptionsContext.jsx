import { createContext, useState, useContext, useEffect } from 'react';
import { calculatorAPI } from '@/lib/api';

const CalculatorOptionsContext = createContext();

// Default options to use when API fails
const defaultOptions = {
  services: [
    "Company Registration",
    "Logo & Branding",
    "Website",
    "Social Media Marketing",
    "Digital Ads",
    "SEO",
    "Content Writing",
    "Marketplace Management"
  ],
  companyTypes: [
    { name: "Private Limited", price: 2500 },
    { name: "Limited Liability Partnership (LLP)", price: 2000 },
    { name: "Sole Proprietorship", price: 1500 },
    { name: "One Person Company (OPC)", price: 1800 }
  ],
  compliances: [
    { name: "GST Registration", price: 500 },
    { name: "Trademark", price: 800 },
    { name: "MSME Registration", price: 400 },
    { name: "Startup India Registration", price: 600 },
    { name: "Trade License", price: 300 }
  ],
  branding: [
    { name: "LetterHead", price: 500 },
    { name: "Visiting Card", price: 300 },
    { name: "Letter Envelope", price: 400 },
    { name: "Company Presentation", price: 1500 },
    { name: "Stamp", price: 250 },
    { name: "Catalog", price: 1000 },
    { name: "Invoice", price: 600 }
  ],
  logoOptions: [
    { name: "Logo only", price: 2000 },
    { name: "Logo & Raw Files", price: 3000 },
    { name: "Premium Logo with Raw Files", price: 5000 }
  ],
  hostingOptions: [
    { name: "Hosting", price: 2000 },
    { name: "Domain", price: 1000 }
  ],
  websiteTypes: [
    { name: "Static Website", price: 5000 },
    { name: "Ecommerce Website", price: 15000 },
    { name: "CMS Website", price: 10000 }
  ],
  websiteFeatures: [
    { name: "Contact Form", price: 500 },
    { name: "Photo Gallery", price: 800 },
    { name: "Blog / News Section", price: 1000 },
    { name: "Testimonials Section", price: 600 },
    { name: "Admin Panel (Basic CMS)", price: 1500 },
    { name: "Chat Integration", price: 1000 },
    { name: "Payment Gateway Integration", price: 1200 }
  ],
  integrations: [
    { name: "Google Analytics", price: 500 },
    { name: "Google Search Console", price: 400 },
    { name: "Google Business Live Reviews", price: 700 },
    { name: "Meta Pixel", price: 600 },
    { name: "Live Chat", price: 800 },
    { name: "Clarity AI", price: 900 }
  ],
  ecomFeatures: [
    { name: "Payment Gateway", price: 300 },
    { name: "Product Management", price: 400 },
    { name: "Stock & Inventory Management", price: 300 },
    { name: "Order Management", price: 500 },
    { name: "Shipping Management", price: 400 },
    { name: "Order Tracking", price: 400 },
    { name: "Product Reviews", price: 200 },
    { name: "Cash On Delivery", price: 300 },
    { name: "Policies & Compliances", price: 200 }
  ],
  paidFeatures: [
    { name: "OTP verified COD", price: 300 },
    { name: "Photo & Video Reviews", price: 400 },
    { name: "Insta reels on product Page", price: 300 },
    { name: "Order Notification on whatsapp", price: 500 }
  ],
  socialTypes: [
    { name: "Starter", price: 1000 },
    { name: "Professional", price: 2000 },
    { name: "Creative", price: 3000 },
    { name: "Viral", price: 5000 }
  ],
  addOns: [
    { name: "Strategy & Planning", price: 5000 },
    { name: "Weekly Calendars", price: 2500 },
    { name: "Weekly Report", price: 2000 },
    { name: "Monthly Report", price: 1000 },
    { name: "Analytics & Analysis", price: 1200 }
  ],
  platforms: [
    { name: "Facebook", price: 5000 },
    { name: "Instagram", price: 2500 },
    { name: "Linkedin", price: 2000 },
    { name: "X (Twiiter)", price: 1000 },
    { name: "Youtube", price: 1200 },
    { name: "Google My Business", price: 1400 },
    { name: "Pinterest", price: 1800 },
    { name: "Threads", price: 1900 },
    { name: "Tiktok", price: 2200 }
  ],
  adsPlatforms: [
    { name: "Facebook", price: 5000 },
    { name: "Instagram", price: 2500 },
    { name: "Google Search", price: 2000 },
    { name: "Google Display Ads", price: 1000 },
    { name: "Youtube Ads", price: 1200 },
    { name: "Google My Business Ads", price: 1400 },
    { name: "Pinterest Ads", price: 1800 },
    { name: "Linkedin Ads", price: 1900 },
    { name: "Google Shopping Ads", price: 2200 }
  ],
  seoPlans: [
    { name: "Basic SEO", price: 2000 },
    { name: "Advanced SEO", price: 4000 },
    { name: "Premium SEO", price: 7000 }
  ],
  onPageSEO: [
    { name: "Image Optimization", price: 400 },
    { name: "PageSpeed Optimization", price: 600 },
    { name: "Content Optimization", price: 800 },
    { name: "URL Schema Optimization", price: 500 },
    { name: "Meta Tags", price: 300 },
    { name: "Video Optimization", price: 700 }
  ],
  offPageSEO: [
    { name: "Guest Post", price: 800 },
    { name: "Forums", price: 400 },
    { name: "Directories", price: 300 },
    { name: "Social Listing", price: 600 },
    { name: "Backlinks", price: 900 },
    { name: "Outreach & Collaboration", price: 1000 }
  ]
};

export const CalculatorOptionsProvider = ({ children }) => {
  const [options, setOptions] = useState(defaultOptions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOptions();
  }, []);

  const loadOptions = async () => {
    try {
      const data = await calculatorAPI.getOptions();
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        // Merge with defaults to ensure all keys exist
        const mergedOptions = { ...defaultOptions, ...data };
        setOptions(mergedOptions);
        console.log('Calculator options loaded from API');
      } else {
        console.warn('Invalid API response, using default options');
        setOptions(defaultOptions);
      }
    } catch (error) {
      console.error('Error loading calculator options from API, using defaults:', error);
      // Use default options on error - calculator will still work
      setOptions(defaultOptions);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorOptionsContext.Provider value={{ options, loading, reloadOptions: loadOptions }}>
      {children}
    </CalculatorOptionsContext.Provider>
  );
};

export const useCalculatorOptions = () => {
  const context = useContext(CalculatorOptionsContext);
  if (!context) {
    return { options: null, loading: false, reloadOptions: () => { } };
  }
  return context;
};



