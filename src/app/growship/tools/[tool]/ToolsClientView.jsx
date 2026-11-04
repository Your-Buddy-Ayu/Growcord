"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiCopy,
  FiMessageSquare,
  FiSliders,
} from "react-icons/fi";

export default function ToolsClientView({
  activeSlug,
  tool,
  allToolsDirectory = [],
}) {
  // 1. Volumetric Calculator States
  const [lengthCm, setLengthCm] = useState(32);
  const [breadthCm, setBreadthCm] = useState(24);
  const [heightCm, setHeightCm] = useState(10);
  const [deadWeightKg, setDeadWeightKg] = useState(0.65);
  const [divisor, setDivisor] = useState(5000);
  const [boxQty, setBoxQty] = useState(1);

  // 2. RTO Loss Calculator States
  const [rtoMonthlyOrders, setRtoMonthlyOrders] = useState(3000);
  const [codPercent, setCodPercent] = useState(65);
  const [rtoPercent, setRtoPercent] = useState(18);
  const [forwardFreight, setForwardFreight] = useState(75);
  const [reverseFreight, setReverseFreight] = useState(65);
  const [packagingCost, setPackagingCost] = useState(22);

  // 3. Pin-Code & Zone Estimator States
  const [originPin, setOriginPin] = useState("400093");
  const [destPin, setDestPin] = useState("560001");
  const [pinParcelWt, setPinParcelWt] = useState(0.8);

  // 4. COD Remittance Cashflow States
  const [dailyCodOrders, setDailyCodOrders] = useState(80);
  const [codAov, setCodAov] = useState(1450);
  const [transitDays, setTransitDays] = useState(4);
  const [remittanceDays, setRemittanceDays] = useState(5);

  // 5. NDR WhatsApp/SMS Generator States
  const [ndrScenario, setNdrScenario] = useState("unavailable");
  const [brandNameInput, setBrandNameInput] = useState("YourBrand");
  const [buyerNameInput, setBuyerNameInput] = useState("Rahul");
  const [codAmountInput, setCodAmountInput] = useState("1,299");
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // 6. GST on Freight Calculator States
  const [baseFreightAmt, setBaseFreightAmt] = useState(68);
  const [codFeeAmt, setCodFeeAmt] = useState(25);
  const [gstMonthlyQty, setGstMonthlyQty] = useState(2000);
  const [productAov, setProductAov] = useState(1200);

  // FAQ & Lead Capture States
  const [openFaq, setOpenFaq] = useState(0);
  const [reportEmail, setReportEmail] = useState("");
  const [reportSent, setReportSent] = useState(false);

  // ==========================================
  // LIVE CALCULATIONS
  // ==========================================

  // Volumetric Math
  const singleVolWt = Number(
    ((lengthCm * breadthCm * heightCm) / divisor).toFixed(2),
  );
  const totalDeadWt = Number((deadWeightKg * boxQty).toFixed(2));
  const totalVolWt = Number((singleVolWt * boxQty).toFixed(2));
  const billableWt = Math.max(totalDeadWt, totalVolWt);
  const isVolumetricHigher = totalVolWt > totalDeadWt;
  const recommendedSlab =
    billableWt <= 0.5
      ? "500g Base Slab"
      : billableWt <= 1
        ? "1.0 kg Standard Slab"
        : billableWt <= 2
          ? "2.0 kg Priority Slab"
          : `${Math.ceil(billableWt)} kg Heavy Slab`;

  // RTO Math
  const totalCodOrders = Math.round(rtoMonthlyOrders * (codPercent / 100));
  const monthlyRtoParcels = Math.round(totalCodOrders * (rtoPercent / 100));
  const costPerRtoParcel = forwardFreight + reverseFreight + packagingCost;
  const monthlyRtoBurn = monthlyRtoParcels * costPerRtoParcel;
  const annualRtoBurn = monthlyRtoBurn * 12;
  const growshipRecoveredMonthly = Math.round(monthlyRtoBurn * 0.24);

  // Pin-Code Zone Math
  const cleanOrigin = originPin.replace(/\D/g, "").slice(0, 6);
  const cleanDest = destPin.replace(/\D/g, "").slice(0, 6);
  const metroPrefixes = ["11", "40", "56", "60", "70", "50", "41", "38"];
  const specialPrefixes = ["78", "79", "18", "19", "17", "74"];

  let zoneTitle = "Zone D · Rest of India (National)";
  let airMedian = "2.1 Days";
  let surfaceMedian = "4.6 Days";
  let zoneRisk = "Moderate COD Risk · Use 15-min NDR sync";

  if (cleanOrigin.slice(0, 3) === cleanDest.slice(0, 3)) {
    zoneTitle = "Zone A · Intra-City / Local Hub";
    airMedian = "1.0 Day (Next-Day)";
    surfaceMedian = "1.2 Days";
    zoneRisk = "Low RTO Risk · Fast local turnaround";
  } else if (cleanOrigin.slice(0, 2) === cleanDest.slice(0, 2)) {
    zoneTitle = "Zone B · Within State / Regional Corridor";
    airMedian = "1.5 Days";
    surfaceMedian = "2.4 Days";
    zoneRisk = "Low-Moderate Risk · Best for Priority Ground";
  } else if (
    specialPrefixes.includes(cleanDest.slice(0, 2)) ||
    specialPrefixes.includes(cleanOrigin.slice(0, 2))
  ) {
    zoneTitle = "Zone E · Special Zone (NE / J&K / Hill States)";
    airMedian = "3.2 Days";
    surfaceMedian = "6.5 Days";
    zoneRisk = "High Transit Variance · Express Air Recommended";
  } else if (
    metroPrefixes.includes(cleanOrigin.slice(0, 2)) &&
    metroPrefixes.includes(cleanDest.slice(0, 2))
  ) {
    zoneTitle = "Zone C · Metro-to-Metro Trunk Lane";
    airMedian = "1.6 Days";
    surfaceMedian = "3.4 Days";
    zoneRisk = "High-Velocity Lane · Ideal for Air & Surface";
  }

  // COD Cashflow Math
  const dailyCodGmv = dailyCodOrders * codAov;
  const totalCycleDays = transitDays + remittanceDays;
  const lockedWorkingCapital = dailyCodGmv * totalCycleDays;
  const unlockedWithFasterOps = dailyCodGmv * 2;

  // NDR Template Generator Strings
  const ndrTemplates = {
    unavailable: `Hi ${buyerNameInput}, our courier partner tried delivering your ${brandNameInput} order today (AWB: GRS-8492), but you were unavailable. Please reply *1* to re-attempt delivery tomorrow or *2* to share an alternate contact number. (COD Amount: ₹${codAmountInput})`,
    address: `Action Required: Hi ${buyerNameInput}, your ${brandNameInput} parcel is at your local delivery hub, but the rider needs a landmark/house number to complete delivery. Reply with your exact landmark so we can dispatch it on priority today!`,
    cod_confirm: `Hi ${buyerNameInput}! Your ${brandNameInput} order (#ORD-9042) is Out for Delivery today. Please keep ₹${codAmountInput} ready via Cash or UPI for a smooth doorstep handover. Track live: growship.in/track`,
    split_order: `Update from ${brandNameInput}: Your order is packed in 2 separate parcels for safe transit. Parcel 1 of 2 is arriving today, and Parcel 2 is right behind it! Both timelines are active on your tracking link.`,
  };

  // GST Math
  const subTotalPerOrder = baseFreightAmt + codFeeAmt;
  const gstPerOrder = Number((subTotalPerOrder * 0.18).toFixed(2));
  const grossInvoicePerOrder = Number(
    (subTotalPerOrder + gstPerOrder).toFixed(2),
  );
  const monthlyNetFreight = subTotalPerOrder * gstMonthlyQty;
  const monthlyGstItc = Math.round(gstPerOrder * gstMonthlyQty);
  const freightPercentOfAov = Number(
    ((subTotalPerOrder / Math.max(1, productAov)) * 100).toFixed(1),
  );

  const handleCopyTemplate = () => {
    navigator.clipboard?.writeText(ndrTemplates[ndrScenario]);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 1800);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportEmail.trim()) return;
    setReportSent(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* SECTION 1: HERO + TOOL SWITCHER PILLS */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-12 pb-16 text-white sm:pt-16 sm:pb-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.18),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link href="/growship" className="transition hover:text-white">
              GrowShip
            </Link>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-300">Free Logistics Tools</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[#f47721]">
              {tool.name}
            </span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff9647]">
              <FiSliders size={13} /> {tool.category} · 100% Free Utility
            </span>

            <h1 className="mt-5 text-balance text-4xl font-black leading-[1.06] tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
              {tool.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {tool.heroSubtitle}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Switch Tool:
            </span>
            {[
              ["volumetric-weight-calculator", "Volumetric Weight"],
              ["rto-loss-calculator", "RTO Loss Calculator"],
              ["pincode-serviceability-checker", "Pin-Code Zone & SLA"],
              ["cod-remittance-cycle-calculator", "COD Cashflow"],
              ["ndr-message-template-generator", "NDR WhatsApp Templates"],
              ["gst-on-freight-calculator", "GST on Freight"],
            ].map(([slugKey, label]) => (
              <Link
                key={slugKey}
                href={`/growship/tools/${slugKey}`}
                className={`rounded-xl px-3 py-2 text-xs font-bold transition ${
                  activeSlug === slugKey
                    ? "bg-[#f47721] text-[#061a34] shadow-md"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CALCULATOR WORKSPACE */}
      <section className="mx-auto -mt-8 max-w-7xl px-5 pb-16 sm:pb-24 lg:px-8">
        <div className="relative z-20 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-10 lg:p-12">
          {/* WIDGET 1: VOLUMETRIC */}
          {tool.widgetType === "volumetric" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                    Enter Parcel Dimensions & Scale Weight
                  </h2>
                  <div className="inline-flex rounded-xl bg-slate-100 p-1">
                    {[
                      [5000, "Express / Air (÷5000)"],
                      [4500, "Heavy Surface (÷4500)"],
                    ].map(([divVal, divLabel]) => (
                      <button
                        key={divVal}
                        type="button"
                        onClick={() => setDivisor(divVal)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                          divisor === divVal
                            ? "bg-[#061a34] text-white"
                            : "text-slate-600"
                        }`}
                      >
                        {divLabel}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    Quick Presets:
                  </span>
                  {[
                    ["Apparel Flyer", 30, 25, 4, 0.45, 1],
                    ["Skincare Kit", 20, 16, 8, 0.48, 1],
                    ["Sneaker Box", 33, 22, 12, 0.95, 1],
                    ["Master Carton (×2)", 48, 36, 25, 4.5, 2],
                  ].map(([pName, l, b, h, w, q]) => (
                    <button
                      key={pName}
                      type="button"
                      onClick={() => {
                        setLengthCm(l);
                        setBreadthCm(b);
                        setHeightCm(h);
                        setDeadWeightKg(w);
                        setBoxQty(q);
                      }}
                      className="rounded-lg border border-slate-200 bg-[#f8fafc] px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-[#f47721] hover:text-[#e8681b]"
                    >
                      {pName}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Length (cm)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={lengthCm}
                      onChange={(e) =>
                        setLengthCm(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Breadth (cm)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={breadthCm}
                      onChange={(e) =>
                        setBreadthCm(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={heightCm}
                      onChange={(e) =>
                        setHeightCm(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Dead Wt / Box (kg)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      min={0.05}
                      max={100}
                      value={deadWeightKg}
                      onChange={(e) =>
                        setDeadWeightKg(Math.max(0.05, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#e8681b] outline-none"
                    />
                  </div>
                  <div className="col-span-2 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Number of Parcels in Order (Split Shipment)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={25}
                      value={boxQty}
                      onChange={(e) =>
                        setBoxQty(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#ff9647]">
                  Chargeable Slab Result
                </span>
                <p className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  {billableWt} kg{" "}
                  <span className="text-lg font-bold text-[#ff9647]">
                    ({recommendedSlab})
                  </span>
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Total Dead Weight</p>
                    <p className="mt-1 text-xl font-black text-white">
                      {totalDeadWt} kg
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                      Total Volumetric Wt
                    </p>
                    <p className="mt-1 text-xl font-black text-[#ff9647]">
                      {totalVolWt} kg
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">
                  {isVolumetricHigher ? (
                    <>
                      <strong className="text-amber-300">
                        Volumetric Alert:
                      </strong>{" "}
                      Your box occupies more space ({totalVolWt} kg) than its
                      scale weight ({totalDeadWt} kg). Reducing height by 2–3 cm
                      can lower your slab!
                    </>
                  ) : (
                    <>
                      <strong className="text-emerald-400">
                        Optimal Packaging:
                      </strong>{" "}
                      Your parcel's volumetric weight ({totalVolWt} kg) is
                      within your physical dead weight ({totalDeadWt} kg). No
                      volumetric penalty!
                    </>
                  )}
                </div>

                <a
                  href="https://growship.in/start"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Save as Preset in GrowShip <FiArrowRight size={17} />
                </a>
              </div>
            </div>
          )}

          {/* WIDGET 2: RTO */}
          {tool.widgetType === "rto" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                  Configure Your Monthly Dispatch & Return Profile
                </h2>

                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-500">
                      Monthly Total Shipments
                    </label>
                    <span className="font-black text-[#071d3a]">
                      {rtoMonthlyOrders.toLocaleString("en-IN")} orders/mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min={200}
                    max={20000}
                    step={200}
                    value={rtoMonthlyOrders}
                    onChange={(e) =>
                      setRtoMonthlyOrders(Number(e.target.value))
                    }
                    className="mt-3 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#f47721]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold uppercase text-slate-500">
                        COD Order Share (%)
                      </label>
                      <span className="font-black text-[#e8681b]">
                        {codPercent}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={95}
                      step={5}
                      value={codPercent}
                      onChange={(e) => setCodPercent(Number(e.target.value))}
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#061a34]"
                    />
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold uppercase text-slate-500">
                        Current COD RTO Rate (%)
                      </label>
                      <span className="font-black text-rose-600">
                        {rtoPercent}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={45}
                      step={1}
                      value={rtoPercent}
                      onChange={(e) => setRtoPercent(Number(e.target.value))}
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-rose-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Forward Freight (₹)
                    </label>
                    <input
                      type="number"
                      value={forwardFreight}
                      onChange={(e) =>
                        setForwardFreight(Math.max(10, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Reverse Freight (₹)
                    </label>
                    <input
                      type="number"
                      value={reverseFreight}
                      onChange={(e) =>
                        setReverseFreight(Math.max(0, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Pack & Ops Cost (₹)
                    </label>
                    <input
                      type="number"
                      value={packagingCost}
                      onChange={(e) =>
                        setPackagingCost(Math.max(0, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Monthly RTO Freight & Ops Leakage
                </p>
                <p className="mt-2 text-4xl font-black text-white">
                  ₹{monthlyRtoBurn.toLocaleString("en-IN")}{" "}
                  <span className="text-sm font-medium text-slate-400">
                    / month
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  ({monthlyRtoParcels} returned parcels × ₹{costPerRtoParcel}{" "}
                  loss per RTO)
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">
                      Annualized RTO Drain:
                    </span>
                    <strong className="font-black text-rose-300">
                      ₹{annualRtoBurn.toLocaleString("en-IN")} / yr
                    </strong>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Recoverable with GrowShip NDR Queue
                  </p>
                  <p className="mt-1 text-2xl font-black text-emerald-400">
                    + ₹{growshipRecoveredMonthly.toLocaleString("en-IN")} saved
                    / mo
                  </p>
                  <p className="mt-1 text-xs text-slate-200">
                    By resolving 24% of failed delivery attempts via 15-min
                    tracking syncs & Growcord Comms.
                  </p>
                </div>

                <a
                  href="https://growship.in/start"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Activate Proactive NDR Board <FiArrowRight size={17} />
                </a>
              </div>
            </div>
          )}

          {/* WIDGET 3: PINCODE */}
          {tool.widgetType === "pincode" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                  Check Route Zone & Median Carrier Speed
                </h2>
                <p className="text-sm text-slate-600">
                  Enter any 6-digit Indian origin and destination pin codes to
                  inspect the billing zone and expected transit distribution.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Origin Pin Code
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={originPin}
                      onChange={(e) => setOriginPin(e.target.value)}
                      placeholder="400093"
                      className="mt-1.5 w-full bg-transparent font-mono text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Destination Pin Code
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={destPin}
                      onChange={(e) => setDestPin(e.target.value)}
                      placeholder="560001"
                      className="mt-1.5 w-full bg-transparent font-mono text-2xl font-black text-[#e8681b] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Parcel Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={pinParcelWt}
                      onChange={(e) =>
                        setPinParcelWt(Math.max(0.1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-slate-400">
                    Test Lanes:
                  </span>
                  {[
                    ["Mumbai → Bengaluru", "400093", "560001"],
                    ["Delhi → Gurugram (Local)", "110020", "110037"],
                    ["Surat → Ahmedabad (State)", "395002", "382405"],
                    ["Delhi → Guwahati (Zone E)", "110020", "781001"],
                  ].map(([laneName, oPin, dPin]) => (
                    <button
                      key={laneName}
                      type="button"
                      onClick={() => {
                        setOriginPin(oPin);
                        setDestPin(dPin);
                      }}
                      className="rounded-lg border border-slate-200 bg-[#f8fafc] px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-[#f47721]"
                    >
                      {laneName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                  Serviceable · Prepaid & COD Active
                </span>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {zoneTitle}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#ff9647]">
                  Pin Route: {cleanOrigin || "400093"} → {cleanDest || "560001"}{" "}
                  ({pinParcelWt} kg)
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Express Air Median</p>
                    <p className="mt-1 text-xl font-black text-[#ff9647]">
                      {airMedian}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                      Priority Surface Median
                    </p>
                    <p className="mt-1 text-xl font-black text-white">
                      {surfaceMedian}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <strong className="text-white">Operational Signal:</strong>{" "}
                  {zoneRisk}
                </div>

                <a
                  href="https://growship.in/start"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Ship this lane on GrowShip <FiArrowRight size={17} />
                </a>
              </div>
            </div>
          )}

          {/* WIDGET 4: COD CASHFLOW */}
          {tool.widgetType === "cod" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                  Calculate Cashflow Locked in Transit & Remittance
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Daily COD Orders Dispatched
                    </label>
                    <input
                      type="number"
                      min={5}
                      max={5000}
                      value={dailyCodOrders}
                      onChange={(e) =>
                        setDailyCodOrders(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <label className="block text-xs font-bold uppercase text-slate-400">
                      Average COD Order Value (₹)
                    </label>
                    <input
                      type="number"
                      min={100}
                      max={50000}
                      value={codAov}
                      onChange={(e) =>
                        setCodAov(Math.max(100, Number(e.target.value)))
                      }
                      className="mt-1.5 w-full bg-transparent text-2xl font-black text-[#e8681b] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold uppercase text-slate-500">
                        Avg. Delivery Transit Days
                      </label>
                      <span className="font-black text-[#071d3a]">
                        {transitDays} Days
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={transitDays}
                      onChange={(e) => setTransitDays(Number(e.target.value))}
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#f47721]"
                    />
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold uppercase text-slate-500">
                        Courier Remittance Cycle (D+)
                      </label>
                      <span className="font-black text-[#071d3a]">
                        D+{remittanceDays} Days
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={14}
                      value={remittanceDays}
                      onChange={(e) =>
                        setRemittanceDays(Number(e.target.value))
                      }
                      className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#061a34]"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                  Working Capital Locked in COD Cycle ({totalCycleDays} Days)
                </p>
                <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  ₹{lockedWorkingCapital.toLocaleString("en-IN")}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Based on ₹{dailyCodGmv.toLocaleString("en-IN")} daily COD
                  shipments
                </p>

                <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Cashflow Freed by Shaving 2 Transit Days
                  </p>
                  <p className="mt-1 text-2xl font-black text-emerald-400">
                    ₹{unlockedWithFasterOps.toLocaleString("en-IN")} unlocked
                  </p>
                  <p className="mt-1 text-xs text-slate-200">
                    Use your own direct carrier accounts on GrowShip with zero
                    platform payout delays.
                  </p>
                </div>

                <a
                  href="https://growship.in/start"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Connect Your Direct Carrier Account <FiArrowRight size={17} />
                </a>
              </div>
            </div>
          )}

          {/* WIDGET 5: NDR TEMPLATES */}
          {tool.widgetType === "ndr" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                  Select Exception Scenario & Customise Variables
                </h2>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {[
                    ["unavailable", "1. Buyer Unavailable"],
                    ["address", "2. Landmark Missing"],
                    ["cod_confirm", "3. Out for Delivery COD"],
                    ["split_order", "4. Split Parcel Alert"],
                  ].map(([scenKey, scenLabel]) => (
                    <button
                      key={scenKey}
                      type="button"
                      onClick={() => setNdrScenario(scenKey)}
                      className={`rounded-xl border px-3 py-3 text-xs font-bold transition ${
                        ndrScenario === scenKey
                          ? "border-[#061a34] bg-[#061a34] text-white"
                          : "border-slate-200 bg-[#f8fafc] text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {scenLabel}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Your Brand Name
                    </label>
                    <input
                      type="text"
                      value={brandNameInput}
                      onChange={(e) => setBrandNameInput(e.target.value)}
                      className="mt-1 w-full bg-transparent text-base font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Sample Buyer Name
                    </label>
                    <input
                      type="text"
                      value={buyerNameInput}
                      onChange={(e) => setBuyerNameInput(e.target.value)}
                      className="mt-1 w-full bg-transparent text-base font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      COD Amount (₹)
                    </label>
                    <input
                      type="text"
                      value={codAmountInput}
                      onChange={(e) => setCodAmountInput(e.target.value)}
                      className="mt-1 w-full bg-transparent text-base font-black text-[#e8681b] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                    Ready-to-Use WhatsApp / SMS Copy
                  </span>
                  <FiMessageSquare className="text-[#f47721]" size={18} />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b294d] p-5 text-sm leading-relaxed text-slate-100">
                  {ndrTemplates[ndrScenario]}
                </div>

                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  {copiedTemplate ? (
                    <>
                      <FiCheck size={18} /> Template Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy size={18} /> Copy Message Template
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* WIDGET 6: GST */}
          {tool.widgetType === "gst" && (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <h2 className="text-xl font-black text-[#071d3a] sm:text-2xl">
                  Calculate 18% Freight GST & Input Tax Credit (ITC)
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Base Freight (₹)
                    </label>
                    <input
                      type="number"
                      value={baseFreightAmt}
                      onChange={(e) =>
                        setBaseFreightAmt(Math.max(10, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      COD / Surcharge (₹)
                    </label>
                    <input
                      type="number"
                      value={codFeeAmt}
                      onChange={(e) =>
                        setCodFeeAmt(Math.max(0, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Monthly Parcels
                    </label>
                    <input
                      type="number"
                      value={gstMonthlyQty}
                      onChange={(e) =>
                        setGstMonthlyQty(Math.max(1, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#e8681b] outline-none"
                    />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <label className="block text-[11px] font-bold uppercase text-slate-400">
                      Product AOV (₹)
                    </label>
                    <input
                      type="number"
                      value={productAov}
                      onChange={(e) =>
                        setProductAov(Math.max(50, Number(e.target.value)))
                      }
                      className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                  Per-Shipment Billing Breakdown
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  ₹{grossInvoicePerOrder}{" "}
                  <span className="text-sm font-normal text-slate-300">
                    (incl. ₹{gstPerOrder} GST)
                  </span>
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                      Monthly Net Freight
                    </p>
                    <p className="mt-1 text-lg font-black text-white">
                      ₹{monthlyNetFreight.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">
                      18% Claimable GST ITC
                    </p>
                    <p className="mt-1 text-lg font-black text-emerald-400">
                      ₹{monthlyGstItc.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-300">
                  Net shipping cost is{" "}
                  <strong className="text-white">{freightPercentOfAov}%</strong>{" "}
                  of your ₹{productAov} Average Order Value.
                </p>

                <a
                  href="https://growship.in/start"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Get Itemised GST Wallet Ledger <FiArrowRight size={17} />
                </a>
              </div>
            </div>
          )}

          {/* Contextual Formula & GrowShip Hook Bar */}
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-orange-200/80 bg-[#fff8f2] p-5 sm:flex-row sm:items-center sm:px-7">
            <div>
              <p className="font-mono text-xs font-bold text-[#e8681b]">
                {tool.formulaText}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#071d3a]">
                {tool.growshipHook}
              </p>
            </div>
            <Link
              href="/growship/pricing"
              className="shrink-0 rounded-xl bg-[#061a34] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0b294d]"
            >
              See GrowShip Model →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3-STEP OPERATIONAL GUIDE */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Operational Playbook
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            How modern D2C & B2B teams optimise this metric.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tool.guideSteps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#061a34] text-sm font-black text-[#f47721]">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#071d3a]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4: EMAIL REPORT / AUDIT LEAD MAGNET */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#061a34] p-8 text-white shadow-2xl sm:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f47721]">
                Free Operations Audit
              </span>
              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Want this calculation benchmarked against your real courier
                lanes?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Share your work email and our onboarding desk will send you a
                custom lane & wallet workflow review for your parcel profile.
              </p>
            </div>

            <div className="lg:col-span-5">
              {reportSent ? (
                <div className="rounded-2xl bg-emerald-500/20 p-4 text-center text-emerald-300">
                  <p className="text-sm font-bold">
                    Audit request logged for {reportEmail}!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleReportSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={reportEmail}
                    onChange={(e) => setReportEmail(e.target.value)}
                    placeholder="ops@yourbrand.in"
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#f47721]"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-3.5 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
                  >
                    Send Audit <FiArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TOOL FAQs */}
      <section className="mx-auto max-w-4xl px-5 py-12 sm:py-20 lg:px-8">
        <h2 className="text-center text-3xl font-black text-[#071d3a]">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          {tool.faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                >
                  <span className="text-base font-bold text-[#071d3a] sm:text-lg">
                    {item.q}
                  </span>
                  <FiChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#f47721]" : "text-slate-400"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-4 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: ALL 15 LOGISTICS TOOLS DIRECTORY HUB */}
      <section className="border-t border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Complete E-Commerce Utility Suite (15 Tools)
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#071d3a] sm:text-3xl">
            Explore all free logistics calculators by GrowShip
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allToolsDirectory.map((tItem) => {
              const isCurrent = tItem.slug === activeSlug;
              return (
                <Link
                  key={tItem.slug}
                  href={`/growship/tools/${tItem.slug}`}
                  className={`flex items-center justify-between rounded-2xl border p-4 transition ${
                    isCurrent
                      ? "border-[#f47721] bg-orange-50/60 text-[#071d3a]"
                      : "border-slate-200 bg-[#fbfcfe] text-slate-700 hover:border-[#061a34] hover:bg-white"
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#e8681b]">
                      {tItem.category}
                    </p>
                    <p className="mt-0.5 text-sm font-black text-[#071d3a]">
                      {tItem.name}
                    </p>
                  </div>
                  <FiArrowRight size={16} className="shrink-0 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
