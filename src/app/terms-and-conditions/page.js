"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsAndConditions = () => {
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
                        Terms and Conditions
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
                            Welcome to <strong className="text-orange-600">Growcord</strong>.
                            These Terms and Conditions (&quot;Terms&quot;) govern your use of our
                            website and services. By accessing or using our services, you
                            agree to be bound by these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Services
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> provides
                            digital services including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Website development and design</li>
                            <li>E-commerce platform development</li>
                            <li>Branding and logo design</li>
                            <li>Social media management</li>
                            <li>SEO services</li>
                            <li>Digital marketing and advertising</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. Pricing and Payment
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All prices displayed on our website are in Indian Rupees (INR) and
                            include applicable taxes unless otherwise stated. Prices are
                            subject to change without prior notice.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Payment terms will be specified in your service agreement. We
                            accept payments through various methods including bank transfers,
                            credit/debit cards, and online payment gateways.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            4. User Rights and Responsibilities
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Access and use our services as per the agreed terms</li>
                            <li>Receive transparent pricing information</li>
                            <li>Request modifications to services within agreed scope</li>
                            <li>Cancel services as per our cancellation policy</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            You are responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Providing accurate information during service requests</li>
                            <li>Making timely payments as agreed</li>
                            <li>Using our services in compliance with applicable laws</li>
                            <li>Not engaging in any illegal or harmful activities</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            5. Intellectual Property
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All content, designs, and materials created by{" "}
                            <strong className="text-orange-600">Growcord</strong> remain our
                            intellectual property until full payment is received. Upon
                            complete payment, ownership of the final deliverables will
                            transfer to you as specified in the service agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            6. Disclaimers
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our services are provided &quot;as is&quot; without warranties of any kind.
                            We do not guarantee specific results from our services, including
                            but not limited to website traffic, sales, or search engine
                            rankings.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> is not
                            liable for any indirect, incidental, or consequential damages
                            arising from the use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            7. Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our total liability for any claims arising from our services shall
                            not exceed the total amount paid by you for the specific service
                            in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            8. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms are governed by the laws of India. Any disputes
                            arising from these Terms shall be subject to the exclusive
                            jurisdiction of the courts in India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            9. Contact Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For questions about these Terms, please contact us at:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-orange-600">Growcord</strong>
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

export default TermsAndConditions;
