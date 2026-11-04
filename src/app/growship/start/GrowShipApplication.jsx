"use client";

import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiLock,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const initial = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  role: "",
  website: "",
  gstin: "",
  city: "",
  state: "",
  monthlyVolume: "",
  courierSetup: "",
  kycReady: false,
  consent: false,
};

const steps = ["Your details", "Business profile", "KYC readiness"];

function Field({ label, optional = false, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#10213b]">
        {label}
        {optional && (
          <span className="ml-1 font-medium text-slate-400">(optional)</span>
        )}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071d3a] outline-none transition placeholder:text-slate-400 focus:border-[#f47721] focus:ring-4 focus:ring-orange-100";

export default function GrowShipApplication() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const set = (key, value) =>
    setData((current) => ({ ...current, [key]: value }));
  const validStep = useMemo(() => {
    if (step === 0)
      return (
        data.name.trim() &&
        /^\S+@\S+\.\S+$/.test(data.email) &&
        data.phone.replace(/\D/g, "").length >= 10
      );
    if (step === 1)
      return (
        data.businessName.trim() &&
        data.city.trim() &&
        data.state.trim() &&
        data.monthlyVolume
      );
    return data.kycReady && data.consent;
  }, [data, step]);

  const next = () => {
    if (validStep) {
      setError("");
      setStep((current) => Math.min(current + 1, 2));
    } else setError("Please complete the required fields before continuing.");
  };

  async function submit(event) {
    event.preventDefault();
    if (!validStep) {
      setError("Please confirm KYC readiness and consent to continue.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/growship/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessName: data.businessName,
          role: data.role,
          website: data.website,
          gstin: data.gstin,
          city: data.city,
          state: data.state,
          monthlyVolume: data.monthlyVolume,
          courierSetup: data.courierSetup,
          kycReady: data.kycReady,
          consent: data.consent,
        }),
      });
      if (!response.ok) throw new Error("The application could not be sent.");
      setDone(true);
    } catch {
      setError(
        "We could not submit your application right now. Please try again, or email contact@growcord.com with your business name and phone number.",
      );
    } finally {
      setSending(false);
    }
  }

  if (done)
    return (
      <section className="mx-auto flex min-h-[72vh] max-w-2xl items-center px-5 py-16">
        <div className="w-full rounded-[2rem] border border-emerald-100 bg-white p-8 text-center shadow-xl shadow-slate-200/60 sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
            <FiCheckCircle size={33} />
          </span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-emerald-700">
            Application received
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-.05em] text-[#071d3a]">
            Thanks, {data.name.split(" ")[0]}.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600">
            Our GrowShip team will review your shipping profile and contact you
            at <strong>{data.email}</strong>. If your business is eligible,
            we’ll send the secure KYC review link and next setup steps.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm leading-6 text-slate-600">
            <strong className="block text-[#071d3a]">What happens next</strong>
            <span>
              1. Profile review · 2. Secure KYC request · 3. Courier/account
              setup · 4. Guided first shipment
            </span>
          </div>
          <a
            href="https://growship.in/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#071d3a] px-5 py-3.5 text-sm font-bold text-white"
          >
            Back to GrowShip <FiArrowRight />
          </a>
        </div>
      </section>
    );

  return (
    <main className="min-h-screen bg-[#f6f9fc] text-[#071d3a]">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
        <aside>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e8681b]">
            Get started with GrowShip
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">
            Start your shipping service application.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            Tell us how your business ships. We’ll use it to prepare the right
            onboarding, courier connection and KYC review path.
          </p>
          <div className="mt-9 space-y-4">
            {[
              [
                FiTruck,
                "Built for real dispatch",
                "Share shipment volume and your current workflow.",
              ],
              [
                FiShield,
                "KYC comes securely later",
                "Never upload PAN, Aadhaar or bank documents on this public form.",
              ],
              [
                FiCheckCircle,
                "Clear next steps",
                "A Growcord operations specialist reviews every application.",
              ],
            ].map(([Icon, title, copy]) => (
              <div key={title} className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-50 text-[#e8681b]">
                  <Icon size={18} />
                </span>
                <p className="text-sm leading-5 text-slate-600">
                  <strong className="block text-[#071d3a]">{title}</strong>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </aside>
        <section className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
          <div className="flex items-center gap-2.5 justify-end mb-3">
            <FiLock size={18} className="text-orange-500" />
            Secured Form
          </div>
          <div className="mb-9 grid grid-cols-3 gap-2">
            {steps.map((label, index) => (
              <div key={label}>
                <div
                  className={`h-1.5 rounded-full ${index <= step ? "bg-[#f47721]" : "bg-slate-100"}`}
                />
                <p
                  className={`mt-2 text-xs font-bold ${index === step ? "text-[#071d3a]" : "text-slate-400"}`}
                >
                  {index + 1}. {label}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={submit}>
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <p className="text-2xl font-black tracking-[-.035em]">
                    Who should we contact?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Use a work email so we can prepare your business onboarding.
                  </p>
                </div>
                <Field label="Full name">
                  <input
                    className={inputClass}
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    required
                  />
                </Field>
                <Field label="Work email">
                  <input
                    className={inputClass}
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                  />
                </Field>
                <Field label="Mobile number">
                  <input
                    className={inputClass}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    required
                  />
                </Field>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <p className="text-2xl font-black tracking-[-.035em]">
                    Your shipping business
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    This gives our operations team context before the call.
                  </p>
                </div>
                <Field label="Business / store name">
                  <input
                    className={inputClass}
                    value={data.businessName}
                    onChange={(e) => set("businessName", e.target.value)}
                    required
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your role" optional>
                    <input
                      className={inputClass}
                      placeholder="Founder, ops manager…"
                      value={data.role}
                      onChange={(e) => set("role", e.target.value)}
                    />
                  </Field>
                  <Field label="Website or storefront" optional>
                    <input
                      className={inputClass}
                      type="url"
                      placeholder="https://"
                      value={data.website}
                      onChange={(e) => set("website", e.target.value)}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="City">
                    <input
                      className={inputClass}
                      value={data.city}
                      onChange={(e) => set("city", e.target.value)}
                      required
                    />
                  </Field>
                  <Field label="State">
                    <input
                      className={inputClass}
                      value={data.state}
                      onChange={(e) => set("state", e.target.value)}
                      required
                    />
                  </Field>
                </div>
                <Field label="Monthly shipment volume">
                  <select
                    className={inputClass}
                    value={data.monthlyVolume}
                    onChange={(e) => set("monthlyVolume", e.target.value)}
                    required
                  >
                    <option value="">Select a range</option>
                    <option value="1–100">1–100 shipments</option>
                    <option value="101–500">101–500 shipments</option>
                    <option value="501–2,000">501–2,000 shipments</option>
                    <option value="2,001–10,000">2,001–10,000 shipments</option>
                    <option value="10,000+">10,000+ shipments</option>
                  </select>
                </Field>
                <Field label="GSTIN" optional>
                  <input
                    className={inputClass}
                    placeholder="Share only if available"
                    value={data.gstin}
                    onChange={(e) => set("gstin", e.target.value.toUpperCase())}
                  />
                </Field>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <p className="text-2xl font-black tracking-[-.035em]">
                    KYC readiness
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    We use this only to route your application. Do not enter
                    sensitive identity or banking information here.
                  </p>
                </div>
                <Field label="How do you ship today?" optional>
                  <select
                    className={inputClass}
                    value={data.courierSetup}
                    onChange={(e) => set("courierSetup", e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Own courier account">
                      I have courier account(s)
                    </option>
                    <option value="Aggregator">I use an aggregator</option>
                    <option value="Manual booking">I book manually</option>
                    <option value="New to shipping">I’m new to shipping</option>
                  </select>
                </Field>
                <label className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-4 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={data.kycReady}
                    onChange={(e) => set("kycReady", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#f47721]"
                  />
                  <span>
                    <strong className="block text-[#071d3a]">
                      My business is ready for KYC review.
                    </strong>
                    I understand Growcord may ask for business verification
                    documents after the initial review.
                  </span>
                </label>
                <label className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-4 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#f47721]"
                  />
                  <span>
                    I consent to Growcord contacting me about this GrowShip
                    application and handling these business details for
                    onboarding.
                  </span>
                </label>
                <div className="rounded-xl bg-amber-50 p-4 text-xs leading-5 text-amber-900">
                  <strong>Keep documents private.</strong> PAN, Aadhaar, bank
                  statements and signed documents are requested only through the
                  secure KYC workflow after your application is reviewed.
                </div>
              </div>
            )}
            {error && (
              <p
                role="alert"
                className="mt-6 rounded-xl bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
            <div className="mt-8 flex items-center justify-between gap-3">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setStep((current) => current - 1);
                  }}
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-slate-600"
                >
                  <FiArrowLeft /> Back
                </button>
              ) : (
                <span />
              )}
              {step < 2 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#071d3a] px-5 py-3.5 text-sm font-bold text-white"
                >
                  Continue <FiArrowRight />
                </button>
              ) : (
                <button
                  disabled={sending}
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-5 py-3.5 text-sm font-bold text-[#071d3a] disabled:cursor-wait disabled:opacity-70"
                >
                  {sending ? "Submitting…" : "Submit application"}{" "}
                  <FiArrowRight />
                </button>
              )}
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
