"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import StatsSection from "@/components/landing/StatsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ClientLogos from "@/components/landing/ClientLogos";
import FaqSection from "@/components/FaqSection";
import { SuiteCardsSection } from "@/components/classic/Sections";
import { trackViewContent } from "@/components/FacebookPixel";
import Clinic from "../../assets/Solutions/clinic.jpg"

import Preeti from "@/assets/Testimonials/preeti.svg"
import Subhash from "@/assets/Testimonials/subhash.svg"
import Krishna from "@/assets/Testimonials/krishna.svg"

// importing icons
import { FaCalendarAlt, FaFileAlt, FaGlobe, FaClock, FaPills, FaMobileAlt, FaUser, FaHospital, FaBell, FaChartBar, FaLock, FaPhone, FaCreditCard } from "react-icons/fa";

const ClinicsLanding = () => {
    const problems = [
        {
            icon: FaCalendarAlt,
            title: "Manual Appointment Scheduling",
            description:
                "Phone calls, paper calendars, and double bookings waste time and frustrate patients. Managing appointments manually is error-prone and inefficient.",
        },
        {
            icon: FaFileAlt,
            title: "Paper-Based Records",
            description:
                "Patient records scattered across files, hard to access, and risk of loss. No centralized system for medical history and prescriptions.",
        },
        {
            icon: FaGlobe,
            title: "No Online Presence",
            description:
                "Patients can't find you online, book appointments, or access information. You&apos;re missing out on new patients who search online.",
        },
        {
            icon: FaClock,
            title: "Long Wait Times",
            description:
                "Patients wait unnecessarily because scheduling isn't optimized. No way to send reminders or manage patient flow efficiently.",
        },
        {
            icon: FaPills,
            title: "Prescription Management",
            description:
                "Handwritten prescriptions are hard to read and can't be tracked. No digital system for prescription history and refills.",
        },
        {
            icon: FaMobileAlt,
            title: "Communication Challenges",
            description:
                "No automated reminders, follow-ups, or patient communication system. Everything relies on manual phone calls.",
        },
    ];

    const solutions = [
        {
            icon: FaCalendarAlt,
            title: "Online Appointment Booking",
            description:
                "24/7 appointment scheduling system that patients can access anytime.",
            benefits: [
                "Real-time availability",
                "Automated reminders",
                "No double bookings",
                "Patient self-service",
            ],
        },
        {
            icon: FaUser,
            title: "Patient Portal",
            description:
                "Secure patient portal for accessing records, prescriptions, and test results.",
            benefits: [
                "Digital records",
                "Prescription history",
                "Test results access",
                "Secure login",
            ],
        },
        {
            icon: FaHospital,
            title: "Professional Clinic Website",
            description:
                "Modern website showcasing your services, doctors, and facilities.",
            benefits: [
                "Service listings",
                "Doctor profiles",
                "Location & hours",
                "Contact forms",
            ],
        },
    ];

    const features = [
        {
            icon: FaCalendarAlt,
            title: "Appointment Booking",
            description:
                "Online scheduling with calendar integration and availability management",
        },
        {
            icon: FaUser,
            title: "Patient Records",
            description:
                "Digital patient files with medical history and visit records",
        },
        {
            icon: FaPills,
            title: "Prescription Management",
            description: "Digital prescriptions with history and refill tracking",
        },
        {
            icon: FaBell,
            title: "Automated Reminders",
            description: "SMS and email reminders for appointments and follow-ups",
        },
        {
            icon: FaChartBar,
            title: "Analytics Dashboard",
            description: "Track appointments, patient flow, and clinic performance",
        },
        {
            icon: FaLock,
            title: "HIPAA Compliant",
            description: "Secure, compliant system for patient data protection",
        },
        {
            icon: FaPhone,
            title: "Mobile Access",
            description: "Access your clinic management system from anywhere",
        },
        {
            icon: FaCreditCard,
            title: "Payment Integration",
            description: "Accept online payments and manage billing efficiently",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Dr. Preeti Mehta",
            role: "General Physician",
            image: Preeti,
            quote:
                "Our appointment booking system reduced no-shows by 60%. Patients love the convenience of booking online, and we save hours every day.",
        },
        {
            name: "Dr. Subhash Singh",
            role: "Dental Clinic Owner",
            image: Subhash,
            quote:
                "The patient portal transformed how we manage records. Everything is digital now, and patients can access their information anytime. Highly recommended!",
        },
        {
            name: "Dr. Krishna Reddy",
            role: "Pediatrician",
            image: Krishna,
            quote:
                "Best decision we made. The automated reminders keep our schedule full, and the digital prescription system is a game-changer for our practice.",
        },
    ]);

    const stats = [
        { value: "60%", label: "Reduced No-Shows" },
        { value: "80%", label: "Patient Satisfaction" },
        { value: "50%", label: "Time Saved Daily" },
        { value: "24/7", label: "Online Booking" },
    ];

    const results = [
        {
            metric: "60%",
            label: "Reduced No-Shows",
            description: "Automated reminders keep patients engaged",
        },
        {
            metric: "50%",
            label: "Time Saved",
            description: "Digital systems streamline operations",
        },
        {
            metric: "95%",
            label: "Patient Satisfaction",
            description: "Modern experience improves care",
        },
    ];

    const processSteps = [
        {
            title: "Calculate Your Cost",
            description:
                "Get an instant, transparent estimate for your clinic management system",
        },
        {
            title: "Custom Development",
            description: "We build your system with all features you need",
        },
        {
            title: "Launch & Grow",
            description: "Go live and improve patient care with our support",
        },
    ];

    const [clients, setClients] = useState([
        { name: "HealthCare Plus", logo: null },
        { name: "MediCare Clinic", logo: null },
        { name: "Wellness Center", logo: null },
    ]);

    useEffect(() => {
        trackViewContent('Clinics Landing Page', 'page');
    }, []);

    useEffect(() => {
        loadClientImages();
        loadTestimonials();
    }, []);

    const loadClientImages = async () => {
        try {
            const { clientImagesAPI } = await import('@/lib/api');
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
            const data = await clientImagesAPI.getAll();
            if (data && data.length > 0) {
                const clientLogos = data.map(img => ({
                    name: img.name,
                    logo: img.path.startsWith('http') ? img.path : `${API_BASE_URL}${img.path}`
                }));
                setClients(clientLogos);
            }
        } catch (error) {
            console.error('Error loading client images:', error);
        }
    };

    const loadTestimonials = async () => {
        try {
            const { testimonialsAPI, imageHelper } = await import('@/lib/api');
            const data = await testimonialsAPI.getAll();
            if (data && data.length > 0) {
                // Format testimonials to ensure image URLs are properly set
                const formattedTestimonials = data.map(testimonial => imageHelper.formatTestimonial(testimonial));
                setTestimonials(formattedTestimonials);
            }
        } catch (error) {
            console.error('Error loading testimonials:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <VisualHero
                headline="Modern Healthcare Management Made Simple"
                subheadline="Transform your clinic with digital solutions. From online appointments to patient records, prescription management to analytics - streamline operations and improve patient experience."
                ctaText="Get Your Clinic Online"
                ctaLink="/calculator/step1"
                badge="🏥 Trusted by 150+ Healthcare Providers"
                features={[
                    "Online Appointments",
                    "Patient Portal",
                    "Digital Records",
                    "HIPAA Compliant",
                ]}
                heroImage={Clinic}
                imageId="business-type-clinics"
            />
            <StatsSection stats={stats} />
            <ProblemSection problems={problems} title="Common Clinic Challenges" />
            <SolutionSection
                solutions={solutions}
                title="Digital Solutions for Your Clinic"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Healthcare Providers"
            />
            <FeaturesGrid
                features={features}
                title="Complete Clinic Management Features"
            />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials testimonials={testimonials} title="What Doctors Say" />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="The Products That"
                highlight="Run Your Business"
                items={[{ "slug": "crm", "for": "Every enquiry followed up, with playbooks that stop on reply" }, { "slug": "comms", "for": "Reminders and follow-ups on WhatsApp and SMS" }, { "slug": "reach", "for": "Google Business reviews and local campaigns" }, { "slug": "commerce", "for": "Sell medicines, products and packages online" }, { "slug": "books", "for": "GST invoices for services and products" }, { "slug": "people", "for": "Staff shifts, attendance and payroll" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Modernize Your Clinic?"
                subheadline="Get a transparent cost estimate for your clinic management system. Start your digital transformation today."
                primaryCtaText="Calculate Your Cost"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default ClinicsLanding;
