import GrowShipLanding from "./GrowShipLanding";
import JsonLd from "@/components/site/JsonLd";

const faqs = [
  ["Which courier networks can I connect?", "GrowShip supports Shiprocket and Delhivery today. You can use your own connected accounts, or use the platform account where available."],
  ["Can an order be sent in more than one parcel?", "Yes. Each parcel gets its own shipment and timeline. The order stays partially delivered until every parcel is delivered."],
  ["How does the shipping wallet work?", "For platform-account shipments, you can use a prepaid wallet. Each debit is itemised so operations and finance can understand the charge."],
  ["Does GrowShip send customer updates?", "Shipment events can be handed to Growcord Comms for shipped, out-for-delivery and delivered customer notifications."],
];

export const metadata = {
  title: { absolute: "GrowShip | Shipping software for faster, clearer delivery operations" },
  description:
    "GrowShip is a shipping operations workspace for booking courier shipments, labels, pickups, tracking, NDR action and delivery insight.",
  keywords: [
    "shipping software india",
    "courier booking software",
    "ecommerce shipping panel",
    "shipment tracking software",
    "ndr management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "GrowShip | Deliver with control",
    description: "One calm shipping workspace for labels, pickups, tracking and exceptions.",
    url: "/",
    images: [{ url: "/growship/growship-hero.png", width: 1586, height: 990, alt: "GrowShip logistics operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowShip | Deliver with control",
    description: "One calm shipping workspace for labels, pickups, tracking and exceptions.",
    images: ["/growship/growship-hero.png"],
  },
};

export default function GrowShipPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GrowShip",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://growship.in",
            description: "Shipping operations software for courier booking, labels, pickups, parcel tracking, NDR action and delivery insight.",
            provider: { "@type": "Organization", name: "Growcord", url: "https://growcord.in" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          },
        ]}
      />
      <GrowShipLanding />
    </>
  );
}
