"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ConfirmationContent = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const whatsappNumber = "917827831337";
    const message = encodeURIComponent(`Hi, I just placed order ${orderId || '...'} for a landing page. I am ready to share the required details (Logo, Content, Images, etc.).`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <div className="pt-32 pb-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden text-center p-8 md:p-12 border border-gray-100"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Thank you for your order. We have received your payment. To start building your landing page, we need a few details from you.
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">🚀 Next Steps: Send us your requirement</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                        <li className="flex items-start gap-2">
                            <span className="mt-1">✅</span>
                            <span><strong>Logo & Branding:</strong> Your logo files and brand colors.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1">✅</span>
                            <span><strong>Content:</strong> About Us text, Services/Products list.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1">✅</span>
                            <span><strong>Images:</strong> High-quality images of your products/team.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1">✅</span>
                            <span><strong>Contact Info:</strong> Phone, Email, Address, Social Links.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                    <p className="text-sm text-gray-500 mb-1">Order ID</p>
                    <p className="font-mono font-bold text-gray-900 text-lg break-all">{orderId || "Processing..."}</p>
                </div>

                <div className="space-y-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-green-200"
                    >
                        {/* WhatsApp Icon */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        Send Details via WhatsApp
                    </a>

                    <Link
                        href="/"
                        className="block w-full bg-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

const CheckoutConfirmation = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== "undefined") {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            }
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Confetti Animation */}
            {windowSize.width > 0 && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

            <div className="relative z-10">
                <Suspense fallback={<div className="pt-32 text-center">Loading payment details...</div>}>
                    <ConfirmationContent />
                </Suspense>
            </div>

            <Footer />
        </div>
    );
};

export default CheckoutConfirmation;
