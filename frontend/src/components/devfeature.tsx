const features = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: "Full REST API",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: "40+ Action Hooks",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Action Scheduler",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    label: "WP-CLI Command Suite",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    ),
    label: "PHP 8.0+ OOP Architecture",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    label: "PHPUnit Test Coverage",
  },
];

const codeLines = [
  { text: "# wp-cli migrateai start", color: "#6b7280" },
  { text: "Scanning WordPress core...", color: "#e6edf3" },
  { text: "Analyzing database [wp_options]... ", color: "#e6edf3", highlight: "Success", highlightColor: "#00C96B" },
  { text: "Compressing files [4.2GB]... ", color: "#e6edf3", highlight: "78%", highlightColor: "#00C96B" },
  { text: "", color: "" },
  { text: "// Hooks Available", color: "#6b7280" },
  { text: "add_action('migrateai_after_restore', function()", color: "#e6edf3" },
  { text: "{ ... });", color: "#e6edf3" },
];

export default function DevFeatures() {
  return (
    <section style={{
      background: "#0d1117",
      padding: "80px 48px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400&family=JetBrains+Mono:wght@400&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dev-section { animation: fadeInUp 0.6s ease 0.1s both; }

        .dev-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #e6edf3;
          font-size: 15px;
          font-weight: 500;
          border-bottom: 1px solid #21262d;
        }
        .dev-feature-item:last-child { border-bottom: none; }

        .dev-icon-wrap {
          width: 32px;
          height: 32px;
          background: #1c2a1e;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── DESKTOP (default) ── */
        .dev-inner {
          display: flex;
          flex-direction: row;
          gap: 64px;
          align-items: center;
        }
        .dev-left  { flex: 0 0 420px; width: 420px; }
        .dev-right { flex: 1; }
        .dev-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 32px;
        }
        .dev-section-pad {
          padding: 56px 56px;
        }
        .dev-section-outer {
          padding: 80px 48px;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .dev-section-outer {
            padding: 40px 16px;
          }
          .dev-section-pad {
            padding: 28px 20px;
          }
          .dev-inner {
            flex-direction: column;
            gap: 32px;
          }
          .dev-left {
            flex: unset;
            width: 100%;
          }
          .dev-right {
            width: 100%;
          }
          .dev-features-grid {
            grid-template-columns: 1fr;
          }
          .dev-title {
            font-size: 26px !important;
          }
          .dev-code-text {
            font-size: 11px !important;
            overflow-x: auto;
          }
          .dev-code-block {
            overflow-x: auto;
          }
        }
      `}</style>

      <div className="dev-section-outer" style={{ background: "#0d1117", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div
          className="dev-section dev-inner dev-section-pad"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#161b22",
            border: "1px solid #21262d",
            borderRadius: 20,
          }}
        >
          {/* Left */}
          <div className="dev-left">
            {/* Tag */}
            <p style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#00C96B",
              margin: "0 0 16px",
            }}>
              For Architects
            </p>

            {/* Title */}
            <h2 className="dev-title" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 36,
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}>
              Developer Features
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: "#8b949e",
              margin: "0 0 36px",
              lineHeight: 1.6,
            }}>
              Built for scale, extensibility, and modern dev workflows.
            </p>

            {/* Features grid */}
            <div className="dev-features-grid">
              {features.map((f) => (
                <div key={f.label} className="dev-feature-item">
                  <div className="dev-icon-wrap">{f.icon}</div>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code block */}
          <div className="dev-right">
            <div
              className="dev-code-block"
              style={{
                background: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {/* Traffic lights */}
              <div style={{
                display: "flex",
                gap: 7,
                padding: "14px 16px",
                borderBottom: "1px solid #21262d",
              }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              </div>

              {/* Code */}
              <div style={{ padding: "20px 24px", overflowX: "auto" }}>
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="dev-code-text"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      lineHeight: "24px",
                      color: line.color,
                      whiteSpace: "pre",
                    }}
                  >
                    {line.text}
                    {line.highlight && (
                      <span style={{ color: line.highlightColor }}>{line.highlight}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}