import { ImageResponse } from "next/og";

export const alt = "billbring — Bringing Bills & Payments Together, Seamlessly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "white", background: "radial-gradient(circle at 82% 18%, rgba(18,175,124,.42), transparent 30%), linear-gradient(135deg,#10213F,#1A2E59 58%,#12AF7C)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 800 }}><div style={{ width: 22, height: 22, borderRadius: 7, background: "#12AF7C" }} /> billbring</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
        <div style={{ fontSize: 76, lineHeight: .98, letterSpacing: -4, fontWeight: 900 }}>Bringing Bills & Payments Together, Seamlessly.</div>
        <div style={{ marginTop: 28, fontSize: 25, color: "#cbd5e1" }}>One platform. Every financial service.</div>
      </div>
      <div style={{ fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#76DDB9" }}>Payments · Collections · Payouts · Financial Services</div>
    </div>,
    size,
  );
}
