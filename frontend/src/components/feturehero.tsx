import { useEffect, useRef, useState } from "react";

const INJECTED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

@keyframes mh-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes mh-glow-pulse {
  0%, 100% { opacity: 0.22; transform: translateX(-50%) scale(1); }
  50%       { opacity: 0.32; transform: translateX(-50%) scale(1.06); }
}
@keyframes mh-badge-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
@keyframes mh-mock-rise {
  from { opacity: 0; transform: translateY(36px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Staggered children */
.mh-badge     { opacity: 0; animation: mh-fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
.mh-heading   { opacity: 0; animation: mh-fade-up 0.6s  cubic-bezier(0.22,1,0.36,1) 0.18s both; }
.mh-subtext   { opacity: 0; animation: mh-fade-up 0.6s  cubic-bezier(0.22,1,0.36,1) 0.30s both; }
.mh-btn-wrap  { opacity: 0; animation: mh-fade-up 0.6s  cubic-bezier(0.22,1,0.36,1) 0.42s both; }
.mh-mock-wrap { opacity: 0; animation: mh-mock-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.58s both; }

.mh-badge-dot { animation: mh-badge-dot 2.2s ease-in-out infinite; }
.mh-glow      { animation: mh-glow-pulse 6s ease-in-out infinite; }

/* Button */
.mh-btn {
  padding: 14px 32px;
  border-radius: 9999px;
  border: none;
  background: #006D4A;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 16px rgba(0,109,74,0.3);
}
.mh-btn:hover {
  background: #00b35c;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,109,74,0.45);
}
.mh-btn:active {
  transform: translateY(0) scale(0.97);
}

/* Heading */
.mh-h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 5.5vw, 64px);
  line-height: 1.12;
  letter-spacing: -1.5px;
  text-align: center;
  color: #fff;
  max-width: 640px;
  width: 100%;
}

/* Intelligence badge */
.mh-intel {
  position: absolute;
  bottom: -20px;
  right: 24px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  width: 280px;
  height: 80px;
  padding: 0 18px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 20px 50px rgba(0,0,0,0.28);
}

/* ── Mobile ≤ 600px ── */
@media (max-width: 600px) {
  .mh-section { padding: 48px 20px 72px !important; }
  .mh-h1 {
    font-size: clamp(24px, 7.5vw, 36px) !important;
    letter-spacing: -0.6px !important;
    line-height: 1.18 !important;
    max-width: 100% !important;
  }
  .mh-subtext-p {
    font-size: 13.5px !important;
    max-width: 100% !important;
  }
  .mh-mock-wrap { margin-top: 36px !important; }
  .mh-intel { display: none !important; }
  .mh-badge-text { font-size: 10px !important; letter-spacing: 0.06em !important; }
}

/* ── Tablet 601–900px ── */
@media (min-width: 601px) and (max-width: 900px) {
  .mh-section { padding: 56px 32px 80px !important; }
  .mh-h1 { font-size: clamp(26px, 4.8vw, 48px) !important; }
  .mh-intel { width: 240px !important; height: 72px !important; right: 12px !important; }
  .mh-intel-value { font-size: 15px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .mh-badge, .mh-heading, .mh-subtext, .mh-btn-wrap, .mh-mock-wrap {
    animation: none !important; opacity: 1 !important; transform: none !important;
  }
  .mh-badge-dot, .mh-glow { animation: none !important; }
}
`;

export default function MigrateAIHero() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = INJECTED_CSS;
    style.setAttribute("data-mh-styles", "1");
    document.head.appendChild(style);
    return () => document.head.querySelector("[data-mh-styles]")?.remove();
  }, []);

  return (
    <section
      className="mh-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#040d08",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "72px 24px 96px",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background glow */}
      <div
        className="mh-glow"
        style={{
          position: "absolute",
          width: 1200,
          height: 1200,
          top: 420,
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "#006D4A",
          opacity: 0.22,
          filter: "blur(220px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* All content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >

        {/* Badge */}
        <div
          className="mh-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 9999,
            background: "#fff",
            color: "#111",
            marginBottom: 28,
          }}
        >
          <span
            className="mh-badge-dot"
            style={{ color: "#006D4A", fontSize: 8, lineHeight: 1 }}
          >●</span>
          <span
            className="mh-badge-text"
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            The Module's Catalogue
          </span>
        </div>

        {/* Heading */}
        <h1 className="mh-h1 mh-heading">
          Every Feature You Need to{" "}
          <span style={{ color: "#00C96A" }}>Backup, Migrate &amp; Restore</span>{" "}
          WordPress Sites.{" "}
          <span style={{ fontStyle: "italic", color: "#00C96A" }}>With AI</span>{" "}
          Making Every Step Safer.
        </h1>

        {/* Subtext */}
        <p
          className="mh-subtext mh-subtext-p"
          style={{
            fontSize: 15,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.52)",
            textAlign: "center",
            maxWidth: 460,
            margin: "22px auto 0",
          }}
        >
          Every feature in MigrateAI was built to solve a real problem. No bloat,
          no unnecessary complexity. Just the tools you need to backup, migrate,
          and restore WordPress sites with complete confidence.
        </p>

        {/* CTA */}
        <div className="mh-btn-wrap" style={{ marginTop: 32 }}>
          <button className="mh-btn">Explore the Modules</button>
        </div>

        {/* App mock + intelligence badge */}
        <div
          className="mh-mock-wrap"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 780,
            margin: "52px auto 0",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: 16,
              border: "2px solid #006D4A",
              background: "rgba(10,20,15,0.7)",
              backdropFilter: "blur(20px)",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 40px 8px rgba(0,109,74,0.25)",
            }}
          >
            <img
              src="/d2.svg"
              alt="MigrateAI App"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>

          {/* Intelligence badge */}
          <div className="mh-intel">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#3ecf8e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
                color: "#fff",
              }}
            >
              ✦
            </div>
            <div>
              <div
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#888", marginBottom: 4,
                }}
              >
                Intelligence
              </div>
              <div
                className="mh-intel-value"
                style={{ fontSize: 17, fontWeight: 700, color: "#0a1a10" }}
              >
                99.9% Success Rate
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}