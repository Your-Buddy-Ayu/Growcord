"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiHelpCircle,
  FiArrowRight,
  FiMessageCircle,
  FiHeadphones,
} from "react-icons/fi";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Setup & Accounts",
      faqs: [
        {
          question: "Which courier networks can I connect to GrowShip?",
          answer:
            "GrowShip supports Shiprocket and Delhivery today. You can use your own connected accounts to keep your negotiated rates, or use our platform account where available for instant access.",
        },
        {
          question: "Is GrowShip a courier service itself?",
          answer:
            "No, GrowShip is not a courier service. It is the operations software layer that helps teams book, manage, and understand carrier shipments. Carrier availability, actual shipping, and charges come directly from your connected courier network.",
        },
      ],
    },
    {
      title: "Shipments & Parcels",
      faqs: [
        {
          question: "Can an order be sent in more than one parcel?",
          answer:
            "Yes, absolutely. Each parcel gets its own distinct shipment ID and timeline. The main order stays marked as 'partially delivered' until every single parcel associated with it is successfully delivered to the customer.",
        },
        {
          question: "Does GrowShip send customer updates?",
          answer:
            "Yes, shipment events can be seamlessly handed over to Growcord Comms. This allows you to trigger automated shipped, out-for-delivery, and delivered customer notifications via SMS or WhatsApp.",
        },
      ],
    },
    {
      title: "Billing & Wallet",
      faqs: [
        {
          question: "How does the shipping wallet work?",
          answer:
            "For platform-account shipments, you can use a prepaid wallet. You simply top it up, and each debit is itemised per shipment. This ensures your operations and finance teams can clearly understand every single charge without hidden fees.",
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-28 pb-20 text-center sm:pt-36 sm:pb-28 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,52,0)_0%,#061a34_100%)] opacity-80" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
            <FiHelpCircle size={30} className="text-[#f47721]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
            Help Center
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Got questions about how GrowShip handles your e-commerce logistics?
            We have put together clear answers to help your team get onboarded
            and start shipping faster.
          </p>
        </div>
      </section>

      {/* FAQ Section - Replaced space-y with flex gap for zero collapse */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-16 sm:gap-24">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="w-full">
              <h2 className="mb-6 text-2xl font-black text-[#071d3a] sm:mb-8 sm:text-3xl">
                {category.title}
              </h2>
              <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-md sm:p-5">
                {category.faqs.map((faq, index) => {
                  const faqId = `${catIndex}-${index}`;
                  const isOpen = openFaq === faqId;

                  return (
                    <div key={index} className="overflow-hidden">
                      <button
                        onClick={() => toggleFaq(faqId)}
                        className="flex w-full items-center justify-between gap-5 px-4 py-5 text-left sm:px-6 sm:py-6"
                      >
                        <span className="text-base font-bold text-[#071d3a] sm:text-lg">
                          {faq.question}
                        </span>
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isOpen
                              ? "bg-orange-50 text-[#f47721]"
                              : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                          }`}
                        >
                          <FiChevronDown
                            size={20}
                            className={`transition-transform duration-300 ease-in-out ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-6 pt-2 text-base leading-relaxed text-slate-600 sm:px-6 sm:pb-8">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support / Contact Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 text-center shadow-xl shadow-slate-200/40 sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <FiMessageCircle size={28} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-black text-[#071d3a]">
              Need technical help?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Are you facing an issue while setting up your carrier accounts or
              API integrations? Our technical team is ready to assist you.
            </p>
            <a
              href="https://growcord.in/contact-us"
              className="mt-8 inline-flex font-bold text-blue-600 transition hover:text-blue-700"
            >
              Contact tech support &rarr;
            </a>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 text-center shadow-xl shadow-slate-200/40 sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
              <FiHeadphones size={28} className="text-[#f47721]" />
            </div>
            <h3 className="text-2xl font-black text-[#071d3a]">
              Sales & Onboarding
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Want to understand if GrowShip is the right fit for your
              e-commerce volume? Talk to our onboarding specialists.
            </p>
            <a
              href="https://growship.in/start"
              className="mt-8 inline-flex font-bold text-[#f47721] transition hover:text-[#d45a15]"
            >
              Talk to sales &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Dark Premium CTA Section */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Take control of your logistics
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-5 sm:text-4xl lg:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <a
              href="https://growship.in/start"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-[#ff8a3d] sm:w-auto"
            >
              Start shipping
              <FiArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
