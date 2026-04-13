import { useEffect } from "react";

export default function ThreeSteps() {
  useEffect(() => {
    const cards = document.querySelectorAll(".step-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      background: "#0d0d0d",
      padding: "80px 24px",
      fontFamily: "'Manrope', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 60,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.04; }
          50%       { opacity: 0.12; }
        }
        @keyframes headerFade {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 40px; }
        }

        .steps-header-anim {
          animation: headerFade 0.7s ease both;
        }
        .steps-line-anim {
          animation: lineGrow 0.6s ease 0.4s both;
        }

        .step-card {
          background: #111827;
          border-radius: 28px;
          border: 1px solid #1f2937;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 260px;
          width: 100%;
          max-width: 960px;
          opacity: 0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .step-card:hover {
          border-color: rgba(0,201,107,0.25);
          box-shadow: 0 0 40px rgba(0,201,107,0.06);
        }
        .step-card.visible {
          animation: fadeUp 0.7s ease forwards;
        }
        .step-card:nth-child(1).visible { animation-delay: 0.1s; }
        .step-card:nth-child(2).visible { animation-delay: 0.25s; }
        .step-card:nth-child(3).visible { animation-delay: 0.4s; }

        .step-card.reverse { direction: rtl; }
        .step-card.reverse > * { direction: ltr; }

        .step-img {
          background: #1a2235;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          position: relative;
          overflow: hidden;
        }
        .step-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,201,107,0.06) 0%, transparent 70%);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .step-img img {
          width: 100%;
          max-width: 480px;
          height: auto;
          display: block;
          position: relative;
          z-index: 1;
          border-radius: 16px;
          animation: floatY 4s ease-in-out infinite;
        }
        .step-card:nth-child(2) .step-img img { animation-delay: -1.3s; }
        .step-card:nth-child(3) .step-img img { animation-delay: -2.6s; }

        .step-text-inner {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;
        }
        .step-card.reverse .step-text-inner {
          transform: translateX(20px);
        }
        .step-card.visible .step-text-inner {
          opacity: 1;
          transform: translateX(0) !important;
        }

        .step-label {
          font-size: 11px;
          font-weight: 600;
          color: #00C96B;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }
        .step-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .step-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.75;
        }
        .step-desc span { color: #9ca3af; font-weight: 600; }

        @media (max-width: 680px) {
          .step-card { grid-template-columns: 1fr; }
          .step-card.reverse { direction: ltr; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center" }} className="steps-header-anim">
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-1px",
          lineHeight: 1.2,
          margin: 0,
        }}>
          Simple intelligence in three steps.
        </h2>
        <div className="steps-line-anim" style={{
          height: 3,
          background: "#00C96B",
          borderRadius: 2,
          margin: "14px auto 0",
        }} />
      </div>

      {/* Steps */}
      <div style={{ width: "100%", maxWidth: 960, display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Step 1 */}
        <div className="step-card">
          <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
            <div className="step-text-inner" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="step-label">Step 1 — Install & Connect AI</div>
              <div className="step-title">Effortless activation.</div>
              <div className="step-desc">
                Install <span>MigrateAI</span> on your WordPress site. Connect your <span>OpenAI</span> or Anthropic API key in the settings panel. All 8 AI modules activate instantly. Pro plan users can skip the API key — use our built-in AI quota.
              </div>
            </div>
          </div>
          <div className="step-img">
            <img src="/s1.svg" alt="Install and connect AI" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-card reverse">
          <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
            <div className="step-text-inner" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="step-label">Step 2 — AI Scans & Predicts</div>
              <div className="step-title">Zero room for error.</div>
              <div className="step-desc">
                Before any migration, the Conflict Predictor automatically scans both your source and destination environments. It identifies PHP version mismatches, plugin incompatibilities, database collation differences, and .htaccess issues — and fixes what it can automatically.
              </div>
            </div>
          </div>
          <div className="step-img">
            <img src="/s2.svg" alt="AI scans and predicts conflicts" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
            <div className="step-text-inner" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="step-label">Step 3 — Migrate, Backup & Verify</div>
              <div className="step-title">Complete verification.</div>
              <div className="step-desc">
                One click starts your migration or backup. AI monitors every step. A 47-point site health check runs automatically on completion. An AI-generated report is delivered to your inbox. Your site is live, verified, and documented.
              </div>
            </div>
          </div>
          <div className="step-img">
            <img src="/s3.svg" alt="Migrate, backup and verify" />
          </div>
        </div>

      </div>
    </section>
  );
}