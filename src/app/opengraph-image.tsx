import { ImageResponse } from "next/og";

export const alt = "Minas Wipe — Soluções em Higiene e Limpeza Profissional";
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
          background:
            "linear-gradient(135deg, #0A2540 0%, #003D99 45%, #0066FF 75%, #10B981 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 3.5c0 0 12 12 12 21.5a12 12 0 1 1-24 0c0-9.5 12-21.5 12-21.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              Minas Wipe
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Higiene profissional
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Soluções em higiene, limpeza e sanitização para empresas.
          </div>
          <div
            style={{
              fontSize: 26,
              opacity: 0.85,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Consultoria técnica, produtos de alta performance e soluções sob
            medida para diversos segmentos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 24,
            fontSize: 18,
            opacity: 0.85,
          }}
        >
          <span>minaswipe.com.br</span>
          <span>40+ anos de experiência · Atendimento consultivo</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
