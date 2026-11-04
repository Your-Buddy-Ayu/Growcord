import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern the use of the Growcord website, products and growth services.",
  path: "/terms-and-conditions",
});

export default function Layout({ children }) {
  return children;
}
