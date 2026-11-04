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
import Seo from "@/assets/Solutions/seo.jpg"

// Importing Image 
import Amit from "@/assets/Testimonials/amit.svg"
import Sneha from "@/assets/Testimonials/hema.svg"
import Vikram from "@/assets/Testimonials/vikram.svg"

// Importing react icons
import { FaSearch, FaChartLine, FaGlobe, FaCode, FaLink, FaFileAlt, FaMobile, FaRocket } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSpeed, MdVisibility } from "react-icons/md";

const SEOLanding = () => {
    const problems = [
        {
            icon: FaSearch,
            title: "Not Ranking on Google",
            description:
                "Your website doesn't show up in search results. When people search for your products or services, they find your competitors instead of you.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Organic Traffic",
            description:
                "You're not getting enough visitors from search engines. You're relying on paid ads, which cost money every time someone clicks.",
        },
        {
            icon: MdVisibility,
            title: "Poor Search Visibility",
            description:
                "Even when you do rank, you're on page 2 or 3 where nobody looks. You need to be on the first page to get clicks.",
        },
        {
            icon: FaCode,
            title: "Technical SEO Issues",
            description:
                "Your website has technical problems that prevent search engines from properly indexing and ranking your pages.",
        },
        {
            icon: FaMobile,
            title: "Mobile Optimization Problems",
            description:
                "Your site isn't mobile-friendly, which hurts your rankings. Google prioritizes mobile-optimized sites.",
        },
        {
            icon: FaChartLine,
            title: "No SEO Strategy",
            description:
                "You don't have a clear SEO strategy. You're not targeting the right keywords or optimizing your content for search.",
        },
    ];

    const solutions = [
        {
            icon: FaSearch,
            title: "On-Page SEO Optimization",
            description:
                "Optimize your website's content, structure, and technical elements for better search rankings.",
            benefits: [
                "Keyword research & optimization",
                "Content optimization",
                "Meta tags & descriptions",
                "Technical SEO fixes",
            ],
        },
        {
            icon: FaLink,
            title: "Off-Page SEO & Link Building",
            description:
                "Build high-quality backlinks and improve your domain authority to rank higher in search results.",
            benefits: [
                "Link building campaigns",
                "Local SEO optimization",
                "Citation building",
                "Directory submissions",
            ],
        },
        {
            icon: FaChartLine,
            title: "SEO Analytics & Reporting",
            description:
                "Track your rankings, traffic, and conversions with comprehensive SEO analytics and monthly reports.",
            benefits: [
                "Ranking tracking",
                "Traffic analysis",
                "Conversion tracking",
                "Monthly performance reports",
            ],
        },
    ];

    const features = [
        {
            icon: FaSearch,
            title: "Keyword Research",
            description:
                "In-depth keyword research to target the right search terms your customers use",
        },
        {
            icon: FaCode,
            title: "Technical SEO",
            description:
                "Fix technical issues, improve site speed, and optimize site structure",
        },
        {
            icon: FaFileAlt,
            title: "Content Optimization",
            description:
                "Optimize existing content and create SEO-friendly new content",
        },
        {
            icon: FaLink,
            title: "Link Building",
            description:
                "Build high-quality backlinks from authoritative websites",
        },
        {
            icon: FaMobile,
            title: "Mobile Optimization",
            description:
                "Ensure your site is mobile-friendly and ranks well on mobile searches",
        },
        {
            icon: FaGlobe,
            title: "Local SEO",
            description:
                "Optimize for local searches and Google My Business listings",
        },
        {
            icon: MdSpeed,
            title: "Site Speed Optimization",
            description:
                "Improve page load times for better user experience and rankings",
        },
        {
            icon: FaRocket,
            title: "Ranking Improvement",
            description:
                "Proven strategies to move your site from page 2-3 to page 1",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Amit Patel",
            role: "E-commerce Business Owner",
            image: Amit,
            quote:
                "We went from page 3 to page 1 for our main keywords in just 4 months. Our organic traffic increased by 400%, and we're getting leads every day. Growcord's SEO strategy is outstanding!",
        },
        {
            name: "Sneha Verma",
            role: "Service Business Owner",
            image: Sneha,
            quote:
                "Before Growcord, we were invisible on Google. Now we rank #1 for our main service keywords and get 50+ leads per month from organic search. Best ROI we've ever had!",
        },
        {
            name: "Vikram Malhotra",
            role: "Real Estate Agent",
            image: Vikram,
            quote:
                "Our website now ranks on the first page for all our target keywords. We're getting qualified leads daily, and our phone hasn't stopped ringing. Growcord transformed our business!",
        },
    ]);

    const stats = [
        { value: "400%", label: "Average Traffic Increase" },
        { value: "85%", label: "First Page Rankings" },
        { value: "300%", label: "Lead Generation" },
        { value: "24/7", label: "SEO Monitoring" },
    ];

    const results = [
        {
            metric: "400%",
            label: "Traffic Increase",
            description: "Average increase in organic search traffic",
        },
        {
            metric: "85%",
            label: "First Page Rankings",
            description: "Keywords ranking on Google's first page",
        },
        {
            metric: "300%",
            label: "More Leads",
            description: "Increase in qualified leads from organic search",
        },
    ];

    const processSteps = [
        {
            title: "SEO Audit & Strategy",
            description:
                "We analyze your website, competitors, and target keywords to create a custom SEO strategy",
        },
        {
            title: "Optimization & Implementation",
            description:
                "We optimize your site, create content, and build quality backlinks",
        },
        {
            title: "Monitoring & Improvement",
            description:
                "We track performance, adjust strategies, and continuously improve your rankings",
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
                headline="Want To Rank Above Competition?"
                subheadline="Get found on Google when customers search for your products or services. Our proven SEO strategies help you rank on the first page, drive organic traffic, and generate qualified leads without paying for every click."
                ctaText="Get SEO Services"
                ctaLink="/calculator/step1"
                badge="🔍 Trusted by 150+ Businesses for SEO"
                features={[
                    "First Page Rankings",
                    "Organic Traffic Growth",
                    "Technical SEO",
                    "Monthly Reporting",
                ]}
                heroImage={Seo}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="SEO Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your SEO Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Businesses"
            />
            <FeaturesGrid features={features} title="Complete SEO Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "seo-insights", "for": "Site audits, keyword positions and backlink tracking" }, { "slug": "reach", "for": "Search Console, Analytics and Business Profile on one connection" }, { "slug": "insights", "for": "Organic traffic that turned into orders" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Rank on Google's First Page?"
                subheadline="Get a transparent cost estimate for your SEO services. Start ranking higher and driving organic traffic to your website."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default SEOLanding;
