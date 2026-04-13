import { useState } from "react";

function TopBadge() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 24px",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 9999,
        background: "#ffffff",
        color: "#111",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 28,
      }}
    >
      <span style={{ color: "#006D4A", fontSize: 8 }}>●</span>
      The Module&apos;s Catalogue
    </div>
  );
}

function HeroHeading() {
  return (
    <h1
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 500,
        fontSize: "clamp(28px, 4vw, 56px)",
        lineHeight: "1.22",
        letterSpacing: "-1.5px",
        textAlign: "center",
        color: "#fff",
        margin: 0,
        maxWidth: 580,
      }}
    >
      Every Feature You Need to{" "}
      <span style={{ fontWeight: 800, color: "#00C96A" }}>
        Backup, Migrate &amp; Restore
      </span>{" "}
      WordPress Sites{" "}
      <span style={{ fontWeight: 800, fontStyle: "italic", color: "#00C96A" }}>
        With AI
      </span>{" "}
      Making Every Step Safer
    </h1>
  );
}

function HeroSubtext() {
  return (
    <p
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: "1.6",
        color: "rgba(255,255,255,0.55)",
        textAlign: "center",
        maxWidth: 460,
        margin: "20px auto 0",
      }}
    >
      Every feature in MigrateAI was built to solve a real problem. No bloat, no
      unnecessary complexity. Just the tools you need to backup, migrate, and
      restore WordPress sites with complete confidence.
    </p>
  );
}

function ExploreButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: 32,
        padding: "14px 32px",
        borderRadius: 9999,
        border: "none",
        background: hovered ? "#00b35c" : "#006D4A",
        color: "#fff",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        transition: "background 0.2s ease, transform 0.15s ease",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,109,74,0.45)"
          : "0 4px 16px rgba(0,109,74,0.3)",
        letterSpacing: "0.01em",
      }}
    >
      Explore the Modules
    </button>
  );
}

function AppMock() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 780,
        margin: "52px auto 0",
        borderRadius: 16,
        border: "2px solid #006D4A",
        background: "rgba(10,20,15,0.7)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.6), 0 0 40px 8px rgba(0,109,74,0.25)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <img
        src="/d2.svg"
        alt="MigrateAI App"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function IntelligenceBadge() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        marginTop: 24,
        width: 306,
        height: 90,
        padding: "0 20px",
        borderRadius: 20,
        background: "#ffffff",
        boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#3ecf8e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0,
          color: "#fff",
        }}
      >
        ✦
      </div>
      <div style={{ whiteSpace: "nowrap" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: 4,
          }}
        >
          Intelligence
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#0a1a10",
          }}
        >
          99.9% Success Rate
        </div>
      </div>
    </div>
  );
}

export default function MigrateAIHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,800&display=swap');
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin:0; background:#040d08; }
      `}</style>

      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#040d08",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 24px 80px",
          overflow: "hidden",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 1440,
            height: 1440,
            top: 477,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: 9999,
            background: "#006D4A",
            opacity: 0.25,
            filter: "blur(255px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "fadeUp 0.7s ease both",
          }}
        >
          <TopBadge />
          <HeroHeading />
          <HeroSubtext />
          <ExploreButton />
          <div style={{ position: "relative", width: "100%", maxWidth: 780 }}>
            <AppMock />
            <div
              style={{
                position: "absolute",
                bottom: -24,
                right: 24,
                zIndex: 10,
              }}
            >
              <IntelligenceBadge />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}