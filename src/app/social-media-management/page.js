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
import SocialMedia from "../../assets/Solutions/socialmedia.jpg"

// Importing Imgaes 
import Priya from "@/assets/Testimonials/priya.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"
import Anjali from "@/assets/Testimonials/anjali.svg"

// Importing react icons
import { FaShareAlt, FaUsers, FaChartLine, FaClock, FaHashtag, FaImage, FaVideo, FaComments } from "react-icons/fa";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const SocialMediaManagementLanding = () => {
    const problems = [
        {
            icon: FaClock,
            title: "No Time for Social Media",
            description:
                "Running social media accounts takes hours every day. You're too busy running your business to post consistently, engage with followers, and create content.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Engagement Rates",
            description:
                "Your posts get few likes, comments, or shares. You're posting but not seeing results. Your audience isn't growing, and engagement is declining.",
        },
        {
            icon: FaUsers,
            title: "Inconsistent Brand Presence",
            description:
                "Your social media presence is inconsistent. Sometimes you post, sometimes you don't. Your brand voice is unclear, and followers don't know what to expect.",
        },
        {
            icon: FaChartLine,
            title: "No Strategy or Analytics",
            description:
                "You're posting without a strategy. You don't know what's working, what's not, or how to improve. No data to guide your decisions.",
        },
        {
            icon: FaHashtag,
            title: "Poor Content Quality",
            description:
                "Your content doesn't stand out. Low-quality images, boring captions, and no clear call-to-action. Your competitors are doing better.",
        },
        {
            icon: FaComments,
            title: "No Community Management",
            description:
                "Comments and messages go unanswered. You're missing opportunities to engage with customers, answer questions, and build relationships.",
        },
    ];

    const solutions = [
        {
            icon: FaShareAlt,
            title: "Complete Social Media Management",
            description:
                "We handle all aspects of your social media presence - from content creation to community management.",
            benefits: [
                "Content creation & scheduling",
                "Platform management (Facebook, Instagram, LinkedIn, Twitter)",
                "Community engagement & responses",
                "Performance tracking & reporting",
            ],
        },
        {
            icon: MdTrendingUp,
            title: "Strategic Content Planning",
            description:
                "Data-driven content strategy that aligns with your business goals and resonates with your audience.",
            benefits: [
                "Content calendar development",
                "Brand voice & messaging",
                "Hashtag research & strategy",
                "Trend analysis & adaptation",
            ],
        },
        {
            icon: BsGraphUpArrow,
            title: "Analytics & Reporting",
            description:
                "Comprehensive analytics to track performance, measure ROI, and optimize your social media strategy.",
            benefits: [
                "Monthly performance reports",
                "Engagement rate tracking",
                "Follower growth analysis",
                "ROI measurement",
            ],
        },
    ];

    const features = [
        {
            icon: FaImage,
            title: "Content Creation",
            description:
                "High-quality graphics, images, and videos designed to engage your audience",
        },
        {
            icon: FaShareAlt,
            title: "Multi-Platform Management",
            description:
                "Manage Facebook, Instagram, LinkedIn, Twitter, and more from one place",
        },
        {
            icon: FaComments,
            title: "Community Management",
            description:
                "Respond to comments, messages, and engage with your audience in real-time",
        },
        {
            icon: FaChartLine,
            title: "Performance Analytics",
            description:
                "Track engagement, reach, impressions, and conversions with detailed reports",
        },
        {
            icon: FaHashtag,
            title: "Hashtag Strategy",
            description:
                "Research and implement effective hashtag strategies to increase visibility",
        },
        {
            icon: FaVideo,
            title: "Video Content",
            description:
                "Create engaging video content including reels, stories, and live videos",
        },
        {
            icon: FaClock,
            title: "Content Scheduling",
            description:
                "Plan and schedule posts in advance for consistent brand presence",
        },
        {
            icon: BsGraphUpArrow,
            title: "Growth Strategy",
            description:
                "Data-driven strategies to grow followers and increase engagement",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Priya Sharma",
            role: "E-commerce Business Owner",
            image: Priya,
            quote:
                "Our social media engagement increased by 300% after Growcord took over. They understand our brand and create content that truly resonates with our audience. Best investment we made!",
        },
        {
            name: "Rajesh Kumar",
            role: "Restaurant Owner",
            image: Rajesh,
            quote:
                "We went from posting randomly to having a strategic content calendar. Our followers doubled in 3 months, and we're getting more reservations through social media than ever before.",
        },
        {
            name: "Anjali Mehta",
            role: "Fashion Brand Founder",
            image: Anjali,
            quote:
                "The team at Growcord transformed our Instagram presence. Our engagement rate increased by 250%, and we're now getting consistent sales from social media. Highly recommend!",
        },
    ]);

    const stats = [
        { value: "300%", label: "Average Engagement Increase" },
        { value: "200%", label: "Follower Growth" },
        { value: "85%", label: "Client Satisfaction" },
        { value: "24/7", label: "Community Management" },
    ];

    const results = [
        {
            metric: "300%",
            label: "Engagement Increase",
            description: "Average increase in likes, comments, and shares",
        },
        {
            metric: "200%",
            label: "Follower Growth",
            description: "Consistent growth in organic followers",
        },
        {
            metric: "150%",
            label: "Brand Awareness",
            description: "Increased reach and brand visibility",
        },
    ];

    const processSteps = [
        {
            title: "Strategy Development",
            description:
                "We analyze your business, audience, and competitors to create a custom social media strategy",
        },
        {
            title: "Content Creation & Scheduling",
            description:
                "We create engaging content and schedule it across all platforms",
        },
        {
            title: "Management & Optimization",
            description:
                "We manage your accounts, engage with followers, and optimize based on performance data",
        },
    ];

    const [clients, setClients] = useState([
        { name: "FashionHub", logo: null },
        { name: "TechStore", logo: null },
        { name: "Restaurant Pro", logo: null },
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
                headline="Increase Brand Awareness Through Social Media"
                subheadline="Strong brand awareness and brand recognition mean your brand is top of mind when people think about your products or services. They recognize your logo or tagline, making it easier to communicate effectively through social content, especially in images or short-form videos."
                ctaText="Get Social Media Management"
                ctaLink="/calculator/step1"
                badge="📱 Trusted by 200+ Businesses for Social Media Management"
                features={[
                    "Multi-Platform Management",
                    "Content Creation",
                    "Community Engagement",
                    "Performance Analytics",
                ]}
                heroImage={SocialMedia}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Social Media Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Social Media Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Brands"
            />
            <FeaturesGrid features={features} title="Complete Social Media Management Features" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "social", "for": "Content calendar across brands and accounts" }, { "slug": "links", "for": "Tracked short links in every post" }, { "slug": "crm", "for": "Leads from social enquiries in one contact book" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Boost Your Social Media Presence?"
                subheadline="Get a transparent cost estimate for your social media management. Increase engagement, grow followers, and build brand awareness."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default SocialMediaManagementLanding;
