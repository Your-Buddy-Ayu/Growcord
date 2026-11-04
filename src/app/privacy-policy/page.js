"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 py-16"
            >
                <div className="mb-8">
                    <h1 className="text-5xl font-black text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Last updated:{" "}
                        {new Date().toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> (&quot;we&quot;, &quot;us&quot;,
                            or &quot;our&quot;) is committed to protecting your privacy. This Privacy
                            Policy explains how we collect, use, disclose, and safeguard your
                            information when you use our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Information We Collect
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            2.1 Personal Information
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect the following personal information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                Name and contact information (phone number, email address)
                            </li>
                            <li>Business information (company name, business type)</li>
                            <li>
                                Payment information (processed securely through third-party
                                payment gateways)
                            </li>
                            <li>Service preferences and requirements</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            2.2 Automatically Collected Information
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We automatically collect certain information when you visit our
                            website:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>To provide and deliver our services</li>
                            <li>To process payments and manage your account</li>
                            <li>To communicate with you about your services and inquiries</li>
                            <li>To improve our website and services</li>
                            <li>To send you marketing communications (with your consent)</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and prevent fraud</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            4. Data Protection
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> implements
                            appropriate technical and organizational measures to protect your
                            personal information against unauthorized access, alteration,
                            disclosure, or destruction. However, no method of transmission
                            over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            5. Data Sharing and Disclosure
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell your personal information. We may share your
                            information with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                Service providers who assist us in operating our business
                                (payment processors, hosting providers)
                            </li>
                            <li>
                                Legal authorities when required by law or to protect our rights
                            </li>
                            <li>Business partners with your explicit consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            6. Your Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Under applicable data protection laws, you have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to processing of your personal information</li>
                            <li>Request restriction of processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            7. Cookies and Tracking Technologies
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to enhance your
                            experience on our website. You can control cookie preferences
                            through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            8. Data Retention
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We retain your personal information only for as long as necessary
                            to fulfill the purposes outlined in this Privacy Policy, unless a
                            longer retention period is required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            9. Children&apos;s Privacy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our services are not directed to individuals under the age of 18.
                            We do not knowingly collect personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            10. Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time. We will
                            notify you of any changes by posting the new Privacy Policy on
                            this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            11. Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have questions about this Privacy Policy or wish to
                            exercise your rights, please contact us at:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-orange-600">Growcord</strong> (Operating under IDRISHI)
                            <br />
                            GSTIN: 07AESPW3016N1ZS
                            <br />
                            Email: contact@growcord.com
                            <br />
                            Phone: +91 7827831337
                        </p>
                    </section>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
