export default function AIFeatures() {
  return (
    <section className="aif-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .aif-section {
          background: #0d0d0d;
          padding: 80px 1.5rem 80px;
          font-family: 'Manrope', sans-serif;
          display: flex; flex-direction: column; align-items: center;
        }

        /* ── HEADER ── */
        .aif-header { text-align: center; max-width: 640px; margin-bottom: 80px; }
        .aif-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px, 4vw, 48px); font-weight: 700;
          color: #fff; line-height: 1.2; margin-bottom: 16px; letter-spacing: -1px;
        }
        .aif-title-accent { color: #00C96B; }
        .aif-subtitle { color: #888; font-size: 16px; line-height: 1.6; }

        /* ── FEATURE ROWS ── */
        .aif-rows { width: 100%; max-width: 1100px; display: flex; flex-direction: column; gap: 100px; }
        .aif-row { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .aif-row.reverse { direction: rtl; }
        .aif-row.reverse > * { direction: ltr; }
        .aif-text { display: flex; flex-direction: column; gap: 16px; }
        .aif-feat-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px; font-weight: 700; line-height: 1.2;
        }
        .aif-feat-desc { color: #888; font-size: 15px; line-height: 1.7; }

        .aif-bullets { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .aif-bullet { display: flex; align-items: center; gap: 8px; color: #ccc; font-size: 14px; }
        .aif-bullet-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(0,201,107,0.15); border: 1px solid #00C96B;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .aif-bullet-dot::after { content: '✓'; color: #00C96B; font-size: 9px; font-weight: 700; }

        .aif-stats { display: flex; gap: 32px; margin-top: 8px; }
        .aif-stat-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 26px; font-weight: 700; color: #00C96B;
        }
        .aif-stat-label { font-size: 11px; color: #555; margin-top: 2px; letter-spacing: 0.5px; }

        /* Resilience bar */
        .aif-metric-bar-wrap {
          background: #FFFFFF; border-radius: 48px;
          border: 1px solid rgba(170,180,173,0.1);
          padding: 24px; display: flex; align-items: center; gap: 12px; width: 100%;
        }
        .aif-metric-label { font-size: 13px; color: #555; flex: 1; }
        .aif-metric-track { flex: 2; height: 4px; background: #d1fae5; border-radius: 2px; }
        .aif-metric-fill { height: 4px; background: #00C96B; border-radius: 2px; width: 100%; }
        .aif-metric-pct { font-size: 13px; font-weight: 700; color: #0d0d0d; }

        /* ── MIGRATION UI MOCKUP ── */
        .mock-shell {
          position: relative;
          background: #18181b;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 64px -12px rgba(0,0,0,0.6);
          display: flex;
        }
        .mock-sidebar {
          width: 96px;
          background: #111;
          border-right: 1px solid #222;
          display: flex;
          flex-direction: column;
          padding: 12px 0;
          gap: 4px;
          flex-shrink: 0;
        }
        .mock-logo {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 12px 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 9px; font-weight: 700; color: #00C96B;
          border-bottom: 1px solid #222; margin-bottom: 8px;
        }
        .mock-logo-dot {
          width: 18px; height: 18px; border-radius: 5px;
          background: #00C96B; display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #000; font-weight: 900; flex-shrink: 0;
        }
        .mock-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 8px 4px; border-radius: 8px; margin: 0 6px;
          font-size: 7px; color: #555; cursor: pointer;
        }
        .mock-nav-item.active { background: rgba(0,201,107,0.1); color: #00C96B; }
        .mock-nav-icon { font-size: 13px; }
        .mock-avatar {
          margin-top: auto; display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 8px 4px; font-size: 7px; color: #444;
        }
        .mock-avatar-dot {
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #fff; font-weight: 700;
        }
        .mock-main {
          flex: 1;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .mock-topbar {
          background: #fff;
          border-bottom: 1px solid #e8edf2;
          padding: 10px 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .mock-search {
          flex: 1; height: 26px; background: #f1f5f9;
          border-radius: 6px; border: 1px solid #e2e8f0;
          display: flex; align-items: center; padding: 0 8px; gap: 5px;
        }
        .mock-search-icon { font-size: 9px; color: #94a3b8; }
        .mock-search-text { font-size: 9px; color: #94a3b8; }
        .mock-topbar-right { display: flex; align-items: center; gap: 6px; }
        .mock-notif {
          width: 22px; height: 22px; background: #f1f5f9;
          border-radius: 6px; display: flex; align-items: center; justify-content: center;
          font-size: 10px;
        }
        .mock-user-chip {
          display: flex; align-items: center; gap: 5px;
          background: #f1f5f9; border-radius: 6px; padding: 3px 7px;
        }
        .mock-user-avatar {
          width: 16px; height: 16px; border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-size: 7px; color: #fff; font-weight: 700;
        }
        .mock-user-name { font-size: 8px; color: #374151; font-weight: 600; }
        .mock-user-role { font-size: 7px; color: #94a3b8; }
        .mock-page { padding: 16px; display: flex; flex-direction: column; gap: 14px; flex: 1; }
        .mock-page-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700; color: #0f172a;
        }
        .mock-page-sub { font-size: 9px; color: #94a3b8; margin-top: 2px; }
        .mock-stepper { display: flex; align-items: flex-start; gap: 0; }
        .mock-step { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; position: relative; }
        .mock-step:not(:last-child)::after {
          content: ''; position: absolute;
          top: 9px; left: 50%; width: 100%;
          height: 1px; background: #e2e8f0; z-index: 0;
        }
        .mock-step-circle {
          width: 18px; height: 18px; border-radius: 50%;
          background: #e2e8f0; display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #94a3b8; font-weight: 700; z-index: 1;
          position: relative;
        }
        .mock-step-circle.active { background: #6366f1; color: #fff; }
        .mock-step-label { font-size: 8px; color: #94a3b8; text-align: center; }
        .mock-step-label.active { color: #6366f1; font-weight: 600; }
        .mock-form-card {
          background: #fff; border-radius: 12px;
          border: 1px solid #e8edf2;
          padding: 14px; display: flex; flex-direction: column; gap: 10px;
        }
        .mock-form-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 700; color: #0f172a; }
        .mock-form-sub { font-size: 8px; color: #94a3b8; }
        .mock-field { display: flex; flex-direction: column; gap: 3px; }
        .mock-field-label { font-size: 8px; color: #374151; font-weight: 600; }
        .mock-field-input {
          height: 22px; background: #f8fafc;
          border: 1px solid #e2e8f0; border-radius: 5px;
          display: flex; align-items: center; padding: 0 8px;
          font-size: 8px; color: #94a3b8;
        }
        .mock-btn {
          height: 26px; background: #6366f1; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; gap: 5px;
          font-size: 9px; font-weight: 600; color: #fff;
          width: fit-content; padding: 0 14px; align-self: flex-start;
        }

        /* AI Bubble */
        .mock-ai-bubble {
          position: absolute;
          bottom: -20px;
          left: -40px;
          background: #EFF5EF;
          border-radius: 28px;
          padding: 22px 26px;
          max-width: 300px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 10;
        }
        .mock-ai-label {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 9px; font-weight: 700; color: #1a3a2a; letter-spacing: 1px;
          text-transform: uppercase;
        }
        .mock-ai-dot { width: 7px; height: 7px; border-radius: 50%; background: #00C96B; flex-shrink: 0; }
        .mock-ai-text { font-size: 13px; color: #2d5a3d; line-height: 1.65; font-style: italic; }

        /* ── CONFLICT PREDICTOR CARDS — exact Figma specs ── */
        .aif-predict-card {
          background: #EFF5EF;
          border-radius: 48px;
          border: 1px solid rgba(170,180,173,0.1);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 350.33px;
          height: 162px;
        }
        .aif-predict-icon-wrap {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .aif-predict-title { font-size: 13px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; }
        .aif-predict-sub { font-size: 11px; color: #64748b; margin-top: 4px; line-height: 1.5; }

        /* ── BOTTOM CARDS ── */
        .aif-bottom { width: 100%; max-width: 1100px; margin-top: 100px; }
        .aif-bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .aif-card {
          background: #0f1a2e; border-radius: 28px; padding: 22px 24px 24px;
          display: flex; flex-direction: column; gap: 10px;
          border: 1px solid rgba(255,255,255,0.05);
          min-height: 260px;
          box-shadow: 0 4px 6px -4px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1);
        }
        .aif-card-icon-wrap {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(0,201,107,0.15);
          display: flex; align-items: center; justify-content: center;
        }
        .aif-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px; font-weight: 700; color: #00C96B;
        }
        .aif-card-desc { color: #777; font-size: 12.5px; line-height: 1.6; }
        .aif-card-tags { display: flex; gap: 7px; flex-wrap: wrap; margin-top: auto; }
        .aif-card-tag {
          background: rgba(0,201,107,0.12); color: #00C96B;
          border-radius: 9999px; padding: 3px 11px;
          font-size: 10.5px; font-weight: 600;
          border: 1px solid rgba(0,201,107,0.2);
        }

        /* Waveform */
        .aif-waveform {
          flex: 1; border-radius: 10px; overflow: hidden;
          background: #0a0a0a; min-height: 70px;
          display: flex; align-items: flex-end; padding: 10px 6px; gap: 2px;
        }
        .aif-wave-bar { flex: 1; border-radius: 2px 2px 0 0; background: linear-gradient(to top, #ef4444, #f97316); }

        @media (max-width: 768px) {
          .aif-row { grid-template-columns: 1fr; }
          .aif-row.reverse { direction: ltr; }
          .aif-bottom-grid { grid-template-columns: 1fr; }
          .aif-predict-card { width: 100%; height: auto; }
          .mock-ai-bubble { max-width: 180px; }
        }
      `}</style>

      {/* Header */}
      <div className="aif-header">
        <h2 className="aif-title">
          Every operation is enhanced by{" "}
          <span className="aif-title-accent">artificial intelligence.</span>
        </h2>
        <p className="aif-subtitle">
          From predicting conflicts before they happen to recovering the exact right backup when things go wrong.
        </p>
      </div>

      <div className="aif-rows">

        {/* ── Row 1: AI Migration Assistant ── */}
        <div className="aif-row">
          <div className="aif-text">
            <div style={{
              width: 64, height: 64, borderRadius: 16, background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", flexShrink: 0,
            }}>
              <img src="/i5.svg" alt="" style={{ width: 36, height: 36 }} />
            </div>
            <div className="aif-feat-title" style={{ color: "#00C96B" }}>AI Migration Assistant</div>
            <div className="aif-feat-desc">
              Conversational AI that walks you through migration step by step, in plain English, without ever leaving WordPress.
            </div>
            <div className="aif-bullets">
              {["Automated Schema Mapping", "Legacy Code Transpilation"].map((b) => (
                <div key={b} className="aif-bullet">
                  <div className="aif-bullet-dot" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coded Migration UI Mockup */}
          <div style={{ position: "relative", paddingBottom: 20 }}>
            <div className="mock-shell">
              {/* Sidebar */}
              <div className="mock-sidebar">
                <div className="mock-logo">
                  <div className="mock-logo-dot">M</div>
                  <span>MigrateAI</span>
                </div>
                {[
                  { icon: "⊞", label: "Dashboard" },
                  { icon: "🗄", label: "Backups" },
                  { icon: "⇄", label: "Migration", active: true },
                  { icon: "↩", label: "Restore" },
                  { icon: "🕐", label: "Schedule" },
                  { icon: "📋", label: "Reports" },
                  { icon: "✦", label: "AI Asst." },
                  { icon: "⚙", label: "Settings" },
                ].map((item) => (
                  <div key={item.label} className={`mock-nav-item${item.active ? " active" : ""}`}>
                    <span className="mock-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
                <div className="mock-avatar">
                  <div className="mock-avatar-dot">A</div>
                  <span>Admin</span>
                </div>
              </div>

              {/* Main content */}
              <div className="mock-main">
                <div className="mock-topbar">
                  <div className="mock-search">
                    <span className="mock-search-icon">🔍</span>
                    <span className="mock-search-text">Search anything...</span>
                  </div>
                  <div className="mock-topbar-right">
                    <div className="mock-notif">🔔</div>
                    <div className="mock-user-chip">
                      <div className="mock-user-avatar">A</div>
                      <div>
                        <div className="mock-user-name">Admin</div>
                        <div className="mock-user-role">Starter Pro</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mock-page">
                  <div>
                    <div className="mock-page-title">Migration</div>
                    <div className="mock-page-sub">Move your WordPress site to a new destination safely and intelligently.</div>
                  </div>

                  {/* Stepper */}
                  <div className="mock-stepper">
                    {[
                      { n: "1", label: "Destination", active: true },
                      { n: "2", label: "Conflict Check" },
                      { n: "3", label: "Review" },
                      { n: "4", label: "Progress" },
                    ].map((s) => (
                      <div key={s.n} className="mock-step">
                        <div className={`mock-step-circle${s.active ? " active" : ""}`}>{s.n}</div>
                        <span className={`mock-step-label${s.active ? " active" : ""}`}>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <div className="mock-form-card">
                    <div>
                      <div className="mock-form-title">Destination Details</div>
                      <div className="mock-form-sub">Enter the target site credentials to begin migration analysis.</div>
                    </div>
                    {[
                      { label: "Site URL", placeholder: "https://destination-site.com" },
                      { label: "Admin Username", placeholder: "username" },
                      { label: "Admin Password", placeholder: "Password" },
                    ].map((f) => (
                      <div key={f.label} className="mock-field">
                        <span className="mock-field-label">{f.label}</span>
                        <div className="mock-field-input">{f.placeholder}</div>
                      </div>
                    ))}
                    <div className="mock-btn">
                      Run Conflict Check &nbsp;›
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Bubble */}
            <div className="mock-ai-bubble">
              <div className="mock-ai-label">
                <div className="mock-ai-dot" />
                MIGRATEAI ASSISTANT
              </div>
              <div className="mock-ai-text">
                "I've analyzed your staging environment. The database collation matches the destination. Shall we proceed with the transfer or schedule it for late tonight during low traffic?"
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: Smart Backup Engine ── */}
        <div className="aif-row reverse">
          <div className="aif-text">
            <div style={{
              width: 64, height: 64, borderRadius: 16, background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", flexShrink: 0,
            }}>
              <img src="/icon1.svg" alt="" style={{ width: 36, height: 36 }} />
            </div>
            <div className="aif-feat-title" style={{ color: "#00C96B" }}>Smart Backup Engine</div>
            <div className="aif-feat-desc">
              Incremental AI that detects what actually changed and backs up only that. 10× faster. Up to 90% smaller files.
            </div>
            <div className="aif-metric-bar-wrap">
              <span className="aif-metric-label">Resilience Metric</span>
              <div className="aif-metric-track">
                <div className="aif-metric-fill" />
              </div>
              <span className="aif-metric-pct">100%</span>
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: 20, overflow: "visible" }}>
            <img src="/b2.svg" alt="Smart Backup Engine visual" style={{ width: "100%", height: "auto", display: "block", borderRadius: 20 }} />
            {/* Floating Callout — 180×98, r:32, shadow x:0 y:8 blur:10 spread:-6 + x:0 y:20 blur:25 spread:-5 both #000 10% */}
            <div style={{
              position: "absolute",
              top: "36%",
              right: "-16px",
              width: 180,
              height: 98,
              borderRadius: 32,
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 8px 10px -6px rgba(0,0,0,0.10), 0 20px 25px -5px rgba(0,0,0,0.10)",
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              zIndex: 10,
            }}>
              <div style={{
                fontSize: 8, fontWeight: 700, color: "#00C96B",
                letterSpacing: "0.8px", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                STATE SNAPSHOT
              </div>
              <div style={{
                fontSize: 11, color: "#334155", lineHeight: 1.55,
                fontFamily: "Manrope, sans-serif",
              }}>
                Capturing active database transactions at T-0ms.
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 3: Conflict Predictor ── */}
        <div className="aif-row">
          <div className="aif-text">
            <div style={{
              width: 64, height: 64, borderRadius: 16, background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", flexShrink: 0,
            }}>
              <img src="/icon2.svg" alt="" style={{ width: 36, height: 36 }} />
            </div>
            <div className="aif-feat-title" style={{ color: "#00C96B" }}>Conflict Predictor</div>
            <div className="aif-feat-desc">
              Scans your destination environment and predicts every compatibility issue before migration begins.
            </div>
            <div className="aif-stats">
              <div>
                <div className="aif-stat-value">0.05ms</div>
                <div className="aif-stat-label">Inference Time</div>
              </div>
              <div>
                <div className="aif-stat-value">94%</div>
                <div className="aif-stat-label">Pre-emption Accuracy</div>
              </div>
            </div>
          </div>

          {/* Conflict Predictor container — 544×250, radial gradient, border #2D3748 */}
          <div style={{
            width: "100%",
            maxWidth: 544,
            height: 250,
            borderRadius: 28,
            border: "1px solid #2D3748",
            opacity: 1,
            background: "radial-gradient(ellipse at center, #AAB4AD 0%, rgba(170,180,173,0) 70%)",
            backgroundColor: "#0d1117",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            padding: "20px 24px",
          }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                ),
                iconBg: "rgba(245,158,11,0.12)",
                title: "Predicted Blockage",
                sub: "Cluster node B-12 capacity overflow in 12h",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 014-4h12"/>
                  </svg>
                ),
                iconBg: "rgba(0,201,107,0.12)",
                title: "Auto-Redirection",
                sub: "Sharding traffic to cluster node C-04",
              },
            ].map((card, idx) => (
              <div key={card.title} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "100%",
                  height: 80,
                  borderRadius: 32,
                  background: "#EFF5EF",
                  padding: "0 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: card.iconBg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.title}</div>
                    <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, fontFamily: "Manrope, sans-serif" }}>{card.sub}</div>
                  </div>
                </div>
                {idx === 0 && (
                  <div style={{
                    width: 40, height: 6, borderRadius: 9999,
                    background: "#2D3748", margin: "0",
                    flexShrink: 0, zIndex: 1,
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 4: AI Restore Advisor ── */}
        <div className="aif-row reverse">
          <div className="aif-text">
          
            <div className="aif-feat-title" style={{ color: "#00C96B" }}>AI Restore Advisor</div>
            <div className="aif-feat-desc">
              Diagnoses exactly what broke and recommends the precise backup and restore scope to fix it.
            </div>
          </div>
          <div style={{
            background: "#1F2937", borderRadius: 48,
            border: "1px solid #2D3748", padding: 40,
            display: "flex", flexDirection: "column", gap: 16,
            backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", width: "100%",
          }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 13, color: "#00C96B", marginBottom: 8 }}>
              $ migrate-ai analyze --restore-point=last
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { tag: "Success", tagColor: "#00C96B", text: "Optimized path identified via West-2 region." },
                { tag: "Savings", tagColor: "#f59e0b", text: "14% egress cost reduction predicted." },
                { tag: "Safety",  tagColor: "#6366f1", text: "Integrity hash verified for 2.4TB payload." },
              ].map((line) => (
                <div key={line.tag} style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#94a3b8", display: "flex", gap: 6 }}>
                  <span style={{ color: line.tagColor, fontWeight: 700 }}>[{line.tag}]</span>
                  <span>{line.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom 4-card grid ── */}
      <div className="aif-bottom">
        <div className="aif-bottom-grid">

          {/* Anomaly Detector */}
          <div className="aif-card">
            <div className="aif-card-icon-wrap">
              <img src="/i1.svg" alt="" style={{ width: 17, height: 17 }} />
            </div>
            <div className="aif-card-title">Anomaly Detector</div>
            <div className="aif-card-desc">
              Monitors every backup for corruption, size deviations, missing tables, and malware patterns.
            </div>
            <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", minHeight: 70 }}>
              <img src="/img1.svg" alt="Anomaly waveform" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Smart Scheduler */}
          <div className="aif-card" style={{ border: "1px solid rgba(0,201,107,0.3)" }}>
            <div className="aif-card-icon-wrap">
              <img src="/i2.svg" alt="" style={{ width: 17, height: 17 }} />
            </div>
            <div className="aif-card-title">Smart Scheduler</div>
            <div className="aif-card-desc">
              Optimizes migration windows based on global traffic patterns and low-cost electricity hours. Learns your traffic patterns and automatically schedules backups at your site's quietest hours.
            </div>
            <div className="aif-card-tags">
              <span className="aif-card-tag">Off-Peak</span>
              <span className="aif-card-tag">Efficiency Max</span>
            </div>
          </div>

          {/* AI Report Generator */}
          <div className="aif-card">
            <div className="aif-card-icon-wrap">
              <img src="/i3.svg" alt="" style={{ width: 17, height: 17 }} />
            </div>
            <div className="aif-card-title">AI Report Generator</div>
            <div className="aif-card-desc">
              Creates professional, client-ready PDF migration reports automatically after every operation.
            </div>
            <div style={{ marginTop: "auto" }}>
              <div style={{ height: 3, background: "#00C96B", borderRadius: 2, width: "70%", marginBottom: 5 }} />
              <div style={{ fontSize: 9.5, color: "#475569", fontFamily: "Manrope, sans-serif" }}>Drafting ROI Analysis...</div>
            </div>
          </div>

          {/* NLP Command Parser */}
          <div className="aif-card">
            <div className="aif-card-icon-wrap">
              <img src="/i4.svg" alt="" style={{ width: 17, height: 17 }} />
            </div>
            <div className="aif-card-title">NLP Command Parser</div>
            <div className="aif-card-desc">
              Type "backup my site before updating WooCommerce" and it executes. No menus needed.
            </div>
            <div style={{
              background: "#EFF5EF", border: "1px solid rgba(0,109,74,0.1)",
              borderRadius: 9999, padding: "9px 16px",
              fontSize: 11, color: "#334155",
              fontFamily: "Manrope, sans-serif", marginTop: "auto",
            }}>
              "Move all staging buckets to AWS Tokyo by 3AM."
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}