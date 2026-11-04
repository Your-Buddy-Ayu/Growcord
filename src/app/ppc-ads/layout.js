import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("ppc-ads");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/ppc-ads",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
