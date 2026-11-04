import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("email-sms-marketing");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/email-sms-marketing",
  keywords: service.keywords,
});

export default function Layout({ children }) {
  return children;
}
