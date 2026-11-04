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
import Ads from "@/assets/Solutions/ads.jpg"


// Importing Images 
import Rajesh from "@/assets/Testimonials/rajesh.svg"
import Priya from "@/assets/Testimonials/priya.svg"
import Amit from "@/assets/Testimonials/amit.svg"


// Importing react icons
import { FaAd, FaDollarSign, FaChartLine, FaBullseye, FaUsers, FaMobile, FaRocket, FaHandPointer } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const PPCAdsLanding = () => {
    const problems = [
        {
            icon: FaDollarSign,
            title: "High Cost Per Click",
            description:
                "You're paying too much for each click. Your ad spend is high, but you're not getting enough conversions. Your cost per acquisition is eating into your profits.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Conversion Rates",
            description:
                "People click your ads but don't buy. Your landing pages aren't converting, and you're wasting money on clicks that don't lead to sales.",
        },
        {
            icon: FaBullseye,
            title: "Poor Targeting",
            description:
                "Your ads are showing to the wrong people. You're reaching people who aren't interested in your products or services, wasting your ad budget.",
        },
        {
            icon: FaChartLine,
            title: "No Ad Strategy",
            description:
                "You're running ads without a clear strategy. No A/B testing, no optimization, and no understanding of what's working and what's not.",
        },
        {
            icon: FaUsers,
            title: "Low Quality Score",
            description:
                "Your ads have low quality scores, which means you pay more for worse ad positions. Google penalizes poor ad quality.",
        },
        {
            icon: FaMobile,
            title: "Mobile Optimization Issues",
            description:
                "Your ads and landing pages don't work well on mobile devices, where most people see your ads. You're losing mobile conversions.",
        },
    ];

    const solutions = [
        {
            icon: FaAd,
            title: "Strategic Ad Campaigns",
            description:
                "We create and manage targeted ad campaigns on Google, Facebook, Instagram, and LinkedIn that drive results.",
            benefits: [
                "Campaign strategy & setup",
                "Ad copy & creative design",
                "Keyword research & targeting",
                "Bid management & optimization",
            ],
        },
        {
            icon: FaBullseye,
            title: "Advanced Targeting",
            description:
                "We use advanced targeting options to reach the right audience at the right time with the right message.",
            benefits: [
                "Audience segmentation",
                "Demographic targeting",
                "Interest-based targeting",
                "Retargeting campaigns",
            ],
        },
        {
            icon: FaChartLine,
            title: "Performance Optimization",
            description:
                "We continuously optimize your campaigns to improve ROI, lower costs, and increase conversions.",
            benefits: [
                "A/B testing",
                "Bid optimization",
                "Landing page optimization",
                "Conversion tracking",
            ],
        },
    ];

    const features = [
        {
            icon: FaAd,
            title: "Google Ads Management",
            description:
                "Expert management of Google Search, Display, and Shopping campaigns",
        },
        {
            icon: FaUsers,
            title: "Social Media Ads",
            description:
                "Facebook, Instagram, LinkedIn, and Twitter ad campaigns",
        },
        {
            icon: FaBullseye,
            title: "Advanced Targeting",
            description:
                "Precise audience targeting to reach your ideal customers",
        },
        {
            icon: FaHandPointer,
            title: "Landing Page Optimization",
            description:
                "Optimize landing pages to convert more visitors into customers",
        },
        {
            icon: FaChartLine,
            title: "Performance Tracking",
            description:
                "Track ROI, conversions, and campaign performance in real-time",
        },
        {
            icon: FaRocket,
            title: "Campaign Optimization",
            description:
                "Continuous optimization to improve results and lower costs",
        },
        {
            icon: FaMobile,
            title: "Mobile-First Ads",
            description:
                "Ads optimized for mobile devices where most users see them",
        },
        {
            icon: MdTrendingUp,
            title: "ROI Improvement",
            description:
                "Proven strategies to improve return on ad spend",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Rajesh Kumar",
            role: "E-commerce Business Owner",
            image: Rajesh,
            quote:
                "Growcord reduced our cost per acquisition by 60% while increasing conversions by 200%. We're now getting better results with less ad spend. Their PPC expertise is unmatched!",
        },
        {
            name: "Priya Sharma",
            role: "Service Business Owner",
            image: Priya,
            quote:
                "We went from spending $5000/month with no results to spending $3000/month and getting 50+ qualified leads. Growcord's ad strategy transformed our business!",
        },
        {
            name: "Amit Desai",
            role: "Real Estate Developer",
            image: Amit,
            quote:
                "Our Google Ads campaigns were bleeding money. Growcord optimized everything, and now we're getting 3x more leads at half the cost. Best decision we made!",
        },
    ]);

    const stats = [
        { value: "60%", label: "Cost Reduction" },
        { value: "200%", label: "Conversion Increase" },
        { value: "300%", label: "ROI Improvement" },
        { value: "24/7", label: "Campaign Management" },
    ];

    const results = [
        {
            metric: "60%",
            label: "Cost Reduction",
            description: "Average reduction in cost per acquisition",
        },
        {
            metric: "200%",
            label: "Conversion Increase",
            description: "Average increase in conversion rates",
        },
        {
            metric: "300%",
            label: "ROI Improvement",
            description: "Average improvement in return on ad spend",
        },
    ];

    const processSteps = [
        {
            title: "Campaign Strategy & Setup",
            description:
                "We analyze your business, target audience, and competitors to create winning ad campaigns",
        },
        {
            title: "Launch & Optimization",
            description:
                "We launch your campaigns and continuously optimize for better performance",
        },
        {
            title: "Scale & Grow",
            description:
                "We scale successful campaigns and expand to new channels for maximum reach",
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
                headline="Boost Your Ecom Sales with Targeted Ads"
                subheadline="Unlock the full potential of your e-commerce business and maximize sales with our expert digital marketing strategies. From targeted advertising to conversion optimization, we'll help you boost your online sales and drive revenue growth."
                ctaText="Get PPC Ads Management"
                ctaLink="/calculator/step1"
                badge="📊 Trusted by 180+ Businesses for PPC Advertising"
                features={[
                    "Google Ads",
                    "Social Media Ads",
                    "Conversion Optimization",
                    "ROI Tracking",
                ]}
                heroImage={Ads}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="PPC Advertising Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your PPC Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Businesses"
            />
            <FeaturesGrid features={features} title="Complete PPC Advertising Services" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "reach", "for": "AI ads studio, Google connection and conversion tracking" }, { "slug": "insights", "for": "Funnels and results on delivered orders" }, { "slug": "commerce", "for": "Catalogue feeds for Shopping and catalogue ads" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Launch Profitable Ad Campaigns?"
                subheadline="Get a transparent cost estimate for your PPC advertising. Reduce costs, increase conversions, and improve ROI."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default PPCAdsLanding;
