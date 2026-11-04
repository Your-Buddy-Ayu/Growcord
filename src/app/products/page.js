import JsonLd from "@/components/site/JsonLd";
import { ProductsHubClassic } from "@/components/classic/Hubs";
import { PRODUCTS } from "@/data/products";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "The Growcord Suite  18 Connected Business Apps for Indian Companies",
  description:
    "Explore the Growcord suite: Commerce, Retail POS, Trade, Ship, WMS, Make, Books, Finance, CRM, Comms, WhatsApp Platform, Reach, Social, Links & eCards, Insights, SEO Insights, People and Growcord ID  one sign-in, one contact book, one ledger.",
  path: "/products",
  keywords: ["business software suite india", "all in one business software", "erp for smb india", "zoho alternative india", "connected business apps"],
});

export default function Page() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Growcord suite",
    itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/products/${p.slug}`), name: `Growcord ${p.name}` })),
  };
  return (
    <>
      <JsonLd data={[itemList, breadcrumbLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])]} />
      <ProductsHubClassic />
    </>
  );
}
