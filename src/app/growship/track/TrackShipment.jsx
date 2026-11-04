"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCopy,
  FiMapPin,
  FiPackage,
  FiRefreshCw,
  FiSearch,
  FiShare2,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(value))
    : null;

function SearchBox({ initial = "" }) {
  const router = useRouter();
  const [awb, setAwb] = useState(initial);
  const submit = (event) => {
    event.preventDefault();
    const next = awb.trim();
    if (next) {
      router.push("/growship/track/" + encodeURIComponent(next));
    }
  };
  return (
    <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor="tracking-number">
        AWB or shipment reference
      </label>
      <input
        id="tracking-number"
        value={awb}
        onChange={(event) => setAwb(event.target.value)}
        placeholder="AWB or shipment reference"
        className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#f47721] focus:ring-4 focus:ring-orange-100"
      />
      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f47721] px-5 py-3 text-sm font-bold text-[#071d3a] hover:bg-[#ff923f]">
        Track <FiSearch />
      </button>
    </form>
  );
}

function Progress({ status }) {
  const stages = [
    ["picked_up", "Picked up"],
    ["in_transit", "In transit"],
    ["out_for_delivery", "Out for delivery"],
    ["delivered", "Delivered"],
  ];
  const found = stages.findIndex(([key]) => key === status);
  const active = found >= 0 ? found : 0;
  return (
    <div className="mb-7 grid grid-cols-4 gap-1">
      {stages.map(([key, name], index) => (
        <div key={key}>
          <div
            className={
              "h-1.5 rounded-full " +
              (index <= active ? "bg-[#f47721]" : "bg-slate-100")
            }
          />
          <p
            className={
              "mt-2 text-[10px] font-bold leading-4 " +
              (index <= active ? "text-[#071d3a]" : "text-slate-400")
            }
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}

function StatusResult({ data, refresh, refreshing }) {
  const events = Array.isArray(data.events) ? data.events : [];
  const trackingUrl = typeof window === "undefined" ? "" : window.location.href;
  const copy = async () => {
    await navigator.clipboard?.writeText(trackingUrl);
  };
  const share = async () => {
    if (navigator.share)
      await navigator.share({
        title: "GrowShip tracking",
        text: "Track shipment " + (data.awb || data.reference),
        url: trackingUrl,
      });
    else await copy();
  };
  return (
    <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white text-left shadow-xl shadow-slate-200/60">
      <div className="border-b border-slate-100 bg-[#071d3a] px-6 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#ff9a4e]">
              Shipment status
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-.04em]">
              {data.status_label || "In progress"}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              AWB / reference:{" "}
              <span className="font-semibold text-white">
                {data.awb || data.reference}
              </span>
            </p>
          </div>
          <span
            className={
              "rounded-full px-3 py-1.5 text-xs font-bold " +
              (data.is_terminal
                ? "bg-emerald-400/15 text-emerald-300"
                : "bg-white/10 text-slate-100")
            }
          >
            {data.is_terminal ? "Journey complete" : "Shipment active"}
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={refresh}
            disabled={refreshing}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/15 disabled:opacity-60"
          >
            <FiRefreshCw className={refreshing ? "animate-spin" : ""} /> Refresh
          </button>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/15"
          >
            <FiCopy /> Copy link
          </button>
          <button
            onClick={share}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/15"
          >
            <FiShare2 /> Share
          </button>
        </div>
      </div>
      <div className="grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
        <aside className="space-y-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[.13em] text-slate-400">
              Courier
            </p>
            <p className="mt-1 text-sm font-bold text-[#071d3a]">
              {data.courier || "Courier update pending"}
            </p>
          </div>
          {data.to?.city && (
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
              <FiMapPin className="text-[#e8681b]" />
              <p className="text-sm text-slate-600">
                Going to{" "}
                <strong className="text-[#071d3a]">
                  {data.to.name ? data.to.name + ", " : ""}
                  {data.to.city}
                </strong>
              </p>
            </div>
          )}
          {data.expected_delivery && (
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
              <FiClock className="text-[#e8681b]" />
              <p className="text-sm text-slate-600">
                Expected delivery
                <br />
                <strong className="text-[#071d3a]">
                  {formatDate(data.expected_delivery)}
                </strong>
              </p>
            </div>
          )}
          {data.pieces && (
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
              <FiPackage className="text-[#e8681b]" />
              <p className="text-sm text-slate-600">
                <strong className="text-[#071d3a]">{data.pieces}</strong> parcel
                {Number(data.pieces) === 1 ? "" : "s"}
              </p>
            </div>
          )}
          {data.no_scan_since && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-5 text-amber-900">
              <FiAlertCircle className="mb-2" />
              <strong className="block">Waiting for a courier scan</strong>Last
              scan: {formatDate(data.no_scan_since)}. The shop that booked this
              shipment can help if an update is overdue.
            </div>
          )}
        </aside>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.13em] text-slate-400">
            Parcel journey
          </p>
          <div className="mt-5">
            <Progress status={data.status} />
          </div>
          <div className="space-y-0">
            {events.length ? (
              events.map((event, index) => (
                <div
                  key={event.status + "-" + event.occurred_at + "-" + index}
                  className="relative flex gap-4 pb-7 last:pb-0"
                >
                  <span
                    className={
                      "z-10 mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full " +
                      (index === 0
                        ? "bg-[#f47721] text-[#071d3a]"
                        : "bg-emerald-50 text-emerald-600")
                    }
                  >
                    <FiCheck size={15} strokeWidth={3} />
                  </span>
                  {index !== events.length - 1 && (
                    <span className="absolute left-[13px] top-7 h-[calc(100%-10px)] border-l border-slate-200" />
                  )}
                  <div>
                    <p className="text-sm font-bold text-[#071d3a]">
                      {event.label || "Shipment update"}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {event.description}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {[event.location, formatDate(event.occurred_at)]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                Your shipment is registered. The first courier scan will appear
                here after handover.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-xs leading-5 text-slate-500 sm:px-8">
        For privacy, tracking shows only the parcel journey and a limited
        delivery destination. Need help? Contact the store that booked your
        shipment.
      </div>
    </div>
  );
}

function TrackingLookup({ awb }) {
  const [state, setState] = useState({
    loading: true,
    refreshing: false,
    data: null,
    error: "",
  });
  const lookup = useCallback(
    async (refresh = false) => {
      if (refresh)
        setState((current) => ({ ...current, refreshing: true, error: "" }));
      try {
        const response = await fetch(
          "/api/growship/track/" + encodeURIComponent(awb),
          { cache: "no-store" },
        );
        const body = await response.json().catch(() => ({}));
        if (!response.ok)
          throw new Error(body.message || "Tracking is unavailable right now.");
        setState({
          loading: false,
          refreshing: false,
          data: body.data,
          error: "",
        });
      } catch (error) {
        setState({
          loading: false,
          refreshing: false,
          data: null,
          error: error.message,
        });
      }
    },
    [awb],
  );
  useEffect(() => {
    void lookup();
  }, [lookup]);
  if (state.loading)
    return (
      <p className="mt-8 text-sm font-semibold text-slate-500">
        Looking up your shipment…
      </p>
    );
  if (state.error)
    return (
      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left text-sm leading-6 text-amber-900">
        <strong className="block">We couldn’t find that shipment.</strong>
        {state.error}
        <p className="mt-2">
          Check the AWB on your order confirmation, or contact the shop that
          booked it.
        </p>
      </div>
    );
  return state.data ? (
    <StatusResult
      data={state.data}
      refresh={() => lookup(true)}
      refreshing={state.refreshing}
    />
  ) : null;
}

export default function TrackShipment({ initialAwb = "" }) {
  const params = useParams();
  const awb =
    initialAwb ||
    (Array.isArray(params?.awb) ? params.awb[0] : params?.awb) ||
    "";
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#071d3a]">
      <section className="mx-auto max-w-3xl px-5 pb-14 pt-16 text-center sm:pt-24">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#e8681b]">
          <FiTruck size={23} />
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-[#e8681b]">
          GrowShip parcel tracking
        </p>
        <h1 className="mt-3 text-balance text-4xl font-black tracking-[-.055em] sm:text-5xl">
          Follow your shipment, clearly.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          Enter the AWB or shipment reference from your order confirmation.
        </p>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50">
          <SearchBox initial={awb} />
        </div>
        {awb && <TrackingLookup key={awb} awb={awb} />}
      </section>
      <section className="border-t border-slate-200 bg-white px-5 py-10">
        <div className="mx-auto grid max-w-3xl gap-5 text-left sm:grid-cols-2">
          <p className="flex gap-3 text-sm leading-6 text-slate-600">
            <FiShield className="mt-1 shrink-0 text-emerald-600" />
            <span>
              <strong className="text-[#071d3a]">Private by design.</strong>
              <br />
              No phone, full address, order value or courier-agent details are
              shown.
            </span>
          </p>
          <p className="flex gap-3 text-sm leading-6 text-slate-600">
            <FiRefreshCw className="mt-1 shrink-0 text-[#e8681b]" />
            <span>
              <strong className="text-[#071d3a]">Courier-led updates.</strong>
              <br />
              Refresh when a new scan arrives; handover scans can take time to
              appear.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
