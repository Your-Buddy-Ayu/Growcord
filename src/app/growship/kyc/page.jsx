"use client";

import {
  FiCheckCircle,
  FiLock,
  FiShield,
  FiTruck,
  FiFileText,
  FiEyeOff,
  FiServer,
  FiArrowRight,
  FiUserCheck,
} from "react-icons/fi";

export default function GrowShipKycPage() {
  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-28 pb-20 text-center sm:pt-36 sm:pb-28 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,52,0)_0%,#061a34_100%)] opacity-80" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
            <FiUserCheck size={30} className="text-[#f47721]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
            Business Verification
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            Onboarding built on trust, not long public forms.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            We review your operations first to ensure the right shipping setup.
            Secure document submission happens only when you are approved,
            protecting your business data at every step.
          </p>
        </div>
      </section>

      {/* The "Why" / Philosophy Section */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
        <h2 className="mb-4 text-3xl font-black text-[#071d3a] sm:mb-6 sm:text-4xl">
          Why we do things differently.
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600">
          Most platforms ask you to upload sensitive tax and business documents
          on a public sign-up page before you even speak to a human. We don't.
          We believe in verifying your operational needs first, keeping your
          private data exactly where it belongssecure and offline.
        </p>
      </section>

      {/* Step-by-Step Process Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {[
            {
              icon: FiTruck,
              step: "01. Apply & Consult",
              title: "Share your shipping volume",
              desc: "Tell us about your business, dispatch cities, and monthly shipment volume. No document upload is needed at this initial stage.",
              color: "text-blue-500",
              bg: "bg-blue-50",
            },
            {
              icon: FiShield,
              step: "02. Internal Review",
              title: "We check the operational fit",
              desc: "Our operations team reviews your profile to ensure we can meet your service requirements and plans the appropriate onboarding path.",
              color: "text-[#f47721]",
              bg: "bg-orange-50",
            },
            {
              icon: FiLock,
              step: "03. Secure Verification",
              title: "Upload files securely",
              desc: "If eligible, you receive a protected, private link to upload the specific documents required for your business type and courier setup.",
              color: "text-emerald-500",
              bg: "bg-emerald-50",
            },
          ].map((item, index) => (
            <article
              key={index}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div>
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <item.icon size={28} className={item.color} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {item.step}
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#071d3a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Preparation Checklist Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                <FiFileText size={28} className="text-amber-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Document Checklist
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#071d3a] sm:text-4xl lg:text-5xl">
              Keep these ready.
              <br />
              Send them only when asked.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              Requirements vary based on whether you are a sole proprietorship,
              private limited company, or using connected carrier accounts. Your
              assigned onboarding specialist will confirm exactly what is
              needed.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
            {[
              "Business identity (PAN/Aadhar) of authorised representative",
              "Valid business registration or GST certificate",
              "Primary warehouse, pickup, and RTO (return) addresses",
              "Cancelled cheque or bank verification for remittance",
              "Existing courier account credentials (only if connecting your own)",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <FiCheckCircle size={15} />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security Callout - Fixed Icons & Layout */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="rounded-[3rem] bg-[#061a34] px-6 py-16 text-center shadow-[0_20px_50px_rgba(4,21,45,.4)] sm:p-16 lg:px-24">
          <h2 className="mb-12 text-3xl font-black text-white sm:text-4xl">
            How we protect your business data
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FiLock,
                title: "Encrypted Storage",
                text: "All uploaded KYC documents are stored using AES-256 encryption. They are strictly accessed only during the verification window.",
              },
              {
                icon: FiEyeOff,
                title: "Restricted Access",
                text: "Your data is only visible to our certified compliance team. Customer support agents cannot view your tax or identity documents.",
              },
              {
                icon: FiServer,
                title: "No Third-Party Sharing",
                text: "We do not sell, rent, or share your business compliance data with third-party marketers or unauthorized logistical partners.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-2xl"
              >
                {/* Visible solid orange icon container */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f47721] text-[#061a34] shadow-[0_0_20px_rgba(244,119,33,.4)] transition-transform duration-300 group-hover:scale-110">
                  <feature.icon size={30} strokeWidth={2.5} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Premium CTA Section */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Ready to start?
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
              Start application
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
