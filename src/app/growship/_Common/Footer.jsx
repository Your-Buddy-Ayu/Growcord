import GrowshipLogo from "../../../assets/GrowShipLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061a34] border-t border-white/10 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a
              href="/growship"
              className="group inline-flex items-center gap-2.5"
            >
              <img src={GrowshipLogo.src} alt="GrowShip" className="h-16" />
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              GrowShip brings courier booking, labels, tracking, exceptions and
              delivery intelligence into one focused operations workspace for
              modern commerce teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
              Product
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  href="/growship/how-it-works"
                  className="transition-colors hover:text-[#f47721]"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="/growship/capabilities"
                  className="transition-colors hover:text-[#f47721]"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="/growship/intelligence"
                  className="transition-colors hover:text-[#f47721]"
                >
                  Courier intelligence
                </a>
              </li>
              <li>
                <a
                  href="https://growcord.in/products/ship"
                  className="transition-colors hover:text-[#f47721]"
                >
                  Product details
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
              Support
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  href="/growship/faq"
                  className="transition-colors hover:text-[#f47721]"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="https://growcord.in/contact-us"
                  className="transition-colors hover:text-[#f47721]"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="https://growcord.in/shipping-delivery-policy"
                  className="transition-colors hover:text-[#f47721]"
                >
                  Shipping policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {currentYear} Growcord. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
