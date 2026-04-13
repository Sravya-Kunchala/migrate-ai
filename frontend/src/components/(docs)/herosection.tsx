export default function DocsHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <header style={{
        position: "relative",
        overflow: "hidden",
        padding: "72px 64px 80px",
        background: "linear-gradient(135deg, #0a0f0c 60%, #051a10 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>

        {/* Glow orb */}
        <div style={{
          position: "absolute",
          bottom: -80,
          right: 80,
          width: 400,
          height: 422,
          borderRadius: "9999px",
          background: "rgba(0,109,74,0.32)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>

          {/* Version badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(52,211,153,0.10)",
            border: "1px solid rgba(52,211,153,0.20)",
            borderRadius: 9999,
            padding: "6px 16px",
            marginBottom: 28,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#34D399",
            }} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#34D399",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
            }}>
              Version 5.0 Stable
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: "1.22",
            letterSpacing: "-1.8px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 24px",
          }}>
            <span style={{ color: "#00C96B", fontWeight: 700 }}>MigrateAI</span>
            <span style={{ fontWeight: 500, color: "#ffffff" }}> Documentation</span>
            <br />
            <span style={{ fontWeight: 700, color: "#ffffff", letterSpacing: "0px" }}>— v5.0</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 680,
            margin: 0,
          }}>
            Your complete guide to installing, configuring, and using every feature of{" "}
            <strong style={{ color: "#ffffff", fontWeight: 700 }}>MigrateAI</strong>
            {" "}— from the basics of running your first backup to advanced AI module
            configuration and REST API integration.
          </p>

        </div>
      </header>
    </>
  );
}