import { getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

const industry = getIndustry("ecommerce");

export const metadata = buildMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: "/ecommerce",
  keywords: industry.keywords,
});

export default function Layout({ children }) {
  return children;
}
