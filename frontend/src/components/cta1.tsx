export default function MigrateCTASection() {
  const scrollToTop = () => {
    document.getElementById("page-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        backgroundColor: "#000000",
        padding: "48px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&family=DM+Sans:wght@400&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cta-card       { animation: fadeInUp 0.6s ease 0.1s both; }
        .cta-title      { animation: fadeInUp 0.6s ease 0.2s both; }
        .cta-desc       { animation: fadeInUp 0.6s ease 0.3s both; }
        .cta-buttons    { animation: fadeInUp 0.6s ease 0.4s both; }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #69F6B8;
          color: #065F46;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 48px;
          padding: 24px 80px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-shadow:
            0 8px 10px -6px rgba(0,0,0,0.10),
            0 20px 25px -5px rgba(0,0,0,0.10);
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .cta-btn-primary:hover {
          background: #4eeea4;
          transform: translateY(-1px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #065F46;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          border-radius: 48px;
          padding: 24px 48px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.2);
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .cta-btn-secondary:hover {
          background: #054d38;
          transform: translateY(-1px);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/b4.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.15;
          border-radius: 20px;
          z-index: 0;
        }

        @media (max-width: 640px) {
          .cta-card {
            padding: 36px 20px !important;
            border-radius: 16px !important;
          }
          .cta-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
            white-space: normal !important;
            margin-bottom: 14px !important;
          }
          .cta-desc {
            font-size: 14px !important;
            line-height: 22px !important;
            margin-bottom: 28px !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100%;
          }
          .cta-btn-primary {
            width: 100% !important;
            padding: 16px 24px !important;
            font-size: 15px !important;
          }
          .cta-btn-secondary {
            width: 100% !important;
            padding: 16px 24px !important;
            font-size: 15px !important;
          }
        }
      `}</style>

      {/* Card */}
      <div
        className="cta-card"
        style={{
          width: "100%",
          maxWidth: 860,
          backgroundColor: "#065F46",
          borderRadius: 20,
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Title */}
        <h2
          className="cta-title"
          style={{
            margin: "0 0 20px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 40px)",
            lineHeight: 1.2,
            letterSpacing: 0,
            color: "#E6FFEE",
            textAlign: "center",
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          Ready to move with intelligence?
        </h2>

        {/* Description */}
        <p
          className="cta-desc"
          style={{
            margin: "0 auto 40px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
            color: "rgba(230,255,238,0.75)",
            maxWidth: 460,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Join 10,000+ developers who have automated their WordPress migrations
          with MigrateAI.
        </p>

        {/* Buttons */}
        <div
          className="cta-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            position: "relative",
            zIndex: 1,
          }}
        >
          <button type="button" onClick={scrollToTop} className="cta-btn-primary">
            Get Started for Free
          </button>
          <a href="/demo" className="cta-btn-secondary">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}