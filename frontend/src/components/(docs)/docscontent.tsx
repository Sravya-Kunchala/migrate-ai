import { useEffect, useRef, useState } from "react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

const navSections = [
  {
    label: "Getting Started",
    items: [
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, label: "Introduction" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, label: "Quick Start Guide" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>, label: "Installation" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><line x1="5" y1="6" x2="5" y2="10"/><line x1="5" y1="14" x2="5" y2="18"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="19" y1="6" x2="19" y2="10"/><line x1="19" y1="14" x2="19" y2="18"/></svg>, label: "AI Engine Setup" },
    ],
  },
  {
    label: "Core Features",
    items: [
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>, label: "Full Site Backup" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M15 6l6 6-6 6"/><path d="M19 12H5"/><path d="M9 18l-6-6 6-6"/></svg>, label: "Site Migration" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/></svg>, label: "Restore & Rollback" },
    ],
  },
  {
    label: "AI Modules",
    items: [
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: "Migration Assistant" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, label: "Conflict Predictor" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: "NLP Commands" },
    ],
  },
  {
    label: "Developer",
    items: [
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, label: "WP-CLI Reference" },
      { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, label: "REST API" },
    ],
  },
];

const quickCards = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "5-Minute Setup", desc: "Get up and running with basic backups in minutes." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: "AI Engine Guide", desc: "Configure Smart Migration and anomaly detection." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>, title: "Migration Walkthrough", desc: "Step-by-step instructions for site relocations." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: "API Reference", desc: "Full endpoints for custom integrations." },
];

