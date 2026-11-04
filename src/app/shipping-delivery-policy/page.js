"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ShippingDeliveryPolicy = () => {
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
                        Shipping and Delivery Policy
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
                            1. Digital Services Delivery
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-orange-600">Growcord</strong> primarily
                            provides digital services. Since our services are delivered
                            electronically, there is no physical shipping involved. This
                            policy outlines our delivery timelines and processes for digital
                            deliverables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Service Delivery Timelines
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            2.1 Website Development
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Basic Website:</strong> 7-14 business days
                            </li>
                            <li>
                                <strong>E-commerce Website:</strong> 14-30 business days
                            </li>
                            <li>
                                <strong>Custom Website:</strong> 21-45 business days (depending
                                on complexity)
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            2.2 Branding Services
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Logo Design:</strong> 5-10 business days
                            </li>
                            <li>
                                <strong>Complete Branding Package:</strong> 10-20 business days
                            </li>
                            <li>
                                <strong>Product Packaging:</strong> 7-14 business days
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                            2.3 Digital Marketing Services
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Social Media Content:</strong> 3-5 business days for
                                initial batch
                            </li>
                            <li>
                                <strong>SEO Setup:</strong> 5-10 business days
                            </li>
                            <li>
                                <strong>Ad Campaign Setup:</strong> 2-5 business days
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. Delivery Methods
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We deliver our services through the following methods:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Email:</strong> Deliverables sent to your registered
                                email address
                            </li>
                            <li>
                                <strong>Cloud Storage:</strong> Access via secure cloud links
                                (Google Drive, Dropbox)
                            </li>
                            <li>
                                <strong>Client Portal:</strong> Access through your dedicated
                                client dashboard
                            </li>
                            <li>
                                <strong>FTP/SFTP:</strong> Direct upload to your server (for
                                website projects)
                            </li>
                            <li>
                                <strong>Live Deployment:</strong> Direct deployment to your
                                domain
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            4. Delivery Process
                        </h2>
                        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                            <li>Service agreement signed and payment received</li>
                            <li>Project kickoff meeting scheduled</li>
                            <li>Work begins as per agreed timeline</li>
                            <li>Regular updates provided during development</li>
                            <li>Review and feedback rounds</li>
                            <li>Final delivery and handover</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            5. Delays and Extensions
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While we strive to meet all delivery deadlines, delays may occur
                            due to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                Client-side delays in providing required information or feedback
                            </li>
                            <li>Scope changes requested after project initiation</li>
                            <li>
                                Third-party dependencies (domain transfers, hosting setup)
                            </li>
                            <li>Unforeseen technical challenges</li>
                            <li>Force majeure events</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We will notify you immediately of any anticipated delays and work
                            with you to adjust timelines accordingly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            6. Acceptance and Revisions
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Upon delivery, you will have 7 business days to review and request
                            revisions (as per your service agreement). After this period, the
                            project will be considered accepted and final.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            7. Physical Deliverables (If Applicable)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For any physical deliverables (printed materials, merchandise):
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Shipping within India: 5-10 business days</li>
                            <li>
                                Shipping charges will be calculated based on weight and
                                destination
                            </li>
                            <li>
                                We use reliable courier services (DTDC, Blue Dart, India Post)
                            </li>
                            <li>Tracking information will be provided upon shipment</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            8. Contact Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For delivery-related inquiries, please contact:
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

export default ShippingDeliveryPolicy;
