/**
 * Server-side reads of the content the Growcord admin panel manages (plans, calculator prices,
 * testimonials). Rendered into the HTML  until 2026-09-14 these were fetched in the browser
 * after load, so search engines saw placeholder text instead of the real prices and reviews.
 *
 * Every read revalidates hourly and falls back to a known value, so a slow or unreachable API
 * can never break a page build or a page view.
 */

const API = process.env.NEXT_PUBLIC_API_URL || "https://api.growcord.in/api";

async function fetchApi(path, fallback, revalidate = 3600) {
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate }, signal: AbortSignal.timeout(6000) });
    if (!res.ok) return fallback;
    const data = await res.json();
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

// Mirrors the live e-commerce tiers (owner decision 2026-09-14). Used only if the API is down.
export const FALLBACK_ECOM_PLANS = [
  {
    id: "ecom_self",
    name: "Self Managed",
    price: 9999,
    popular: false,
    description: "You run the store. We give you the complete Growcord Commerce platform.",
    features: [
      "Custom e-commerce website on your own domain",
      "Free hosting, SSL and daily backups",
      "Razorpay, UPI and COD checkout with OTP-verified COD",
      "Every courier on one wallet with Growcord Ship",
      "GST tax invoices and credit notes with Growcord Books",
      "WhatsApp and SMS order updates",
      "Unlimited products and staff accounts",
      "5% commission per delivered order",
    ],
  },
  {
    id: "ecom_managed",
    name: "Fully Managed",
    price: 9999,
    popular: true,
    description: "We run the store with you: catalogue, shipping, recovery and ads.",
    features: [
      "Everything in Self Managed",
      "We add your products and manage inventory",
      "We book shipments and pickups and handle failed deliveries",
      "RTO verification and COD risk checks",
      "Abandoned cart recovery on WhatsApp and SMS",
      "Facebook, Instagram and Google ads management (ad budget is yours)",
      "Dedicated account manager and WhatsApp support group",
      "Monthly growth and profit reports",
      "10% commission per delivered order",
    ],
  },
];

export const FALLBACK_LANDING_PLANS = [
  { id: "starter", name: "Starter", price: 4999, popular: false, description: "Perfect for getting started with a professional real estate presence.", features: ["1 High Conversion Real Estate Landing Page", "Free Domain (.com or .in)", "1 Year Free Hosting", "Lead Management CRM", "Custom Coded Next.js with SEO"] },
  { id: "business", name: "Business", price: 9999, popular: true, description: "Ideal for growing real estate businesses needing more pages.", features: ["3 High Conversion Real Estate Landing Pages", "Free Domain (.com or .in)", "1 Year Free Hosting", "Lead Management CRM", "Priority Support"] },
  { id: "enterprise", name: "Enterprise", price: 24999, popular: false, description: "Comprehensive solution for established real estate brands.", features: ["10 High Conversion Real Estate Landing Pages", "Free Domain (.com or .in)", "1 Year Free Hosting", "Dedicated Account Manager", "24/7 Priority Support"] },
];

export async function getPlans(category, fallback = []) {
  const rows = await fetchApi(`/plans?category=${encodeURIComponent(category)}`, null);
  if (!Array.isArray(rows) || rows.length === 0) return fallback;
  return rows.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

const FALLBACK_OPTIONS = {
  socialTypes: [{ name: "Starter", price: 1000 }],
  seoPlans: [{ name: "Basic SEO", price: 2000 }],
  adsPlatforms: [{ name: "Google Display Ads", price: 1000 }],
  websiteTypes: [{ name: "Static Website", price: 5000 }, { name: "Ecommerce Website", price: 15000 }],
  logoOptions: [{ name: "Logo only", price: 2000 }],
};
const FALLBACK_PRICING = { graphicPostPrice: 250, videoPostPrice: 1500, seoKeywordPrice: 300, websitePagePrice: 500, gstRate: 18 };

export async function getCalculatorCatalog() {
  const [options, pricing] = await Promise.all([
    fetchApi("/calculator-options", FALLBACK_OPTIONS),
    fetchApi("/calculator/pricing", FALLBACK_PRICING),
  ]);
  return { options: { ...FALLBACK_OPTIONS, ...options }, pricing: { ...FALLBACK_PRICING, ...pricing } };
}

const minPrice = (list) => {
  const prices = (Array.isArray(list) ? list : []).map((x) => Number(x?.price)).filter((n) => Number.isFinite(n) && n > 0);
  return prices.length ? Math.min(...prices) : null;
};

/** The "from" price a service page quotes, read from the same catalogue the calculator uses. */
export function servicePriceFrom(slug, { options, pricing }) {
  switch (slug) {
    case "social-media-management":
      return { amount: minPrice(options.socialTypes), unit: "per month" };
    case "seo":
      return { amount: minPrice(options.seoPlans), unit: "per month" };
    case "ppc-ads":
      return { amount: minPrice(options.adsPlatforms), unit: "per platform, per month", note: "Ad budget is paid directly to the platform" };
    case "website-development":
      return { amount: minPrice(options.websiteTypes), unit: "one-time" };
    case "content-development":
      return { amount: Number(pricing.graphicPostPrice) || null, unit: "per designed post" };
    default:
      return { amount: null, unit: "", note: "Quoted to your scope" };
  }
}

export const formatINR = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export async function getTestimonials() {
  const rows = await fetchApi("/testimonials?activeOnly=true", []);
  return Array.isArray(rows) ? rows.filter((t) => t?.quote && t?.name) : [];
}
