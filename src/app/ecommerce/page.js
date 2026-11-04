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
import CaseStudies from "@/components/landing/CaseStudies";
import FaqSection from "@/components/FaqSection";
import { SuiteCardsSection } from "@/components/classic/Sections";
import { trackViewContent } from "@/components/FacebookPixel";
// Importing Images
import Amit from "@/assets/Testimonials/amit.svg"
import Priya from "@/assets/Testimonials/priya.svg"
import Rajesh from "@/assets/Testimonials/rajesh.svg"
// importing react icons
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { BsFillCreditCardFill, BsGraphDownArrow, BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbZoomQuestion } from "react-icons/tb";
import { IoPhonePortrait } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import Commerce from "../../assets/ProductClassic/commerce.jpg"

const EcommerceLanding = () => {
    const problems = [
        {
            icon: FaBox,
            title: "Inventory Management Chaos",
            description:
                "Struggling to track products, manage stock levels, and handle multiple suppliers? Manual inventory tracking leads to overselling and lost revenue.",
        },
        {
            icon: BsFillCreditCardFill,
            title: "Payment Integration Issues",
            description:
                "Complex payment gateways, security concerns, and multiple payment methods confuse customers and reduce conversion rates.",
        },
        {
            icon: BsGraphDownArrow,
            title: "Low Conversion Rates",
            description:
                "Your website isn't converting visitors into customers. Poor user experience, slow loading times, and confusing checkout processes drive customers away.",
        },
        {
            icon: TbZoomQuestion,
            title: "Poor Search Visibility",
            description:
                "Your products aren't showing up in search results. Without proper SEO, potential customers can't find your store online.",
        },
        {
            icon: IoPhonePortrait,
            title: "Mobile Experience Problems",
            description:
                "Your store doesn't work well on mobile devices. With 70% of online shopping happening on mobile, you're losing sales.",
        },
        {
            icon: IoIosFlash,
            title: "Slow Website Performance",
            description:
                "Slow loading times frustrate customers and hurt your search rankings. Every second of delay costs you sales.",
        },
    ];

    const solutions = [
        {
            icon: FaShoppingCart,
            title: "Custom E-commerce Platform",
            description:
                "A fully customized online store built specifically for your business needs.",
            benefits: [
                "Product catalog management",
                "Shopping cart & checkout",
                "Order tracking system",
                "Customer account management",
            ],
        },
        {
            icon: BsFillCreditCardFill,
            title: "Payment Gateway Integration",
            description:
                "Secure, seamless payment processing with multiple payment options.",
            benefits: [
                "Multiple payment methods",
                "Secure transactions",
                "Mobile payment support",
                "Automated invoicing",
            ],
        },
        {
            icon: BsFileEarmarkBarGraphFill,
            title: "Analytics & Reporting",
            description:
                "Track sales, inventory, and customer behavior with comprehensive analytics.",
            benefits: [
                "Sales reports",
                "Inventory tracking",
                "Customer insights",
                "Performance metrics",
            ],
        },
    ];

    const features = [
        {
            icon: BiSolidShoppingBags,
            title: "Product Management",
            description:
                "Easy product catalog with categories, variants, and inventory tracking",
        },
        {
            icon: FaShoppingCart,
            title: "Shopping Cart",
            description:
                "Smooth shopping experience with saved carts and quick checkout",
        },
        {
            icon: BsFillCreditCardFill,
            title: "Payment Integration",
            description:
                "Multiple payment gateways including UPI, cards, and wallets",
        },
        {
            icon: FaBox,
            title: "Order Management",
            description:
                "Track orders from placement to delivery with status updates",
        },
        {
            icon: RiAccountPinCircleFill,
            title: "Customer Accounts",
            description: "User registration, profiles, order history, and wishlists",
        },
        {
            icon: IoPhonePortrait,
            title: "Mobile Responsive",
            description: "Perfect shopping experience on all devices",
        },
        {
            icon: TbZoomQuestion,
            title: "SEO Optimized",
            description: "Built-in SEO features to rank higher in search results",
        },
        {
            icon: BsFileEarmarkBarGraphFill,
            title: "Analytics Dashboard",
            description:
                "Real-time insights into sales, traffic, and customer behavior",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Rajesh Kumar",
            role: "Owner, Fashion Store",
            image: Rajesh,
            quote:
                "Our online sales increased by 300% after launching our new e-commerce platform. The payment integration was seamless and customer experience improved dramatically.",
        },
        {
            name: "Priya Sharma",
            role: "Founder, Home Decor Shop",
            image: Priya,
            quote:
                "The inventory management system saved us hours every day. We can now track everything in real-time and our customers love the mobile shopping experience.",
        },
        {
            name: "Amit Patel",
            role: "CEO, Electronics Retail",
            image: Amit,
            quote:
                "Best investment we made. The platform is fast, secure, and our conversion rate doubled. Highly recommend for any business looking to go online.",
        },
    ]);

    const stats = [
        { value: "300%", label: "Average Revenue Increase" },
        { value: "50%", label: "Faster Checkout Process" },
        { value: "95%", label: "Mobile Conversion Rate" },
        { value: "24/7", label: "Automated Operations" },
    ];

    const results = [
        {
            metric: "400%",
            label: "Revenue Growth",
            description: "Average revenue increase for e-commerce stores",
        },
        {
            metric: "60%",
            label: "Faster Load Times",
            description: "Optimized performance for better conversions",
        },
        {
            metric: "85%",
            label: "Mobile Sales",
            description: "Mobile-optimized experience drives sales",
        },
    ];

    const processSteps = [
        {
            title: "Calculate Your Cost",
            description:
                "Get an instant, transparent estimate for your e-commerce platform",
        },
        {
            title: "Custom Development",
            description: "We build your store with all features you need",
        },
        {
            title: "Launch & Grow",
            description: "Go live and watch your sales grow with our support",
        },
    ];

    const [ecommerceClients, setEcommerceClients] = useState([
        { name: "FashionHub", logo: null },
        { name: "TechStore", logo: null },
        { name: "Retail Pro", logo: null },
        { name: "ShopSmart", logo: null },
        { name: "MarketPlace", logo: null },
        { name: "OnlineMart", logo: null },
    ]);

    useEffect(() => {
        loadClientImages();
        loadTestimonials();
        trackViewContent('E-commerce Landing Page', 'page');
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
                setEcommerceClients(clientLogos);
            }
        } catch (error) {
            console.error('Error loading client images:', error);
        }
    };

    const ecommerceCaseStudies = [
        {
            category: "E-commerce",
            metric: "+400% Revenue",
            title: "FashionHub Online Store",
            description:
                "Transformed a local fashion store into a thriving online business with 400% revenue increase in 6 months.",
            results: [
                { value: "400%", label: "Revenue Growth" },
                { value: "50K+", label: "Monthly Visitors" },
                { value: "95%", label: "Satisfaction" },
            ],
            client: {
                name: "Priya Sharma",
                role: "Founder, FashionHub",
            },
            image: Priya,
            imageId: 'case-study-ecommerce',
        },
        {
            category: "E-commerce",
            metric: "+250% Sales",
            title: "TechStore Platform",
            description:
                "Built a comprehensive e-commerce platform that increased online sales by 250% in just 4 months.",
            results: [
                { value: "250%", label: "Sales Growth" },
                { value: "30K+", label: "Products" },
                { value: "98%", label: "Uptime" },
            ],
            client: {
                name: "Rajesh Kumar",
                role: "CEO, TechStore",
            },
            image: Rajesh,
            imageId: 'case-study-ecommerce',
        },
    ];

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
                headline="Turn Your Store Into a Sales Machine"
                subheadline="Build a powerful e-commerce platform that converts visitors into customers. From product management to secure payments, inventory tracking to analytics - we've got everything you need to succeed online."
                ctaText="Calculate Your E-commerce Cost"
                ctaLink="/calculator/step1"
                badge="🛒 Trusted by 200+ E-commerce Stores"
                features={[
                    "Payment Gateway Integration",
                    "Inventory Management",
                    "Mobile Optimized",
                    "24/7 Support",
                ]}
                heroImage={Commerce}
                imageId="business-type-ecommerce"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="E-commerce Challenges You Face"
            />
            <SolutionSection
                solutions={solutions}
                title="How We Solve Your Problems"
            />
            <ClientLogos
                clients={ecommerceClients}
                title="Trusted by Leading E-commerce Brands"
            />
            <FeaturesGrid features={features} title="Complete E-commerce Features" />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <CaseStudies
                caseStudies={ecommerceCaseStudies}
                title="E-commerce Success Stories"
            />
            <Testimonials testimonials={testimonials} title="What Our Clients Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="The Products That"
                highlight="Run Your Business"
                items={[{ "slug": "commerce", "for": "Store, catalogue, GST checkout, verified COD, B2B" }, { "slug": "ship", "for": "Couriers, labels, pickups and tracking" }, { "slug": "books", "for": "GST invoices, credit notes and GSTR-1" }, { "slug": "comms", "for": "Order updates and cart recovery messages" }, { "slug": "reach", "for": "Campaigns, AI ads and conversion tracking" }, { "slug": "insights", "for": "Revenue, cohorts and delivery metrics" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Launch Your Online Store?"
                subheadline="Get a transparent cost estimate for your e-commerce platform. No hidden fees, no surprises. Start selling online today."
                primaryCtaText="Calculate Your Cost Now"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default EcommerceLanding;
