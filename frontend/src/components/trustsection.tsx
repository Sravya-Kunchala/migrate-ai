const partners = ["WordPress.org", "WP Tavern", "Kinsta", "WP Beginner"];

export default function TrustedSection() {
  return (
    <section
      className="ts-section"
      style={{
        backgroundColor: "#000000",
        padding: "64px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&family=Plus+Jakarta+Sans:wght@900&display=swap');

        .ts-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/b3.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.05;
          z-index: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ts-title { animation: fadeInUp 0.6s ease 0.1s both; }
        .ts-logos { animation: fadeInUp 0.6s ease 0.25s both; }
        .ts-stats { animation: fadeInUp 0.6s ease 0.4s both; }

        .ts-partner {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0px;
          color: #FFFFFF;
          transition: opacity 0.2s ease;
          cursor: default;
          white-space: nowrap;
        }
        .ts-partner:hover { opacity: 0.7; }

        .ts-divider {
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
          margin: 0 28px;
        }

        /* ── MOBILE FIXES ── */
        @media (max-width: 768px) {

          /* Section padding */
          .ts-section {
            padding: 48px 20px !important;
          }

          /* Title: scale down font, fix line-height */
          .ts-title-text {
            font-size: 20px !important;
            line-height: 1.4 !important;
            letter-spacing: 2px !important;
          }

          /* Partners: wrap into 2×2 grid */
          .ts-logos-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 20px 0 !important;
            justify-items: center !important;
          }

          /* Hide all dividers on mobile */
          .ts-divider { display: none !important; }

          /* Partner font size */
          .ts-partner { font-size: 17px !important; line-height: 24px !important; }

          /* Stats text */
          .ts-stats-text {
            font-size: 14px !important;
            line-height: 24px !important;
          }
        }

        @media (max-width: 400px) {
          .ts-partner { font-size: 14px !important; }
          .ts-title-text { font-size: 17px !important; letter-spacing: 1.5px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1236, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Title */}
        <div className="ts-title" style={{ marginBottom: 32 }}>
          <p
            className="ts-title-text"
            style={{
              margin: 0,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 43,
              lineHeight: "25px",
              letterSpacing: "4.2px",
              textTransform: "uppercase",
              color: "#006D4A",
              textAlign: "center",
            }}
          >
            Trusted by Leading WordPress Professionals
          </p>
        </div>

        {/* Partner names */}
        <div
          className="ts-logos ts-logos-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {partners.map((name, i) => (
            <div key={name} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <div className="ts-divider" />}
              <span className="ts-partner">{name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="ts-stats">
          <p
            className="ts-stats-text"
            style={{
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "30px",
              letterSpacing: 0,
              color: "#C5C5C5",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            2,400,000+ active installations. Used by agencies, eCommerce stores, news publishers, and individual developers across 140+ countries.
          </p>
        </div>

      </div>
    </section>
  );
}