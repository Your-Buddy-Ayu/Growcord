"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { plansAPI } from '@/lib/api';
import { gtm } from '@/lib/analytics';
import { trackAddToCart as trackFbAddToCart } from '@/components/FacebookPixel';

const PlansPricing = ({ selectedIds = [] }) => {
    const [plans, setPlans] = useState([
        {
            id: "starter",
            name: "Starter",
            price: "4999",
            description: "Perfect for getting started with a professional presence.",
            features: [
                "1 High Conversion Landing Page",
                "Free Domain (.com or .in)",
                "1 Year Free Hosting",
                "Lead Management CRM",
                "Custom Coded Next.js with SEO",
                "Facebook Pixel & Google Ads Tracking",
                "Real Time Analytics"
            ],
            popular: false,
            color: "blue"
        },
        {
            id: "business",
            name: "Business",
            price: "9999",
            description: "Ideal for growing businesses needing more pages.",
            features: [
                "3 High Conversion Landing Pages",
                "Free Domain (.com or .in)",
                "1 Year Free Hosting",
                "Lead Management CRM",
                "Custom Coded Next.js with SEO",
                "Facebook Pixel & Google Ads Tracking",
                "Real Time Analytics",
                "Priority Support"
            ],
            popular: true,
            color: "orange"
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: "24999",
            description: "Comprehensive solution for established brands.",
            features: [
                "10 High Conversion Landing Pages",
                "Free Domain (.com or .in)",
                "1 Year Free Hosting",
                "Lead Management CRM",
                "Custom Coded Next.js with SEO",
                "Facebook Pixel & Google Ads Tracking",
                "Real Time Analytics",
                "Dedicated Account Manager",
                "24/7 Priority Support"
            ],
            popular: false,
            color: "purple"
        }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPlans();
    }, []);

    const loadPlans = async () => {
        try {
            // Get plans for real-estate category
            const data = await plansAPI.getAll('real-estate');
            if (data && data.length > 0) {
                if (selectedIds && selectedIds.length > 0) {
                    setPlans(data.filter(plan => selectedIds.includes(plan.id)));
                } else {
                    setPlans(data);
                }
            }
        } catch (error) {
            console.error('Error loading plans:', error);
            // Keep default plans if API fails
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="py-24 bg-gray-900 relative overflow-hidden" id="plans">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-white">Loading plans...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden" id="plans">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/10 text-orange-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-white/5 backdrop-blur-sm">
                        Simple Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)' }}>
                        Choose Your Growth Plan
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto font-normal" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                        All plans include everything you need to launch and grow. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-gray-800 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col h-full group ${plan.popular
                                ? 'border-orange-500 shadow-2xl shadow-orange-500/20 z-10 scale-105 bg-gray-800/80 backdrop-blur-xl'
                                : 'border-gray-700 hover:border-gray-600 hover:bg-gray-750'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors" style={{ color: '#ffffff', textShadow: '0 2px 6px rgba(0,0,0,0.5), 0 0 15px rgba(255,255,255,0.1)' }}>{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className={`text-4xl font-extrabold ${plan.popular ? 'text-orange-400' : 'text-white'}`}>₹{parseInt(plan.price).toLocaleString('en-IN')}</span>
                                    <span className="text-gray-400 ml-2">/one-time</span>
                                </div>
                                <p className="text-white min-h-[3rem] text-sm leading-relaxed font-normal" style={{ color: '#f3f4f6', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>{plan.description}</p>
                            </div>

                            <div className="h-px bg-gray-700 w-full mb-6"></div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-orange-500/20 text-orange-500' : 'bg-green-500/20 text-green-500'}`}>
                                            <FaCheck className="text-xs" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/checkout?plan=${plan.id}`}
                                onClick={() => {
                                    // Ensure GTM and Pixel tracking happen
                                    if (typeof window !== 'undefined') {
                                        gtm.trackAddToCart({
                                            itemId: plan.id,
                                            itemName: plan.name,
                                            value: parseFloat(plan.price),
                                            currency: 'INR'
                                        });
                                        trackFbAddToCart(parseFloat(plan.price), 'INR', plan.name);
                                    }
                                }}
                                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 mt-auto ${plan.popular
                                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02]'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-[1.02]'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansPricing;
