import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { PRODUCT_GROUPS, productsInGroup } from "@/data/productNav";

const Logo = "/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-orange-600/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* The Growcord Suite  every product, in the footer's own style */}
        <div className="mb-12 pb-12 border-b-2 border-gray-700/50">
          <h4
            className="font-bold text-lg mb-6"
            style={{
              color: "#ffffff",
              textShadow:
                "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <Link
              href="/products"
              className="hover:text-orange-400 transition-colors"
            >
              The Growcord Suite
            </Link>
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {PRODUCT_GROUPS.map((g) => (
              <div key={g.key}>
                <div className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-3">
                  {g.name}
                </div>
                <ul className="space-y-2">
                  {productsInGroup(g.key).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <img
                  src={Logo}
                  alt="GrowCord - india's best digital marketing agency"
                />
              </Link>
            </div>
            <p
              className="text-base leading-relaxed text-white"
              style={{
                color: "#f3f4f6",
                textShadow: "0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              Helping businesses grow with transparent pricing and professional
              digital solutions.
            </p>
          </div>
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator/step1"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Growcord Suite
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Industries
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/ecommerce"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/clinics"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitals"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturers"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link
                  href="/distributors"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Distributors
                </Link>
              </li>
              <li>
                <Link
                  href="/retail-stores"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Pharmacies & Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  All Industries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/social-media-management"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/seo"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/ppc-ads"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Social & PPC Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/website-development"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-pr"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Digital PR
                </Link>
              </li>
              <li>
                <Link
                  href="/content-development"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Content Development
                </Link>
              </li>
              <li>
                <Link
                  href="/email-sms-marketing"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Email/SMS/WhatsApp Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/influencer-marketing"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Influencer Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Legal & Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-refund-policy"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-delivery-policy"
                  className="text-gray-200 hover:text-orange-400 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all"></span>
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="min-w-12 min-h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span>
                    <IoIosMail size="30px" color="white" />
                  </span>
                </div>
                <a
                  href="mailto:contact@growcord.com"
                  className="font-medium w-max text-gray-200 hover:text-white transition-colors"
                >
                  contact@growcord.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span>
                    <FaPhone size="24px" color="white" />
                  </span>
                </div>
                <a
                  href="tel:+917827831337"
                  className="font-medium text-gray-200 hover:text-white transition-colors"
                >
                  +91 7827831337
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-sm font-medium text-gray-200">
            &copy; {new Date().getFullYear()} Growcord. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
