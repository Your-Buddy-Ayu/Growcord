import { getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

const industry = getIndustry("hospitals");

export const metadata = buildMetadata({
  title: industry.metaTitle,
  description: industry.metaDescription,
  path: "/hospitals",
  keywords: industry.keywords,
});

export default function Layout({ children }) {
  return children;
}
