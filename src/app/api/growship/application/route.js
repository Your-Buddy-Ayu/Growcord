import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.growcord.in/api";
const SITE_ORIGINS = new Set(["https://growship.in", "https://www.growship.in"]);

const clean = (value, max = 300) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !SITE_ORIGINS.has(origin) && process.env.NODE_ENV === "production") {
    return NextResponse.json({ success: false, message: "Invalid application origin." }, { status: 403 });
  }

  let input;
  try { input = await request.json(); } catch { return NextResponse.json({ success: false, message: "Invalid application." }, { status: 400 }); }

  const name = clean(input.name, 120);
  const email = clean(input.email, 160).toLowerCase();
  const phone = clean(input.phone, 30);
  const businessName = clean(input.businessName, 180);
  const city = clean(input.city, 100);
  const state = clean(input.state, 100);
  const monthlyVolume = clean(input.monthlyVolume, 40);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, "").length < 10 || !businessName || !city || !state || !monthlyVolume || input.kycReady !== true || input.consent !== true) {
    return NextResponse.json({ success: false, message: "Please complete the required application details." }, { status: 400 });
  }

  const metadata = {
    product: "GrowShip", application_type: "shipping-service-onboarding", business_name: businessName,
    role: clean(input.role, 100), website: clean(input.website, 240), gstin: clean(input.gstin, 30), city, state,
    monthly_volume: monthlyVolume, courier_setup: clean(input.courierSetup, 80), kyc_ready: true,
    kyc_documents: "not collected on public form", application_version: "2026-10",
  };

  try {
    const upstream = await fetch(`${API_BASE_URL}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": request.headers.get("x-forwarded-for") || "" },
      body: JSON.stringify({
        name, email, phone, source: "growship_application", subject: `GrowShip application  ${businessName}`,
        message: `${businessName} in ${city}, ${state} is applying for GrowShip. Monthly shipment band: ${monthlyVolume}.`,
        notes: "GrowShip shipping-service application. KYC readiness confirmed: yes.",
        product_interest: "GrowShip shipping services", metadata,
      }),
      cache: "no-store",
    });
    if (!upstream.ok) return NextResponse.json({ success: false, message: "The application could not be submitted." }, { status: upstream.status >= 500 ? 502 : upstream.status });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: "The application service is temporarily unavailable." }, { status: 502 });
  }
}
