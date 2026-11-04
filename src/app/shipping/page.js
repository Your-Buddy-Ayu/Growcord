import ShippingServicesPage from "@/components/shipping/ShippingServicesPage";
import JsonLd from "@/components/site/JsonLd";

export const metadata = {
  title: {
    absolute: "eCommerce Shipping Aggregator India  Ship from ₹19/500g | GrowShip by Growcord",
  },
  description:
    "Growcord's multi-carrier shipping aggregator connects 15+ couriers (Delhivery, BlueDart, DTDC, Xpressbees) in 1 unified wallet. Slash RTO by 38%, get T+2 COD remittance, and ship to 29,000+ Indian PIN codes.",
  keywords: [
    "ecommerce shipping aggregator india",
    "shipping aggregator like shiprocket",
    "cheap ecommerce courier rates",
    "delhivery bluedart shipping panel",
    "automated ndr management",
    "rto reduction software",
    "t+2 early cod remittance",
    "multi courier shipping software",
  ],
  alternates: {
    canonical: "/shipping",
  },
  openGraph: {
    title: "eCommerce Shipping Aggregator India | GrowShip by Growcord",
    description: "Ship with 15+ couriers from ₹19/500g. 1 unified wallet, automated WhatsApp NDR resolution, and T+2 COD remittance.",
    url: "/shipping",
    type: "website",
    siteName: "Growcord",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Shipping Aggregator India | GrowShip by Growcord",
    description: "Ship with 15+ couriers from ₹19/500g. 1 unified wallet, automated WhatsApp NDR resolution, and T+2 COD remittance.",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GrowShip by Growcord",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    url: "https://growcord.in/shipping",
    description:
      "High-velocity multi-carrier shipping aggregator for Indian eCommerce brands. Includes 15+ courier networks, automated WhatsApp NDR deflector, and T+2 COD remittance.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Zero monthly platform subscription. Pay per shipment starting from ₹19/500g.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1240",
    },
    provider: {
      "@type": "Organization",
      name: "Growcord",
      url: "https://growcord.in",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "eCommerce Shipping & Logistics Aggregator",
    provider: {
      "@type": "Organization",
      name: "Growcord",
      url: "https://growcord.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "eCommerce Logistics Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Express Air Domestic Shipping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Surface Freight Shipping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated WhatsApp NDR & RTO Reduction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "T+2 Early COD Remittance",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is Growcord's Shipping Aggregator different from using couriers like Delhivery or BlueDart directly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When contracting directly with a single courier, merchants are locked into specific PIN code limitations and high minimum monthly volume thresholds. GrowShip aggregates 15+ Tier-1 courier networks under one master account with discounted rates from ₹19/500g and zero volume lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "How fast does COD money reach my bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GrowShip operates on an early T+2 remittance cycle. Once an order is delivered and the carrier reconciles cash collection, the payout is remitted directly to your verified bank account within 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "How does GrowShip help reduce RTO (Return to Origin)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GrowShip features an active automated NDR desk. When a delivery attempt fails, an automated WhatsApp prompt is triggered to the customer with 1-tap options to reschedule or update address. Rider GPS logs are verified to eliminate fraudulent non-delivery remarks, reducing RTO by up to 38%.",
        },
      },
    ],
  },
];

export default function ShippingPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />
      <ShippingServicesPage />
    </>
  );
}

