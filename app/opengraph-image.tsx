import { ImageResponse } from "next/og";

export const alt = "Aditya Yogi — Senior Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          backgroundColor: "#06070c",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(139,92,246,0.55), transparent 55%), radial-gradient(circle at 100% 30%, rgba(34,211,238,0.35), transparent 50%), radial-gradient(circle at 70% 100%, rgba(236,72,153,0.4), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
            }}
          >
            AY
          </div>
          <div style={{ fontSize: 30, opacity: 0.8 }}>Available for new roles</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Aditya Yogi</div>
          <div style={{ fontSize: 44, marginTop: 16, color: "#a5b4fc" }}>
            Senior Software Developer
          </div>
          <div style={{ fontSize: 30, marginTop: 28, opacity: 0.75 }}>
            PHP · Laravel · MySQL · Redis · REST APIs · Flutter
          </div>
        </div>
      </div>
    ),
    size
  );
}
