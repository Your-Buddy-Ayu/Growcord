import { buildMetadata } from "@/lib/seo";

// A payment step has no search value; keep it out of the index but let crawlers follow links.
export const metadata = buildMetadata({
  title: "Checkout",
  description: "Complete your Growcord plan purchase securely with Razorpay.",
  path: "/checkout",
  noindex: true,
});

export default function CheckoutLayout({ children }) {
  return children;
}
