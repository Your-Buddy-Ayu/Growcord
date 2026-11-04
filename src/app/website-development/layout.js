import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("website-development");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/website-development",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
