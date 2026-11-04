import Header from "./_common/Header";
import Footer from "./_common/Footer";

export const metadata = {
  metadataBase: new URL("https://growship.in"),
  applicationName: "GrowShip",
  title: { default: "GrowShip | Shipping operations software", template: "%s | GrowShip" },
  description: "GrowShip brings courier booking, labels, tracking, exceptions and delivery intelligence into one focused operations workspace.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "GrowShip",
    type: "website",
    locale: "en_IN",
    url: "https://growship.in",
    title: "GrowShip | Deliver with control",
    description: "A clearer shipping workspace for modern commerce teams.",
  },
  twitter: { card: "summary_large_image" },
};

export default function GrowShipLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}