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
import { trackViewContent } from "@/components/FacebookPixel";
import Comapnies from "../../assets/Solutions/companies.jpg"

// Importing Images 
import Amit from "@/assets/Testimonials/amit.svg"
import Rahul from "@/assets/Testimonials/rajesh.svg"
import Sneha from "@/assets/Testimonials/priya.svg"

// importing icons
import { FaGlobe, FaMobileAlt, FaSearch, FaEnvelope, FaChartBar, FaClock, FaRocket, FaBriefcase, FaLock, FaPalette, FaBolt } from "react-icons/fa";

const CompaniesLanding = () => {
    const problems = [
        {
            icon: FaGlobe,
            title: "No Online Presence",
            description:
                "Your business doesn't exist online. Potential customers can't find you, and you're losing business to competitors with websites.",
        },
        {
            icon: FaMobileAlt,
            title: "Outdated Website",
            description:
                "Your website looks old, doesn't work on mobile, and doesn't represent your brand. It&apos;s hurting your credibility.",
        },
        {
            icon: FaSearch,
            title: "Poor Search Visibility",
            description:
                "Your business doesn't show up in Google searches. Without SEO, customers can't find you when they need your services.",
        },
        {
            icon: FaEnvelope,
            title: "No Lead Generation",
            description:
                "No way for potential customers to contact you easily. Missing out on inquiries and business opportunities.",
        },
        {
            icon: FaChartBar,
            title: "No Analytics",
            description:
                "Can't track website visitors, see what&apos;s working, or understand your audience. Flying blind on marketing efforts.",
        },
        {
            icon: FaClock,
            title: "Time-Consuming Updates",
            description:
                "Every small change requires a developer. You need a simple way to update content without technical knowledge.",
        },
    ];

    const solutions = [
        {
            icon: FaGlobe,
            title: "Professional Website",
            description:
                "Modern, responsive website that represents your brand and converts visitors into customers.",
            benefits: [
                "Mobile-responsive design",
                "Fast loading times",
                "SEO optimized",
                "Easy to update",
            ],
        },
        {
            icon: FaRocket,
            title: "SEO & Digital Marketing",
            description:
                "Get found online with proper SEO, social media presence, and digital marketing strategies.",
            benefits: [
                "Search engine optimization",
                "Social media integration",
                "Content marketing",
                "Local SEO",
            ],
        },
        {
            icon: FaBriefcase,
            title: "Branding & Design",
            description:
                "Professional branding that builds trust and makes your business stand out.",
            benefits: [
                "Logo design",
                "Brand identity",
                "Marketing materials",
                "Consistent branding",
            ],
        },
    ];

    const features = [
        {
            icon: FaMobileAlt,
            title: "Responsive Design",
            description: "Perfect experience on desktop, tablet, and mobile devices",
        },
        {
            icon: FaBolt,
            title: "Fast Performance",
            description: "Optimized for speed with fast loading times",
        },
        {
            icon: FaSearch,
            title: "SEO Optimized",
            description: "Built-in SEO features to rank higher in search results",
        },
        {
            icon: FaLock,
            title: "Content Management",
            description: "Easy-to-use CMS to update content without coding",
        },
        {
            icon: FaEnvelope,
            title: "Contact Forms",
            description: "Lead generation forms to capture inquiries",
        },
        {
            icon: FaChartBar,
            title: "Analytics Integration",
            description: "Track visitors, behavior, and conversion metrics",
        },
        {
            icon: FaLock,
            title: "Secure & Reliable",
            description: "SSL certificates and reliable hosting",
        },
        {
            icon: FaPalette,
            title: "Custom Design",
            description: "Unique design that reflects your brand",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Rahul Sharma",
            role: "Business Owner",
            image: Rahul,
            quote:
                "Getting a professional website transformed our business. We started getting inquiries online, and our credibility improved significantly. Best investment we made.",
        },
        {
            name: "Sneha Verma",
            role: "Service Provider",
            image: Sneha,
            quote:
                "The SEO optimization brought us so many new customers. We&apos;re now ranking on Google and getting regular inquiries. The website pays for itself.",
        },
        {
            name: "Amit Desai",
            role: "Company Director",
            image: Amit,
            quote:
                "Professional, fast, and exactly what we needed. The website looks great, works perfectly on mobile, and we can update it ourselves. Highly recommend!",
        },
    ]);

    const stats = [
        { value: "300%", label: "More Inquiries" },
        { value: "95%", label: "Mobile Responsive" },
        { value: "80%", label: "SEO Improvement" },
        { value: "24/7", label: "Online Presence" },
    ];

    const results = [
        {
            metric: "300%",
            label: "More Inquiries",
            description: "Professional websites attract more customers",
        },
        {
            metric: "80%",
            label: "SEO Improvement",
            description: "Better search rankings drive traffic",
        },
        {
            metric: "95%",
            label: "Mobile Traffic",
            description: "Responsive design captures mobile users",
        },
    ];

    const processSteps = [
        {
            title: "Calculate Your Cost",
            description:
                "Get an instant, transparent estimate for your company website",
        },
        {
            title: "Custom Development",
            description: "We build your website with all features you need",
        },
        {
            title: "Launch & Grow",
            description: "Go live and attract customers with our support",
        },
    ];

    const [clients, setClients] = useState([
        { name: "TechStart", logo: null },
        { name: "Business First", logo: null },
        { name: "Digital Solutions", logo: null },
    ]);

    useEffect(() => {
        trackViewContent('Companies Landing Page', 'page');
    }, []);

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
                headline="Professional Website That Grows Your Business"
                subheadline="Get a modern website that attracts customers and builds trust. From design to SEO, branding to analytics - everything you need to establish your online presence and grow your business."
                ctaText="Get Your Business Online"
                ctaLink="/calculator/step1"
                badge="💼 Trusted by 300+ Companies"
                features={[
                    "Professional Design",
                    "SEO Optimized",
                    "Mobile Responsive",
                    "Easy to Update",
                ]}
                heroImage={Comapnies}
                imageId="business-type-companies"
            />
            <StatsSection stats={stats} />
            <ProblemSection problems={problems} title="Common Business Challenges" />
            <SolutionSection
                solutions={solutions}
                title="Complete Digital Solutions"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Companies"
            />
            <FeaturesGrid features={features} title="Website Features" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials
                testimonials={testimonials}
                title="What Business Owners Say"
            />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="The Products That"
                highlight="Run Your Business"
                items={[{ "slug": "crm", "for": "Pipeline, follow-ups and playbooks" }, { "slug": "books", "for": "Service invoices, recurring billing and GSTR-1" }, { "slug": "finance", "for": "Bank statements and proprietor accounts" }, { "slug": "people", "for": "Attendance, leave and payroll" }, { "slug": "links", "for": "Digital visiting cards and tracked links" }, { "slug": "growcord-id", "for": "One sign-in with access by role" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Grow Your Business Online?"
                subheadline="Get a transparent cost estimate for your professional website. Start attracting customers today."
                primaryCtaText="Calculate Your Cost"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default CompaniesLanding;
