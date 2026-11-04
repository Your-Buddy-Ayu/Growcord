import JsonLd from "@/components/site/JsonLd";
import PricingClassic, { PRICING_FAQS } from "@/components/classic/PricingClassic";
import { SERVICES } from "@/data/services";
import { FALLBACK_ECOM_PLANS, FALLBACK_LANDING_PLANS, formatINR, getCalculatorCatalog, getPlans, servicePriceFrom } from "@/lib/content";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Pricing  Zero Monthly Rent, 5% or 10% Commission on Delivered Orders | Growcord",
  description:
    "Growcord pricing: Launch your e-commerce store with a one-time ₹9,999 setup and 5% (self-managed) or 10% (fully managed) commission on delivered orders. Zero monthly rent, ₹0 on returns or cancellations, and direct Meta WhatsApp pricing.",
  path: "/pricing",
  keywords: [
    "growcord pricing",
    "ecommerce platform pricing india",
    "commission based ecommerce platform",
    "shopify alternative india",
    "whatsapp api pricing india",
    "business software pricing",
    "no monthly fee ecommerce",
  ],
});

export default async function Page() {
  const [ecomPlans, landingPlans, catalog] = await Promise.all([
    getPlans("ecommerce", FALLBACK_ECOM_PLANS),
    getPlans("real-estate", FALLBACK_LANDING_PLANS),
    getCalculatorCatalog(),
  ]);

  const ecom = ecomPlans.slice(0, 2);
  const services = SERVICES.map((s) => {
    const pf = servicePriceFrom(s.slug, catalog);
    return {
      slug: s.slug,
      name: s.name,
      icon: s.icon,
      tagline: s.tagline,
      priceLabel: pf.amount ? "Starting from" : "Pricing",
      priceValue: pf.amount ? formatINR(pf.amount) : "Custom quote",
      priceUnit: pf.amount ? pf.unit : "",
    };
  });

  const offerLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Growcord eCommerce and Suite Plans",
    url: absoluteUrl("/pricing"),
    itemListElement: ecom.map((p) => ({
      "@type": "Offer",
      name: `Growcord Commerce  ${p.name}`,
      price: String(p.price),
      priceCurrency: "INR",
      description: `${p.description} ${(p.features || []).find((f) => /commission/i.test(f)) || ""}`.trim(),
      seller: { "@id": `${SITE.url}/#organization` },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          offerLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqLd(PRICING_FAQS),
        ]}
      />
      <PricingClassic ecomPlans={ecom} landingPlans={landingPlans.slice(0, 3)} services={services} />
    </>
  );
}
