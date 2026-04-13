import { useEffect } from "react";

const testimonials = [
  {
    quote: (
      <>
        "MigrateAI saved our WooCommerce store during a critical host migration. The{" "}
        <span>AI Conflict Predictor</span> caught 3 issues we never would have found
        manually. Zero downtime, zero data loss. The report it generated for our client
        was absolutely professional."
      </>
    ),
    name: "Rahul Sharma",
    role: "eCommerce Developer, Delhi",
    initials: "RS",
  },
  {
    quote: (
      <>
        "As a freelance developer managing 40+ client sites, MigrateAI's agency plan is a
        game changer. The <span>white-label migration reports</span> impress clients every
        single time. Worth every rupee and then some."
      </>
    ),
    name: "Priya Nair",
    role: "WordPress Freelancer, Bangalore",
    initials: "PN",
  },
  {
    quote: (
      <>
        "The <span>AI Restore Advisor</span> literally saved our business. When our
        checkout broke after a WooCommerce update, it diagnosed the exact database tables
        that were corrupted and restored only those in 45 seconds. Absolutely incredible."
      </>
    ),
    name: "Arjun Mehta",
    role: "CTO & Startup Founder, Mumbai",
    initials: "AM",
  },
  {
    quote: (
      <>
        "We've tried every major migration plugin. MigrateAI is in a different league. The{" "}
        <span>Smart Backup Engine</span> cut our backup storage costs by 80%. The AI
        assistant answers questions that used to require a developer."
      </>
    ),
    name: "Meera Krishnan",
    role: "WordPress Agency Owner, Chennai",
    initials: "MK",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const cards = document.querySelectorAll(".t-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
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
      gap: 52,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerFade {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 40px; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.04; }
          50%       { opacity: 0.12; }
        }

        .t-header-anim { animation: headerFade 0.7s ease both; }
        .t-line-anim   { animation: lineGrow 0.6s ease 0.4s both; }

        .t-card {
          background: #111827;
          border: 1px solid #1f2937;
          border-radius: 20px;
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          opacity: 0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .t-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(0,201,107,0.05) 0%, transparent 65%);
          animation: glowPulse 3s ease-in-out infinite;
          pointer-events: none;
        }
        .t-card:hover {
          border-color: rgba(0,201,107,0.25);
          box-shadow: 0 0 40px rgba(0,201,107,0.06);
        }
        .t-card.visible { animation: fadeUp 0.7s ease forwards; }
        .t-card:nth-child(1).visible { animation-delay: 0.05s; }
        .t-card:nth-child(2).visible { animation-delay: 0.15s; }
        .t-card:nth-child(3).visible { animation-delay: 0.25s; }
        .t-card:nth-child(4).visible { animation-delay: 0.35s; }

        .t-quote { font-size: 14px; color: #9ca3af; line-height: 1.78; font-style: italic; flex: 1; }
        .t-quote span { color: #d1d5db; font-style: normal; font-weight: 600; }

        .t-author-divider { border-top: 1px solid #1f2937; padding-top: 16px; display: flex; align-items: center; gap: 12px; }

        @media (max-width: 640px) {
          .t-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div className="t-header-anim" style={{ textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-1px",
          lineHeight: 1.2,
          margin: 0,
        }}>
          "Testimonials"
        </h2>
        <div className="t-line-anim" style={{
          height: 3,
          background: "#00C96B",
          borderRadius: 2,
          margin: "14px auto 0",
        }} />
      </div>

      {/* Grid */}
      <div className="t-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 20,
        width: "100%",
        maxWidth: 960,
      }}>
        {testimonials.map(({ quote, name, role, initials }) => (
          <div key={name} className="t-card">
            {/* Stars */}
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#00C96B", fontSize: 14 }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="t-quote">{quote}</p>

            {/* Author */}
            <div className="t-author-divider">
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#1a2235",
                border: "1.5px solid #374151",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#00C96B",
                flexShrink: 0,
              }}>
                {initials}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.3,
                }}>
                  {name}
                </div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>
                  {role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}