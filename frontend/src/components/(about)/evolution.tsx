import { useEffect, useRef } from "react";

export default function EvolutionTimeline() {
  const events = [
    { side: "right", date: "Q3 2021", title: "The Failed Migration", desc: "Dilip loses his first major site, sparking the idea for MigrateAI. A critical client migration failed, resulting in 48 hours of downtime." },
    { side: "left",  date: "Jan 2023", title: "Alpha Launch",         desc: "Closed testing with 100 enterprise partners begins. After two years of intensive R&D, we integrated predictive AI into server-side migrations." },
    { side: "right", date: "Oct 2024", title: "Global Scale",         desc: "Reached 2 million migrations across 140 countries. Our mission to make website migrations entirely foolproof becomes a global reality." },
    { side: "left",  date: "Apr 2026", title: "v5.0 Release",         desc: "Full autonomous migration protocol rollout planned. Moving your digital home should be as exciting as moving into a physical one." },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef    = useRef<HTMLDivElement | null>(null);
  const rowRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // --- Line draw on section enter ---
    const lineObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineRef.current?.classList.add("evo-line-animate");
          lineObs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) lineObs.observe(sectionRef.current);

    // --- Cards animate in one by one as they enter viewport ---
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("evo-row-visible");
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    rowRefs.current.forEach((el) => el && cardObs.observe(el));

    return () => {
      lineObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        /* ── LINE ── */
        .evo-vline {
          position: absolute; left: 50%; top: 0; bottom: 0;
          width: 2px; background: #00C96B;
          transform: translateX(-50%) scaleY(0);
          transform-origin: top;
          transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .evo-line-animate {
          transform: translateX(-50%) scaleY(1) !important;
        }

        /* ── ROWS ── */
        .evo-row {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .evo-row-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* stagger delay via nth-child */
        .evo-row:nth-child(1) { transition-delay: 0.05s; }
        .evo-row:nth-child(2) { transition-delay: 0.15s; }
        .evo-row:nth-child(3) { transition-delay: 0.25s; }
        .evo-row:nth-child(4) { transition-delay: 0.35s; }

        /* ── NODE ── */
        .evo-node {
          position: absolute; left: 50%; transform: translateX(-50%);
          width: 28px; height: 28px; border-radius: 50%;
          background: #051a0e; border: 2px solid #00C96B;
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
          opacity: 0;
          scale: 0.3;
          transition: opacity 0.4s ease, scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .evo-row-visible .evo-node {
          opacity: 1 !important;
          scale: 1 !important;
        }

        /* ── CARD ── */
        .evo-card {
          background: #111720;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 18px 20px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .evo-card:hover {
          border-color: rgba(0,201,107,0.35);
          transform: translateY(-3px);
        }

        /* ── DESKTOP / MOBILE ── */
        .evo-desktop      { display: flex; }
        .evo-mobile-layout { display: none; }

        @media (max-width: 640px) {
          .evo-desktop       { display: none !important; }
          .evo-mobile-layout { display: block !important; }

          .evo-vline {
            left: 14px !important;
            transform: translateX(0) scaleY(0) !important;
            transform-origin: top !important;
          }
          .evo-line-animate {
            transform: translateX(0) scaleY(1) !important;
          }

          .evo-mobile-row {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            position: relative;
            padding-left: 44px;
          }
          .evo-mobile-node {
            position: absolute;
            left: 14px; top: 4px;
            transform: translateX(-50%);
            width: 24px; height: 24px; border-radius: 50%;
            background: #051a0e; border: 2px solid #00C96B;
            display: flex; align-items: center; justify-content: center;
            z-index: 2; flex-shrink: 0;
          }
          .evo-mobile-content { flex: 1; }
          .evo-mobile-date {
            font-size: 11px; font-weight: 700; color: #00C96B;
            font-family: 'Plus Jakarta Sans', sans-serif;
            margin-bottom: 6px; letter-spacing: 0.3px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "70px 24px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#fff", margin: "0 0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Our Evolution
          </h2>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
            From a single failure to a global infrastructure standard.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div className="evo-vline" ref={lineRef} />

          {/* ── DESKTOP ── */}
          <div>
            {events.map((ev, i) => (
              <div
                key={i}
                ref={(el) => { rowRefs.current[i] = el; }}
                className="evo-row evo-desktop"
                style={{
                  alignItems: "center",
                  position: "relative",
                  marginBottom: i === events.length - 1 ? 0 : 56,
                }}
              >
                {/* Left col */}
                <div style={{ width: "calc(50% - 14px)", paddingRight: 20 }}>
                  {ev.side === "left" ? (
                    <div className="evo-card">
                      <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ev.title}</h3>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{ev.desc}</p>
                    </div>
                  ) : (
                    <div style={{ textAlign: "right", fontSize: 13, fontWeight: 700, color: "#00C96B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ev.date}</div>
                  )}
                </div>

                {/* Node */}
                <div className="evo-node">
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#00C96B" }} />
                </div>

                <div style={{ width: 28, flexShrink: 0 }} />

                {/* Right col */}
                <div style={{ width: "calc(50% - 14px)", paddingLeft: 20 }}>
                  {ev.side === "right" ? (
                    <div className="evo-card">
                      <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ev.title}</h3>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{ev.desc}</p>
                    </div>
                  ) : (
                    <div style={{ textAlign: "left", fontSize: 13, fontWeight: 700, color: "#00C96B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ev.date}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── MOBILE ── */}
          <div className="evo-mobile-layout">
            {events.map((ev, i) => (
              <div
                key={i}
                ref={(el) => { if (!rowRefs.current[i]) rowRefs.current[i] = el; }}
                className="evo-row"
                style={{ marginBottom: i === events.length - 1 ? 0 : 36 }}
              >
                <div className="evo-mobile-row">
                  <div className="evo-mobile-node">
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00C96B" }} />
                  </div>
                  <div className="evo-mobile-content">
                    <div className="evo-mobile-date">{ev.date}</div>
                    <div className="evo-card">
                      <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ev.title}</h3>
                      <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{ev.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}