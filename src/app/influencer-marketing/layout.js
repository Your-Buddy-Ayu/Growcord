import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("influencer-marketing");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/influencer-marketing",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
