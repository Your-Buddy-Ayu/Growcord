"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import StatsSection from "@/components/landing/StatsSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const AboutUs = () => {
    const stats = [
        { value: "500+", label: "Happy Clients", description: "Businesses we&apos;ve helped grow" },
        { value: "1000+", label: "Projects Delivered", description: "Successful digital transformations" },
        { value: "98%", label: "Client Satisfaction", description: "Rated 4+ stars" },
        { value: "50+", label: "Team Members", description: "Dedicated professionals" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-gray-900/80 to-purple-600/40"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <h1 className="text-6xl md:text-7xl font-black mb-6">
                            About <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Growcord</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            We&apos;re on a mission to make digital transformation transparent, affordable, and accessible for every business.
                        </p>
                    </motion.div>
                </div>
            </section>

            <StatsSection stats={stats} />

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-16">
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                            At <strong className="text-orange-600">Growcord</strong>, we believe that every business deserves access to professional digital services without the hidden costs and confusing pricing that plague the industry.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Our mission is to democratize digital transformation by providing transparent pricing, instant quotes, and high-quality services that help businesses grow online with confidence.
                        </p>
                    </motion.section>

                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> was founded with a simple idea: what if getting a website or digital service was as straightforward as buying something online? No sales calls, no hidden fees, no surprises.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                            We started by building a transparent cost calculator that shows you exactly what you&apos;ll pay, when you&apos;ll get it, and what&apos;s included. This transparency became our core value, and it&apos;s what sets us apart from traditional agencies.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Today, we&apos;ve helped over 500 businesses transform their digital presence, and we&apos;re just getting started.
                        </p>
                    </motion.section>

                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Our Values</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparency</h3>
                                <p className="text-gray-700">
                                    No hidden fees, no surprises. What you see is what you pay.
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-sm border border-purple-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
                                <p className="text-gray-700">
                                    We deliver professional-grade services that exceed expectations.
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-sm border border-blue-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Speed</h3>
                                <p className="text-gray-700">
                                    Get instant quotes and fast delivery without compromising quality.
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-sm border border-green-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
                                <p className="text-gray-700">
                                    Making professional digital services accessible to businesses of all sizes.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Why Choose Growcord?</h2>
                        <ul className="space-y-4 text-xl text-gray-700">
                            {[
                                { title: "100% Transparent Pricing", desc: "See exactly what you'll pay before you commit" },
                                { title: "Instant Quotes", desc: "Get your price in minutes, not weeks" },
                                { title: "No Sales Pressure", desc: "No pushy sales calls or hidden agendas" },
                                { title: "Industry-Specific Solutions", desc: "Tailored services for your business type" },
                                { title: "Fast Delivery", desc: "Get your project completed on time, every time" },
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-orange-600 text-2xl font-bold">✓</span>
                                    <span><strong>{item.title}:</strong> {item.desc}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">Our Team</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                            Our team of 50+ dedicated professionals includes designers, developers, marketers, and support specialists who are passionate about helping businesses succeed online.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            We&apos;re constantly learning, improving, and innovating to provide you with the best possible service.
                        </p>
                    </motion.section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
