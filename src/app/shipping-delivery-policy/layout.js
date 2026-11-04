import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shipping & Delivery Policy",
  description: "How Growcord delivers its digital products and services, timelines and what to expect after purchase.",
  path: "/shipping-delivery-policy",
});

export default function Layout({ children }) {
  return children;
}
