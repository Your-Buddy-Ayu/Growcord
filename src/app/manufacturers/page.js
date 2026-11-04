import IndustryClassic from "@/components/classic/IndustryClassic";
import JsonLd from "@/components/site/JsonLd";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";

const industry = getIndustry("manufacturers");

export const metadata = buildMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: "/manufacturers",
  keywords: industry.keywords,
});

export default function Page() {
  const services = industry.services.map(getService).filter(Boolean).map(({ slug, name, icon, tagline }) => ({ slug, name, icon, tagline }));
  return (
    <>
      <JsonLd data={[faqLd(industry.faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: industry.short, path: "/manufacturers" }])]} />
      <IndustryClassic industry={industry} services={services} />
    </>
  );
}
