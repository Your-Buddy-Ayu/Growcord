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
import Content from "@/assets/Solutions/content.jpg"

// Importing Images 
import Priya from "@/assets/Testimonials/priya.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"
import Anjali from "@/assets/Testimonials/anjali.svg"

// Importing react icons
import { FaFileAlt, FaPen, FaImage, FaVideo, FaChartLine, FaSearch, FaUsers, FaRocket } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const ContentDevelopmentLanding = () => {
    const problems = [
        {
            icon: FaFileAlt,
            title: "No Content Strategy",
            description:
                "You're creating content randomly without a strategy. No clear goals, no target audience, and no plan for what content to create or when to publish it.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low-Quality Content",
            description:
                "Your content doesn't engage readers or convert. Poor writing, boring topics, and no clear value proposition. Your content isn't getting shares or engagement.",
        },
        {
            icon: FaUsers,
            title: "No Time to Create Content",
            description:
                "Creating quality content takes hours. You're too busy running your business to write blog posts, create graphics, or produce videos consistently.",
        },
        {
            icon: FaSearch,
            title: "Content Not SEO Optimized",
            description:
                "Your content isn't optimized for search engines. It doesn't rank on Google, and people can't find it when searching for relevant topics.",
        },
        {
            icon: FaChartLine,
            title: "No Content Performance Data",
            description:
                "You don't know what content is working, what's not, or how to improve. No analytics or data to guide your content strategy.",
        },
        {
            icon: FaImage,
            title: "Lack of Visual Content",
            description:
                "Your content is text-heavy with no visuals. No graphics, infographics, or videos to engage your audience and make content shareable.",
        },
    ];

    const solutions = [
        {
            icon: FaFileAlt,
            title: "Content Strategy & Planning",
            description:
                "We develop a comprehensive content strategy aligned with your business goals and target audience.",
            benefits: [
                "Content calendar development",
                "Topic research & planning",
                "SEO-optimized content",
                "Content performance tracking",
            ],
        },
        {
            icon: FaPen,
            title: "Content Creation",
            description:
                "We create high-quality, engaging content including blog posts, articles, and web copy.",
            benefits: [
                "Blog writing",
                "Website content",
                "Product descriptions",
                "Marketing copy",
            ],
        },
        {
            icon: FaImage,
            title: "Visual Content Creation",
            description:
                "We create graphics, infographics, and visual content that engages and converts.",
            benefits: [
                "Graphic design",
                "Infographics",
                "Social media graphics",
                "Visual storytelling",
            ],
        },
    ];

    const features = [
        {
            icon: FaFileAlt,
            title: "Blog Writing",
            description:
                "SEO-optimized blog posts that engage readers and rank on Google",
        },
        {
            icon: FaPen,
            title: "Website Content",
            description:
                "Compelling website copy that converts visitors into customers",
        },
        {
            icon: FaImage,
            title: "Graphic Design",
            description:
                "Professional graphics and visuals for all your content needs",
        },
        {
            icon: FaVideo,
            title: "Video Content",
            description:
                "Engaging video content including explainer videos and tutorials",
        },
        {
            icon: FaSearch,
            title: "SEO Optimization",
            description:
                "All content optimized for search engines to rank higher",
        },
        {
            icon: FaChartLine,
            title: "Content Analytics",
            description:
                "Track performance and optimize content based on data",
        },
        {
            icon: FaUsers,
            title: "Content Strategy",
            description:
                "Data-driven content strategies aligned with business goals",
        },
        {
            icon: MdTrendingUp,
            title: "Content That Converts",
            description:
                "Content designed to engage, educate, and convert your audience",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Priya Sharma",
            role: "E-commerce Business Owner",
            image: Priya,
            quote:
                "Growcord's content strategy transformed our blog. We went from 100 monthly visitors to 10,000+ in 6 months. Our content now ranks on Google and drives qualified leads daily!",
        },
        {
            name: "Rajesh Kumar",
            role: "Service Business Owner",
            image: Rajesh,
            quote:
                "We didn't have time to create content. Growcord handles everything - from strategy to writing to graphics. Our content quality improved dramatically, and we're getting more inquiries!",
        },
        {
            name: "Anjali Mehta",
            role: "Tech Startup Founder",
            image: Anjali,
            quote:
                "The content Growcord creates is engaging, SEO-optimized, and converts. Our blog traffic increased by 500%, and we're now seen as thought leaders in our industry. Excellent work!",
        },
    ]);

    const stats = [
        { value: "500%", label: "Traffic Increase" },
        { value: "300%", label: "Engagement Rate" },
        { value: "200%", label: "Lead Generation" },
        { value: "24/7", label: "Content Creation" },
    ];

    const results = [
        {
            metric: "500%",
            label: "Traffic Increase",
            description: "Average increase in website traffic from content",
        },
        {
            metric: "300%",
            label: "Engagement Rate",
            description: "Average increase in content engagement",
        },
        {
            metric: "200%",
            label: "Lead Generation",
            description: "Average increase in leads from content marketing",
        },
    ];

    const processSteps = [
        {
            title: "Content Strategy Development",
            description:
                "We analyze your business, audience, and goals to create a custom content strategy",
        },
        {
            title: "Content Creation & Optimization",
            description:
                "We create high-quality, SEO-optimized content across all formats",
        },
        {
            title: "Distribution & Optimization",
            description:
                "We distribute content, track performance, and optimize for better results",
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
                headline="High-Impact Content That Positions Your Brand as an Authority"
                subheadline="Cut through digital noise with insightful thought leadership, customer first web copy, and engaging multi format creative. Build long term brand credibility while keeping your audience engaged across every touchpoint."
                ctaText="Start Building Content"
                ctaLink="/calculator/step1"
                badge="✍️ Trusted by 200+ Businesses for Content Development"
                features={[
                    "Blog Writing",
                    "Graphic Design",
                    "SEO Optimized",
                    "Content Strategy",
                ]}
                heroImage={Content}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Content Development Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Content Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Businesses"
            />
            <FeaturesGrid features={features} title="Complete Content Development Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "commerce", "for": "Product page studio with AI-assisted drafts" }, { "slug": "social", "for": "Scheduling designed posts" }, { "slug": "seo-insights", "for": "Keyword gaps and content opportunities" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Create Content That Converts?"
                subheadline="Get a transparent cost estimate for your content development. Create engaging content that drives traffic and converts visitors."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default ContentDevelopmentLanding;
