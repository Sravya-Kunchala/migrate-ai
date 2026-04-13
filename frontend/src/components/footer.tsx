import React from "react";

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: 11,
      fontWeight: 700,
      color: "#fff",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a12", fontFamily: "'Manrope', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .f-link {
          display: block; font-size: 13px; color: #6b7280;
          text-decoration: none; padding: 3px 0;
          transition: color .2s; cursor: pointer;
        }
        .f-link:hover { color: #d1d5db; }
        .f-social-btn {
          width: 36px; height: 36px; border-radius: 8px;
          border: 1px solid #1f2937; background: #111827;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color .2s;
          flex-shrink: 0;
        }
        .f-social-btn:hover { border-color: #00C96B; }
        .f-legal-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 500; color: #ffffff;
          line-height: 24px; letter-spacing: 0px;
          text-decoration: none; transition: color .2s; cursor: pointer;
        }
        .f-legal-link:hover { color: #9ca3af; }
        .f-main {
          max-width: 1200px; margin: 0 auto;
          padding: 56px 8px 40px;
          display: grid;
          grid-template-columns: 220px repeat(4, 1fr);
          gap: 16px;
        }
        .f-bottom {
          width: 100%;
          padding: 20px 74px;
          display: flex; justify-content: space-between; align-items: center;
        }
        @media (max-width: 720px) {
          .f-main { grid-template-columns: 1fr 1fr !important; gap: 24px; }
          .f-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .f-main { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Main nav grid */}
      <div className="f-main">

        {/* Brand */}
        <div className="f-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/f1.svg"
              alt="MigrateAI"
              style={{ width: 32, height: 32, borderRadius: 9 }}
            />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 18, fontWeight: 800, color: "#fff",
            }}>
              MigrateAI
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, marginTop: 12 }}>
            AI-powered WordPress backup, migration, and restore platform with intelligent
            automation, conflict prediction, and real-time recovery.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <div className="f-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <div className="f-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7m4 4V7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <ColTitle>Product</ColTitle>
          <a className="f-link">Features</a>
          <a className="f-link">How It Works</a>
          <a className="f-link">Pricing</a>
        </div>

        {/* AI Modules */}
        <div>
          <ColTitle>AI Modules</ColTitle>
          <a className="f-link">AI Migration Assistant</a>
          <a className="f-link">Smart Backup Engine</a>
          <a className="f-link">Conflict Predictor</a>
          <a className="f-link">Restore Advisor</a>
          <a className="f-link">Anomaly Detector</a>
          <a className="f-link">Smart Scheduler</a>
          <a className="f-link">AI Report Generator</a>
          <a className="f-link">NLP Command Parser</a>
        </div>

        {/* Docs */}
        <div>
          <ColTitle>Docs</ColTitle>
          <a className="f-link">Overview</a>
          <a className="f-link">Backup</a>
          <a className="f-link">Migration</a>
          <a className="f-link">Restore</a>
          <a className="f-link">API</a>
        </div>

        {/* Company */}
        <div>
          <ColTitle>Company</ColTitle>
          <a className="f-link">About</a>
          <a className="f-link">Contact</a>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #1a2235", margin: 0 }} />

      {/* Bottom bar */}
      <div className="f-bottom">
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: "24px",
          letterSpacing: 0,
        }}>
          © 2026 MigrateAI. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          <a className="f-legal-link">Privacy Policy</a>
          <a className="f-legal-link">Terms of Service</a>
        </div>
      </div>

      {/* Full-width m1.svg wordmark */}
      <div style={{
        width: "100%",
        overflow: "hidden",
        background: "#0a0a12",
        padding: 0,
        margin: 0,
        display: "block",
        lineHeight: 0,
      }}>
        <img
          src="/m1.svg"
          alt="MigrateAI"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 0.5,
          }}
        />
      </div>
    </footer>
  );
}