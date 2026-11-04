import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("digital-pr");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/digital-pr",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
