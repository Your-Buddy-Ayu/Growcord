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
import Influence from "@/assets/Solutions/influence.jpg"

// importing image 
import Anjali from "@/assets/Testimonials/anjali.svg"
import Priya from "@/assets/Testimonials/priya.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"

// Importing react icons
import { FaUserFriends, FaUsers, FaChartLine, FaHandshake, FaRocket, FaImage, FaVideo, FaBullhorn } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const InfluencerMarketingLanding = () => {
    const problems = [
        {
            icon: FaUsers,
            title: "No Influencer Connections",
            description:
                "You don't know which influencers to work with or how to reach them. No network, no relationships, and no understanding of influencer marketing.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low ROI from Influencer Campaigns",
            description:
                "You've tried influencer marketing but didn't see results. Wrong influencers, poor campaign strategy, and no tracking of results.",
        },
        {
            icon: FaHandshake,
            title: "Difficulty Finding Right Influencers",
            description:
                "Finding influencers who align with your brand, have the right audience, and fit your budget is challenging and time-consuming.",
        },
        {
            icon: FaChartLine,
            title: "No Campaign Strategy",
            description:
                "You're working with influencers without a clear strategy. No goals, no measurement, and no understanding of what success looks like.",
        },
        {
            icon: FaUserFriends,
            title: "Fake Followers & Engagement",
            description:
                "You're worried about working with influencers who have fake followers or low engagement rates. No way to verify authenticity.",
        },
        {
            icon: FaBullhorn,
            title: "No Content Control",
            description:
                "Influencers create content that doesn't match your brand or messaging. No control over what they post or how they represent your brand.",
        },
    ];

    const solutions = [
        {
            icon: FaUserFriends,
            title: "Influencer Discovery & Vetting",
            description:
                "We find and vet influencers who align with your brand, have authentic audiences, and fit your budget.",
            benefits: [
                "Influencer database access",
                "Audience analysis",
                "Engagement rate verification",
                "Fake follower detection",
            ],
        },
        {
            icon: FaHandshake,
            title: "Campaign Management",
            description:
                "We manage end-to-end influencer campaigns from strategy to execution to measurement.",
            benefits: [
                "Campaign strategy",
                "Influencer outreach",
                "Content approval",
                "Performance tracking",
            ],
        },
        {
            icon: FaChartLine,
            title: "ROI Tracking & Reporting",
            description:
                "We track campaign performance, measure ROI, and provide detailed reports on results.",
            benefits: [
                "Performance analytics",
                "ROI measurement",
                "Engagement tracking",
                "Monthly reports",
            ],
        },
    ];

    const features = [
        {
            icon: FaUserFriends,
            title: "Influencer Discovery",
            description:
                "Find the right influencers for your brand across all platforms",
        },
        {
            icon: FaUsers,
            title: "Audience Analysis",
            description:
                "Analyze influencer audiences to ensure they match your target market",
        },
        {
            icon: FaHandshake,
            title: "Campaign Management",
            description:
                "End-to-end management of influencer campaigns",
        },
        {
            icon: FaImage,
            title: "Content Creation",
            description:
                "Collaborate with influencers to create authentic brand content",
        },
        {
            icon: FaVideo,
            title: "Video Campaigns",
            description:
                "Leverage video content from influencers for maximum impact",
        },
        {
            icon: FaChartLine,
            title: "Performance Tracking",
            description:
                "Track engagement, reach, conversions, and ROI",
        },
        {
            icon: FaRocket,
            title: "Multi-Platform Campaigns",
            description:
                "Run campaigns across Instagram, YouTube, TikTok, and more",
        },
        {
            icon: MdTrendingUp,
            title: "Brand Awareness",
            description:
                "Increase brand awareness through authentic influencer partnerships",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Priya Sharma",
            role: "Fashion Brand Owner",
            image: Priya,
            quote:
                "Growcord connected us with the perfect influencers for our brand. Our influencer campaigns generated 500% ROI, and we saw a massive increase in brand awareness and sales. Excellent service!",
        },
        {
            name: "Rajesh Kumar",
            role: "E-commerce Business Owner",
            image: Rajesh,
            quote:
                "We tried influencer marketing on our own and failed. Growcord's strategy and influencer network made all the difference. We're now getting consistent results and building brand credibility!",
        },
        {
            name: "Anjali Mehta",
            role: "Beauty Brand Founder",
            image: Anjali,
            quote:
                "The influencers Growcord found for us have authentic audiences and high engagement. Our campaigns are driving real sales, not just vanity metrics. Highly recommend their influencer marketing services!",
        },
    ]);

    const stats = [
        { value: "500%", label: "Average ROI" },
        { value: "300%", label: "Brand Awareness" },
        { value: "200%", label: "Engagement Rate" },
        { value: "100+", label: "Influencer Network" },
    ];

    const results = [
        {
            metric: "500%",
            label: "Average ROI",
            description: "Average return on investment from influencer campaigns",
        },
        {
            metric: "300%",
            label: "Brand Awareness",
            description: "Average increase in brand awareness",
        },
        {
            metric: "200%",
            label: "Engagement Rate",
            description: "Average increase in engagement from influencer content",
        },
    ];

    const processSteps = [
        {
            title: "Strategy & Influencer Discovery",
            description:
                "We develop a campaign strategy and find the right influencers for your brand",
        },
        {
            title: "Campaign Execution",
            description:
                "We manage influencer outreach, content creation, and campaign execution",
        },
        {
            title: "Tracking & Optimization",
            description:
                "We track performance, measure ROI, and optimize campaigns for better results",
        },
    ];

    const [clients, setClients] = useState([
        { name: "FashionHub", logo: null },
        { name: "Beauty Brand", logo: null },
        { name: "Lifestyle Brand", logo: null },
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
                headline="Leverage Influencer Partnerships to Reach New Audiences"
                subheadline="Connect with the right influencers who align with your brand and have authentic audiences. Our influencer marketing strategies help you build brand awareness, drive sales, and reach new customers through trusted voices in your industry."
                ctaText="Get Influencer Marketing Services"
                ctaLink="/calculator/step1"
                badge="👥 Trusted by 150+ Brands for Influencer Marketing"
                features={[
                    "Influencer Discovery",
                    "Campaign Management",
                    "ROI Tracking",
                    "Multi-Platform",
                ]}
                heroImage={Influence}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Influencer Marketing Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Influencer Marketing Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Brands"
            />
            <FeaturesGrid features={features} title="Complete Influencer Marketing Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "links", "for": "A tracked short link per creator" }, { "slug": "reach", "for": "Creator coupon codes with guardrails" }, { "slug": "insights", "for": "Orders and revenue per creator" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Launch Influencer Campaigns?"
                subheadline="Get a transparent cost estimate for your influencer marketing. Connect with the right influencers and drive brand awareness and sales."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default InfluencerMarketingLanding;
