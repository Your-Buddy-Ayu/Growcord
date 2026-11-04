"use client";

import React, { useState, useMemo } from "react";
import { FiTruck, FiBox, FiCheck, FiArrowRight, FiShield, FiPercent, FiTrendingDown } from "react-icons/fi";

const ZONES = [
  { id: "city", name: "Within City", baseRate: 19, codFee: 20, sla: "Same Day / Next Day" },
  { id: "regional", name: "Within State", baseRate: 24, codFee: 25, sla: "1 - 2 Days" },
  { id: "metro", name: "Metro to Metro", baseRate: 29, codFee: 28, sla: "2 - 3 Days" },
  { id: "roi", name: "Rest of India", baseRate: 36, codFee: 32, sla: "3 - 4 Days" },
  { id: "special", name: "Special (NE & J&K)", baseRate: 52, codFee: 40, sla: "4 - 6 Days" },
];

export default function ShippingRateCalculator({ onSelectRate, className = "" }) {
  const [selectedZone, setSelectedZone] = useState("metro");
  const [deadWeight, setDeadWeight] = useState(0.5);
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(5);
  const [paymentMode, setPaymentMode] = useState("prepaid"); // "prepaid" or "cod"
  const [codAmount, setCodAmount] = useState(1200);
  const [monthlyVolume, setMonthlyVolume] = useState(500);

  // Volumetric weight formula: (L * W * H) / 5000
  const volumetricWeight = useMemo(() => {
    const vol = (length * width * height) / 5000;
    return Math.max(0.1, Number(vol.toFixed(2)));
  }, [length, width, height]);

  // Chargeable weight is the greater of dead weight vs volumetric weight, rounded to nearest 0.5kg
  const chargeableWeight = useMemo(() => {
    const raw = Math.max(deadWeight, volumetricWeight);
    return Math.max(0.5, Math.ceil(raw * 2) / 2);
  }, [deadWeight, volumetricWeight]);

  const zoneData = useMemo(() => {
    return ZONES.find((z) => z.id === selectedZone) || ZONES[2];
  }, [selectedZone]);

  // Calculate pricing comparison
  const calculations = useMemo(() => {
    const weightMultiplier = chargeableWeight / 0.5;

    // GrowShip Aggregator Rate (Bulk corporate tiers)
    let growShipBase = zoneData.baseRate + (weightMultiplier - 1) * (zoneData.baseRate * 0.75);
    if (monthlyVolume >= 2000) growShipBase *= 0.9; // 10% enterprise discount
    else if (monthlyVolume >= 500) growShipBase *= 0.95; // 5% growth discount

    const growShipCodFee = paymentMode === "cod" ? Math.max(22, codAmount * 0.015) : 0;
    const growShipTotal = Math.round(growShipBase + growShipCodFee);

    // Shiprocket / Standard Aggregator Rate
    const competitorBase = (zoneData.baseRate * 1.35) + (weightMultiplier - 1) * (zoneData.baseRate * 0.95);
    const competitorCodFee = paymentMode === "cod" ? Math.max(35, codAmount * 0.02) : 0;
    const competitorTotal = Math.round(competitorBase + competitorCodFee);

    // Standalone Courier Retail Rate (Walk-in / uncommitted contract)
    const directBase = (zoneData.baseRate * 2.2) + (weightMultiplier - 1) * (zoneData.baseRate * 1.5);
    const directCodFee = paymentMode === "cod" ? Math.max(50, codAmount * 0.025) : 0;
    const directTotal = Math.round(directBase + directCodFee);

    const perShipmentSavings = directTotal - growShipTotal;
    const monthlySavings = perShipmentSavings * monthlyVolume;

    return {
      growShipTotal,
      competitorTotal,
      directTotal,
      perShipmentSavings,
      monthlySavings,
    };
  }, [chargeableWeight, zoneData, paymentMode, codAmount, monthlyVolume]);

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(7,29,58,0.1)] p-6 sm:p-8 lg:p-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Form: Inputs & Controls */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-[#f47721] border border-orange-200/60 mb-2">
              <FiPercent size={13} /> Live Shipping Rate Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071d3a] tracking-tight">
              Calculate Your Shipping Rate & Projected Savings
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Select destination zone and package dimensions to see real-time discounted aggregator pricing.
            </p>
          </div>

          {/* Destination Zone Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              1. Delivery Destination Zone
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ZONES.map((zone) => {
                const isSelected = selectedZone === zone.id;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedZone(zone.id)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                      isSelected
                        ? "border-[#f47721] bg-orange-50/50 shadow-sm ring-2 ring-[#f47721]/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <p className={`text-xs font-bold ${isSelected ? "text-[#f47721]" : "text-[#071d3a]"}`}>
                      {zone.name}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{zone.sla}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weight & Dimension Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Dead Weight
                </label>
                <span className="text-sm font-black text-[#071d3a] px-2 py-0.5 bg-white rounded-md border border-slate-200">
                  {deadWeight} kg
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={deadWeight}
                onChange={(e) => setDeadWeight(parseFloat(e.target.value))}
                className="w-full accent-[#f47721] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>0.5 kg</span>
                <span>5.0 kg</span>
                <span>10.0 kg</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Dimensions (L × W × H cm)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number"
                    min="1"
                    max="150"
                    value={length}
                    onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2 py-1.5 text-center text-xs font-bold text-[#071d3a] bg-white rounded-lg border border-slate-200 focus:outline-none focus:border-[#f47721]"
                    placeholder="L"
                  />
                  <span className="block text-[10px] text-center text-slate-400 mt-0.5">Length</span>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="150"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2 py-1.5 text-center text-xs font-bold text-[#071d3a] bg-white rounded-lg border border-slate-200 focus:outline-none focus:border-[#f47721]"
                    placeholder="W"
                  />
                  <span className="block text-[10px] text-center text-slate-400 mt-0.5">Width</span>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="150"
                    value={height}
                    onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2 py-1.5 text-center text-xs font-bold text-[#071d3a] bg-white rounded-lg border border-slate-200 focus:outline-none focus:border-[#f47721]"
                    placeholder="H"
                  />
                  <span className="block text-[10px] text-center text-slate-400 mt-0.5">Height</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-right">
                Chargeable: <span className="font-bold text-[#071d3a]">{chargeableWeight} kg</span>
              </p>
            </div>
          </div>

          {/* Payment Type & Volume Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Payment Collection
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMode("prepaid")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition ${
                    paymentMode === "prepaid"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  ✓ Prepaid (Online)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMode("cod")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition ${
                    paymentMode === "cod"
                      ? "border-[#f47721] bg-orange-50 text-[#f47721]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  Cash on Delivery (COD)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Monthly Shipment Volume
              </label>
              <select
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full py-2 px-3 text-xs font-bold text-[#071d3a] bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#f47721]"
              >
                <option value={100}>Starter (Up to 100 orders/mo)</option>
                <option value={500}>Growth (100 - 1,000 orders/mo)</option>
                <option value={1500}>Scale (1,000 - 3,000 orders/mo)</option>
                <option value={5000}>Enterprise (3,000+ orders/mo)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Output: Pricing Card & Savings */}
        <div className="w-full lg:w-5/12 bg-linear-to-b from-[#071d3a] to-[#0c2b53] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden flex flex-col justify-between self-stretch">
          <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Aggregator Tier Rate
              </span>
              <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Best Value SLA
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs text-slate-300 font-medium">Your Estimated Shipping Rate</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ₹{calculations.growShipTotal}
                </span>
                <span className="text-xs text-slate-300">
                  / {chargeableWeight}kg parcel
                </span>
              </div>
              <p className="text-xs text-orange-300/90 mt-1 font-medium">
                {zoneData.sla} SLA · 15+ Top Couriers (Delhivery, BlueDart, DTDC)
              </p>
            </div>

            {/* Comparison Benchmarks */}
            <div className="mt-6 space-y-2.5 pt-5 border-t border-white/10 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Traditional Direct Courier:</span>
                <span className="line-through text-slate-400 font-semibold">₹{calculations.directTotal}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Competitor Aggregator (Shiprocket):</span>
                <span className="text-slate-300 font-semibold">₹{calculations.competitorTotal}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 font-bold pt-2 border-t border-white/10">
                <span>Your Savings per Parcel:</span>
                <span>Save ₹{calculations.perShipmentSavings} / box</span>
              </div>
            </div>

            {/* Projected Monthly Savings Banner */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.08] border border-white/15 backdrop-blur-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-[#f47721] grid place-items-center shrink-0">
                  <FiTrendingDown size={20} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-300 uppercase font-bold tracking-wider">
                    Projected Monthly Margin Saved
                  </p>
                  <p className="text-xl font-black text-white">
                    ₹{calculations.monthlySavings.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <button
              type="button"
              onClick={() => onSelectRate && onSelectRate(calculations)}
              className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-[#f47721] to-[#ff923f] text-[#061b35] font-extrabold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Claim Rates & Get ₹500 Free Credit <FiArrowRight />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Zero monthly maintenance fee · No minimum volume contract
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

