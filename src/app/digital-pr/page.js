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
import Digital from "@/assets/Solutions/digital.jpg"

// Importing Images 
// IMporting Images 
import Vikram from "@/assets/Testimonials/amit.svg"
import Anjali from "@/assets/Testimonials/anjali.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"

// Importing react icons
import { FaNewspaper, FaUsers, FaChartLine, FaSearch, FaGlobe, FaStar, FaLink, FaBullhorn } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const DigitalPRLanding = () => {
    const problems = [
        {
            icon: FaSearch,
            title: "No Online Reputation",
            description:
                "Your business has no online presence or reputation. When people search for you, they find nothing or negative reviews. You're invisible online.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Negative Reviews & Mentions",
            description:
                "Negative reviews and mentions are hurting your reputation. You don't know how to respond or manage your online reputation effectively.",
        },
        {
            icon: FaUsers,
            title: "Low Brand Awareness",
            description:
                "People don't know about your brand. You're not getting media coverage, press mentions, or industry recognition.",
        },
        {
            icon: FaGlobe,
            title: "No Media Coverage",
            description:
                "You're not getting featured in publications, blogs, or news sites. Your brand isn't getting the exposure it deserves.",
        },
        {
            icon: FaChartLine,
            title: "Poor Online Visibility",
            description:
                "Your brand doesn't appear in search results, news articles, or industry publications. You're missing opportunities for exposure.",
        },
        {
            icon: FaLink,
            title: "No Backlinks or Citations",
            description:
                "You don't have quality backlinks or citations from authoritative sites, which hurts your SEO and credibility.",
        },
    ];

    const solutions = [
        {
            icon: FaNewspaper,
            title: "Press Release Distribution",
            description:
                "We create and distribute press releases to get your brand featured in news publications and industry blogs.",
            benefits: [
                "Press release writing",
                "Media distribution",
                "Publication outreach",
                "Coverage tracking",
            ],
        },
        {
            icon: FaBullhorn,
            title: "Media Relations & Outreach",
            description:
                "We build relationships with journalists and media outlets to get your brand featured in publications.",
            benefits: [
                "Media contact database",
                "Pitch creation & distribution",
                "Interview coordination",
                "Media relationship building",
            ],
        },
        {
            icon: FaStar,
            title: "Reputation Management",
            description:
                "We monitor and manage your online reputation, respond to reviews, and build positive brand mentions.",
            benefits: [
                "Review monitoring",
                "Reputation repair",
                "Positive content creation",
                "Crisis management",
            ],
        },
    ];

    const features = [
        {
            icon: FaNewspaper,
            title: "Press Release Writing",
            description:
                "Professional press releases that get published in top publications",
        },
        {
            icon: FaBullhorn,
            title: "Media Outreach",
            description:
                "Strategic outreach to journalists and media outlets",
        },
        {
            icon: FaStar,
            title: "Reputation Management",
            description:
                "Monitor and manage your online reputation across all platforms",
        },
        {
            icon: FaLink,
            title: "Backlink Building",
            description:
                "Build quality backlinks from authoritative websites",
        },
        {
            icon: FaGlobe,
            title: "Brand Mentions",
            description:
                "Get your brand mentioned in industry publications and blogs",
        },
        {
            icon: FaUsers,
            title: "Thought Leadership",
            description:
                "Position yourself as an industry expert through media coverage",
        },
        {
            icon: FaChartLine,
            title: "Coverage Tracking",
            description:
                "Track all mentions, coverage, and brand mentions",
        },
        {
            icon: MdTrendingUp,
            title: "Brand Awareness",
            description:
                "Increase brand awareness through strategic PR campaigns",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Vikram Malhotra",
            role: "Tech Startup Founder",
            image: Vikram,
            quote:
                "Growcord got us featured in 5 major tech publications within 3 months. Our brand awareness increased dramatically, and we started getting inquiries from investors and customers. Excellent PR strategy!",
        },
        {
            name: "Anjali Mehta",
            role: "E-commerce Business Owner",
            image: Anjali,
            quote:
                "We had negative reviews hurting our reputation. Growcord helped us turn it around with positive content and strategic PR. Our online reputation is now excellent, and sales have increased!",
        },
        {
            name: "Rajesh Nair",
            role: "Service Business Owner",
            image: Rajesh,
            quote:
                "Before Growcord, nobody knew about our brand. Now we're getting featured in industry publications regularly, and our credibility has improved significantly. Great PR results!",
        },
    ]);

    const stats = [
        { value: "500%", label: "Brand Awareness Increase" },
        { value: "50+", label: "Media Mentions" },
        { value: "90%", label: "Positive Sentiment" },
        { value: "24/7", label: "Reputation Monitoring" },
    ];

    const results = [
        {
            metric: "500%",
            label: "Brand Awareness",
            description: "Average increase in brand awareness through PR",
        },
        {
            metric: "50+",
            label: "Media Mentions",
            description: "Average media mentions per campaign",
        },
        {
            metric: "90%",
            label: "Positive Sentiment",
            description: "Positive brand sentiment in media coverage",
        },
    ];

    const processSteps = [
        {
            title: "Strategy Development",
            description:
                "We analyze your brand, target audience, and goals to create a custom PR strategy",
        },
        {
            title: "Content Creation & Distribution",
            description:
                "We create press releases and content, then distribute to relevant media outlets",
        },
        {
            title: "Monitoring & Optimization",
            description:
                "We monitor coverage, manage reputation, and optimize campaigns for better results",
        },
    ];

    const [clients, setClients] = useState([
        { name: "TechStart", logo: null },
        { name: "Business First", logo: null },
        { name: "Digital Solutions", logo: null },
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
                headline="Build Your Online Reputation & Brand Presence"
                subheadline="Get featured in top publications, build your online reputation, and increase brand awareness. Our digital PR strategies help you get media coverage, manage your reputation, and position yourself as an industry leader."
                ctaText="Get Digital PR Services"
                ctaLink="/calculator/step1"
                badge="📰 Trusted by 100+ Businesses for Digital PR"
                features={[
                    "Press Release Distribution",
                    "Media Relations",
                    "Reputation Management",
                    "Brand Mentions",
                ]}
                heroImage={Digital}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Digital PR Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your PR Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Brands"
            />
            <FeaturesGrid features={features} title="Complete Digital PR Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "reach", "for": "Google Business Profile reviews: sync, reply, curate" }, { "slug": "links", "for": "Tracked links in releases and profiles" }, { "slug": "seo-insights", "for": "Backlinks gained from coverage" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Build Your Online Reputation?"
                subheadline="Get a transparent cost estimate for your digital PR services. Get media coverage, build reputation, and increase brand awareness."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default DigitalPRLanding;
