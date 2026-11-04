import JsonLd from "@/components/site/JsonLd";
import { ServicesHubClassic } from "@/components/classic/Hubs";
import { SERVICES } from "@/data/services";
import { formatINR, getCalculatorCatalog, servicePriceFrom } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Growth Services  SEO, Ads, Social Media, Websites & WhatsApp Marketing",
  description:
    "Growcord’s growth team runs SEO, performance ads, social media, websites, content, digital PR, influencer campaigns and WhatsApp, SMS and email marketing  with prices in an instant-quote calculator.",
  path: "/services",
  keywords: ["digital marketing services india", "digital marketing agency delhi", "seo and ads agency", "growth marketing agency india"],
});

export default async function Page() {
  const catalog = await getCalculatorCatalog();
  // Prices come from the live calculator catalogue, the same numbers the instant quote uses.
  const services = SERVICES.map((s) => {
    const pf = servicePriceFrom(s.slug, catalog);
    return {
      slug: s.slug, name: s.name, icon: s.icon, summary: s.summary,
      priceLabel: pf.amount ? "Starting from" : "Pricing",
      priceValue: pf.amount ? formatINR(pf.amount) : "Custom quote",
      priceUnit: pf.amount ? pf.unit : "",
    };
  });
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <ServicesHubClassic services={services} />
    </>
  );
}
