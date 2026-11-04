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
import Hospital from "../../assets/Solutions/hospital.jpg"
// importing  icons
// import calender from "@/assets/icon/calender.png";
// import notepad from "@/assets/icon/notepad.png";
// import profile from "@/assets/icon/profile.png";
// import hospital from "@/assets/icon/hospital.png";
// import bell from "@/assets/icon/bell.png";
// import graph from "@/assets/icon/graph.png";
// import lock from "@/assets/icon/lock.png";
// import creditCard from "@/assets/icon/creditCard.png";
// import doctor from "@/assets/icon/doctor.png";

import Rajesh from "@/assets/Testimonials/rajesh.svg"
import Meera from "@/assets/Testimonials/preeti.svg"
import Arvind from "@/assets/Testimonials/krishna.svg"
// Using react-icons instead of image assets for better compatibility/performance if assets are missing
import { FaCalendarAlt, FaFileAlt, FaUser, FaHospital, FaBell, FaChartBar, FaLock, FaCreditCard, FaUserMd } from "react-icons/fa";

const HospitalsLanding = () => {
    const problems = [
        {
            icon: FaCalendarAlt,
            title: "Complex Appointment Systems",
            description:
                "Managing appointments across multiple departments is chaotic. No unified system for scheduling, leading to confusion and patient dissatisfaction.",
        },
        {
            icon: FaFileAlt,
            title: "Patient Record Management",
            description:
                "Paper records and disconnected systems make it hard to access patient information. Critical data scattered across departments.",
        },
        {
            icon: FaHospital,
            title: "Department Coordination",
            description:
                "Poor communication between departments leads to delays, errors, and inefficient patient care.",
        },
        {
            icon: FaCreditCard,
            title: "Billing Complexity",
            description:
                "Manual billing processes are slow and error-prone. Insurance claims, payments, and invoices create administrative burden.",
        },
        {
            icon: FaChartBar,
            title: "No Centralized Dashboard",
            description:
                "Can't track hospital operations, bed occupancy, staff schedules, or patient flow in real-time.",
        },
        {
            icon: FaLock,
            title: "Compliance Concerns",
            description:
                "Meeting healthcare regulations and data security requirements is challenging without proper systems.",
        },
    ];

    const solutions = [
        {
            icon: FaHospital,
            title: "Hospital Management System",
            description:
                "Comprehensive system managing all hospital operations from one platform.",
            benefits: [
                "Multi-department scheduling",
                "Patient record management",
                "Billing & insurance",
                "Staff management",
            ],
        },
        {
            icon: FaUser,
            title: "Patient Portal",
            description:
                "Secure portal for patients to access records, book appointments, and view bills.",
            benefits: [
                "Medical records access",
                "Appointment booking",
                "Bill payment",
                "Prescription history",
            ],
        },
        {
            icon: FaChartBar,
            title: "Analytics Dashboard",
            description:
                "Real-time insights into hospital operations, patient flow, and performance metrics.",
            benefits: [
                "Bed occupancy tracking",
                "Department performance",
                "Patient flow analysis",
                "Revenue reports",
            ],
        },
    ];

    const features = [
        {
            icon: FaCalendarAlt,
            title: "Multi-Department Booking",
            description:
                "Unified appointment system for all departments and specialties",
        },
        {
            icon: FaUser,
            title: "Patient Records",
            description:
                "Centralized digital records accessible across all departments",
        },
        {
            icon: FaCreditCard,
            title: "Billing System",
            description:
                "Automated billing, insurance claims, and payment processing",
        },
        {
            icon: FaHospital,
            title: "Bed Management",
            description: "Track bed availability and occupancy in real-time",
        },
        {
            icon: FaUserMd,
            title: "Staff Scheduling",
            description: "Manage doctor and staff schedules across departments",
        },
        {
            icon: FaLock,
            title: "HIPAA Compliant",
            description:
                "Secure, compliant system meeting all healthcare regulations",
        },
        {
            icon: FaChartBar,
            title: "Reporting Dashboard",
            description:
                "Comprehensive analytics and reporting for hospital operations",
        },
        {
            icon: FaBell,
            title: "Notifications",
            description:
                "Automated alerts for appointments, test results, and updates",
        },
    ];

    const [testimonials, setTestimonials] = useState([
        {
            name: "Dr. Arvind Kumar",
            role: "Hospital Administrator",
            image: Arvind,
            quote:
                "The hospital management system transformed our operations. Patient wait times reduced by 40%, and our staff efficiency improved dramatically.",
        },
        {
            name: "Dr. Meera Patel",
            role: "Chief Medical Officer",
            image: Meera,
            quote:
                "Having centralized patient records accessible across departments improved patient care significantly. The billing system alone saved us hours daily.",
        },
        {
            name: "Rajesh Nair",
            role: "Hospital Director",
            image: Rajesh,
            quote:
                "Best investment for our hospital. The analytics dashboard gives us insights we never had before, and patient satisfaction scores increased significantly.",
        },
    ]);

    const stats = [
        { value: "40%", label: "Reduced Wait Times" },
        { value: "85%", label: "Staff Efficiency" },
        { value: "90%", label: "Patient Satisfaction" },
        { value: "24/7", label: "System Availability" },
    ];

    const results = [
        {
            metric: "40%",
            label: "Reduced Wait Times",
            description: "Streamlined operations improve patient flow",
        },
        {
            metric: "85%",
            label: "Staff Efficiency",
            description: "Automated systems save time daily",
        },
        {
            metric: "90%",
            label: "Patient Satisfaction",
            description: "Better care through digital solutions",
        },
    ];

    const processSteps = [
        {
            title: "Calculate Your Cost",
            description:
                "Get an instant, transparent estimate for your hospital management system",
        },
        {
            title: "Custom Development",
            description: "We build your system with all departments integrated",
        },
        {
            title: "Launch & Scale",
            description: "Go live and improve operations with our support",
        },
    ];

    const [clients, setClients] = useState([
        { name: "City Hospital", logo: null },
        { name: "Regional Medical Center", logo: null },
        { name: "Healthcare Network", logo: null },
    ]);

    useEffect(() => {
        trackViewContent('Hospitals Landing Page', 'page');
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
                headline="Comprehensive Healthcare Digital Solutions"
                subheadline="Transform your hospital operations with integrated management systems. From patient care to billing, department coordination to analytics - streamline everything for better outcomes."
                ctaText="Transform Your Hospital Operations"
                ctaLink="/calculator/step1"
                badge="🏥 Trusted by 50+ Hospitals"
                features={[
                    "Multi-Department Management",
                    "Patient Records System",
                    "Billing & Insurance",
                    "HIPAA Compliant",
                ]}
                heroImage={Hospital}
                imageId="business-type-hospitals"
            />
            <StatsSection stats={stats} />
            <ProblemSection
                problems={problems}
                title="Hospital Management Challenges"
            />
            <SolutionSection
                solutions={solutions}
                title="Integrated Hospital Solutions"
            />
            <ClientLogos
                clients={clients}
                title="Trusted by Leading Hospitals"
            />
            <FeaturesGrid
                features={features}
                title="Complete Hospital Management Features"
            />
            <ResultsSection results={results} title="Proven Results" />
            <ProcessSection steps={processSteps} title="How It Works" />
            <Testimonials
                testimonials={testimonials}
                title="What Hospital Administrators Say"
            />
            <SuiteCardsSection
                eyebrow="The Growcord Suite"
                title="The Products That"
                highlight="Run Your Business"
                items={[{ "slug": "crm", "for": "Patient enquiries with owners, SLAs and escalation" }, { "slug": "reach", "for": "Reviews, Search Console and campaigns per department" }, { "slug": "comms", "for": "Reminders and reports on WhatsApp, SMS and email" }, { "slug": "people", "for": "Shifts, attendance and payroll with default-deny access" }, { "slug": "books", "for": "GST accounting across services and pharmacy" }, { "slug": "retail", "for": "In-house pharmacy counter with batch and expiry" }]}
                tone="gray"
            />
            <FaqSection />
            <CTASection
                headline="Ready to Modernize Your Hospital?"
                subheadline="Get a transparent cost estimate for your hospital management system. Start your digital transformation today."
                primaryCtaText="Calculate Your Cost"
                primaryCtaLink="/calculator/step1"
                secondaryCtaText="View All Services"
                secondaryCtaLink="/"
            />
            <Footer />
        </div>
    );
};

export default HospitalsLanding;
