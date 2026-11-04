"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import EcommerceFeatures from "@/components/landing/EcommerceFeatures";
import EcommercePricing from "@/components/landing/EcommercePricing";
import WebsiteShowcase from "@/components/landing/WebsiteShowcase";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import TrustBadges from "@/components/landing/TrustBadges";
import ClientLogos from "@/components/landing/ClientLogos";
import AIFeatures from "@/components/landing/AIFeatures";
import ComparisonTable from "@/components/landing/ComparisonTable";
import ProcessSection from "@/components/landing/ProcessSection";
import FAQSection from "@/components/FaqSection";

// We'll use local testimonials if API fails or for initial render
const defaultTestimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder, Urban Style",
        quote: "Growcord transformed our local boutique into a national brand. The Shiprocket integration alone saved us hours every day.",
        result: "300% Growth",
        rating: 5
    },
    {
        name: "Priya Patel",
        role: "CEO, Organic Life",
        quote: "The product variation system is a game changer. We can finally manage our complex inventory easily. Highly recommended!",
        result: "2x Conversion",
        rating: 5
    },
    {
        name: "Amit Kumar",
        role: "Director, Tech Gadgets",
        quote: "Setup was incredibly fast. We were live and accepting payments within hours. The support team is also fantastic.",
        result: "₹5L+ Sales/Mo",
        rating: 5
    }
];

const EcomStarterLanding = () => {
    const [testimonials, setTestimonials] = useState(defaultTestimonials);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch testimonials logic could go here
    }, []);

    // Removed unused heroFeatures variable

    return (
        <div className="font-sans antialiased text-gray-900 bg-white selection:bg-orange-200 selection:text-orange-900">
            <Navbar />

            {/* Hero Section */}
            <VisualHero
                headline="The World's First AI-Powered E-commerce Builder"
                subheadline="Don't just build a store. Let AI generate your products, videos, and marketing content instantly. No plugins required."
                ctaText="Start Free Trial"
                badge="✨ AI-First Platform"
                features={["AI Video Generator", "AI Content Writer", "Zero Transaction Fees", "Mobile First Design"]}
            />

            {/* Trust Badges - Immediate credibility */}
            <ClientLogos />

            {/* AI Features - The Core Differentiator */}
            <AIFeatures />

            {/* Website Showcase - The "Wow" Factor */}
            <WebsiteShowcase />

            {/* Process - How it works */}
            <ProcessSection />

            {/* Features Grid - Detailed Value */}
            <EcommerceFeatures />

            {/* Comparison - Us vs Them */}
            <ComparisonTable />

            {/* Social Proof / Clients */}
            <Testimonials testimonials={testimonials} title="Trusted by 5,000+ Entrepreneurs" />

            {/* Pricing Section - 3 Plans */}
            <EcommercePricing />

            {/* FAQs */}
            <FAQSection />

            {/* Final CTA */}
            <CTASection
                headline="Ready to Skyrocket Your Sales?"
                subheadline="Join thousands of successful entrepreneurs using Growcord to build their dream business."
                primaryCtaText="Start Your Store Now"
                primaryCtaLink="/calculator/step1"
            />

            <Footer />
        </div>
    );
};

export default EcomStarterLanding;
