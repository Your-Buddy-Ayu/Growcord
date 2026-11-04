"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
    LuRocket, LuCheck, LuX, LuPlay, LuShield, LuTrendingUp, LuTruck, LuArrowRight,
    LuLock, LuCreditCard, LuUser, LuSmartphone, LuServer, LuPalette, LuPackage,
    LuMessageSquare, LuQuote, LuChevronDown, LuCamera, LuBell, LuUsers, LuZap,
    LuShoppingBag, LuUpload, LuRefreshCw, LuTriangleAlert, LuMapPin, LuBanknote,
    LuMail, LuSearch, LuTag, LuChartBar, LuEye, LuTarget, LuGlobe, LuClock,
    LuDatabase, LuCloud, LuMonitor, LuMaximize
} from 'react-icons/lu';
import { GiPayMoney } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdAppBlocking } from "react-icons/md";



import { FaWhatsapp } from 'react-icons/fa'; // Keep WhatsApp branding
import DemoPopup from "@/components/landing/DemoPopup";
import { gtm } from "@/lib/analytics";
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '../../components/FaqSection';
import Testimonials from '../../components/landing/Testimonials';
import Footer from '../../components/landing/Footer';
import HighConversionSection from '../../components/landing/HighConversionSection';
import CTASection from '../../components/landing/CTASection';
import { pageConfigAPI } from '@/lib/api'; // Import API helper
import { trackAddToCart } from '@/components/FacebookPixel';
import { trackLinkedInAddToCart } from '@/components/LinkedInInsightTag';

// === MAGNUM OPUS: THE ULTIMATE ECOM PAGE ===

