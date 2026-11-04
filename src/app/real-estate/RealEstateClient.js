"use client";

import { useState, useEffect } from "react";
import RealEstateHeader from "@/components/landing/RealEstateHeader";
import Footer from "@/components/landing/Footer";
import RealEstateHero from "@/components/landing/RealEstateHero";
import ChannelPartnerLogos from "@/components/landing/ChannelPartnerLogos";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import PlansPricing from "@/components/PlansPricing";
import StatsSection from "@/components/landing/StatsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import FaqSection from "@/components/FaqSection";
import RealEstateDemos from "@/components/landing/RealEstateDemos";
import TrustedClients from "@/components/landing/TrustedClients";
import RealEstateProcess from "@/components/landing/RealEstateProcess";
import RealEstateComparison from "@/components/landing/RealEstateComparison";
import DemoPopup from "@/components/landing/DemoPopup";
import { pageConfigAPI } from "@/lib/api";
import { gtm } from "@/lib/analytics";
import { trackViewContent } from "@/components/FacebookPixel";
import Estate from "../../assets/Solutions/estate.jpg"

// import banner from "@/assets/realEstate.jpg"; // Not used directly in component logic shown

// importing  icons
// For Next.js, it's better to put static assets in public/ or import them if configured
// Assuming these assets were copied or we need to fix imports.
// For now, I'll assume they are available or I might need to replace them with simple strings if the loader fails.
// However, since we are using Vite for Admin and Next for Web, asset handling is different.
// Best approach: Use direct paths if they are in public, or standard imports if they are in assets folder.
// I will check if assets folder exists in web/src.

/* 
  Temporary Fix for Icons: 
  If assets are not moved, I will use placeholder strings or try to require them. 
  But better to keep imports and hope the file loader is set up or I move them.
  Checking web/src/assets existence is crucial.
*/

import { FaWhatsapp } from "react-icons/fa";

// Icons mapping - assuming these are handled by Next.js image loader if they exist
// If not, I might need to copy them.
// For now, I will keep the imports but I suspect they might fail if files are missing.
// I'll check for assets folder in the next step.
import notepad from "@/assets/icon/notepad.png";
import mobile from "@/assets/icon/mobile.png";
import profile from "@/assets/icon/profile.png";
import bell from "@/assets/icon/bell.png";
import graph from "@/assets/icon/graph.png";
import phone from "@/assets/icon/phone.png";
import bag from "@/assets/icon/bag.png";
import house from "@/assets/icon/house.png";
import camera from "@/assets/icon/camera.png";
import mark from "@/assets/icon/mark.png";
import degree from "@/assets/icon/360.png";
import magnify from "@/assets/icon/magnify.png";
import lock from "@/assets/icon/lock.png";
import web from "@/assets/icon/web.png";
import creditCard from "@/assets/icon/creditCard.png";
import flash from "@/assets/icon/flash.png";
import alarm from "@/assets/icon/alarm.png";
import mail from "@/assets/icon/mail.png";
import graphUp from "@/assets/icon/graphUp.png";
import * as FaIcons from "react-icons/fa"; // Import full library for dynamic rendering

const ICON_MAP = {
    'notepad': notepad,
    'mobile': mobile,
    'profile': profile,
    'bell': bell,
    'graph': graph,
    'phone': phone,
    'bag': bag,
    'house': house,
    'camera': camera,
    'mark': mark,
    'degree': degree,
    'magnify': magnify,
    'lock': lock,
    'web': web,
    'creditCard': creditCard,
    'flash': flash,
    'alarm': alarm,
    'mail': mail,
    'graphUp': graphUp
};

const resolveIcons = (items) => {
    if (!items || !Array.isArray(items)) return items;
    return items.map(item => {
        if (!item.icon || typeof item.icon !== 'string') return item;

        // 1. Check if it's a valid React Icon (e.g., 'FaBeer')
        if (FaIcons[item.icon]) {
            return { ...item, icon: FaIcons[item.icon] };
        }

        // 2. Fallback to Legacy PNG Map
        if (ICON_MAP[item.icon]) {
            return { ...item, icon: ICON_MAP[item.icon] };
        }

        return item;
    });
};

