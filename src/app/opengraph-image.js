import { ImageResponse } from "next/og";
import OgCard from "@/components/site/OgCard";

export const alt = "Growcord  the connected business suite for India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <OgCard eyebrow="Business suite + growth team" title="Sell, ship, bill, message and grow  on one connected suite" subtitle="Commerce · POS · Shipping · Warehouse · GST accounting · CRM · WhatsApp · Marketing · HR" />,
    size
  );
}
