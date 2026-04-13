export default function GenesisSection() {
  return (
    <section style={{
      background: "#0a0d0f",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
        <p style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#00C96B",
          margin: "0 0 20px",
        }}>
          OUR GENESIS
        </p>

        <h1 style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          margin: "0 0 16px",
        }}>
          Built by Developers Who<br />
          <span style={{ color: "#00C96B" }}>Lost a Site.</span>
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          margin: "0 0 48px",
        }}>
          We built{" "}
          <span style={{ color: "#00C96B", fontWeight: 600 }}>MigrateAI</span>
          {" "}because we experienced firsthand how devastating a failed WordPress migration can be — and we decided no one else should have to go through that.
        </p>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 220,
          height: 220,
          background: "#5B4FD4",
          borderRadius: 28,
        }}>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M52 8L18 52H44L38 82L72 38H46L52 8Z"
              fill="rgba(255,255,255,0.85)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}