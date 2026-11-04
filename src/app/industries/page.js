import JsonLd from "@/components/site/JsonLd";
import { IndustriesHubClassic } from "@/components/classic/Hubs";
import { INDUSTRIES } from "@/data/industries";
import { getProduct } from "@/data/products";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries  Business Software & Growth for Retail, Pharma, Manufacturing & More",
  description:
    "See which Growcord products and services fit your industry: e-commerce and D2C brands, pharmacies and retail stores, distributors, manufacturers, clinics, hospitals and service companies.",
  path: "/industries",
  keywords: ["business software by industry india", "pharmacy software", "distributor software", "manufacturing erp india", "d2c software"],
});

export default function Page() {
  const industries = INDUSTRIES.map((i) => ({ slug: i.slug, name: i.name, short: i.short, tagline: i.tagline, icon: i.icon, stack: i.stack.map((s) => s.slug) }));
  const matrix = ["commerce", "retail", "trade", "ship", "wms", "make", "books", "crm", "comms", "reach", "insights", "people"].map((slug) => ({ slug, name: getProduct(slug).name }));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <IndustriesHubClassic industries={industries} matrix={matrix} />
    </>
  );
}
