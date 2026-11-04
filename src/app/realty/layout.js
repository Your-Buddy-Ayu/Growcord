import { buildMetadata } from "@/lib/seo";

// /real-estate is the maintained real-estate landing page; this older variant points search engines there.
export const metadata = {
  ...buildMetadata({
    title: "Real Estate Digital Solutions",
    description: "Lead generation websites and landing pages for real estate developers and channel partners.",
    path: "/real-estate",
  }),
};

export default function RealtyLayout({ children }) {
  return children;
}
