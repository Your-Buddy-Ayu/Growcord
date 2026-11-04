import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Growcord  Business Suite & Growth Team",
  description: "Growcord helps Indian businesses grow with transparent pricing, a connected business suite and a growth team for SEO, ads, social media and websites.",
  path: "/about-us",
});

export default function Layout({ children }) {
  return children;
}
