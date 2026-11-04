import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.growcord.in/api";

export async function GET(request, { params }) {
  const { awb: rawAwb } = await params;
  const awb = String(rawAwb || "").trim();
  if (!awb || awb.length > 60) return NextResponse.json({ success: false, message: "Enter a valid AWB or shipment reference." }, { status: 400 });

  try {
    const upstream = await fetch(`${API_BASE_URL}/v1/ship/track/${encodeURIComponent(awb)}`, {
      headers: { "X-Forwarded-For": request.headers.get("x-forwarded-for") || "" }, cache: "no-store",
    });
    const body = await upstream.json().catch(() => null);
    if (!upstream.ok) {
      return NextResponse.json({ success: false, message: body?.message || "Tracking is unavailable right now." }, { status: upstream.status });
    }
    return NextResponse.json({ success: true, data: body?.data }, {
      status: 200, headers: { "Cache-Control": body?.data?.is_terminal ? "public, max-age=3600" : "public, max-age=60" },
    });
  } catch {
    return NextResponse.json({ success: false, message: "Tracking is unavailable right now." }, { status: 502 });
  }
}
