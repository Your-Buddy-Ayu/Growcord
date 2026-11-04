import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("seo");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/seo",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
