"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { leadsAPI } from "@/lib/api";
import { getUtmForLead, getPagePath } from "@/lib/utm";
import { trackLead as trackFbLead } from "@/components/FacebookPixel";
import { gtm } from "@/lib/analytics";

// IMporting Icons from react icons
import { IoIosMail, IoIosAlarm } from "react-icons/io";
import { FaPhone, FaMapPin } from "react-icons/fa6";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Register lead
            await leadsAPI.create({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
                source: 'contact-form',
                status: 'new',
                pageId: getPagePath() || '/contact-us',
                utm: getUtmForLead(),
                notes: [`Contact form submission: ${formData.subject}`]
            });

            // Track Lead event in Facebook Pixel
            trackFbLead(null, 'INR', 'Contact Form Submission');

            // GTM: Track Lead Generation
            gtm.trackLead('Contact Us', 'INR', 0, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            alert("Thank you for contacting us! We'll get back to you soon.");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
            console.error('Error submitting contact form:', error);
            // Still clear form even if lead registration fails for better UX, or show error
            // Ideally we check error type, but for now matching original behavior with alert
            alert("Thank you for contacting us! We'll get back to you soon.");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-gray-900/80 to-purple-600/40"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <h1 className="text-6xl md:text-7xl font-black mb-6">
                            Get in Touch with
                            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-2">
                                Growcord
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light">
                            Have questions? We&apos;re here to help. Reach out to us and we&apos;ll
                            respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({ ...formData, subject: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-6">
                            Contact Information
                        </h2>
                        <div className="space-y-6">
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border border-orange-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="text-3xl">
                                        <IoIosMail />
                                    </span>
                                    Email
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    <a
                                        href="mailto:contact@growcord.com"
                                        className="text-orange-600 hover:underline font-semibold"
                                    >
                                        contact@growcord.com
                                    </a>
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-sm border border-purple-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="text-3xl">
                                        <FaPhone />
                                    </span>
                                    Phone
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    <a
                                        href="tel:+917827831337"
                                        className="text-orange-600 hover:underline font-semibold"
                                    >
                                        +91 7827831337
                                    </a>
                                </p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Monday - Friday, 9:00 AM - 6:00 PM IST
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-sm border border-blue-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="text-3xl">
                                        <FaMapPin />
                                    </span>
                                    Address
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    <strong className="text-orange-600">Growcord</strong> (Operating under IDRISHI)
                                    <br />
                                    GSTIN: 07AESPW3016N1ZS
                                    <br />
                                    D-32,Om Vihar, Uttam Nagar
                                    <br />
                                    New Delhi - 110059
                                    <br />
                                    India
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-sm border border-green-200/50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="text-3xl">
                                        <IoIosAlarm />
                                    </span>
                                    Business Hours
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Monday - Friday: 9:00 AM - 6:00 PM IST
                                    <br />
                                    Saturday: 10:00 AM - 4:00 PM IST
                                    <br />
                                    Sunday: Closed
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
