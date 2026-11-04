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
import Web from "../../assets/Solutions/web.jpg"

// IMporting Images 
import Rahul from "@/assets/Testimonials/vikram.svg"
import Hema from "@/assets/Testimonials/hema.svg"
import Shubham from "@/assets/Testimonials/shubham.svg"

// Importing react icons
import { FaGlobe, FaMobile, FaCode, FaRocket, FaLock, FaSearch, FaChartLine, FaPaintBrush } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSpeed, MdDesignServices } from "react-icons/md";

const WebsiteDevelopmentLanding = () => {
    const problems = [
        {
            icon: FaGlobe,
            title: "No Online Presence",
            description:
                "Your business doesn't have a website. Potential customers can't find you online, and you're losing business to competitors who have a professional web presence.",
        },
        {
            icon: FaMobile,
            title: "Outdated Website",
            description:
                "Your website looks old, doesn't work on mobile, and doesn't represent your brand. It's hurting your credibility and driving customers away.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Conversion Rates",
            description:
                "Your website gets visitors but doesn't convert them into customers. Poor design, confusing navigation, and no clear call-to-action.",
        },
        {
            icon: MdSpeed,
            title: "Slow Loading Times",
            description:
                "Your website is slow, which frustrates visitors and hurts your search rankings. Every second of delay costs you customers.",
        },
        {
            icon: FaSearch,
            title: "Not SEO Optimized",
            description:
                "Your website isn't optimized for search engines. You're not ranking on Google, and potential customers can't find you.",
        },
        {
            icon: FaCode,
            title: "Technical Issues",
            description:
                "Your website has bugs, broken links, security issues, and doesn't work properly. You need a reliable, professional website.",
        },
    ];

    const solutions = [
        {
            icon: FaGlobe,
            title: "Professional Website Development",
            description:
                "We build modern, responsive websites that represent your brand and convert visitors into customers.",
            benefits: [
                "Custom design & development",
                "Mobile-responsive design",
                "Fast loading times",
                "SEO optimized",
            ],
        },
        {
            icon: FaRocket,
            title: "E-commerce Solutions",
            description:
                "Build powerful online stores with shopping carts, payment gateways, and inventory management.",
            benefits: [
                "Shopping cart & checkout",
                "Payment gateway integration",
                "Product management",
                "Order tracking",
            ],
        },
        {
            icon: FaChartLine,
            title: "Website Maintenance & Support",
            description:
                "Ongoing maintenance, updates, and support to keep your website running smoothly.",
            benefits: [
                "Regular updates",
                "Security monitoring",
                "Performance optimization",
                "24/7 support",
            ],
        },
    ];

    const features = [
        {
            icon: FaPaintBrush,
            title: "Custom Design",
            description:
                "Unique, professional designs that reflect your brand and stand out",
        },
        {
            icon: FaMobile,
            title: "Responsive Design",
            description:
                "Perfect experience on desktop, tablet, and mobile devices",
        },
        {
            icon: MdSpeed,
            title: "Fast Performance",
            description:
                "Optimized for speed with fast loading times",
        },
        {
            icon: FaSearch,
            title: "SEO Optimized",
            description:
                "Built-in SEO features to rank higher in search results",
        },
        {
            icon: FaLock,
            title: "Secure & Reliable",
            description:
                "SSL certificates, secure hosting, and regular security updates",
        },
        {
            icon: FaCode,
            title: "Modern Technology",
            description:
                "Built with latest technologies for better performance",
        },
        {
            icon: FaChartLine,
            title: "Analytics Integration",
            description:
                "Track visitors, behavior, and conversion metrics",
        },
        {
            icon: MdDesignServices,
            title: "Easy Content Management",
            description:
                "User-friendly CMS to update content without coding",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Rahul Sharma",
            role: "Business Owner",
            image: Rahul,
            quote:
                "Getting a professional website transformed our business. We started getting inquiries online, and our credibility improved significantly. Growcord delivered exactly what we needed!",
        },
        {
            name: "Hema Pathak",
            role: "E-commerce Store Owner",
            image: Hema,
            quote:
                "Our new website is fast, beautiful, and converts visitors into customers. Sales increased by 250% after launch. The team at Growcord is professional and delivers results!",
        },
        {
            name: "Shubham Thakur",
            role: "Service Provider",
            image: Shubham,
            quote:
                "Professional, fast, and exactly what we needed. The website looks great, works perfectly on mobile, and we can update it ourselves. Highly recommend Growcord!",
        },
    ]);

    const stats = [
        { value: "250%", label: "Average Traffic Increase" },
        { value: "95%", label: "Mobile Responsive" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" },
    ];

    const results = [
        {
            metric: "250%",
            label: "Traffic Increase",
            description: "Average increase in website traffic after launch",
        },
        {
            metric: "95%",
            label: "Mobile Traffic",
            description: "Responsive design captures mobile users",
        },
        {
            metric: "300%",
            label: "More Inquiries",
            description: "Professional websites attract more customers",
        },
    ];

    const processSteps = [
        {
            title: "Planning & Design",
            description:
                "We understand your business, create a design, and plan your website structure",
        },
        {
            title: "Development & Testing",
            description:
                "We build your website with modern technologies and test everything thoroughly",
        },
        {
            title: "Launch & Support",
            description:
                "We launch your website and provide ongoing support and maintenance",
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

                headline="Fast Search Optimized Websites Built for Growth"
                subheadline="Dominate search rankings with ultra fast page speeds, clean code architecture, and mobile first responsiveness. Turn organic search impressions into qualified commercial leads right out of the box."
                ctaText="Get Your Custom Site"
                ctaLink="/calculator/step1"
                badge="🌐 Trusted by 300+ Businesses for Website Development"
                features={[
                    "Custom Design",
                    "Mobile Responsive",
                    "SEO Optimized",
                    "Fast & Secure",
                ]}
                heroImage={Web}
                imageId="home-hero"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Website Development Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Website Problems"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Businesses"
            />
            <FeaturesGrid features={features} title="Complete Website Development Features" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="Powered by the"
                highlight="Growcord Suite"
                items={[{ "slug": "commerce", "for": "Online stores, page builder and product pages" }, { "slug": "crm", "for": "Website enquiries in one contact book" }, { "slug": "insights", "for": "Traffic, funnels and conversions" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Build Your Professional Website?"
                subheadline="Get a transparent cost estimate for your website development. Start attracting customers and growing your business online."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default WebsiteDevelopmentLanding;
