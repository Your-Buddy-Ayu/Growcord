import { getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

const industry = getIndustry("clinics");

export const metadata = buildMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: "/clinics",
  keywords: industry.keywords,
});

export default function Layout({ children }) {
  return children;
}
