"use client";

import Link from "next/link";
import { FaWhatsapp, FaHome, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ErrorLayout = ({ statusCode, title, description, showSupport = true }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Status Code */}
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 mb-4 select-none">
                        {statusCode}
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
                        {description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <FaHome size={18} />
                            Back to Home
                        </Link>

                        {showSupport && (
                            <a
                                href="https://wa.me/917827831337?text=Hi%2C%20I'm%20facing%20an%20issue%20on%20the%20website."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <FaWhatsapp size={20} />
                                Contact Support
                            </a>
                        )}
                    </div>

                    {/* Additional Link */}
                    <div className="mt-12 text-sm text-gray-500">
                        <button
                            onClick={() => window.history.back()}
                            className="hover:text-orange-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                        >
                            <FaArrowLeft size={12} />
                            Go Back Previous Page
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ErrorLayout;
