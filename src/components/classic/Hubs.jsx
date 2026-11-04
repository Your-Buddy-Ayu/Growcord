"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import StatsSection from "@/components/landing/StatsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ClientLogos from "@/components/landing/ClientLogos";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import FaqSection from "@/components/FaqSection";
import { FaCheck } from "react-icons/fa";
import { CompareSection, OldHeading, SuiteCardsSection } from "./Sections";
import { faIcon } from "./icons";
import { PAGE_IMAGES } from "@/data/images";

/* ─────────────────────────────── /products ─────────────────────────────── */

const SUITE_FAQS = [
  {
    q: "Do I have to use every Growcord product?",
    a: "No. Start with the product you need  an online store, accounting, a POS or WhatsApp  and switch on others when you are ready. They connect automatically because they share the same records.",
  },
  {
    q: "Is each product a separate login?",
    a: "No. Growcord ID signs you in once and opens every product your organisation uses, with permissions per person.",
  },
  {
    q: "How is my business data kept separate from other companies?",
    a: "Each organisation’s business data lives in its own database, credentials and personal data are encrypted, and sensitive changes are recorded on an audit trail.",
  },
  {
    q: "Which products are in beta?",
    a: "Finance, Social and SEO Insights are in beta and marked as such. Everything else is live.",
  },
  {
    q: "How is the suite priced?",
    a: "Online stores pay a one-time setup and 5% or 10% of delivered orders; suite products switch on for your organisation; messages and shipping are billed by usage. See the pricing page for details.",
  },
];

export function ProductsHubClassic() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VisualHero
        headline="One Connected Suite to Run Your Whole Business"
        subheadline="Sell online and at the counter, ship with every courier, bill with GST, message customers on WhatsApp, run marketing and manage your team  18 products on one sign-in, one contact book and one set of accounts."
        ctaText="Find the Right Products"
        ctaLink="/contact-us?interest=suite"
        secondaryCtaText="See Pricing"
        secondaryCtaLink="/pricing"
        badge="🚀 The Growcord Suite  18 Connected Products"
        features={[
          "Online Store & POS",
          "Shipping & Warehouse",
          "GST Accounting",
          "WhatsApp & CRM",
        ]}
        image={PAGE_IMAGES.products}
        imageAlt="The Growcord suite"
        aiBadges={false}
      />
      <StatsSection
        stats={[
          { value: "18", label: "Connected Products" },
          { value: "1", label: "Sign-in for Your Team" },
          { value: "594+", label: "Platform APIs" },
          { value: "₹0", label: "Monthly Rent for Stores" },
        ]}
      />
      <SuiteCardsSection
        all
        eyebrow="The Growcord Suite"
        title="Everything a Growing Business"
        highlight="Runs On"
        text="Six families of products. Each one is useful on its own  together they share everything."
      />
      <ProcessSection
        title="One Order Moves Through"
        highlight="The Suite by Itself"
        subtitle="Follow a single COD order  every step reads what the previous one wrote. Nobody exports, imports or retypes."
        steps={[
          {
            title: "Order Placed",
            description:
              "COD verified by OTP in Commerce  the order number is created only then.",
            icon: "🛍️",
          },
          {
            title: "Picked & Packed",
            description:
              "WMS picks the oldest valid batch and records the packed weight.",
            icon: "📦",
          },
          {
            title: "GST Invoice",
            description:
              "Books raises the invoice with the right CGST, SGST or IGST.",
            icon: "🧾",
          },
          {
            title: "Courier Booked",
            description:
              "Ship prints the label and books the pickup with the courier.",
            icon: "🚚",
          },
          {
            title: "Customer Told",
            description: "Comms sends a WhatsApp update with a tracked link.",
            icon: "💬",
          },
        ]}
      />
      <SolutionSection
        title="Built Once, Shared by Every Product"
        solutions={[
          {
            icon: faIcon("fingerprint"),
            title: "One Sign-in",
            description:
              "Growcord ID opens every product with the right permissions.",
            benefits: [
              "Remove someone once  out everywhere",
              "Staff, CAs and shoppers",
              "Consent per app and purpose",
            ],
          },
          {
            icon: faIcon("users"),
            title: "One Contact Book",
            description: "Customers, leads and suppliers are each one record.",
            benefits: [
              "Matched by phone, email and GSTIN",
              "Orders and invoices on the contact",
              "Follow-ups that stop on reply",
            ],
          },
          {
            icon: faIcon("book"),
            title: "One Ledger",
            description:
              "Sales, purchases, stock and payroll post to the same accounts.",
            benefits: [
              "Immutable journals",
              "Gapless invoice numbers",
              "GSTR-1 drafts from real documents",
            ],
          },
        ]}
      />
      <ClientLogos />
      <CompareSection
        them="The Usual Stack"
        title="12 Tools That Don't Talk, or One That Does"
        text="Most growing businesses glue together a store, a courier panel, an invoicing app, a WhatsApp tool and a spreadsheet."
        rows={[
          [
            "One contact per customer across every product",
            true,
            "Five copies",
          ],
          ["Orders post their own invoices and journals", true, "Retyped"],
          ["One stock for website, counter and warehouse", true, "Mismatched"],
          ["A delivery record for every WhatsApp, SMS and email", true, false],
          ["One definition of revenue on every dashboard", true, false],
        ]}
      />
      <Testimonials title="What Our Clients Say" />
      <FaqSection
        faqs={SUITE_FAQS}
        title="Growcord Suite Frequently Asked Questions"
        description="Everything you need to know about how the products work together."
      />
      <CTASection
        headline="Tell Us How You Work  We'll Map It to the Suite"
        subheadline="A short conversation, a clear recommendation and transparent pricing. No sales pressure."
        primaryCtaText="Talk to Our Team"
        primaryCtaLink="/contact-us?interest=suite"
        secondaryCtaText="See Pricing"
        secondaryCtaLink="/pricing"
      />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────── /services ─────────────────────────────── */

