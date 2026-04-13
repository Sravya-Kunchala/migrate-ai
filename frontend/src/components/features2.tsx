import React, { useEffect, useRef } from "react";

const modules = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    tag: "CONVERSATIONAL AI",
    title: "AI Migration Assistant",
    desc: `The AI Migration Assistant is an embedded conversational AI that lives directly inside your WordPress admin. Ask it to "Move my site to SiteGround" or "Fix the permission errors," and it executes the steps automatically.`,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    tag: "INCREMENTAL AI",
    title: "Smart Backup Engine",
    desc: "Traditional plugins copy your entire site on every backup. Our Smart Backup Engine analyzes only the bytes that changed since your last archive, reducing server load by 85% and storage costs by 90%.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    tag: "PREDICTIVE AI",
    title: "Conflict Predictor",
    desc: "72% of failed migrations are caused by issues that were detectable before migration started. Our AI scans your target server's PHP version, storage limits, and module availability to predict success before you even click migrate.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tag: "DIAGNOSTIC AI",
    title: "AI Restore Advisor",
    desc: "When your site breaks, you don't want to scroll through a list of backups guessing which one to restore from. The AI Restore Advisor correlates the exact moment of your site's failure with your backup history.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    tag: "MONITORING AI",
    title: "Anomaly Detector",
    desc: "Every backup you create is only useful if it actually contains valid, complete data. Our Anomaly Detector scans every archive for structural integrity and alerts you if a backup seems suspiciously small.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    tag: "ADAPTIVE AI",
    title: "Smart Scheduler",
    desc: "When should you run backups? Not at 3 AM if that's when your WooCommerce store processes bulk orders. The Smart Scheduler monitors your traffic patterns and runs backups during periods of lowest activity.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    tag: "GENERATIVE AI",
    title: "AI Report Generator",
    desc: "After every migration, MigrateAI generates a professional PDF report automatically. It details exactly what was moved, verifies database integrity, and highlights optimization opportunities for your client.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    tag: "NLP AI",
    title: "Natural Language Commands",
    desc: `Every screen in MigrateAI has a command bar. Type anything: "Run a full backup now," "Send the last log to my email," or "Restore the database only from Tuesday," and it's done.`,
  },
];

export default function AIModules() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = sectionRef.current?.querySelector<HTMLElement>(".ai-header");
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".ai-card");

    // Set initial hidden state
    if (header) {
      header.style.opacity = "0";
      header.style.transform = "translateY(24px)";
      header.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }

    cards?.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(32px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header first
            if (header) {
              setTimeout(() => {
                header.style.opacity = "1";
                header.style.transform = "translateY(0)";
              }, 0);
            }

            // Stagger cards
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, 150 + i * 80);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0d1117",
        padding: "80px 48px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400&display=swap');

        .ai-card {
          background: #161b22;
          border: 1px solid #21262d;
          border-radius: 16px;
          padding: 28px 24px;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, opacity 0.5s ease;
        }
        .ai-card:hover {
          border-color: #00C96B;
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 40px rgba(0,201,107,0.12);
        }

        .ai-card:hover .ai-icon-box {
          background: rgba(0,201,107,0.15);
          box-shadow: 0 0 0 1px rgba(0,201,107,0.3);
        }

        .ai-icon-box {
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .ai-grid { grid-template-columns: 1fr !important; }
          section { padding: 48px 20px !important; }
        }
      `}</style>

      {/* Header */}
      <div className="ai-header" style={{ textAlign: "center", marginBottom: 56 }}>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 40,
          fontWeight: 800,
          color: "#ffffff",
          margin: "0 0 14px",
          lineHeight: 1.2,
        }}>
          AI Modules — Deep Dive
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          color: "#8b949e",
          margin: 0,
        }}>
          Explore our intelligence-first architecture designed for maximum site reliability.
        </p>
      </div>

      {/* Grid */}
      <div className="ai-grid">
        {modules.map((mod) => (
          <div key={mod.title} className="ai-card">

            {/* Icon */}
            <div
              className="ai-icon-box"
              style={{
                width: 44,
                height: 44,
                background: "#1c2a1e",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {mod.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 8px",
              lineHeight: 1.35,
            }}>
              {mod.title}
            </h3>

            {/* Tag */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              color: "#00C96B",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}>
              {mod.tag}
            </p>

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "#8b949e",
              lineHeight: 1.7,
              margin: 0,
            }}>
              {mod.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}