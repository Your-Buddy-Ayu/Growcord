"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CancellationRefundPolicy = () => {
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
                        Cancellation and Refund Policy
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
                            1. Cancellation Policy
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            1.1 Service Cancellation
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may cancel your service request with{" "}
                            <strong className="text-orange-600">Growcord</strong> at any time
                            before work has commenced. Once work has begun, cancellation terms
                            will apply as specified in your service agreement.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            1.2 Cancellation Timeline
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Before work starts:</strong> Full refund available
                                (minus any processing fees)
                            </li>
                            <li>
                                <strong>After work starts (0-25% completed):</strong> 75% refund
                            </li>
                            <li>
                                <strong>After work starts (26-50% completed):</strong> 50%
                                refund
                            </li>
                            <li>
                                <strong>After work starts (51-75% completed):</strong> 25%
                                refund
                            </li>
                            <li>
                                <strong>After work starts (76-100% completed):</strong> No
                                refund
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            1.3 How to Cancel
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To cancel a service, please contact us at:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Email: contact@growcord.com</li>
                            <li>Phone: +91 7827831337</li>
                            <li>Through your account dashboard (if applicable)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Cancellation requests must be submitted in writing and will be
                            processed within 5-7 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Refund Policy
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            2.1 Refund Eligibility
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refunds will be processed according to the cancellation timeline
                            above. Refunds are only available for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Service cancellations within the specified timelines</li>
                            <li>Services not delivered as per the agreed specifications</li>
                            <li>
                                Technical issues preventing service delivery (subject to
                                verification)
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            2.2 Refund Processing
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refunds will be processed using the same payment method used for
                            the original transaction:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Credit/Debit Cards:</strong> 7-14 business days
                            </li>
                            <li>
                                <strong>Bank Transfers:</strong> 5-10 business days
                            </li>
                            <li>
                                <strong>UPI:</strong> 3-5 business days
                            </li>
                            <li>
                                <strong>Digital Wallets:</strong> 3-7 business days
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            2.3 Refund Fees
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The following fees may apply to refunds:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                Payment gateway processing fees (2-3% of transaction amount)
                            </li>
                            <li>Bank charges (if applicable)</li>
                            <li>Work completed fees (as per cancellation timeline)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. Non-Refundable Items
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The following are non-refundable:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Services completed and delivered</li>
                            <li>Custom work that has been finalized and approved</li>
                            <li>Third-party services or licenses purchased on your behalf</li>
                            <li>Domain registrations and hosting fees (after 30 days)</li>
                            <li>Services cancelled after 76% completion</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            4. Dispute Resolution
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you are not satisfied with our service or refund decision,
                            please contact us at contact@growcord.com. We will review your
                            case and respond within 5-7 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            5. Contact Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For cancellation or refund requests, please contact:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-orange-600">Growcord</strong>
                            <br />
                            Email: contact@growcord.com
                            <br />
                            Phone: +91 7827831337
                            <br />
                            Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
                        </p>
                    </section>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default CancellationRefundPolicy;