const SERVICE_COLORS = [
  "from-green-500 to-emerald-600",
  "from-blue-500 to-cyan-600",
  "from-purple-500 to-pink-600",
  "from-orange-500 to-red-600",
  "from-indigo-500 to-blue-600",
  "from-teal-500 to-cyan-600",
  "from-yellow-500 to-orange-600",
  "from-pink-500 to-rose-600",
];

const SERVICES_FAQS = [
  {
    q: "Which digital marketing services does Growcord offer?",
    a: "SEO, Google and Meta ads, social media management, website development, content development, digital PR, influencer marketing, and WhatsApp, SMS and email marketing.",
  },
  {
    q: "How are your services priced?",
    a: "Each service has a starting price, and the instant-quote calculator prices every line  pages, posts, platforms, keywords  with GST before you speak to us.",
  },
  {
    q: "Will I own my accounts and data?",
    a: "Yes. Ad accounts, Search Console, analytics, social accounts and your Growcord data stay yours.",
  },
  {
    q: "Can you combine services with the Growcord platform?",
    a: "Yes. The Fully Managed e-commerce plan combines the platform with operations and ads management, and any service can be added to any Growcord product.",
  },
];

export function ServicesHubClassic({ services }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VisualHero
        headline="Growth Services With Prices You Can See"
        subheadline="SEO, ads, social media, websites, content and messaging  delivered by specialists who work inside the Growcord platform, report from real data and quote every line upfront."
        ctaText="Get Your Instant Quote"
        ctaLink="/calculator/step1"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact-us?interest=services"
        badge="🔥 500+ Businesses Trust Us"
        features={[
          "SEO & Content",
          "Google & Meta Ads",
          "Social Media",
          "Websites",
        ]}
        image={PAGE_IMAGES.services}
        imageAlt="Growcord growth services"
        aiBadges={false}
      />
      <StatsSection
        stats={[
          { value: "8", label: "Growth Services" },
          { value: "2 Min", label: "Instant Quote" },
          { value: "98%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support Available" },
        ]}
      />
      <section className="max-w-7xl mx-auto px-6 py-24 relative bg-gradient-to-br from-gray-50 to-white">
        <OldHeading
          eyebrow="Digital Marketing Services"
          title="Our Online Marketing Services"
          highlight="To Drive Results"
          text="We review your data first and only take on work we know how to deliver."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {services.map((s, i) => {
            const Icon = faIcon(s.icon);
            return (
              <motion.div
                key={s.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/${s.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden flex flex-col h-full"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-linear-to-r ${SERVICE_COLORS[i % SERVICE_COLORS.length]} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {s.summary}
                  </p>
                  <div className="mt-5 pt-4 border-t-2 border-gray-100">
                    <div className="text-xs text-gray-500 font-semibold uppercase">
                      {s.priceLabel}
                    </div>
                    <div className="text-2xl font-black text-orange-600">
                      {s.priceValue}
                    </div>
                    {s.priceUnit && (
                      <div className="text-xs text-gray-500">{s.priceUnit}</div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <SolutionSection
        title="Why Clients Choose Growcord"
        solutions={[
          {
            icon: faIcon("rupee"),
            title: "Transparent Pricing",
            description: "Every service priced upfront in our calculator.",
            benefits: [
              "See the price before a call",
              "GST shown before you commit",
              "No hidden fees",
            ],
          },
          {
            icon: faIcon("chart"),
            title: "Results You Can Check",
            description: "Reports built from data you can open yourself.",
            benefits: [
              "Search Console and ad accounts",
              "ROAS on delivered orders",
              "Monthly reporting",
            ],
          },
          {
            icon: faIcon("layers"),
            title: "Our Tools Are Our Products",
            description: "We work inside the same Growcord suite you can use.",
            benefits: [
              "SEO Insights and Reach",
              "WhatsApp Platform and CRM",
              "Your data stays in your account",
            ],
          },
        ]}
      />
      <ClientLogos />
      <ProcessSection
        title="How an Engagement"
        highlight="Runs"
        subtitle="From your first quote to monthly results."
        steps={[
          {
            title: "Quote",
            description:
              "Build your package in the calculator or with our team.",
            icon: "🧮",
          },
          {
            title: "Audit",
            description: "Accounts, tracking, site and competitors reviewed.",
            icon: "🔍",
          },
          {
            title: "Plan",
            description: "Priorities, calendar and targets agreed together.",
            icon: "🗓️",
          },
          {
            title: "Execute",
            description: "Work delivered with approvals where they matter.",
            icon: "⚙️",
          },
          {
            title: "Report",
            description: "Monthly results from data you can check.",
            icon: "📈",
          },
        ]}
      />
      <SuiteCardsSection
        eyebrow="The Tools Behind Our Work"
        title="Delivered on the"
        highlight="Growcord Suite"
        items={[
          {
            slug: "seo-insights",
            for: "Audits, rankings and backlinks for SEO clients",
          },
          {
            slug: "reach",
            for: "AI ads studio, Google connection and conversion tracking",
          },
          { slug: "social", for: "Content calendars across brands" },
          { slug: "whatsapp", for: "WhatsApp campaigns and templates" },
          { slug: "crm", for: "Leads and follow-up playbooks" },
          { slug: "commerce", for: "Websites, stores and product pages" },
        ]}
        tone="gray"
      />
      <CompareSection
        them="Typical Agency"
        title="Growcord vs a Typical Agency"
        rows={[
          ["Prices published before the first call", true, false],
          ["Results measured on delivered orders", true, "Clicks & likes"],
          ["You own every account and dataset", true, "Varies"],
          ["Reports from data you can check", true, "Slides"],
          ["Platform and services from one team", true, false],
        ]}
      />
      <Testimonials title="What Our Clients Say" />
      <FaqSection
        faqs={SERVICES_FAQS}
        title="Services Frequently Asked Questions"
      />
      <CTASection
        headline="Ready to Grow Your Business?"
        subheadline="Get a transparent cost estimate in minutes. No credit card required."
        primaryCtaText="Calculate Your Cost Now"
        primaryCtaLink="/calculator/step1"
        secondaryCtaText="View Pricing"
        secondaryCtaLink="/pricing"
      />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────── /industries ─────────────────────────────── */

const INDUSTRY_COLORS = [
  "from-blue-500 to-purple-600",
  "from-green-500 to-teal-600",
  "from-indigo-500 to-blue-600",
  "from-gray-600 to-gray-800",
  "from-orange-500 to-red-600",
  "from-purple-500 to-pink-600",
  "from-teal-500 to-cyan-600",
  "from-yellow-500 to-orange-600",
];

const INDUSTRY_FAQS = [
  {
    q: "My business fits more than one industry. Which page applies?",
    a: "Most businesses do  a manufacturer that also sells D2C, a clinic with a pharmacy. The suite is the same; start with the page closest to your main revenue.",
  },
  {
    q: "Do you build industry-specific software?",
    a: "We build one connected suite with the rules industries need  batch and expiry for pharma, price lists and credit for distribution, BOMs for manufacturing. We do not provide clinical or hospital information systems.",
  },
  {
    q: "Can you set it up for my industry?",
    a: "Yes. Our team imports your catalogue, customers, stock and accounts and configures the products your industry needs.",
  },
];

export function IndustriesHubClassic({ industries, matrix }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VisualHero
        headline="Complete Digital Solutions for Every Industry"
        subheadline="A pharmacy, a distributor and a D2C brand need different things first. Find your industry to see the products and services that matter."
        ctaText="Talk to Us"
        ctaLink="/contact-us?interest=suite"
        secondaryCtaText="Explore the Suite"
        secondaryCtaLink="/products"
        badge="🏭 Built for Indian Businesses"
        features={[
          "E-commerce & Retail",
          "Manufacturing",
          "Distribution",
          "Healthcare",
        ]}
        image={PAGE_IMAGES.industries}
        imageAlt="Growcord for every industry"
        aiBadges={false}
      />
      <StatsSection
        stats={[
          { value: String(industries.length + 1), label: "Industries Served" },
          { value: "18", label: "Products to Combine" },
          { value: "8", label: "Growth Services" },
          { value: "1", label: "Connected Suite" },
        ]}
      />
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        <OldHeading
          eyebrow="Industry Solutions"
          title="Complete Digital Solutions"
          highlight="For Every Industry"
          text="Transparent pricing, professional service and products built for the way your business works."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {[
            ...industries,
            {
              slug: "real-estate",
              name: "Real Estate",
              tagline:
                "High-conversion project landing pages with lead capture",
              icon: "house",
            },
          ].map((i, idx) => {
            const Icon = faIcon(i.icon);
            const color = INDUSTRY_COLORS[idx % INDUSTRY_COLORS.length];
            return (
              <motion.div
                key={i.slug}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/${i.slug}`}
                  className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden block h-full"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`relative w-24 h-24 rounded-3xl bg-linear-to-r ${color} flex items-center justify-center text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                    >
                      <Icon color="white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {i.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                      {i.tagline}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 group-hover:border-orange-200 transition-colors">
                      <span className="text-orange-600 font-bold text-lg group-hover:underline inline-flex items-center gap-3">
                        Explore Solutions{" "}
                        <span className="text-2xl group-hover:translate-x-3 transition-transform duration-500">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <OldHeading
            eyebrow="At a Glance"
            title="Which Products Each"
            highlight="Industry Runs On"
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] bg-white rounded-3xl shadow-xl overflow-hidden border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-5 text-left text-lg font-bold">Industry</th>
                  {matrix.map((p) => (
                    <th
                      key={p.slug}
                      className="p-3 text-center text-sm font-bold"
                    >
                      <Link
                        href={`/products/${p.slug}`}
                        className="hover:text-orange-400"
                      >
                        {p.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {industries.map((i) => (
                  <tr
                    key={i.slug}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-5 font-bold text-gray-800">
                      <Link
                        href={`/${i.slug}`}
                        className="hover:text-orange-600"
                      >
                        {i.short}
                      </Link>
                    </td>
                    {matrix.map((p) => (
                      <td key={p.slug} className="p-3 text-center">
                        {i.stack.includes(p.slug) ? (
                          <FaCheck className="mx-auto text-green-600 text-lg" />
                        ) : (
                          <span className="text-gray-300"></span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <ClientLogos />
      <SuiteCardsSection
        all
        tone="gray"
        eyebrow="The Growcord Suite"
        title="Mix and Match"
        highlight="18 Connected Products"
      />
      <Testimonials title="What Our Clients Say" />
      <FaqSection
        faqs={INDUSTRY_FAQS}
        title="Industry Frequently Asked Questions"
      />
      <CTASection
        headline="Don't See Your Industry? Tell Us How You Work"
        subheadline="We'll show you the products and services that fit  with clear pricing."
        primaryCtaText="Talk to Our Team"
        primaryCtaLink="/contact-us?interest=suite"
        secondaryCtaText="Explore the Suite"
        secondaryCtaLink="/products"
      />
      <Footer />
    </div>
  );
}