const mergeWithDefaults = (configItems, defaultItems) => {
    if (!configItems || !Array.isArray(configItems)) return defaultItems;
    // Map over config items and merge with defaults by index
    // This ensures if config has "titles" but missing "descriptions", defaults are used.
    // If config has MORE items, they get no default.
    return configItems.map((item, index) => {
        const defaultItem = defaultItems && defaultItems[index] ? defaultItems[index] : {};
        return { ...defaultItem, ...item };
    });
};

const RealEstateLanding = ({ initialConfig }) => {
    const [pageConfig, setPageConfig] = useState(initialConfig || null);
    const [loading, setLoading] = useState(!initialConfig);
    const [showPopup, setShowPopup] = useState(false);
    const [popupTriggered, setPopupTriggered] = useState(false);

    useEffect(() => {
        loadPageConfig();
        // Track ViewContent event for Real Estate landing page
        trackViewContent('Real Estate Landing Page', 'page');
    }, []);

    // Auto-trigger popup after delay
    useEffect(() => {
        if (!pageConfig || popupTriggered) return;

        const popupConfig = pageConfig.popup || {};
        if (popupConfig.enabled && popupConfig.autoTrigger) {
            const delay = (popupConfig.autoTriggerDelay || 30) * 1000; // Convert to milliseconds
            const timer = setTimeout(() => {
                setShowPopup(true);
                setPopupTriggered(true);

                // GTM: Track Popup Open Auto
                gtm.trackPopupImpression('auto_trigger', 'Timer Delay');
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [pageConfig, popupTriggered]);

    // Expose function to open popup (for button clicks)
    useEffect(() => {
        window.openDemoPopup = () => {
            setShowPopup(true);
            setPopupTriggered(true);
            // GTM: Track Popup Open Global
            gtm.trackPopupImpression('global_fn', 'Open Demo Popup');
        };
    }, []); // Only run once on mount

    const loadPageConfig = async () => {
        try {
            const config = await pageConfigAPI.get('real-estate');
            if (config) {
                setPageConfig(config);
            }
        } catch (error) {
            console.error('Error loading page config:', error);
        } finally {
            setLoading(false);
        }
    };

    const problems = [
        {
            icon: graph, // Changed from alarm to graph for "Leaks Leads"
            title: "Main Website Leaks Leads",
            description:
                "Too many options distract visitors. They browse other projects and leave without inquiring.",
        },
        {
            icon: web, // Changed from graph to web for "Low Converting Pages"
            title: "Low Converting Pages",
            description:
                "Poor design and weak CTAs fail to capture leads. Visitors leave without taking action.",
        },
        {
            icon: notepad, // Changed from magnify to notepad for "Missing Key Sections"
            title: "Missing Key Sections",
            description:
                "No payment plans, floor plans, or location info. Buyers can't make decisions.",
        },
        {
            icon: creditCard,
            title: "Low Ad ROI",
            description:
                "Generic pages kill conversion rates. You need focused landing pages that convert.",
        },
        {
            icon: mail,
            title: "No Lead Capture Focus",
            description:
                "Missing popup forms and strategic CTAs. Visitors browse but don't convert.",
        },
        {
            icon: alarm, // Changed from bell to alarm for "Slow Loading Pages"
            title: "Slow Loading Pages",
            description:
                "Frustrated visitors bounce. You need fast servers that handle traffic spikes.",
        },
        {
            icon: mobile,
            title: "Poor Mobile Experience",
            description:
                "80% of searches are mobile. Non-responsive designs lose valuable traffic.",
        },
        {
            icon: flash, // Changed from camera to flash for "Boring Static Pages"
            title: "Boring Static Pages",
            description:
                "No animations or engaging elements. Visitors lose interest quickly.",
        },
    ];

    const solutions = [
        {
            icon: flash, // Changed from house to flash for "High-Conversion"
            title: "High-Conversion Landing Pages",
            description:
                "Beautifully designed pages with optimized popups, animations, and strategic CTAs. Every element captures leads.",
            benefits: [
                "Smart popup forms",
                "Attention-grabbing animations",
                "Strategic CTA placement",
                "Zero distractions",
            ],
        },
        {
            icon: notepad, // Changed from profile to notepad for "Complete Sections"
            title: "Complete Sections",
            description:
                "Payment plans, apartment configs, floor plans, location maps, and all essential sections buyers need.",
            benefits: [
                "Payment plans & EMI calculator",
                "Apartment configurations",
                "Interactive floor plans",
                "Location advantages",
            ],
        },
        {
            icon: mobile, // Changed from degree to mobile for "Fast & Responsive"
            title: "Fast & Responsive",
            description:
                "Lightning-fast pages on high-performance servers. Handles traffic spikes and works perfectly on all devices.",
            benefits: [
                "Loads in <2 seconds",
                "100% responsive",
                "High-performance servers",
                "CDN optimized",
            ],
        },
    ];

    const features = [
        {
            icon: graph, // Changed from web to graph for "Tracking"
            title: "Proper Ad Tracking",
            description: "Integrated Facebook Pixel, Google Analytics, and Google Ads tracking for precise campaign measurement",
        },
        {
            icon: lock,
            title: "End-to-End Encryption",
            description: "Secure lead processing ensures only you can access your lead data - no one else",
        },
        {
            icon: bell, // Changed from notepad to bell for "Popups" (alerts/notifications concept)
            title: "Optimized Popup Forms",
            description: "Smart popups with animations that capture leads without being annoying",
        },
        {
            icon: creditCard,
            title: "Payment Plans",
            description: "Showcase EMI options and pricing to help buyers decide faster",
        },
        {
            icon: house,
            title: "Apartment Configs",
            description: "Display all types, sizes, and availability with beautiful visuals",
        },
        {
            icon: degree, // Changed from notepad to degree (360/plans) for "Floor Plans"
            title: "Floor Plans",
            description: "Interactive gallery with zoom and download options",
        },
        {
            icon: mark,
            title: "Location Benefits",
            description: "Maps showing nearby schools, hospitals, and connectivity",
        },
        {
            icon: camera, // Changed from flash to camera for "Visuals/Features"
            title: "Project Features",
            description: "Showcase amenities and highlights with compelling visuals",
        },
        {
            icon: mobile,
            title: "Responsive Design",
            description: "Perfect on all devices - mobile, tablet, and desktop",
        },
        {
            icon: bag, // Changed from phone to bag for "CTAs" (conversion/sale)
            title: "Strategic CTAs",
            description: "Multiple CTAs placed for instant lead capture",
        },
        {
            icon: degree,
            title: "Virtual Tours",
            description: "Embed 360° tours and video walkthroughs seamlessly",
        },
        {
            icon: profile,
            title: "CRM Integration",
            description: "Sync with your CRM or use our basic lead management",
        },
        {
            icon: graphUp,
            title: "Analytics",
            description: "Track conversions, sources, and form submissions in real-time",
        },
        {
            icon: mark,
            title: "RERA Compliant",
            description: "Display RERA numbers and legal info clearly",
        },
    ];

    // whatsapp config with fallback
    const whatsappConfig = pageConfig?.whatsapp || {
        enabled: true,
        phoneNumber: "917827831337",
        message: "Hi, I'm interested in Real Estate Landing Pages."
    };



    const stats = pageConfig?.stats || [
        { value: "3x", label: "Higher Conversion" },
        { value: "24h", label: "Launch Time" },
        { value: "<2s", label: "Load Time" },
        { value: "100%", label: "Responsive" },
    ];

    const results = [
        {
            metric: "3x",
            label: "More Qualified Leads",
            description: "High-conversion landing pages with optimized popup forms, attention-grabbing animations, and strategic CTAs capture significantly more qualified leads than generic pages",
        },
        {
            metric: "60%",
            label: "Lower Cost Per Lead",
            description: "Stop wasting ad budget on distracted visitors. Focused landing pages with complete sections convert better, reducing your cost per lead",
        },
        {
            metric: "<2s",
            label: "Fast Loading",
            description: "High-performance servers with CDN and optimization ensure fast loading times (<2 seconds) to keep visitors engaged and reduce bounce rates",
        },
        {
            metric: "24h",
            label: "Fast Go-to-Market",
            description: "Beautifully designed, professionally created landing pages with all essential sections launched in less than a day",
        },
    ];

    const defaultProcessSteps = [
        { number: "01", title: "Choose Your Plan", description: "Select the number of landing pages you need. Starter (1 page), Business (3 pages), or Enterprise (10 pages).", icon: "📋" },
        { number: "02", title: "Share Project Details", description: "Send us project images, floor plans, amenities list, location details, and any specific requirements.", icon: "📤" },
        { number: "03", title: "We Build & Launch", description: "Our team designs, develops, and launches your landing page in 24-48 hours. You review and approve.", icon: "🚀" },
        { number: "04", title: "Start Capturing Leads", description: "Your page goes live with CRM integration. Start running ads and watch leads flow in automatically.", icon: "💰" }
    ];

    const defaultDemos = [
        { id: 1, title: "Luxury High-Rise Launch", imageId: 'real-estate-demo-1', category: "Premium Projects", description: "Showcase amenities, floor plans, and lifestyle. Perfect for new tower launches.", link: "#" },
        { id: 2, title: "Affordable Housing", imageId: 'real-estate-demo-2', category: "Mass Market", description: "Focus on location advantages, price, and payment plans. High conversion layout.", link: "#" },
        { id: 3, title: "Commercial & Plots", imageId: 'real-estate-demo-3', category: "Investment", description: "Highlight ROI, connectivity, and growth potential. Ideal for commercial projects.", link: "#" }
    ];

    // Get hero config from pageConfig or use defaults
    const heroConfig = pageConfig?.hero || {
        headline: "High-Conversion Landing Pages for Real Estate Projects",
        subheadline: "Beautifully designed, professionally created landing pages with optimized popup forms, attention-grabbing animations, and strategic CTA placement to capture leads instantly. Fast loading, responsive, and built on high-performance servers.",
        ctaText: "View Landing Page Plans",
        ctaLink: "#plans",
        badge: "🏠 For Developers & Channel Partners",
        features: [
            "Optimized Popup Forms",
            "Attention-Grabbing Animations",
            "Strategic CTA Placement",
            "Fast Loading & Responsive"
        ]
    };

    // Handler to open popup
    const handleOpenPopup = () => {
        setShowPopup(true);
        setPopupTriggered(true);
        // GTM: Track Popup Open Manual
        gtm.trackPopupImpression('manual_cta', 'Book Demo CTA');
    };

    // Section mapping with IDs for navigation
    const sectionMap = {
        'hero': <RealEstateHero
            key="hero"
            headline={heroConfig.headline}
            subheadline={heroConfig.subheadline}
            ctaText={heroConfig.ctaText}
            ctaLink={heroConfig.ctaLink}
            badge={heroConfig.badge}
            features={heroConfig.features}
        />,
        'trusted-clients': <div key="trusted-clients" id="trusted-clients"><ChannelPartnerLogos selectedIds={pageConfig?.customContent?.['trusted-clients']?.selectedIds} /></div>,
        'trusted-clients': <div key="trusted-clients" id="trusted-clients"><ChannelPartnerLogos selectedIds={pageConfig?.customContent?.['trusted-clients']?.selectedIds} /></div>,
        'stats': <div key="stats" id="stats"><StatsSection stats={mergeWithDefaults(pageConfig?.stats, stats)} cta={pageConfig?.sectionCTAs?.stats ? { ...pageConfig.sectionCTAs.stats, onBookDemo: handleOpenPopup } : null} /></div>,
        'demos': <div key="demos" id="demos"><RealEstateDemos demos={mergeWithDefaults(pageConfig?.customContent?.demos?.items, defaultDemos)} cta={pageConfig?.sectionCTAs?.demos ? { ...pageConfig.sectionCTAs.demos, onBookDemo: handleOpenPopup } : null} /></div>,
        'problems': <div key="problems" id="problems"><ProblemSection problems={resolveIcons(mergeWithDefaults(pageConfig?.customContent?.problems?.items, problems))} title={pageConfig?.customContent?.problems?.title || "Why Your Landing Pages Aren't Converting"} cta={pageConfig?.sectionCTAs?.problems ? { ...pageConfig.sectionCTAs.problems, onBookDemo: handleOpenPopup } : null} /></div>,
        'solutions': <div key="solutions" id="solutions"><SolutionSection
            solutions={resolveIcons(mergeWithDefaults(pageConfig?.customContent?.solutions?.items, solutions))}
            title={pageConfig?.customContent?.solutions?.title || "High-Conversion Landing Pages Built for Real Estate"}
            cta={pageConfig?.sectionCTAs?.solutions ? { ...pageConfig.sectionCTAs.solutions, onBookDemo: handleOpenPopup } : null}
        /></div>,
        'features': <div key="features" id="features"><FeaturesGrid features={resolveIcons(mergeWithDefaults(pageConfig?.customContent?.features?.items, features))} title={pageConfig?.customContent?.features?.title || "Complete Landing Page Sections for Your Project"} cta={pageConfig?.sectionCTAs?.features ? { ...pageConfig.sectionCTAs.features, onBookDemo: handleOpenPopup } : null} /></div>,
        'how-it-works': <div key="how-it-works" id="how-it-works"><RealEstateProcess steps={mergeWithDefaults(pageConfig?.customContent?.['how-it-works']?.items, defaultProcessSteps)} cta={pageConfig?.sectionCTAs?.['how-it-works'] ? { ...pageConfig.sectionCTAs['how-it-works'], onBookDemo: handleOpenPopup } : null} /></div>,
        'comparison': <div key="comparison" id="comparison"><RealEstateComparison cta={pageConfig?.sectionCTAs?.comparison ? { ...pageConfig.sectionCTAs.comparison, onBookDemo: handleOpenPopup } : null} /></div>,
        'plans': <div key="plans" id="plans"><PlansPricing selectedIds={pageConfig?.customContent?.['plans']?.selectedIds} /></div>,
        'results': <div key="results" id="results"><ResultsSection results={mergeWithDefaults(pageConfig?.customContent?.results?.items, results)} cta={pageConfig?.sectionCTAs?.results ? { ...pageConfig.sectionCTAs.results, onBookDemo: handleOpenPopup } : null} /></div>,
        'testimonials': <div key="testimonials" id="testimonials"><Testimonials selectedIds={pageConfig?.customContent?.['testimonials']?.selectedIds} title="Success Stories" cta={pageConfig?.sectionCTAs?.testimonials ? { ...pageConfig.sectionCTAs.testimonials, onBookDemo: handleOpenPopup } : null} /></div>,
        'faq': <div key="faq" id="faq"><FaqSection category="real-estate" selectedIds={pageConfig?.customContent?.['faq']?.selectedIds} title="Frequently Asked Questions" description="Everything you need to know about our high-conversion landing pages for real estate projects." /></div>,
        'cta': <div key="cta" id="cta"><CTASection
            headline="Ready to Launch Your High-Conversion Landing Page?"
            subheadline="Get a beautifully designed, professionally created landing page with optimized popup forms and strategic CTAs. Launch in 24 hours on our high-performance servers."
            primaryCtaText="Select Your Plan"
            primaryCtaLink="#plans"
            secondaryCtaText="View Live Demos"
            secondaryCtaLink="#demos"
        /></div>
    };

    // Get section order from config or use default
    const sectionOrder = pageConfig?.sections?.order || [
        'hero',
        'trusted-clients',
        'stats',
        'demos',
        'problems',
        'solutions',
        'features',
        'how-it-works',
        'comparison',
        'plans',
        'results',
        'testimonials',
        'faq',
        'cta'
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
            <RealEstateHeader />
            {sectionOrder.map((sectionId) => sectionMap[sectionId]).filter(Boolean)}
            <Footer />

            {/* Demo Popup */}
            {showPopup && pageConfig?.popup?.enabled && (
                <DemoPopup
                    config={pageConfig.popup}
                    pageId="real-estate"
                    onClose={() => setShowPopup(false)}
                />
            )}

            {/* WhatsApp Button */}
            {whatsappConfig?.enabled && (
                <a
                    href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                        gtm.trackWhatsAppClick('Real Estate Landing');
                    }}
                    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center gap-2 group"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp className="text-3xl group-hover:rotate-12 transition-transform" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
                        Chat with us
                    </span>
                </a>
            )}

            {/* Global Styles for Animations and Typography */}
            <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Professional Typography - System Font Stack for Better Visibility */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default RealEstateLanding;
