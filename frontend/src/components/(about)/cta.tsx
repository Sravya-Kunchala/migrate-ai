export default function WeAreHiring() {
  return (
    <section style={{ background: "#0a0d0f", width: "100%", padding: "60px 48px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hiring-title { animation: fadeUp 0.6s 0.1s ease both; }
        .hiring-sub   { animation: fadeUp 0.6s 0.25s ease both; }
        .hiring-tags  { animation: fadeUp 0.6s 0.4s ease both; }
        .hiring-cta   { animation: fadeUp 0.6s 0.55s ease both; }
        .hiring-tag {
          border: 1px solid rgba(105,246,184,0.35);
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.9);
          font-family: 'DM Sans', sans-serif;
          background: rgba(105,246,184,0.07);
          transition: background 0.2s, border-color 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .hiring-tag:hover {
          background: rgba(105,246,184,0.15);
          border-color: rgba(105,246,184,0.6);
        }
        .hiring-email {
          color: #fff;
          font-size: 18px;
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 5px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.2s;
        }
        .hiring-email:hover { color: #69F6B8; }
      `}</style>

      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          padding: "52px 48px 44px",
          textAlign: "center",
          background: "#0d1f16",
        }}
      >
        {/* b4.png at reduced opacity */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/b4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
          }}
        />

        {/* #69F6B8 tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(105,246,184,0.06)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            className="hiring-title"
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 14px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            We're Hiring
          </h2>

          <p
            className="hiring-sub"
            style={{
              fontSize: 13.5,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: 440,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Help us build the next generation of intelligent infrastructure. We're
            looking for passionate engineers, designers, and thinkers.
          </p>

          <div
            className="hiring-tags"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            {["Senior AI Engineer", "Product Designer (UX)", "Customer Success Lead"].map((role) => (
              <span key={role} className="hiring-tag">{role}</span>
            ))}
          </div>

          <div
            className="hiring-cta"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
          >
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Send your CV to
            </p>
            <a href="mailto:careers@migrateai.io" className="hiring-email">
              careers@migrateai.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}