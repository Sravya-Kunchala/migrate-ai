import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Portable .wpress Format",
    description:
      "We use an open, non-proprietary archive format ensuring you can always access your data, even without our plugin.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "AES-256 Encryption",
    description:
      "Your backups are encrypted at rest using military-grade AES-256 standards, keeping sensitive user data safe.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Chunked Processing",
    description:
      "We process backups in small chunks to bypass shared hosting timeout limits and prevent memory exhaustion.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Smart Retention Policy",
    description:
      "Configure how many backups to keep. Automatically prune old archives to save space while keeping critical milestones.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
      </svg>
    ),
    title: "Resumable Operations",
    description:
      "Connection drop? No problem. MigrateAI resumes exactly where it left off without starting the entire process over.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: "Email & Webhook Notifications",
    description:
      "Get notified via Email, Slack, or custom webhooks the moment a migration finishes or a backup fails.",
  },
];

export default function CoreBackupFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        style={{
          background: "#0a0f0c",
         paddingTop: "72px",
paddingBottom: "72px",
paddingLeft: "54px",
paddingRight: "54px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 12px",
              letterSpacing: "-0.5px",
            }}
          >
            Core Backup Features
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
            }}
          >
            The rock-solid foundation for every data operation.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginBottom: 48,
          }}
        />

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px 48px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ display: "flex", flexDirection: "column", gap: 12, cursor: "default" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: "1px solid rgba(0,201,106,0.25)",
                  background: "rgba(0,109,74,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: hoveredIndex === index ? "#00C96A" : "#ffffff",
                  transition: "color 0.2s ease",
                }}
              >
                {feature.title}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}