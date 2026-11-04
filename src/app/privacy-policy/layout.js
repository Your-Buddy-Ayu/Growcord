import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Growcord collects, uses, stores and protects personal information across its website, products and services.",
  path: "/privacy-policy",
});

export default function Layout({ children }) {
  return children;
}
