"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import StatsSection from "@/components/landing/StatsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ClientLogos from "@/components/landing/ClientLogos";
import FaqSection from "@/components/FaqSection";
import { SuiteCardsSection } from "@/components/classic/Sections";
import Email from "@/assets/Solutions/email.jpg"

// Importing Image
import Amit from "@/assets/Testimonials/amit.svg"
import Sneha from "@/assets/Testimonials/priya.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"

// Importing react icons
import { FaEnvelope, FaSms, FaWhatsapp, FaUsers, FaChartLine, FaBullhorn, FaMobile, FaRocket } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const EmailSMSMarketingLanding = () => {
    const problems = [
        {
            icon: FaEnvelope,
            title: "Low Email Open Rates",
            description:
                "Your emails aren't being opened. Poor subject lines, wrong timing, and no personalization mean your emails go straight to spam or get ignored.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Conversion Rates",
            description:
                "Even when emails are opened, they don't convert. Poor email design, weak CTAs, and no clear value proposition mean no sales.",
        },
        {
            icon: FaUsers,
            title: "No Customer Segmentation",
            description:
                "You're sending the same email to everyone. No personalization, no segmentation, and no targeting based on customer behavior or preferences.",
        },
        {
            icon: FaMobile,
            title: "Not Mobile Optimized",
            description:
                "Your emails don't look good on mobile devices, where most people read emails. Poor mobile experience means lost conversions.",
        },
        {
            icon: FaChartLine,
            title: "No Automation or Drip Campaigns",
            description:
                "You're sending emails manually with no automation. No welcome series, no abandoned cart emails, and no nurture campaigns.",
        },
        {
            icon: FaSms,
            title: "No SMS or WhatsApp Marketing",
            description:
                "You're missing out on SMS and WhatsApp marketing, which have 98% open rates. You're not reaching customers on their preferred channels.",
        },
    ];

    const solutions = [
        {
            icon: FaEnvelope,
            title: "Email Marketing Campaigns",
            description:
                "We create and manage email marketing campaigns that engage customers and drive conversions.",
            benefits: [
                "Email campaign design",
                "Automated drip campaigns",
                "A/B testing & optimization",
                "Performance tracking",
            ],
        },
        {
            icon: FaSms,
            title: "SMS Marketing",
            description:
                "Reach customers instantly with SMS campaigns that have 98% open rates and high conversion rates.",
            benefits: [
                "SMS campaign creation",
                "Bulk SMS sending",
                "Automated SMS triggers",
                "SMS analytics",
            ],
        },
        {
            icon: FaWhatsapp,
            title: "WhatsApp Marketing",
            description:
                "Leverage WhatsApp Business API for customer communication, marketing, and support.",
            benefits: [
                "WhatsApp Business setup",
                "Broadcast messaging",
                "Chatbot integration",
                "Customer support",
            ],
        },
    ];

    const features = [
        {
            icon: FaEnvelope,
            title: "Email Campaigns",
            description:
                "Professional email campaigns with high open and click rates",
        },
        {
            icon: FaSms,
            title: "SMS Marketing",
            description:
                "Bulk SMS campaigns with 98% open rates",
        },
        {
            icon: FaWhatsapp,
            title: "WhatsApp Marketing",
            description:
                "WhatsApp Business API for marketing and customer support",
        },
        {
            icon: FaUsers,
            title: "Customer Segmentation",
            description:
                "Segment customers and send personalized messages",
        },
        {
            icon: FaBullhorn,
            title: "Automated Campaigns",
            description:
                "Automated welcome series, abandoned cart, and nurture campaigns",
        },
        {
            icon: FaMobile,
            title: "Mobile Optimized",
            description:
                "All emails and messages optimized for mobile devices",
        },
        {
            icon: FaChartLine,
            title: "Analytics & Tracking",
            description:
                "Track open rates, click rates, conversions, and ROI",
        },
        {
            icon: MdTrendingUp,
            title: "High Conversion Rates",
            description:
                "Proven strategies to improve email and SMS conversion rates",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Amit Patel",
            role: "E-commerce Business Owner",
            image: Amit,
            quote:
                "Our email open rates increased from 15% to 45% after Growcord took over. Our SMS campaigns have 98% open rates, and we're getting consistent sales from both channels. Excellent results!",
        },
        {
            name: "Sneha Verma",
            role: "Service Business Owner",
            image: Sneha,
            quote:
                "Growcord set up automated email campaigns for us. We now have welcome series, abandoned cart emails, and nurture campaigns running automatically. Our customer retention improved significantly!",
        },
        {
            name: "Rajesh Kumar",
            image: Rajesh,
            role: "Retail Store Owner",
            quote:
                "WhatsApp marketing through Growcord has been a game-changer. We can now send updates, promotions, and support customers directly through WhatsApp. Customer satisfaction is at an all-time high!",
        },
    ]);

    const stats = [
        { value: "98%", label: "SMS Open Rate" },
        { value: "45%", label: "Email Open Rate" },
        { value: "300%", label: "Conversion Increase" },
        { value: "24/7", label: "Automated Campaigns" },
    ];

    const results = [
        {
            metric: "98%",
            label: "SMS Open Rate",
            description: "Average SMS open rate (vs 20% for email)",
        },
        {
            metric: "45%",
            label: "Email Open Rate",
            description: "Average email open rate (industry avg: 20%)",
        },
        {
            metric: "300%",
            label: "Conversion Increase",
            description: "Average increase in conversions from email/SMS",
        },
    ];

    const processSteps = [
        {
            title: "Strategy & Setup",
            description:
                "We analyze your business and customers to create a custom email/SMS/WhatsApp marketing strategy",
        },
        {
            title: "Campaign Creation & Automation",
            description:
                "We create campaigns, set up automation, and integrate with your systems",
        },
        {
            title: "Optimization & Growth",
            description:
                "We monitor performance, optimize campaigns, and scale successful strategies",
        },
    ];

    const [clients, setClients] = useState([
        { name: "FashionHub", logo: null },
        { name: "TechStore", logo: null },
        { name: "Retail Pro", logo: null },
    ]);

    useEffect(() => {
        loadClientImages();
        loadTestimonials();
    }, []);

    const loadClientImages = async () => {
        try {
            const { clientImagesAPI } = await import('@/lib/api');
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
            const data = await clientImagesAPI.getAll();
            if (data && data.length > 0) {
                const clientLogos = data.map(img => ({
                    name: img.name,
                    logo: img.path.startsWith('http') ? img.path : `${API_BASE_URL}${img.path}`
                }));
                setClients(clientLogos);
            }
        } catch (error) {
            console.error('Error loading client images:', error);
        }
    };

    const loadTestimonials = async () => {
        try {
            const { testimonialsAPI, imageHelper } = await import('@/lib/api');
            const data = await testimonialsAPI.getAll();
            if (data && data.length > 0) {
                // Format testimonials to ensure image URLs are properly set
                const formattedTestimonials = data.map(testimonial => imageHelper.formatTestimonial(testimonial));
                setTestimonials(formattedTestimonials);
            }
        } catch (error) {
            console.error('Error loading testimonials:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <VisualHero
                headline="Generate Better Leads with Direct Marketing"
                subheadline="Say goodbye to cold leads and hello to high-quality prospects with our proven lead generation strategies. Our team will help you attract and convert the right customers for your business through Email, SMS, and WhatsApp marketing, resulting in increased sales and business growth."
                ctaText="Get Email/SMS/WhatsApp Marketing"
                ctaLink="/calculator/step1"
                badge="📧 Trusted by 250+ Businesses for Email/SMS Marketing"
                features={[
                    "Email Marketing",
                    "SMS Campaigns",
                    "WhatsApp Business",
                    "Automated Campaigns",
                ]}
                heroImage={Email}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Email/SMS Marketing Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Marketing Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Businesses"
            />
            <FeaturesGrid features={features} title="Complete Email/SMS/WhatsApp Marketing Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "comms", "for": "Sending with consent, quiet hours and delivery records" }, { "slug": "whatsapp", "for": "Official WhatsApp Business API and templates" }, { "slug": "crm", "for": "Playbooks and segments from one contact book" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Boost Your Email/SMS Marketing?"
                subheadline="Get a transparent cost estimate for your email, SMS, and WhatsApp marketing. Reach customers directly and drive conversions."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default EmailSMSMarketingLanding;
