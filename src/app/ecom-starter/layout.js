import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Launch Your Online Store  E-commerce Starter",
  description: "Start selling online with a Growcord e-commerce store: payments, COD, shipping and WhatsApp updates built in. ₹9,999 setup and a commission only on delivered orders.",
  path: "/ecom-starter",
});

export default function EcomStarterLayout({ children }) {
  return children;
}
