/** Shared Open Graph card for next/og ImageResponse (inline styles only  Satori). */
export default function OgCard({ eyebrow, title, subtitle }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: "#030712",
        backgroundImage:
          "radial-gradient(circle at 85% 10%, rgba(147,51,234,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(234,88,12,0.4), transparent 45%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "linear-gradient(135deg,#f97316,#c2410c)",
            display: "flex",
          }}
        />
        <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
          Growcord
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 24,
            color: "#fdba74",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 300,
            lineHeight: 1.08,
            marginTop: 20,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            marginTop: 24,
            maxWidth: 980,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div style={{ fontSize: 22, color: "#6b7280" }}>growcord.in</div>
    </div>
  );
}
