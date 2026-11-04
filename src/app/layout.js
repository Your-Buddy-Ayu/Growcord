import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import ScriptsInjector from "@/components/ScriptsInjector";
import JsonLd from "@/components/site/JsonLd";
import { SITE } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Growcord  Connected Business Suite & Growth Team for India",
    template: "%s | Growcord",
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: SITE.url,
    title: "Growcord  Connected Business Suite & Growth Team for India",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", site: "@growcord" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: "#030712",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WTBCHFT');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WTBCHFT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Razorpay is loaded by the checkout page itself; lazy here for older funnels. */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

        <FacebookPixel />
        <LinkedInInsightTag />
        <MicrosoftClarity />
        <ScriptsInjector />

        <JsonLd data={[organizationLd(), websiteLd()]} />

        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
