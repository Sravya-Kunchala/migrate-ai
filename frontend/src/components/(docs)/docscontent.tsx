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

const quickCards = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "5-Minute Setup", desc: "Get up and running with basic backups in minutes." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: "AI Engine Guide", desc: "Configure Smart Migration and anomaly detection." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>, title: "Migration Walkthrough", desc: "Step-by-step instructions for site relocations." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: "API Reference", desc: "Full endpoints for custom integrations." },
];

export default function DocsPage() {
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
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#0d1117",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: "flex",
        justifyContent: "center",
      }}>
        <main style={{
          width: "100%",
          maxWidth: 960,
          padding: isMobile ? "24px 16px 40px" : "48px 64px",
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

        </main>
      </div>
    </>
  );
}