// ECOMMERCE HEADER (adapted from RealEstateHeader)
const EcommerceHeader = ({ onBookDemo }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'features', label: 'Features' },
        { id: 'comparison', label: 'Compare' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'testimonials', label: 'Reviews' },
        { id: 'faq', label: 'FAQ' },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const currentSection = navItems.map(i => i.id).find(sectionId => {
                const el = document.getElementById(sectionId);
                if (el) { const r = el.getBoundingClientRect(); return r.top <= 100 && r.bottom >= 100; }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) { const pos = el.getBoundingClientRect().top + window.pageYOffset - 80; window.scrollTo({ top: pos, behavior: 'smooth' }); }
    };
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${isScrolled ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' : '-translate-y-full opacity-0 pointer-events-none'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 relative w-auto h-10">
                        <Image src="/logo.png" alt="Growcord" width={140} height={40} className="h-10 w-auto object-contain" />
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map(item => (
                            <button key={item.id} onClick={() => scrollTo(item.id)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative ${activeSection === item.id ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'}`}>
                                {item.label}
                                {activeSection === item.id && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full" />}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => scrollTo('pricing')} className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md">Get Started</button>
                        <button onClick={onBookDemo} className="px-6 py-2.5 border-2 border-orange-600 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all duration-300">Book Demo</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

// SCROLL ANIMATION WRAPPER
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// AUTO-SCROLL IMAGE COMPONENT
// AUTO-SCROLL IMAGE COMPONENT (Hybrid: Auto-scrolls, but allows manual scroll on hover)
const AutoScrollImage = ({ src, alt, height = 'h-[300px]', speed = 20, onClick }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId;
        let lastTime = 0;
        const pixelsPerSecond = 50; // Adjust speed here

        const animate = (time) => {
            if (!isHovered && container) {
                if (lastTime !== 0) {
                    const delta = time - lastTime;
                    const move = (pixelsPerSecond * delta) / 1000;

                    // If we reach the bottom, reset to top (or bounce? Reset is better for showcase)
                    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 1) {
                        container.scrollTop = 0;
                    } else {
                        container.scrollTop += move;
                    }
                }
                lastTime = time;
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        if (!isHovered) {
            lastTime = 0; // Reset time to avoid jump
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    return (
        <div
            ref={scrollRef}
            className={`relative overflow-y-auto w-full ${height} group cursor-pointer scrollbar-hide`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            style={{ scrollBehavior: 'smooth' }} // Optional 
        >
            {/* Overlay for "Click to View" (Only show if not interacting? Or keep it?) 
                Review: If we allow manual scroll, overlay might block interaction if it covers everything.
                The overlay was `z-20` absolute inset-0. It prevents clicking/scrolling the image if it captures events.
                Actually, `pointer-events-none` on overlay container, but pointer-events-auto on the button?
                Or just remove overlay for better scroll experience?
                User said "user can scroll it up down".
                Let's keep usage simple: Overlay is for "View Full" modal.
                We should make overlay `pointer-events-none` so scroll works, but the button `pointer-events-auto`.
            */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-20 pointer-events-none flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
                    <LuMaximize /> View Full
                </div>
            </div>

            <Image
                src={src}
                alt={alt}
                width={1200}
                height={2400}
                className="w-full h-auto object-cover block"
                priority
            />
        </div>
    );
};

// MONITOR FRAME COMPONENT
const MonitorFrame = ({ children }) => (
    <div className="relative mx-auto">
        {/* Monitor Bezel */}
        <div className="bg-gray-900 rounded-t-xl p-2 pb-0 shadow-2xl border border-gray-800 relative z-10">
            <div className="bg-black rounded-lg overflow-hidden border border-gray-800 relative">
                {/* Screen Content */}
                {children}
            </div>
        </div>
        {/* Monitor Chin */}
        <div className="bg-gray-800 h-6 w-full rounded-b-xl flex items-center justify-center border-t border-gray-700 relative z-10 shadow-lg">
            <div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
        </div>
        {/* Stand */}
        <div className="mx-auto w-1/3 h-4 bg-gray-800 mt-[-1px] relative z-0"></div>
        <div className="mx-auto w-1/2 h-2 bg-gray-700 rounded-full shadow-lg"></div>
    </div>
);

const MidPageCTA = ({ title, subtitle, primaryText, primaryLink, secondaryText, secondaryLink, onPrimaryClick, onSecondaryClick, onBookDemo }) => {
    // Determine handlers: use specific handler if provided, fall back to generic onBookDemo if appropriate
    // Logic: 
    // - onPrimaryClick takes precedence for primary button.
    // - onSecondaryClick takes precedence for secondary button.
    // - If onBookDemo is passed (legacy), check if no specific handler exists.

    const handlePrimary = onPrimaryClick || onBookDemo;
    const handleSecondary = onSecondaryClick || onBookDemo;

    return (
        <AnimatedSection>
            <section className="py-16 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={handlePrimary} className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all">{primaryText || 'Get Started Now'}</button>
                        {secondaryLink ? (
                            <a href={secondaryLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <FaWhatsapp /> {secondaryText || 'Book a Free Demo'}
                            </a>
                        ) : (
                            <button onClick={handleSecondary} className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <FaWhatsapp /> {secondaryText || 'Book a Free Demo'}
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

// 1. HERO SECTION (Video Background)
const VideoHero = ({ onBookDemo, onStartBrand }) => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden" id="hero-section">
            <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://ecomstorage.blr1.cdn.digitaloceanspaces.com/growcord/download.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10" />

            <div className="container mx-auto px-6 relative z-20 text-white max-w-5xl pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-6 py-2 rounded-full border border-orange-500/50 bg-orange-600/20 backdrop-blur-md mb-8">
                        <span className="text-orange-400 font-bold uppercase tracking-widest text-sm">🔥 Now Accepting New Brands for February 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-2xl">
                        India&apos;s Only <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Fully Managed <br />E-commerce.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                        We don't just give you a website.
                        We <strong>Build It, Run It, Ship Orders, Handle Returns, and Run Ads.</strong>
                    </p>
                    <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
                        From product upload to customer delivery  everything is managed by our team.
                        You focus on your product. We handle the rest.
                    </p>
                    <p className="text-orange-400 font-bold text-xl mb-10">
                        ⚡ No Monthly Fees. Pay Only on Delivered Orders.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8 px-4 sm:px-0">
                        <button onClick={onStartBrand} className="px-6 md:px-10 py-4 md:py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-bold text-xl md:text-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                            Start Your Brand
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button onClick={onBookDemo} className="px-6 md:px-10 py-4 md:py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg md:text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer">
                            <FaWhatsapp className="text-green-400 text-xl md:text-2xl" /> Book a Free Demo
                        </button>
                    </div>

                    {/* Live Demo Store Link */}
                    <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                        <span>See our live demo store:</span>
                        <a href="https://redfit.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold hover:text-orange-300 underline underline-offset-4 transition-colors">redfit.in →</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// 2. SOCIAL PROOF
const SocialProof = () => {
    return (
        <section className="py-12 bg-black text-white border-b border-white/10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 mb-6 font-bold uppercase tracking-widest text-sm">Trusted by 500+ Indian D2C Brands Including</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <a href="https://redfit.in" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">RedFit<span className="text-xs align-top">.in</span></a>
                    <div className="text-2xl font-bold font-serif text-gray-400">Mish Mish<span className="text-xs align-top text-gray-600">Fashion</span></div>
                    <div className="text-2xl font-bold font-mono text-gray-400">Urban<span className="text-orange-500">Fit</span></div>
                    <div className="text-2xl font-bold italic text-gray-400">Laprozen</div>
                    <div className="text-2xl font-bold text-gray-400">Dr<span className="font-light">Ring</span></div>
                    <div className="text-2xl font-bold font-serif text-gray-400">Saree<span className="text-pink-500">Mahal</span></div>
                </div>
                <p className="text-gray-600 text-sm mt-6">See a live demo store → <a href="https://redfit.in" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline hover:text-orange-400">redfit.in</a></p>
            </div>
        </section>
    )
}

// CUSTOM STATS SECTION (inline for layout control)
const EcommerceStats = () => (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { value: '500+', label: 'D2C Brands', desc: 'Powered by Growcord across India' },
                    { value: '₹0', label: 'Monthly Fee', desc: 'Zero platform rent. Ever.' },
                    { value: '99.9%', label: 'Uptime', desc: 'Enterprise-grade servers' },
                    { value: '24h', label: 'Launch Time', desc: 'Go live in just one day' }
                ].map((s, i) => (
                    <div key={i} className="group">
                        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">{s.value}</div>
                        <div className="text-lg font-bold text-white mb-1">{s.label}</div>
                        <div className="text-sm text-gray-400">{s.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 3. PROBLEM AGITATION
const ProblemSection = () => {
    return (
        <section className="py-24 bg-gray-950 text-white">
            <div className="container mx-auto px-6 text-center max-w-6xl">
                <div className="inline-block bg-red-900/30 text-red-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">The Reality Nobody Talks About</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Running an E-commerce Business <br /><span className="text-red-500">Is Full of Headaches.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto">Most Indian D2C brands fail within 6 months. Not because of bad products  but because of bad platforms, hidden fees, and zero support.</p>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Monthly Platform Fees", icon: <GiPayMoney />, desc: "Shopify charges ₹2,500/mo even if you make ZERO sales. Plus ₹500-2,000/mo for essential apps. That&apos;s ₹30,000-50,000/year gone before your first order." },
                        { title: "RTO Losses Eating Profits", icon: <FaBox />, desc: "Out of 100 COD orders, 25-35 get returned. You lose ₹100-200 in shipping per RTO. That&apos;s ₹5,000-7,000 lost every month on fake orders alone." },
                        { title: "Scaling Nightmares", icon: <BsGraphDownArrow />, desc: "Site crashes during flash sales. Plugins conflict with each other. You spend weekends fixing bugs instead of growing your brand and acquiring customers." },
                        { title: "No Real Support", icon: <MdAppBlocking />, desc: "Chatbot support that sends you to documentation. No one picks up the phone. When your payments are stuck, you wait 5-7 days for a response. Unacceptable." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-500/50 transition-colors text-left">
                            <div className="text-5xl mb-6 text-[#f47721]">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// 4. SOLUTION OVERVIEW
const SolutionOverview = () => {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 font-bold rounded-full mb-4">THE GROWCORD REVOLUTION</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Fully Managed + AI</h2>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
                    We replaced the &quot;Agency Model&quot; with Technology.
                    You invest in stock. We invest in everything else.
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    Think of Growcord as your entire e-commerce team  website developers, designers, ad managers, and logistics coordinators  all powered by AI and automation. No hiring. No managing. No headaches.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Website", subtitle: "Custom Built", color: "bg-blue-100 text-blue-600", desc: "We design and build your entire online store from scratch. Custom UI, mobile-optimized, blazing fast. See it live at redfit.in." },
                        { title: "Logistics", subtitle: "Auto-Dispatched", color: "bg-orange-100 text-orange-600", desc: "Automatic order dispatch to 10+ courier partners. Real-time tracking and smart RTO prevention. You never touch a shipping label." },
                        { title: "Marketing", subtitle: "Ads Managed", color: "bg-purple-100 text-purple-600", desc: "Facebook & Instagram ads, Google Shopping, SEO, email campaigns  all managed by our in-house marketing team." },
                        { title: "Technology", subtitle: "Zero Maintenance", color: "bg-gray-100 text-gray-600", desc: "Hosting, SSL, updates, security, backups  everything is handled. Your site runs on enterprise-grade AWS servers." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
                            <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-3xl mb-4 font-bold`}>
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-orange-600 font-semibold mb-3">{item.subtitle}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a href="https://redfit.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                        See a live Growcord store: redfit.in <LuArrowRight className="text-sm" />
                    </a>
                </div>
            </div>
        </section>
    )
}

// 5. NO MONTHLY FEES (Key Differentiator)
const NoMonthlyFees = () => {
    return (
        <section className="py-24 bg-orange-50 overflow-visible relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-16">
                <div className="md:w-5/12 relative z-10 sticky top-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        The Smart Choice. <br />
                        <span className="text-orange-600">Save ₹1 Lakh/Year.</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Other platforms bleed your wallet with monthly subscriptions, app fees, and transaction charges even if you make zero sales.
                        <br /><br />
                        <strong>With Growcord:</strong>
                        <br />
                        You pay a small commission <u>ONLY when an order is successfully delivered.</u> We grow only when you grow.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 font-bold text-gray-800 text-lg">
                            <div className="bg-green-100 p-2 rounded-full"><LuCheck className="text-green-600 text-xl" /></div>
                            ₹0 Monthly Rent
                        </div>
                        <div className="flex items-center gap-3 font-bold text-gray-800 text-lg">
                            <div className="bg-green-100 p-2 rounded-full"><LuCheck className="text-green-600 text-xl" /></div>
                            ₹0 App Subscription Fees
                        </div>
                        <div className="flex items-center gap-3 font-bold text-gray-800 text-lg">
                            <div className="bg-green-100 p-2 rounded-full"><LuCheck className="text-green-600 text-xl" /></div>
                            ₹0 Server & Maintenance Cost
                        </div>
                        <div className="flex items-center gap-3 font-bold text-gray-800 text-lg">
                            <div className="bg-green-100 p-2 rounded-full"><LuCheck className="text-green-600 text-xl" /></div>
                            Unlimited Staff Accounts
                        </div>
                    </div>
                </div>

                <div className="md:w-7/12 relative z-10">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-2 text-center bg-gray-50 border-b border-gray-200">
                            <div className="p-6 border-r border-gray-200">
                                <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Shopify / Others</h4>
                                <div className="text-3xl font-black text-red-500">₹3,000-₹5,000<span className="text-sm font-medium text-gray-400">/mo</span></div>
                                <div className="text-xs text-red-400 font-bold mt-1">Paid regardless of sales</div>
                            </div>
                            <div className="p-6 bg-orange-50">
                                <h4 className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-2">Growcord</h4>
                                <div className="text-3xl font-black text-green-600">₹0<span className="text-sm font-medium text-gray-400">/mo</span></div>
                                <div className="text-xs text-green-600 font-bold mt-1">Free Forever</div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {[
                                { label: 'Platform Fee (Yearly)', val1: '₹36,000', val2: '₹0' },
                                { label: 'Premium Theme', val1: '₹15,000', val2: 'Free Included' },
                                { label: 'RTO Protection App', val1: '₹24,000', val2: 'Free Included' },
                                { label: 'Marketing Apps', val1: '₹12,000', val2: 'Free Included' },
                                { label: 'Staff Accounts', val1: '₹6,000', val2: 'Unlimited Free' },
                                { label: 'Transaction Fees', val1: '2% per sale', val2: '0% extra' },
                                { label: 'Dedicated Support', val1: 'Email / Chatbot', val2: 'WhatsApp Manager' }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 p-5 text-sm items-center hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-gray-700">{row.label}</div>
                                    <div className="text-center text-red-500 font-medium">{row.val1}</div>
                                    <div className="text-center text-green-600 font-bold flex items-center justify-center gap-2">
                                        {row.val2 === 'WhatsApp Manager' && <FaWhatsapp className="text-lg" />}
                                        {row.val2}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-900 text-white p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
                                <span className="text-gray-400 font-medium text-lg">Total 1st Year Cost</span>
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide animate-pulse">You Save ₹1,00,000+</span>
                            </div>
                            <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 w-full">
                                <div className="text-left">
                                    <div className="text-sm text-gray-500 mb-1">Competitors</div>
                                    <div className="text-2xl md:text-3xl text-gray-500 line-through decoration-red-500 decoration-2">₹1,10,000+</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-orange-400 mb-1">Growcord One-Time</div>
                                    <div className="text-4xl md:text-5xl font-black text-white">₹9,999</div>
                                </div>
                            </div>
                            <p className="text-center text-gray-500 text-[10px] md:text-xs mt-6">* Comparison based on Shopify Basic plan + essential paid apps vs Growcord setup fee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// IMAGE MODAL COMPONENT (for zooming in)
const ImageModal = ({ src, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                >
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                    >
                        <LuX size={32} />
                    </button>
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                        <Image
                            src={src}
                            alt="Full View"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

// 6. YOUR BRAND, YOUR IDENTITY  Real Screenshot Showcase with Desktop Monitor
const CustomDesign = ({ content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        title = "Your Brand, Your Identity.",
        subtitle = "We don't do templates. Every Growcord store is custom-designed from scratch.",
        linkText = "redfit.in",
        linkUrl = "https://redfit.in",
        desktopImage = "https://ecomstorage.blr1.cdn.digitaloceanspaces.com/growcord/desktop.jpg",
        mobileImage = "https://ecomstorage.blr1.cdn.digitaloceanspaces.com/growcord/mobil.jpg"
    } = content || {};

    return (
        <>
            <ImageModal src={desktopImage} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <AnimatedSection>
                <section className="py-24 bg-black text-white relative overflow-hidden">
                    {/* Subtle dot pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <LuPalette className="text-5xl text-orange-500 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                            {subtitle}
                        </p>
                        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm">
                            See our live example at <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold underline hover:text-orange-300">{linkText}</a>.
                        </p>

                        {/* Desktop & Mobile Showcase */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 lg:gap-0 max-w-6xl mx-auto relative">

                            {/* Desktop Monitor */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative z-10 w-full max-w-4xl"
                            >
                                <MonitorFrame>
                                    <AutoScrollImage
                                        src={desktopImage}
                                        alt="Desktop View"
                                        height="h-[200px] md:h-[400px]"
                                        speed={30}
                                        onClick={() => setIsModalOpen(true)}
                                    />
                                </MonitorFrame>
                            </motion.div>

                            {/* Mobile Phone (Overlapping) */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="relative z-20 w-[180px] md:w-[220px] lg:-ml-12 lg:mb-8"
                            >
                                <div className="bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-gray-800">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20"></div>
                                    <div className="rounded-[1.5rem] overflow-hidden bg-white h-[350px] md:h-[420px] relative">
                                        <AutoScrollImage
                                            src={mobileImage}
                                            alt="Mobile View"
                                            height="h-full"
                                            speed={20}
                                            onClick={() => setIsModalOpen(true)}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visit CTA */}
                        <div className="mt-16">
                            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                                Visit Live Store <LuArrowRight />
                            </a>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </>
    )
}

// 6b. PROVEN IMPACT  Real results section
const ProvenImpact = ({ content }) => {
    const {
        title = "Proven Impact",
        subtitle = "Real Results. Real Brands.",
        description = "These are real numbers from brands powered by Growcord. Not projections  actual results delivered.",
        stats = [
            { metric: '400%', label: 'Revenue Growth', desc: 'Average increase within 6 months' },
            { metric: '85%', label: 'Mobile Sales', desc: 'Mobile-first stores' },
            { metric: '60%', label: 'Faster Load', desc: 'vs Shopify/WooCommerce' },
            { metric: '250+', label: 'Brands Launched', desc: 'Active D2C brands' }
        ]
    } = content || {};

    return (
        <AnimatedSection>
            <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-green-900/40 text-green-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">{subtitle}</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {stats.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 text-center hover:border-orange-500/30 transition-colors group"
                            >
                                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-3 group-hover:from-orange-300 group-hover:to-red-400 transition-all">{r.metric}</div>
                                <div className="text-lg font-bold text-white mb-2">{r.label}</div>
                                <div className="text-sm text-gray-500 leading-relaxed">{r.desc}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Case Studies */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { brand: 'FashionHub', metric: '+400% Revenue', desc: 'Transformed a local fashion store into a thriving online business with 400% revenue increase in 6 months.', results: [{ v: '400%', l: 'Revenue' }, { v: '50K+', l: 'Monthly Visitors' }, { v: '95%', l: 'Satisfaction' }] },
                            { brand: 'TechStore', metric: '+250% Sales', desc: 'Built a comprehensive e-commerce platform that increased online sales by 250% in just 4 months.', results: [{ v: '250%', l: 'Sales Growth' }, { v: '30K+', l: 'Products' }, { v: '98%', l: 'Uptime' }] }
                        ].map((cs, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="px-3 py-1 bg-orange-600/30 text-orange-400 rounded-full text-xs font-bold">{cs.metric}</div>
                                    <h3 className="text-xl font-bold">{cs.brand}</h3>
                                </div>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{cs.desc}</p>
                                <div className="flex gap-4">
                                    {cs.results.map((r, j) => (
                                        <div key={j} className="text-center">
                                            <div className="text-lg font-bold text-orange-400">{r.v}</div>
                                            <div className="text-xs text-gray-500">{r.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}


// 7. SERVERLESS SCALING
const ScaleSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <LuServer className="text-gray-800 text-9xl transform translate-x-10 -translate-y-10" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between text-gray-400 mb-8 border-b border-gray-800 pb-4">
                                <span>Server Load</span>
                                <span className="text-green-500">Stable</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-white mb-1"><span>Visitors</span><span>10,000/min</span></div>
                                    <div className="h-2 bg-gray-800 rounded-full"><div className="h-full w-full bg-green-500 rounded-full" /></div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-white mb-1"><span>Uptime</span><span>99.99%</span></div>
                                    <div className="h-2 bg-gray-800 rounded-full"><div className="h-full w-full bg-blue-500 rounded-full" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Scale from 0 to 100x Wihout Crashing</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Don&apos;t worry about servers, hosting, or traffic crashes.
                        Our <strong>Serverless Architecture</strong> (AWS Powered) handles 1 visitor or 1 million visitors automatically.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><LuCheck className="text-green-500" /> 99.99% Uptime Guarantee</li>
                        <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><LuCheck className="text-green-500" /> Unlimited Bandwidth</li>
                        <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><LuCheck className="text-green-500" /> Super Fast Global CDN</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


// 4a. UNIFIED DASHBOARD
const UnifiedDashboard = () => {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-bold rounded-full mb-4">THE BRAIN OF YOUR BUSINESS</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">One Dashboard. Total Control.</h2>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
                    Forget logging into 10 different tools. Manage your Orders, Inventory, Payouts, and Returns from a single, powerful command center.
                </p>
                <div className="relative max-w-5xl mx-auto rounded-xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                    <div className="bg-gray-100 p-2 flex gap-2 border-b border-gray-200">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    {/* Abstract Dashboard UI */}
                    <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-left">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <div className="text-xs text-gray-400 font-bold uppercase mb-2">Total Sales</div>
                            <div className="text-2xl font-bold text-gray-800">₹12,45,000</div>
                            <div className="text-green-500 text-sm font-bold">+15% this week</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <div className="text-xs text-gray-400 font-bold uppercase mb-2">Active Orders</div>
                            <div className="text-2xl font-bold text-gray-800">142</div>
                            <div className="text-blue-500 text-sm font-bold">Processing</div>
                        </div>
                        <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center justify-between gap-4">
                            <div>
                                <div className="text-xs text-gray-400 font-bold uppercase mb-2">Pending Payout</div>
                                <div className="text-2xl font-bold text-gray-800">₹45,200</div>
                            </div>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold whitespace-nowrap shadow-md">Withdraw Now</button>
                        </div>

                        <div className="md:col-span-4 h-40 md:h-48 bg-gray-50 rounded-lg border border-gray-100 flex items-end justify-between px-2 md:px-4 pb-0 pt-8 gap-1 md:gap-2">
                            {[40, 60, 45, 70, 50, 65, 80, 75, 90, 85, 100, 95].map((h, i) => (
                                <div key={i} className="w-full bg-blue-500/20 hover:bg-blue-500 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



// Cloud Icon Base - REMOVED, using React Icons instead

// Icon map for feature sections - UPDATED TO LUCIDE
const FEATURE_ICONS = {
    camera: LuCamera, bell: LuBell, profile: LuUsers, flash: LuZap,
    bag: LuShoppingBag, upload: LuUpload, sync: LuRefreshCw, alert: LuTriangleAlert,
    house: LuMapPin, creditCard: LuCreditCard, lock: LuLock, mobile: LuSmartphone,
    mail: LuMail, graph: LuTrendingUp, magnify: LuSearch, tag: LuTag,
    graphUp: LuChartBar, eye: LuEye, target: LuTarget, globe: LuGlobe,
    web: LuGlobe, alarm: LuClock, shield: LuShield, database: LuDatabase,
    rocket: LuRocket, truck: LuTruck, palette: LuPalette, cloud: LuCloud,
    money: LuBanknote, server: LuServer, bolt: LuZap
};

// Reusable Feature Grid Component  with branded icons and scroll animations
const FeatureSection = ({ title, subtitle, features, bg = "white" }) => {
    return (
        <AnimatedSection>
            <section className={`py-24 ${bg === 'gray' ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
                {/* Textured Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            {subtitle}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => {
                            const IconComponent = FEATURE_ICONS[f.icon] || LuRocket;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                                >
                                    {/* BRANDED ICON  Glassmorphism + Texture + Glow */}
                                    <div className="mb-6 relative">
                                        <div className="w-18 h-18 relative icon-float">
                                            {/* Outer glow ring */}
                                            <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity" />
                                            {/* Main icon container */}
                                            <div className="icon-glow relative w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg border border-orange-400/30">
                                                {/* Inner texture overlay */}
                                                <div className="absolute inset-0 rounded-2xl opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)' }} />
                                                {/* Shine effect */}
                                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-2xl" />
                                                <IconComponent className="text-white text-2xl relative z-10 drop-shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                        {f.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {f.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

// 1. ADMIN AUTOMATION
const AdminFeatures = () => (
    <FeatureSection
        title="Admin Automation"
        subtitle="Work Smarter, Not Harder"
        bg="white"
        features={[
            { icon: "camera", title: "AI Product Images", description: "Generate professional product shoots instantly. Our AI studio creates catalogue-ready images  no photographer needed. Save ₹50,000+ on shoots." },
            { icon: "bell", title: "Smart Notifications", description: "Get real-time WhatsApp alerts for every new order, return, and payment. Never miss a sale again. Stay updated 24/7 from your phone." },
            { icon: "profile", title: "Staff Accounts", description: "Assign roles and permissions to your team  order manager, designer, accountant. Control exactly who sees what in your dashboard." },
            { icon: "bolt", title: "Automated Workflows", description: "Set up automated order processing, invoice generation, and shipping label creation. What used to take 2 hours now takes 2 minutes." }
        ]}
    />
)

// 2. PRODUCT MANAGEMENT
const ProductFeatures = () => (
    <FeatureSection
        title="Product Management"
        subtitle="Built for Indian Sellers"
        bg="gray"
        features={[
            { icon: "bag", title: "Advanced Variants", description: "Manage sizes, colors, and materials with ease. Set specific prices and images for each variant. Perfect for fashion, jewellery, and lifestyle brands." },
            { icon: "upload", title: "Bulk Upload", description: "Upload 1,000+ products in seconds using our smart Excel/CSV importer. Migrating from Shopify or WooCommerce? We import everything for you." },
            { icon: "sync", title: "Inventory Sync", description: "Auto-sync stock levels across your website and other channels. Sell on your site, Instagram, and WhatsApp  all from one dashboard." },
            { icon: "alert", title: "Low Stock Alerts", description: "Get instant WhatsApp alerts when products run low. Set reorder points and never miss a sale due to stockouts. Works for all variants." }
        ]}
    />
)

// 3. ECOMMERCE & CHECKOUT
const EcommerceFeatures = () => (
    <FeatureSection
        title="Conversion-Optimized Checkout"
        subtitle="Reduce Cart Abandonment by 40%"
        bg="white"
        features={[
            { icon: "house", title: "Address Autofill", description: "Customers just enter their Pincode, and we auto-fill City & State. Reduces checkout time by 60% and eliminates address errors." },
            { icon: "creditCard", title: "COD + Prepaid", description: "Offer COD with smart verification. Add extra fees for COD or disable it for risky pincodes. Razorpay for seamless prepaid payments." },
            { icon: "lock", title: "1-Page Checkout", description: "A blazing-fast, single-page checkout designed like Flipkart. Reduce drop-offs by 40%. Tested and proven across 500+ stores." },
            { icon: "mobile", title: "Mobile-First UX", description: "80% of your buyers shop from phones. Our checkout is built mobile-first  fast loading, thumb-friendly, and conversion-optimized." }
        ]}
    />
)

// 4. MARKETING SUITE
const MarketingFeatures = () => (
    <FeatureSection
        title="Marketing Suite"
        subtitle="Grow Sales on Autopilot"
        bg="gray"
        features={[
            { icon: "mail", title: "Email & SMS Recovery", description: "Automated abandoned cart recovery via email and SMS. Recover 15-25% of lost sales without lifting a finger. Pre-written templates included." },
            { icon: "graph", title: "Pixel Integration", description: "One-click connection with Facebook Pixel and Google Analytics 4. Track every visitor, every click, every sale. Optimize your ad spend like a pro." },
            { icon: "magnify", title: "Advanced SEO", description: "Rank higher on Google with auto-generated meta tags, schema markup, sitemaps, and lightning-fast page speeds. Free organic traffic." },
            { icon: "tag", title: "Coupon Engine", description: "Create discount codes, BOGO offers, flash sale timers, and spin-the-wheel popups. Boost conversions and average order value by 30%." }
        ]}
    />
)

// 5. ANALYTICS
const AnalyticsFeatures = () => (
    <FeatureSection
        title="Analytics & Insights"
        subtitle="Data-Driven Decisions"
        bg="white"
        features={[
            { icon: "graphUp", title: "Sales Reports", description: "Track revenue, profit, and average order value in real-time. See daily, weekly, and monthly trends. Export to Excel with one click." },
            { icon: "eye", title: "Live View", description: "See who is on your website right now  what they&apos;re browsing, what&apos;s in their cart, and where they&apos;re from. React instantly." },
            { icon: "target", title: "Cohort Analysis", description: "Understand customer retention and lifetime value. See which acquisition channels bring the most valuable customers. Make smarter budgets." },
            { icon: "graph", title: "Ad ROI Tracker", description: "See exactly which ads bring sales and which waste money. Track ROAS, CPA, and conversion rates for every campaign and ad set." }
        ]}
    />
)

// 6. INFRASTRUCTURE
const InfrastructureFeatures = () => (
    <FeatureSection
        title="Enterprise Infrastructure"
        subtitle="Built for Scale"
        bg="gray"
        features={[
            { icon: "globe", title: "Free Hosting", description: "We host your site on high-speed AWS servers in Mumbai. No extra hosting fees, ever. Your site loads in under 2 seconds across India." },
            { icon: "alarm", title: "99.9% Uptime", description: "Your store never goes down, even during Diwali sales or flash events. We&apos;ve handled 10,000 concurrent users without breaking a sweat." },
            { icon: "shield", title: "Daily Backups", description: "Your data is safe with automated daily backups and SSL security. Even if something goes wrong, we restore your store in minutes." },
            { icon: "lock", title: "SSL & DDoS Protection", description: "Free SSL certificate, DDoS protection, and PCI-compliant infrastructure. Your customers' data is as safe as a bank vault." }
        ]}
    />
)

// 7c. SMART RE-MARKETING
const Remarketing = () => {
    return (
        <section className="py-24 bg-green-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="md:w-1/2">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 max-w-md mx-auto relative">
                        {/* Chat UI */}
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 max-w-[80%]">
                                    Hi Rohan! You left the &apos;Black Oversized T-Shirt&apos; in your cart. 🛒
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-600 max-w-[80%]">
                                    Quick! Use code <span className="font-bold text-green-600">SAVE10</span> for 10% OFF if you buy now! 🔥
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-green-500 text-white p-3 rounded-2xl rounded-tr-none text-sm font-bold">
                                    Ordering Now! 😍
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold text-xs shadow-lg transform rotate-3">
                            RECOVERED SALE +₹499
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="inline-block px-4 py-1 bg-green-100 text-green-700 font-bold rounded-full mb-4">STOP LOSING MONEY</div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Abandoned Cart Recovery</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        70% of people add to cart and leave. We bring them back automatically using WhatsApp & SMS marketing flows.
                        <br /><br />
                        <strong>Result:</strong> 20% More Revenue without spending extra on ads.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 font-bold text-gray-800"><LuMessageSquare className="text-green-500" /> Auto-WhatsApp</div>
                        <div className="flex items-center gap-2 font-bold text-gray-800"><LuMessageSquare className="text-green-500" /> Auto-SMS</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Testimonials section now uses the shared imported Testimonials component


// 8, 9, 10. DEEP DIVE SECTIONS (RTO, GROWTH) - Kept as Highlight Sections
const DeepDiveSections = () => {
    return (
        <div className="divide-y divide-gray-100">
            {/* RTO Shield */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Smart RTO Shield
                        </div>
                        <h2 className="text-4xl font-bold mb-6">AI That Saves You Money</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We use AI to detect fake orders before you ship them.
                            Address verification, phone number validation, and past buyer history checks.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-lg font-medium text-gray-700"><LuShield className="text-green-500" /> Auto-Cancel Fake Orders</li>
                            <li className="flex items-center gap-3 text-lg font-medium text-gray-700"><LuCheck className="text-green-500" /> COD Verification Calls</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-red-50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                            <LuShield className="text-9xl text-red-500 transform group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Engine */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Data-Driven Growth
                        </div>
                        <h2 className="text-4xl font-bold mb-6">We Run Your Ads</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Our marketing team runs your ads on Facebook, Instagram & Google.
                            We optimize for <strong>ROAS (Return on Ad Spend)</strong>, ensuring you make profit on every rupee spent.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-blue-50 px-6 py-3 rounded-xl font-bold text-blue-700">Facebook Ads</div>
                            <div className="bg-pink-50 px-6 py-3 rounded-xl font-bold text-pink-700">Instagram Growth</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-blue-50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                            <LuTrendingUp className="text-9xl text-blue-500 transform group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// 11. PRICING PLANS (Enhanced)
const PricingPlans = () => {
    return (
        <section className="py-32 bg-gray-900 text-white" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-block bg-orange-600/20 text-orange-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Simple & Transparent</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Growth Plan</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">One-time setup fee of ₹9,999 + 5% or 10% commission on delivered orders. No monthly fees. No hidden charges. Pay only when you sell.</p>
                </div>

                {/* Trust Strip */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {['✓ No Monthly Rent', '✓ No Hidden Fees', '✓ Cancel Anytime', '✓ 100% Refund if Tech Fails'].map((t, i) => (
                        <span key={i} className="text-sm text-green-400 font-bold">{t}</span>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-1 shadow-2xl">
                    <div className="bg-gray-900 rounded-[1.3rem] overflow-hidden">
                        {/* Setup Fee Header */}
                        <div className="p-6 md:p-12 text-center border-b border-white/10 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Growcord Setup License</h3>
                                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-2 sm:gap-4 mb-6">
                                    <span className="text-xl md:text-2xl text-gray-500 line-through">₹25,000</span>
                                    <span className="text-5xl md:text-7xl font-extrabold text-white">₹9,999</span>
                                    <span className="text-lg md:text-xl text-gray-400">+ GST</span>
                                </div>
                                <p className="text-green-400 font-bold uppercase tracking-wide text-lg mb-4">Lifetime Access. One Time Payment.</p>
                                <p className="text-gray-500 text-sm max-w-xl mx-auto">Includes custom website design, hosting setup, payment gateway integration, logistics setup, and full onboarding support.</p>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-orange-600/10 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        {/* Plans Grid  two tiers since 2026-09-14: Self Managed 5%, Fully Managed 10% */}
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className={"p-10 hover:bg-white/5 transition-colors relative group"}>

                                <h4 className="text-2xl font-semibold text-orange-400 mb-2">Self Managed</h4>
                                <p className="text-gray-400 text-sm mb-6">You run the store. We give you the complete platform.</p>
                                <div className="text-6xl font-extralight mb-2 ">5%</div>
                                <div className="text-sm text-gray-500 mb-8">Commission / Delivered Order + GST</div>
                                <ul className="space-y-4 text-gray-300 text-sm mb-8">
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> All Commerce features included</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> Every courier on one wallet (Growcord Ship)</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> GST invoices with Growcord Books</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> WhatsApp &amp; SMS order updates</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> Razorpay, UPI &amp; OTP-verified COD</li>
                                </ul>
                                <Link
                                    href="/checkout?plan=ecom_self"
                                    className="block w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black font-medium transition-all text-center"
                                    onClick={() => {
                                        const planData = { itemId: 'ecom_self', itemName: 'Self Managed', value: 9999 };
                                        gtm.trackAddToCart(planData);
                                        trackAddToCart(9999, 'INR', 'Self Managed');
                                        trackLinkedInAddToCart();
                                    }}
                                >
                                    Select Plan
                                </Link>
                            </div>
                            <div className={"p-10 hover:bg-white/5 transition-colors relative group bg-white/5"}>
                                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                                <h4 className="text-2xl font-semibold text-white mb-2">Fully Managed</h4>
                                <p className="text-gray-400 text-sm mb-6">We run operations, shipping, recovery and ads with you.</p>
                                <div className="text-6xl font-extralight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">10%</div>
                                <div className="text-sm text-gray-500 mb-8">Commission / Delivered Order + GST</div>
                                <ul className="space-y-4 text-gray-300 text-sm mb-8">
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> <strong>Everything in Self Managed</strong></li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> <strong>We add products &amp; manage inventory</strong></li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> <strong>We handle shipments, pickups &amp; failed deliveries</strong></li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> Abandoned cart recovery on WhatsApp &amp; SMS</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> Facebook, Instagram &amp; Google ads managed (ad budget is yours)</li>
                                    <li className="flex gap-3"><LuCheck className="text-green-500 flex-shrink-0 text-lg" /> Dedicated account manager</li>
                                </ul>
                                <Link
                                    href="/checkout?plan=ecom_managed"
                                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all text-center"
                                    onClick={() => {
                                        const planData = { itemId: 'ecom_managed', itemName: 'Fully Managed', value: 9999 };
                                        gtm.trackAddToCart(planData);
                                        trackAddToCart(9999, 'INR', 'Fully Managed');
                                        trackLinkedInAddToCart();
                                    }}
                                >
                                    Select Plan
                                </Link>
                            </div>
                        </div>

                        <div className="p-8 text-center border-t border-white/10 bg-black/20">
                            <p className="text-sm text-gray-500 mb-3">Secure Payment via Razorpay. 100% Refundable if tech fails.</p>
                            <p className="text-xs text-gray-600">All plans include: Free SSL, Daily Backups, Unlimited Products, Unlimited Staff Accounts, COD & Prepaid Payments, and Lifetime Platform Updates.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">Not sure which plan is right for you?</p>
                    <a href="https://wa.me/917827831337" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
                        <FaWhatsapp className="text-xl" /> Talk to Our Team
                    </a>
                </div>
            </div>
        </section>
    )
}



// 12. INTEGRATIONS (Updated Visuals)
const Integrations = () => {
    return (
        <section className="py-32 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400 uppercase tracking-widest font-bold mb-12">Seamlessly Integrated With</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-3xl font-bold text-blue-900">Razorpay</span>
                    <span className="text-3xl font-bold text-orange-600">Shiprocket</span>
                    <span className="text-3xl font-bold text-blue-600">Facebook</span>
                    <span className="text-3xl font-bold text-red-500">Google Ads</span>
                    <span className="text-3xl font-bold text-green-500">WhatsApp</span>
                    <span className="text-3xl font-bold text-red-600">Delhivery</span>
                </div>
            </div>
        </section>
    )
}

// 12a. PROCESS SECTION
const ProcessSection = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-16">How to Launch in 24 Hours?</h2>
                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Line connector */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

                    {[
                        { step: "1", title: "Enroll", desc: "Pay the ₹9,999 setup fee." },
                        { step: "2", title: "Onboarding", desc: "Join WhatsApp group with our manager." },
                        { step: "3", title: "Build", desc: "We upload products & design the store." },
                        { step: "4", title: "Launch", desc: "Start selling & running ads." },
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 bg-black p-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-orange-900/50">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// 12. COMPARISON TABLE
const ComparisonTable = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 overflow-x-auto">
                <h2 className="text-3xl font-bold text-center mb-12">The Smart Choice</h2>
                <table className="w-full max-w-5xl mx-auto text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b-2 border-gray-100">
                            <th className="p-4 text-gray-500 uppercase text-sm">Feature</th>
                            <th className="p-4 text-center text-orange-600 font-extrabold text-xl bg-orange-50 rounded-t-xl">Growcord</th>
                            <th className="p-4 text-center text-gray-400 font-bold">Shopify</th>
                            <th className="p-4 text-center text-gray-400 font-bold">WooCommerce</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[
                            ["Monthly Fixed Fee", "₹0 (Zero)", "₹2,000+", "Hosting Cost"],
                            ["Transaction Fee", "5% - 10%", "2% + Payment Gw", "Payment Gw"],
                            ["RTO Protection", "Included (AI)", "Paid App ($50/mo)", "Paid Plugin"],
                            ["Marketing Support", "Included (Partner)", "Agency (Extra)", "Agency (Extra)"],
                            ["Android App", "Included", "Paid App", "Paid Dev"],
                            ["Ease of Use", "Managed for You", "DIY", "Need Developer"]
                        ].map(([feature, us, shopify, woo], i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-bold text-gray-700">{feature}</td>
                                <td className="p-4 text-center font-bold text-green-600 bg-orange-50">{us}</td>
                                <td className="p-4 text-center text-gray-500">{shopify}</td>
                                <td className="p-4 text-center text-gray-500">{woo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

// 13. FAQ - Now uses shared FaqSection component
// (No inline FAQ needed - shared component handles it)

// 14. FINAL CTA - Now uses shared CTASection component
// (No inline FinalCTA needed - shared component handles it)

export default function EcommerceSolutionPage() {
    const [pageConfig, setPageConfig] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupTriggered, setPopupTriggered] = useState(false);

    useEffect(() => {
        // Auto-trigger popup logic
        if (!popupTriggered) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                setPopupTriggered(true);
                gtm.trackPopupImpression('auto_trigger', 'Timer Delay');
            }, 30000);
            return () => clearTimeout(timer);
        }
    }, [popupTriggered]);

    const handleOpenPopup = () => {
        setShowPopup(true);
        setPopupTriggered(true);
        gtm.trackPopupImpression('manual_cta', 'Button Click');
    };

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Fetch Admin Content for 'ecommerce' page
        const loadContent = async () => {
            try {
                const config = await pageConfigAPI.get('ecommerce');
                if (config) setPageConfig(config);
            } catch (error) {
                console.error("Failed to load page content", error);
            }
        };
        loadContent();
    }, []);

    // Helper to get text content with fallback to hardcoded defaults
    const getText = (section, key, defaultVal) => {
        return pageConfig?.customContent?.[section]?.[key] || defaultVal;
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
            <EcommerceHeader onBookDemo={handleOpenPopup} />
            <main>
                <div id="hero"><VideoHero onBookDemo={handleOpenPopup} onStartBrand={scrollToPricing} /></div>
                <SocialProof />

                {/* Stats Section - Custom Inline */}
                <div id="stats"><EcommerceStats /></div>

                <ProblemSection />
                <SolutionOverview />
                <UnifiedDashboard />

                {/* Mid-Page CTA 1 */}
                <MidPageCTA
                    title="Ready to Launch Your Brand?"
                    subtitle="Join 500+ D2C brands that trust Growcord for their entire e-commerce operations."
                    primaryText="Start Your Brand Now"
                    secondaryText="Book a Free Demo"
                    onPrimaryClick={scrollToPricing}
                    onSecondaryClick={handleOpenPopup}
                />

                {/* 6 KEY FEATURE STRIPS (4 icons each) */}
                <div id="features">
                    <AdminFeatures />
                    <EcommerceFeatures />
                    <MarketingFeatures />
                    <AnalyticsFeatures />
                    <ProductFeatures />
                    <InfrastructureFeatures />
                </div>

                {/* Mid-Page CTA 2 */}
                <MidPageCTA
                    title="See How It All Works"
                    subtitle="Get a personal walkthrough of the platform. Our team will show you exactly how we build, manage, and scale your brand."
                    primaryText="View Pricing Plans"
                    secondaryText="Schedule a Demo Call"
                    onPrimaryClick={scrollToPricing}
                    onSecondaryClick={handleOpenPopup}
                />

                <NoMonthlyFees />
                <ScaleSection />
                <CustomDesign content={pageConfig?.customContent?.['custom-design']} />
                <ProvenImpact content={pageConfig?.customContent?.['proven-impact']} />
                <DeepDiveSections />
                <Remarketing />

                <Integrations />
                <div id="comparison"><ComparisonTable /></div>
                <ProcessSection />

                {/* Mid-Page CTA 3 */}
                <MidPageCTA
                    title="Don't Wait. Your Competitors Aren't."
                    subtitle="Every day without a professional e-commerce setup is a day of lost sales. Get started in 24 hours."
                    primaryText="Get Started Today"
                    secondaryText="Talk to Founder"
                    secondaryLink="https://wa.me/917827831337"
                    onPrimaryClick={scrollToPricing}
                    onSecondaryClick={null} // Handled by secondaryLink
                />

                {/* Testimonials - Shared Component */}
                <div id="testimonials">
                    <Testimonials title="Success Stories" />
                </div>

                <PricingPlans />

                {/* High Conversion Logic - New Section */}
                <HighConversionSection />

                {/* FAQ - Shared Component */}
                <div id="faq">
                    <FAQSection
                        category="ecommerce"
                        title="Frequently Asked Questions"
                        description="Everything you need to know about Growcord's fully managed e-commerce platform."
                    />
                </div>

                {/* Footer CTA - Shared Component */}
                <CTASection
                    headline="Launch Your High-Conversion Ecommerce Store"
                    subheadline="Join 500+ Indian D2C brands who switched to Growcord. Stop managing tech. Start managing profits. No monthly fees, no hidden charges."
                    primaryCtaText="View Pricing Plans"
                    primaryCtaLink="#pricing"
                    secondaryCtaText="Talk to Our Team"
                    secondaryCtaLink="https://wa.me/917827831337"
                />
            </main>
            <Footer />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917827831337?text=Hi%2C%20I'm%20interested%20in%20the%20E-commerce%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center gap-2 group"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl group-hover:rotate-12 transition-transform" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">Chat with us</span>
            </a>

            {/* Demo Popup */}
            {showPopup && (
                <DemoPopup
                    config={{
                        step1Title: "Start Your Brand",
                        step1Subtitle: "Get a callback from our e-commerce experts.",
                        step2Title: "Schedule Demo",
                        step2Subtitle: "Choose a time that works for you."
                    }}
                    pageId="ecommerce-solution"
                    onClose={() => setShowPopup(false)}
                />
            )}

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                html { scroll-behavior: smooth; }
                
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}
