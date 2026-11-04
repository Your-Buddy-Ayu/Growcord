import React from 'react';
import { motion } from 'framer-motion';
import { LuZap, LuSmartphone, LuLayers, LuShieldCheck, LuMousePointer2 } from 'react-icons/lu';

const HighConversionSection = () => {
    const features = [
        {
            icon: <LuZap className="w-8 h-8 text-yellow-500" />,
            title: "Blazing Fast Speed",
            desc: "Sub-2 second load times. Google Core Web Vitals optimized for higher SEO rankings and lower drop-offs.",
            metric: "< 2s Load"
        },
        {
            icon: <LuSmartphone className="w-8 h-8 text-blue-500" />,
            title: "Mobile-First UX",
            desc: "Designed for the 80% of traffic that comes from mobile. Thumb-friendly navigation and sticky CTAs.",
            metric: "100% Responsive"
        },
        {
            icon: <LuLayers className="w-8 h-8 text-purple-500" />,
            title: "Psychological Triggers",
            desc: "Strategic use of scarcity, social proof, and urgency (FOMO) to nudge visitors into buyers.",
            metric: "3x Conversion"
        },
        {
            icon: <LuShieldCheck className="w-8 h-8 text-green-500" />,
            title: "Trust Signals",
            desc: "Verified badges, secure checkout seals, and real-time reviews to build instant credibility.",
            metric: "Instant Trust"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-white pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <LuMousePointer2 className="w-4 h-4" /> Why We Convert Better
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        The Science Behind <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">High-Conversion Stores</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        We don't just build pretty websites. We build sales machines engineered to turn visitors into paying customers.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-orange-100 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {feature.desc}
                            </p>
                            <div className="pt-6 border-t border-gray-50">
                                <span className="text-2xl font-black text-gray-900 block">{feature.metric}</span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Performance Metric</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighConversionSection;
