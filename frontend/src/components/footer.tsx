import React from "react";

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: 13,
      fontWeight: 600,
      color: "#d1d5db",
      letterSpacing: "0px",
      textTransform: "none",
      marginBottom: 14,
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
          display: block;
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
          padding: 3px 0;
          transition: color .2s;
          cursor: pointer;
          line-height: 1.6;
        }
        .f-link:hover { color: #d1d5db; }

        .f-social-btn {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid #1f2937; background: #111827;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color .2s;
          flex-shrink: 0;
          overflow: hidden;
          padding: 0;
        }
        .f-social-btn:hover { border-color: #00C96B; }

        .f-social-icon {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .f-legal-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #6b7280;
          line-height: 24px;
          text-decoration: none;
          transition: color .2s;
          cursor: pointer;
          white-space: nowrap;
        }
        .f-legal-link:hover { color: #d1d5db; }

        /* ── Desktop ── */
        .f-main {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 48px 32px;
          display: grid;
          /* Wider brand col + bigger explicit gap before nav cols */
          grid-template-columns: 320px 80px minmax(80px, auto) minmax(160px, auto) minmax(80px, auto) minmax(80px, auto);
          gap: 0 0;
          align-items: start;
        }

        /* The spacer column creates the visual gap */
        .f-spacer { grid-column: auto; }

        .f-brand { grid-column: auto; }
        .f-cols { display: contents; }

        .f-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .f-bottom-copyright {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6b7280;
          line-height: 24px;
          white-space: nowrap;
        }

        .f-bottom-links {
          display: flex;
          gap: 20px;
          flex-shrink: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .f-main {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 28px 20px !important;
            padding: 32px 24px 24px;
          }
          .f-brand { grid-column: 1 / -1; }
          .f-spacer { display: none; }
          .f-bottom { padding: 14px 24px; }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .f-main {
            display: flex !important;
            flex-direction: column;
            gap: 0;
            padding: 24px 16px 20px;
          }
          .f-brand { margin-bottom: 28px; }
          .f-spacer { display: none; }
          .f-cols {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 24px 16px;
          }
          .f-bottom {
            padding: 12px 16px;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .f-bottom-copyright { white-space: normal; }
          .f-bottom-links { gap: 14px; }
          .f-legal-link { font-size: 12px; }
        }
      `}</style>

      {/* Main nav grid */}
      <div className="f-main">

        {/* Brand */}
        <div className="f-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <img
              src="/f1.svg"
              alt="MigrateAI"
              style={{ width: 32, height: 32, borderRadius: 9 }}
            />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16, fontWeight: 800, color: "#fff",
            }}>
              MigrateAI
            </span>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.5,
            margin: "0 0 14px",
            maxWidth: 300,
          }}>
            AI-powered WordPress backup, migration, and restore platform with intelligent
            automation, conflict prediction, and real-time recovery.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="f-social-btn">
              <img src="/Link (3).svg" alt="Link 3" className="f-social-icon" />
            </div>
            <div className="f-social-btn">
              <img src="/Link (4).svg" alt="Link 4" className="f-social-icon" />
            </div>
          </div>
        </div>

        {/* Spacer — creates the gap between brand and nav */}
        <div className="f-spacer" />

        {/* 4 link columns */}
        <div className="f-cols">
          <div>
            <ColTitle>Product</ColTitle>
            <a className="f-link">Features</a>
            <a className="f-link">How It Works</a>
            <a className="f-link">Pricing</a>
          </div>

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

          <div>
            <ColTitle>Docs</ColTitle>
            <a className="f-link">Overview</a>
            <a className="f-link">Backup</a>
            <a className="f-link">Migration</a>
            <a className="f-link">Restore</a>
            <a className="f-link">API</a>
          </div>

          <div>
            <ColTitle>Company</ColTitle>
            <a className="f-link">About</a>
            <a className="f-link">Contact</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #1a2235", margin: 0 }} />

      {/* Bottom bar */}
      <div className="f-bottom">
        <span className="f-bottom-copyright">
          © 2026 MigrateAI. All rights reserved.
        </span>
        <div className="f-bottom-links">
          <a className="f-legal-link">Privacy Policy</a>
          <a className="f-legal-link">Terms of Service</a>
        </div>
      </div>

      {/* Full-width wordmark */}
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
          style={{ width: "100%", height: "auto", display: "block", opacity: 0.8 }}
        />
      </div>
    </footer>
  );
}