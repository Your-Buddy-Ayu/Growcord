import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("social-media-management");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/social-media-management",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
