import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cancellation & Refund Policy",
  description: "Growcord's policy on cancellations, refunds and how refund requests are handled for plans and services.",
  path: "/cancellation-refund-policy",
});

export default function Layout({ children }) {
  return children;
}
