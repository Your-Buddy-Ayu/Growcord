/**
 * Master fallback FAQ repository organized by category/slug.
 * Used whenever the remote/Express backend API is offline or unreachable.
 */

export const DEFAULT_FAQS = [
  // General / Platform
  {
    _id: "faq-gen-1",
    category: "general",
    question: "What is Growcord and how does it help businesses grow?",
    answer:
      "Growcord is an integrated business OS combining digital growth marketing (SEO, PPC, Social Media, PR) with operational business software (e-commerce store, multi-carrier shipping, GST billing, and CRM) into one unified system.",
  },
  {
    _id: "faq-gen-2",
    category: "general",
    question: "How transparent is your pricing?",
    answer:
      "All services and software suites come with crystal-clear upfront pricing. You can use our interactive Rate and Cost Calculators to configure exact deliverables with zero hidden costs.",
  },
  {
    _id: "faq-gen-3",
    category: "general",
    question: "Can I choose individual services or do I need the full suite?",
    answer:
      "You can choose standalone services (like SEO, Shipping aggregator, or Google Ads) or adopt our integrated suite for end-to-end automation.",
  },
  {
    _id: "faq-gen-4",
    category: "general",
    question: "How quickly can we get started?",
    answer:
      "Digital marketing campaigns can be onboarded within 3 to 5 business days. Software setups (store, shipping wallet, GST invoices) are provisioned immediately upon account registration.",
  },

  // E-commerce & Store
  {
    _id: "faq-ecom-1",
    category: "ecommerce",
    question: "What does Growcord cost for an online store?",
    answer:
      "A one-time setup of ₹9,999, then 5% of delivered orders if you manage the store or 10% if our team manages it  no monthly rent, and cancelled or returned orders are never charged.",
  },
  {
    _id: "faq-ecom-2",
    category: "ecommerce",
    question: "Can I migrate from Shopify, WooCommerce or Magento?",
    answer:
      "Yes. Your products, variants, customer lists, inventory and past order data can be smoothly imported with zero downtime. Our technical onboarding team handles the migration.",
  },
  {
    _id: "faq-ecom-3",
    category: "ecommerce",
    question: "Do I need separate shipping and invoicing software?",
    answer:
      "No. Growcord Ship (multi-carrier courier aggregator) and Growcord Books (automated GST invoices & credit notes) work natively with the same order stream inside one login.",
  },
  {
    _id: "faq-ecom-4",
    category: "ecommerce",
    question: "How do you reduce COD Return-to-Origin (RTO) rates?",
    answer:
      "We verify Cash on Delivery orders via instant OTP or automated WhatsApp confirmation before packaging, score buyer delivery risk with courier telemetry, and surface live NDR workflows.",
  },

  // Shipping & Logistics
  {
    _id: "faq-ship-1",
    category: "shipping",
    question: "Is Growcord a standalone courier company?",
    answer:
      "Growcord is a multi-carrier aggregator. We integrate directly with premier courier partners like Delhivery, Bluedart, Shadowfax, Xpressbees, DTDC, and DHL from a single dashboard.",
  },
  {
    _id: "faq-ship-2",
    category: "shipping",
    question: "How does the prepaid shipping wallet work?",
    answer:
      "Recharge your shipping wallet via UPI, card or net banking. Shipping freight and docket charges deduct in real time with an itemized reconciliation report for every shipment.",
  },
  {
    _id: "faq-ship-3",
    category: "shipping",
    question: "Can I split orders into multiple parcel shipments?",
    answer:
      "Yes. Create partial dispatches with unique tracking numbers and independent shipping labels. Orders transition to delivered once all parcels reach the customer.",
  },

  // Clinics & Healthcare
  {
    _id: "faq-clinic-1",
    category: "clinics",
    question: "Is Growcord a clinical EMR or medical records software?",
    answer:
      "No. Growcord manages clinic growth, local Google rankings, patient lead capture, automated WhatsApp appointment reminders, online medicine sales, and staff attendance.",
  },
  {
    _id: "faq-clinic-2",
    category: "clinics",
    question: "Can you help our clinic rank higher on Google Maps and Local Search?",
    answer:
      "Yes. Our healthcare local SEO team optimizes your Google Business Profile, manages review responses, builds verified local citations, and creates localized service pages.",
  },
  {
    _id: "faq-clinic-3",
    category: "clinics",
    question: "How do WhatsApp appointment reminders work?",
    answer:
      "Automated appointment reminders are dispatched via official WhatsApp Business API, respecting TRAI quiet hours and patient consent, reducing clinic no-shows by up to 40%.",
  },

  // Real Estate
  {
    _id: "faq-re-1",
    category: "real-estate",
    question: "How do your high-conversion real estate landing pages work?",
    answer:
      "We build performance landing pages engineered with speed optimization, dynamic floor plan viewers, virtual tour embeds, and multi-step lead capture popups that deliver 35%+ higher conversions.",
  },
  {
    _id: "faq-re-2",
    category: "real-estate",
    question: "How do leads get synced to our CRM?",
    answer:
      "Site-visit inquiries, brochure downloads, and WhatsApp clicks route instantly to your CRM or Google Sheets with UTM parameters and lead verification.",
  },

  // Digital Marketing Services: SEO, PPC, Social
  {
    _id: "faq-seo-1",
    category: "seo",
    question: "How long does SEO take to produce measurable results?",
    answer:
      "Technical audits and crawl error fixes reflect in weeks. Keyword rank improvements and organic traffic gains typically materialize within 3 to 6 months of consistent execution.",
  },
  {
    _id: "faq-seo-2",
    category: "seo",
    question: "Do you provide transparent keyword rank and traffic reports?",
    answer:
      "Yes. You receive real-time dashboard visibility connecting Google Search Console and analytics to monitor organic rankings, backlinks, and revenue attribution.",
  },
  {
    _id: "faq-ppc-1",
    category: "ppc-ads",
    question: "Which platforms do you manage for paid advertising?",
    answer:
      "We run high-ROAS performance campaigns across Meta (Facebook & Instagram), Google Search, Performance Max, YouTube, and LinkedIn with server-side conversion tracking.",
  },
  {
    _id: "faq-smo-1",
    category: "social-media-management",
    question: "Do we approve social media posts and reels before they go live?",
    answer:
      "Yes. Our content team prepares a monthly content calendar with creative graphics, captions, and reels for your review and approval before anything gets published.",
  },
];

/**
 * Helper to fetch fallbacks matching a given category or path.
 */
export function getFallbackFaqs(category) {
  if (!category || category === "all") return DEFAULT_FAQS;
  const normalized = category.toLowerCase().trim().replace(/^\//, "");
  const matched = DEFAULT_FAQS.filter(
    (f) =>
      f.category === normalized ||
      f.category.includes(normalized) ||
      normalized.includes(f.category),
  );
  return matched.length > 0 ? matched : DEFAULT_FAQS;
}

