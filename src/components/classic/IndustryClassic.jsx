"use client";

import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import StatsSection from "@/components/landing/StatsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ClientLogos from "@/components/landing/ClientLogos";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import FaqSection from "@/components/FaqSection";
import { OldHeading, SuiteCardsSection } from "./Sections";
import { faIcon } from "./icons";
import { INDUSTRY_IMAGES } from "@/data/images";

/** An industry page (manufacturers, distributors, retail stores) in the original industry pages' look. */
export default function IndustryClassic({ industry: ind, services }) {
  const solutions = [
    ...ind.workflows.map((w, i) => ({
      icon: faIcon(i === 0 ? ind.icon : "workflow"),
      title: w.title,
      description: w.text,
      benefits: w.points,
    })),
    {
      icon: faIcon("shield"),
      title: "Built for Indian Rules",
      description:
        "The compliance your industry lives by, handled inside the products.",
      benefits: ind.compliance.slice(0, 4),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <VisualHero
        headline={`${ind.hero.title} ${ind.hero.highlight}`}
        subheadline={ind.hero.lede}
        ctaText="Talk to Us"
        ctaLink="/contact-us?interest=suite"
        secondaryCtaText="See Pricing"
        secondaryCtaLink="/pricing"
        badge={ind.hero.eyebrow}
        features={ind.stack.slice(0, 4).map((s) => s.why.split(",")[0])}
        heroImage={ind.image}
        image={INDUSTRY_IMAGES[ind.slug]}
        imageAlt={ind.name}
        aiBadges={false}
      />

      <StatsSection stats={ind.facts} />

      <ProblemSection
        title={`What Slows ${ind.short} Down`}
        problems={ind.pains.map((x) => ({
          icon: faIcon(x.icon),
          title: x.title,
          description: x.text,
        }))}
      />

      <SolutionSection
        title={`How Growcord Helps ${ind.short}`}
        solutions={solutions}
      />

      <ClientLogos />

      <SuiteCardsSection
        eyebrow="Your Stack"
        title={`The Products ${ind.short}`}
        highlight="Run On"
        text="Start with one. Add the next when you need it  they already share the same customers, stock and accounts."
        items={ind.stack.map((s) => ({ slug: s.slug, for: s.why }))}
        tone="gray"
      />

      <ProcessSection
        title="A Day on"
        highlight="Growcord"
        subtitle="What a normal working day looks like when every part of the business reads from the same records."
        steps={ind.day.map((d) => ({
          title: `${d.time} · ${d.title}`,
          description: d.text,
        }))}
      />

      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        <OldHeading
          eyebrow="Growth Services"
          title="Want Us to"
          highlight="Run It for You?"
          text="Our team handles marketing and websites for businesses like yours  with every price shown upfront."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = faIcon(s.icon);
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300"
              >
                <div className="w-16 h-16 rounded-xl bg-linear-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <Testimonials title="What Our Clients Say" />

      <FaqSection
        faqs={ind.faqs}
        title={`${ind.short} Frequently Asked Questions`}
        description={ind.tagline}
      />

      <CTASection
        headline={`Ready to Grow Your ${ind.short.replace(/s$/, "")} Business?`}
        subheadline="Show us how you work today and we’ll show you the products and services that fit  with clear pricing."
        primaryCtaText="Talk to Our Team"
        primaryCtaLink="/contact-us?interest=suite"
        secondaryCtaText="Explore the Suite"
        secondaryCtaLink="/products"
      />

      <Footer />
    </div>
  );
}