export default function DocsPage() {
  const [activeNav, setActiveNav] = useState("Introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d1117; }
        .doc-method-card {
          background: #161b22;
          border: 1px solid #21262d;
          border-radius: 16px;
          transition: border-color 0.2s;
        }
        .doc-method-card:hover { border-color: rgba(0,201,107,0.3); }
        .doc-quick-card {
          background: #161b22;
          border: 1px solid #21262d;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .doc-quick-card:hover {
          border-color: rgba(0,201,107,0.35);
          transform: translateY(-3px);
        }
        .doc-code {
          background: #0d1117;
          border-radius: 10px;
          padding: 18px 20px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #00C96B;
          margin-top: 16px;
          overflow-x: auto;
        }
        .doc-code .keyword { color: #79c0ff; }
        .doc-code .param   { color: #ffa657; }
        .doc-step-num {
          width: 32px; height: 32px; border-radius: 8px;
          background: #1c2a1e;
          border: 1px solid rgba(0,201,107,0.2);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700; color: #00C96B;
          flex-shrink: 0;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
        }
        .nav-item:hover { background: rgba(255,255,255,0.05); }
        .nav-item.active { background: rgba(0,201,107,0.12); }
      `}</style>

      {/* Mobile top navbar */}
      {isMobile && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 52,
          background: "#0d1117",
          borderBottom: "1px solid #21262d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          zIndex: 60,
        }}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #21262d",
              borderRadius: 8,
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            MigrateAI Docs
          </span>
          <div style={{ width: 36 }} />
        </div>
      )}

      {/* Backdrop */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            zIndex: 40,
          }}
        />
      )}

      <div style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0d1117",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        justifyContent: "center",
        paddingTop: isMobile ? 52 : 0,
      }}>
        <div style={{ display: "flex", width: "100%", maxWidth: 1200 }}>

          {/* Sidebar */}
          <aside style={{
            width: isMobile ? 260 : 240,
            flexShrink: 0,
            background: "#0d1117",
            borderRight: "1px solid #21262d",
            overflowY: "auto",
            ...(isMobile
              ? {
                  position: "fixed" as const,
                  top: 0,
                  left: sidebarOpen ? 0 : -280,
                  height: "100vh",
                  zIndex: 50,
                  transition: "left 0.3s ease",
                  padding: "56px 16px 32px",
                }
              : {
                  position: "sticky" as const,
                  top: 0,
                  height: "100vh",
                  padding: "32px 16px",
                }),
          }}>
            {/* Close button */}
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid #21262d",
                  borderRadius: 8,
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}

            {navSections.map((section) => (
              <div key={section.label} style={{ marginBottom: 28 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
                  padding: "0 12px", marginBottom: 8,
                }}>
                  {section.label}
                </div>
                {section.items.map((item) => {
                  const isActive = activeNav === item.label;
                  const itemColor = isActive ? "#00C96B" : "rgba(255,255,255,0.45)";
                  return (
                    <div
                      key={item.label}
                      className={`nav-item${isActive ? " active" : ""}`}
                      onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
                      style={{ color: itemColor }}
                    >
                      <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: itemColor }}>
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                  );
                })}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main style={{
            flex: 1,
            padding: isMobile ? "24px 16px 40px" : "48px 64px",
            display: "flex",
            justifyContent: "center",
          }}>
            <div style={{
              width: "100%",
              maxWidth: 860,
              display: "flex",
              flexDirection: "column",
              gap: 64,
            }}>

              {/* Quick-nav cards */}
              <AnimatedSection>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                  {quickCards.map((card, i) => (
                    <div key={i} className="doc-quick-card">
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: "rgba(0,201,107,0.1)",
                        border: "1px solid rgba(0,201,107,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {card.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{card.title}</div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{card.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Introduction */}
              <AnimatedSection delay={0.05}>
                <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 20, padding: isMobile ? "24px 20px" : "36px 32px" }}>
                  <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.5px" }}>
                    Introduction
                  </h2>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 20px" }}>
                    MigrateAI is the industry-leading solution for intelligent website management.
                    Designed for agencies, developers, and enterprise teams, it combines military-grade
                    backup redundancy with next-generation AI automation.
                  </p>
                  <div style={{
                    background: "rgba(0,201,107,0.06)", border: "1px solid rgba(0,201,107,0.2)",
                    borderLeft: "3px solid #00C96B", borderRadius: 10, padding: "14px 18px",
                    display: "flex", gap: 12, alignItems: "flex-start",
                  }}>
                    <div style={{ color: "#00C96B", marginTop: 1, flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#00C96B", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 4 }}>v5.0 Update</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                        New in v5.0: Enhanced NLP command support and direct cloud-to-cloud migration logic.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Installation */}
              <AnimatedSection delay={0.05}>
                <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#fff", margin: "0 0 24px", letterSpacing: "-0.5px" }}>
                  Installation
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Method 1: WordPress Dashboard", desc: "Upload the ZIP file through Plugins > Add New > Upload Plugin. Activate once completed.", code: false },
                    { title: "Method 2: FTP/SFTP", desc: "Extract the plugin folder and upload it to the `/wp-content/plugins/` directory of your server.", code: false },
                    { title: "Method 3: WP-CLI", desc: "Run the following command in your terminal to install and activate via the command line interface.", code: true },
                  ].map((m, i) => (
                    <div key={i} className="doc-method-card" style={{ padding: isMobile ? "18px 16px" : "24px 28px" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{m.title}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{m.desc}</div>
                      {m.code && (
                        <div className="doc-code">
                          <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                            ))}
                          </div>
                          <span className="keyword">wp</span>{" "}plugin install{" "}
                          <span className="param">migrate-ai</span>{" "}--activate
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Connecting the AI Engine */}
              <AnimatedSection delay={0.05}>
                <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 20, padding: isMobile ? "24px 20px" : "36px 32px" }}>
                  <h2 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: "#fff", margin: "0 0 28px", letterSpacing: "-0.3px" }}>
                    Connecting the AI Engine
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {[
                      { n: 1, title: "Obtain your API Key", desc: "Navigate to the Veridian Flux Dashboard and generate a new Secure AI Token." },
                      { n: 2, title: "Enter Key in Settings", desc: "Paste the token into MigrateAI > Settings > AI Configuration." },
                      { n: 3, title: "Verify Connection", desc: "Click 'Test Connection' to ensure the Smart Engine can communicate with your server." },
                    ].map((step) => (
                      <div key={step.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                        <div className="doc-step-num">{step.n}</div>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{step.title}</div>
                          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: 28, background: "rgba(0,201,107,0.05)",
                    border: "1px solid rgba(0,201,107,0.15)", borderLeft: "3px solid #00C96B",
                    borderRadius: 10, padding: "14px 18px",
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#00C96B", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>Cost Information</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                      AI operations are billed based on processing units. Basic migration prediction is included
                      in all Professional plans. Large-scale database optimizations may incur additional credits.
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Creating Your First Backup */}
              <AnimatedSection delay={0.05}>
                <div style={{
                  background: "#161b22", border: "1px solid #21262d", borderRadius: 20,
                  padding: isMobile ? "24px 20px" : "40px 36px",
                  textAlign: isMobile ? "left" : "center",
                }}>
                  <h2 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: "#fff", margin: "0 0 32px", letterSpacing: "-0.3px" }}>
                    Creating Your First Backup
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {[
                      "Navigate to the 'Backups' tab in your sidebar.",
                      "Click the 'Create New Backup' primary action button.",
                      "Select 'Full Migration Archive' for maximum compatibility.",
                      "Wait for the AI Anomaly Detector to verify file integrity.",
                      "Download the package or ship directly to your cloud storage.",
                    ].map((step, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 20,
                        padding: "18px 0", textAlign: "left",
                        borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}>
                        <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: "rgba(255,255,255,0.12)", minWidth: 36 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Running a Migration */}
              <AnimatedSection delay={0.05}>
                <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#fff", margin: "0 0 24px", letterSpacing: "-0.5px" }}>
                  Running a Migration
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                  <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 20, padding: isMobile ? "22px 18px" : "28px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>On your old site</span>
                    </div>
                    {["Generate a migration key from the 'Transfer' menu.", "Select specific assets or perform a full sweep.", "Enable 'Ghost Mode' if migrating during peak traffic."].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 14 : 0 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#00C96B", marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "#00C96B", borderRadius: 20, padding: isMobile ? "22px 18px" : "28px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#000" }}>On your new site</span>
                    </div>
                    {["Install a fresh WordPress instance and the MigrateAI plugin.", "Paste the migration key and authorize the secure tunnel.", "Review the AI Conflict Report before final deployment."].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 14 : 0 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(0,0,0,0.4)", marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}