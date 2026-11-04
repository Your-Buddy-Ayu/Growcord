"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";

// We'll import a default image if available, or just leave it for now.
// The original used import banner from "../../assets/realEstate.jpg";
// We will check if we can use a placeholder or if we need to find that file.
// For now, I'll use a placeholder string or null if I can't find it easily in the next step.
// To be safe I'll use a path that might work if copied, or a clear placeholder.
// I'll try to use the imageHelper if applicable, but the original component passed 'banner' directly to Hero image prop.
// I will attempt to require it if it exists in assets, or use a public path.
// Assuming assets were copied to web/src/assets or public/assets.
// I'll use a relative path if I confirmed it exists, otherwise comment it out.

// Importing icons
import { FaCalendarAlt, FaFileAlt, FaUser, FaBuilding, FaBell, FaChartBar, FaPhone, FaShoppingBag, FaHome, FaCamera, FaMapMarkerAlt, FaStreetView, FaSearch } from "react-icons/fa";

const RealtyLanding = () => {
    // Substitute imported image with a placeholder or static import if file exists
    // I'll use a placeholder URL for now to avoid build errors if file is missing
    const banner = "/assets/realEstate.jpg";

    const problems = [
        {
            icon: FaHome,
            title: "Property Listing Management",
            description:
                "Managing property listings across multiple platforms is time-consuming. No centralized system to update availability and details.",
        },
        {
            icon: FaUser,
            title: "Lead Management Issues",
            description:
                "Leads scattered across phone calls, emails, and messages. No system to track follow-ups and convert inquiries into sales.",
        },
        {
            icon: FaCamera,
            title: "Limited Property Showcase",
            description:
                "Static photos don't show properties effectively. No virtual tours or interactive features to engage potential buyers.",
        },
        {
            icon: FaSearch,
            title: "Poor Online Visibility",
            description:
                "Your properties aren't showing up in searches. Without proper SEO and online presence, you're missing qualified leads.",
        },
        {
            icon: FaPhone,
            title: "Inefficient Communication",
            description:
                "Constant phone calls for property inquiries, scheduling viewings, and follow-ups. No automated system to handle inquiries.",
        },
        {
            icon: FaChartBar,
            title: "No Analytics",
            description:
                "Can't track which properties get the most views, where leads come from, or what's working. Flying blind on marketing efforts.",
        },
    ];

    const solutions = [
        {
            icon: FaHome,
            title: "Property Listing Website",
            description:
                "Professional website showcasing all your properties with advanced search and filters.",
            benefits: [
                "Advanced property search",
                "High-quality galleries",
                "Virtual tour integration",
                "Mobile-responsive design",
            ],
        },
        {
            icon: FaUser,
            title: "CRM Integration",
            description:
                "Track leads, manage follow-ups, and convert inquiries into sales with integrated CRM.",
            benefits: [
                "Lead tracking",
                "Automated follow-ups",
                "Client management",
                "Sales pipeline",
            ],
        },
        {
            icon: FaStreetView,
            title: "Virtual Tours",
            description:
                "Interactive 360° virtual tours that let potential buyers explore properties remotely.",
            benefits: [
                "360° property views",
                "Interactive floor plans",
                "Video walkthroughs",
                "Mobile-friendly tours",
            ],
        },
    ];

    const features = [
        {
            icon: FaSearch,
            title: "Advanced Search",
            description: "Filter properties by location, price, size, and amenities",
        },
        {
            icon: FaCamera,
            title: "Photo Galleries",
            description: "High-resolution image galleries with virtual tour support",
        },
        {
            icon: FaFileAlt,
            title: "Lead Forms",
            description: "Contact forms and inquiry management system",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location Maps",
            description:
                "Interactive maps showing property locations and nearby amenities",
        },
        {
            icon: FaShoppingBag,
            title: "Agent Profiles",
            description: "Showcase your team with profiles and contact information",
        },
        {
            icon: FaChartBar,
            title: "Analytics",
            description: "Track property views, leads, and conversion metrics",
        },
        {
            icon: FaPhone,
            title: "Mobile Optimized",
            description: "Perfect experience on all devices for property browsing",
        },
        {
            icon: FaBell,
            title: "Notifications",
            description: "Automated alerts for new inquiries and property updates",
        },
    ];

    const testimonials = [
        {
            name: "Vikram Malhotra",
            role: "Real Estate Broker",
            quote:
                "Our property website generated 5x more leads than before. The virtual tours helped close deals faster, and the CRM system keeps us organized.",
        },
        {
            name: "Neha Kapoor",
            role: "Property Developer",
            quote:
                "The advanced search and filtering features make it easy for buyers to find what they want. Our conversion rate improved significantly.",
        },
        {
            name: "Rajesh Agarwal",
            role: "Real Estate Agency Owner",
            quote:
                "Best investment for our business. The lead management system alone paid for itself in the first month. Highly professional and effective.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero
                headline="Showcase Properties, Close Deals Faster"
                subheadline="Build a powerful real estate platform that attracts qualified buyers. From property listings to virtual tours, everything you need to succeed."
                ctaText="Build Your Real Estate Platform"
                ctaLink="/calculator/step1"
                image={banner}
            />
            <ProblemSection problems={problems} title="Real Estate Challenges" />
            <SolutionSection
                solutions={solutions}
                title="Solutions for Real Estate Success"
            />
            <FeaturesGrid features={features} title="Complete Real Estate Features" />
            <Testimonials testimonials={testimonials} title="Success Stories" />
            <CTASection
                headline="Ready to Transform Your Real Estate Business?"
                subheadline="Get a transparent cost estimate for your property platform. Start attracting more leads today."
                primaryCtaText="Calculate Your Cost"
                primaryCtaLink="/calculator/step1"
            />
            <Footer />
        </div>
    );
};

export default RealtyLanding;
