"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { razorpayAPI, plansAPI, leadsAPI } from '@/lib/api';
import { getUtmForLead, getPagePath } from '@/lib/utm';
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FaCheck, FaLock, FaShieldAlt, FaStar, FaUsers, FaHeadset, FaUndo, FaClock, FaAward, FaCreditCard } from 'react-icons/fa';
import { trackInitiateCheckout, trackPurchase, trackFacebookEvent } from '@/components/FacebookPixel';
import { trackLinkedInInitiateCheckout, trackLinkedInPurchase } from '@/components/LinkedInInsightTag';
import { gtm } from '@/lib/analytics';

const CheckoutContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [planLoading, setPlanLoading] = useState(true);

    // E-commerce has two tiers since 2026-09-14 (Self Managed 5%, Fully Managed 10%). Links
    // printed before that  ads, WhatsApp messages, the old landing page  still carry the
    // retired plan ids, so they resolve to the tier that replaced them instead of a dead plan.
    const PLAN_ALIASES = {
        self_managed: 'ecom_self',
        managed_store: 'ecom_managed',
        growth_partner: 'ecom_managed',
        ecom_partner: 'ecom_managed',
    };
    const rawPlanId = searchParams.get('plan');
    const planId = PLAN_ALIASES[rawPlanId] || rawPlanId;
    const amountParam = searchParams.get('amount');

    useEffect(() => {
        loadPlan();
    }, [planId, amountParam]);

    // Track InitiateCheckout event when plan is loaded
    useEffect(() => {
        if (selectedPlan && selectedPlan.price) {
            trackInitiateCheckout(parseFloat(selectedPlan.price), 'INR', selectedPlan.name);

            // GTM: Track Begin Checkout
            gtm.trackEvent('begin_checkout', {
                currency: 'INR',
                value: parseFloat(selectedPlan.price),
                items: [{
                    item_id: selectedPlan.id,
                    item_name: selectedPlan.name,
                    price: parseFloat(selectedPlan.price),
                    quantity: 1
                }]
            });
            // LinkedIn: Track InitiateCheckout
            trackLinkedInInitiateCheckout();
        }
    }, [selectedPlan]);

    const loadPlan = async () => {
        try {
            if (planId) {
                // Ensure plansAPI.getById is implemented or use a fallback mock
                let plan;
                try {
                    plan = await plansAPI.getById(planId);
                } catch (e) {
                    console.warn("plansAPI.getById failed, falling back to fetching all", e);
                    // Fetch all plans to find the match
                    const allPlans = await plansAPI.getAll();
                    plan = allPlans.find(p => p.id === planId);
                }

                if (plan) {
                    setSelectedPlan(plan);
                } else {
                    // Fallback manual checks if API fails
                    const fallbackPlans = [
                        { id: "starter", name: "Starter", price: "4999", features: ["1 Landing Page", "Free Domain"] },
                        { id: "business", name: "Business", price: "9999", features: ["3 Landing Pages", "Free Domain", "Priority Support"] },
                        { id: "enterprise", name: "Enterprise", price: "24999", features: ["10 Landing Pages", "Dedicated Manager"] },
                        { id: "ecom_self", name: "Self Managed", price: "9999", features: ["Complete Growcord Commerce platform", "5% commission per delivered order"] },
                        { id: "ecom_managed", name: "Fully Managed", price: "9999", features: ["Operations, shipping, recovery and ads managed for you", "10% commission per delivered order"] }
                    ];
                    const fallback = fallbackPlans.find(p => p.id === planId);
                    if (fallback) setSelectedPlan(fallback)
                    else throw new Error("Plan not found");
                }

            } else if (amountParam) {
                // Fallback if plan ID not found but amount is provided
                setSelectedPlan({
                    id: 'custom',
                    name: 'Custom Plan',
                    price: amountParam,
                    features: []
                });
            }
        } catch (error) {
            console.error('Error loading plan:', error);
            // Fallback
            setSelectedPlan({
                id: planId || 'custom',
                name: 'Plan',
                price: amountParam || '0',
                features: []
            });
        } finally {
            setPlanLoading(false);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        gstNumber: '',
        pincode: '',
        // Billing details
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingCountry: 'India'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    if (planLoading || !selectedPlan) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-700 font-bold text-lg">Loading your plan details...</p>
                </div>
            </div>
        );
    }

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 0. Create Lead (Capture user details before payment)
            let leadId = null;
            try {
                const leadData = {
                    ...formData,
                    source: 'checkout',
                    status: 'Payment Initiated', // Or 'New'
                    pageId: getPagePath() || '/checkout',
                    total: parseFloat(selectedPlan.price), // Add total for Admin display
                    utm: getUtmForLead(),
                    metadata: {
                        planId: selectedPlan.id,
                        planName: selectedPlan.name,
                        amount: selectedPlan.price
                    }
                };
                const leadResponse = await leadsAPI.create(leadData);
                if (leadResponse && leadResponse.lead) {
                    leadId = leadResponse.lead.id;
                }
            } catch (leadError) {
                console.error('Detailed Lead Creation Error:', leadError);
                console.error('Lead Data Attempted:', {
                    ...formData,
                    source: 'checkout',
                    status: 'Payment Initiated',
                    pageId: getPagePath() || '/checkout',
                    total: parseFloat(selectedPlan.price)
                });
                alert(`Lead creation failed: ${leadError.message}. Please contact support.`);
                // We typically proceed with payment even if lead creation fails to not block revenue
                // But ideally we should log this.
            }

            // 1. Check/Load Razorpay Script
            if (!window.Razorpay) {
                const isLoaded = await loadRazorpayScript();
                if (!isLoaded) throw new Error('Razorpay SDK failed to load');
            }

            // 1. Get Key ID
            const { keyId } = await razorpayAPI.getKey();
            if (!keyId) throw new Error('Payment gateway not configured');

            // 2. Create Order
            const orderData = await razorpayAPI.createOrder({
                amount: parseFloat(selectedPlan.price),
                currency: 'INR',
                receipt: `receipt_${Date.now()}`,
                notes: {
                    leadId: leadId, // Pass leadId to Razorpay order notes
                    planId: selectedPlan.id,
                    planName: selectedPlan.name,
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone,
                    company: formData.company,
                    gstNumber: formData.gstNumber,
                    pincode: formData.pincode,
                    billingAddress: formData.billingAddress,
                    billingCity: formData.billingCity,
                    billingState: formData.billingState,
                    billingCountry: formData.billingCountry
                }
            });

            if (!orderData || !orderData.id) throw new Error('Failed to create order');

            // 3. Open Razorpay
            const options = {
                key: keyId,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Growcord",
                description: `Payment for ${selectedPlan.name} Plan`,
                // image: "/logo.png", // Use public logo
                order_id: orderData.id,
                handler: async function (response) {
                    try {
                        // 4. Verify Payment
                        const verifyData = {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            orderDetails: {
                                amount: parseFloat(selectedPlan.price),
                                plan: { ...selectedPlan, _id: selectedPlan.id }, // Ensure minimal plan structure
                                customer: formData,
                                leadId: leadId // Pass leadId for backend to update status
                            }
                        };

                        const result = await razorpayAPI.verifyPayment(verifyData);
                        if (result.success) {
                            // Track Purchase event in Facebook Pixel
                            trackPurchase(parseFloat(selectedPlan.price), 'INR', selectedPlan.name);

                            // LinkedIn: Track Purchase
                            trackLinkedInPurchase();

                            // GTM: Track Purchase
                            gtm.trackPurchase({
                                transactionId: response.razorpay_payment_id,
                                value: parseFloat(selectedPlan.price),
                                currency: 'INR',
                                items: [{
                                    item_id: selectedPlan.id,
                                    item_name: selectedPlan.name,
                                    price: parseFloat(selectedPlan.price),
                                    quantity: 1
                                }],
                                userData: {
                                    email: formData.email,
                                    phone: formData.phone,
                                    name: formData.name,
                                    city: formData.billingCity,
                                    state: formData.billingState,
                                    country: formData.billingCountry,
                                    pincode: formData.pincode
                                }
                            });

                            // alert('Payment Successful!');
                            router.push(`/checkout/confirmation?orderId=${response.razorpay_order_id}`);
                        } else {
                            setError('Payment verification failed');
                            // GTM: Track Payment Failure
                            gtm.trackEvent('payment_failed', {
                                reason: 'Verification failed',
                                plan_id: selectedPlan.id,
                                value: parseFloat(selectedPlan.price)
                            });
                            trackFacebookEvent('PaymentFailed', { reason: 'Verification failed', value: parseFloat(selectedPlan.price) });
                        }
                    } catch (err) {
                        console.error(err);
                        setError('Payment verification failed');
                        // GTM: Track Payment Failure
                        gtm.trackEvent('payment_failed', {
                            reason: 'Verification error',
                            error: err.message,
                            plan_id: selectedPlan.id
                        });
                        trackFacebookEvent('PaymentFailed', { reason: 'Verification error', value: parseFloat(selectedPlan.price) });
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                theme: {
                    color: "#ea580c" // orange-600
                },
                modal: {
                    ondismiss: function () {
                        setError('Payment initiated but not completed. You can try again.');
                        setLoading(false);
                        // GTM: Track Payment Dismissal
                        gtm.trackEvent('payment_failed', {
                            reason: 'User dismissed modal',
                            plan_id: selectedPlan.id,
                            value: parseFloat(selectedPlan.price)
                        });
                        trackFacebookEvent('PaymentFailed', { reason: 'User dismissed modal', value: parseFloat(selectedPlan.price) });
                    }
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            console.error(err);
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 pb-20 pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Trust Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-lg"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white">
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-xl" />
                            <span className="font-semibold text-sm sm:text-base">256-bit SSL Encrypted</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <FaUsers className="text-xl" />
                            <span className="font-semibold text-sm sm:text-base">500+ Happy Clients</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <FaUndo className="text-xl" />
                            <span className="font-semibold text-sm sm:text-base">30-Day Money-Back</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <FaHeadset className="text-xl" />
                            <span className="font-semibold text-sm sm:text-base">24/7 Support</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:order-2"
                    >
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-orange-100 sticky top-24">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Order Summary</h3>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl mb-6 border border-orange-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{selectedPlan.name} Plan</h4>
                                        <p className="text-gray-600 text-sm font-medium">Professional Web Solution</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl sm:text-3xl font-bold text-orange-600">₹{parseInt(selectedPlan.price).toLocaleString('en-IN')}</div>
                                        <p className="text-xs text-gray-500 font-medium mt-1">One-time payment</p>
                                    </div>
                                </div>
                            </div>

                            {selectedPlan.features && selectedPlan.features.length > 0 && (
                                <div className="mb-6">
                                    <h5 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">What&apos;s Included</h5>
                                    <ul className="space-y-3">
                                        {selectedPlan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                    <FaCheck className="text-green-600 text-xs" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Trust Factors */}
                            <div className="space-y-3 mb-6">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                                    <FaShieldAlt className="text-blue-600 mt-0.5 flex-shrink-0 text-lg" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-1">Secure Payment</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Your payment is secured with 256-bit SSL encryption. We never store your card details.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start gap-3">
                                    <FaUndo className="text-green-600 mt-0.5 flex-shrink-0 text-lg" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Not satisfied? Get a full refund within 30 days, no questions asked.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start gap-3">
                                    <FaHeadset className="text-purple-600 mt-0.5 flex-shrink-0 text-lg" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-1">24/7 Expert Support</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Get instant help from our team whenever you need it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex -space-x-2">
                                        {[
                                            "https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-rajesh-avatar.png",
                                            "https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-priya-avatar.png",
                                            "https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-amit-avatar.png",
                                            "https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-sneha.png"
                                        ].map((src, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={src} alt="Customer" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-700">4.9/5</span>
                                </div>
                                <p className="text-xs text-gray-600 font-medium">
                                    <span className="font-bold text-gray-900">500+</span> customers trust us with their business
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 rounded-xl">
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-semibold text-base sm:text-lg">Total Amount</span>
                                    <span className="text-2xl sm:text-3xl font-bold text-white">₹{parseInt(selectedPlan.price).toLocaleString('en-IN')}</span>
                                </div>
                                <p className="text-orange-300 text-xs mt-2 font-medium">All taxes included</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Checkout Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:order-1"
                    >
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-gray-100">
                            <div className="mb-6">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Complete Your Order</h2>
                                <p className="text-gray-600 font-medium">Fill in your details to proceed with secure payment</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-xl mb-6 text-sm font-semibold flex items-center gap-2">
                                    <span className="text-red-600">⚠</span>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handlePayment} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Company Name <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                        placeholder="Your Company Pvt Ltd"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            GST Number <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="gstNumber"
                                            value={formData.gstNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white uppercase"
                                            placeholder="29ABCDE1234F1Z5"
                                            maxLength={15}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Pincode <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            required
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                            placeholder="560001"
                                            maxLength={6}
                                            pattern="[0-9]{6}"
                                        />
                                    </div>
                                </div>

                                <div className="border-t-2 border-gray-200 pt-6">
                                    <div className="flex items-center gap-2 mb-5">
                                        <FaCreditCard className="text-orange-600" />
                                        <h3 className="text-lg font-bold text-gray-900">Billing Address</h3>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Address
                                        </label>
                                        <textarea
                                            name="billingAddress"
                                            value={formData.billingAddress}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white resize-none"
                                            placeholder="Street address, Building, Apartment"
                                            rows={3}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="billingCity"
                                                value={formData.billingCity}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                                placeholder="Bangalore"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                name="billingState"
                                                value={formData.billingState}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                                placeholder="Karnataka"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-bold text-gray-900 mb-2">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            name="billingCountry"
                                            value={formData.billingCountry}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium text-gray-900 bg-white"
                                            placeholder="India"
                                        />
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                                    <p className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Accepted Payment Methods</p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 font-semibold text-xs text-gray-700">Credit Card</div>
                                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 font-semibold text-xs text-gray-700">Debit Card</div>
                                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 font-semibold text-xs text-gray-700">UPI</div>
                                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 font-semibold text-xs text-gray-700">Net Banking</div>
                                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 font-semibold text-xs text-gray-700">Wallet</div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4.5 px-6 rounded-xl shadow-xl shadow-orange-500/40 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Processing Payment...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaLock className="text-lg" />
                                            <span>Secure Payment - ₹{parseInt(selectedPlan.price).toLocaleString('en-IN')}</span>
                                        </>
                                    )}
                                </button>

                                <div className="text-center">
                                    <p className="text-xs text-gray-600 font-medium">
                                        By proceeding, you agree to our{' '}
                                        <Link href="/terms" className="text-orange-600 hover:text-orange-700 font-bold underline">Terms of Service</Link>
                                        {' '}and{' '}
                                        <Link href="/privacy" className="text-orange-600 hover:text-orange-700 font-bold underline">Privacy Policy</Link>
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Additional Trust Section */}
                        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaAward className="text-orange-600" />
                                Why Choose Us?
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <FaStar className="text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">4.9/5 Rating</p>
                                        <p className="text-xs text-gray-600 font-medium">Rated by 500+ satisfied customers</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <FaClock className="text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">Fast Delivery</p>
                                        <p className="text-xs text-gray-600 font-medium">Get your website live in 7-14 days</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <FaHeadset className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">Expert Support</p>
                                        <p className="text-xs text-gray-600 font-medium">Dedicated team to help you succeed</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <FaUndo className="text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">Money-Back Guarantee</p>
                                        <p className="text-xs text-gray-600 font-medium">100% refund if not satisfied</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const CheckoutPage = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg">Loading checkout...</div>}>
                <CheckoutContent />
            </Suspense>
            <Footer />
        </>
    );
};

export default CheckoutPage;
