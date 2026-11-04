import { getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

const industry = getIndustry("companies");

export const metadata = buildMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: "/companies",
  keywords: industry.keywords,
});

export default function Layout({ children }) {
  return children;
}
