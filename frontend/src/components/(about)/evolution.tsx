export default function EvolutionTimeline() {
  const events = [
    { side: "right", date: "Q3 2021", title: "The Failed Migration", desc: "Dilip loses his first major site, sparking the idea for MigrateAI. A critical client migration failed, resulting in 48 hours of downtime." },
    { side: "left", date: "Jan 2023", title: "Alpha Launch", desc: "Closed testing with 100 enterprise partners begins. After two years of intensive R&D, we integrated predictive AI into server-side migrations." },
    { side: "right", date: "Oct 2024", title: "Global Scale", desc: "Reached 2 million migrations across 140 countries. Our mission to make website migrations entirely foolproof becomes a global reality." },
    { side: "left", date: "Apr 2026", title: "v5.0 Release", desc: "Full autonomous migration protocol rollout planned. Moving your digital home should be as exciting as moving into a physical one." },
  ];

  return (
    <section style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          from { transform: scaleY(0); transform-origin: top; }
          to { transform: scaleY(1); transform-origin: top; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateX(-50%) scale(0.4); }
          to { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        .evo-vline { position:absolute; left:50%; top:0; bottom:0; width:2px; background:#00C96B; transform:translateX(-50%); animation: drawLine 1.2s ease forwards; }
        .evo-card { background:#111720; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px 20px; transition: border-color 0.3s, transform 0.3s; }
        .evo-card:hover { border-color: rgba(0,201,107,0.35); transform: translateY(-3px); }
        .evo-node { position:absolute; left:50%; transform:translateX(-50%); width:28px; height:28px; border-radius:50%; background:#051a0e; border:2px solid #00C96B; display:flex; align-items:center; justify-content:center; z-index:2; }
        .evo-row-0 { animation: fadeUp 0.6s 0.2s ease both; }
        .evo-row-1 { animation: fadeUp 0.6s 0.4s ease both; }
        .evo-row-2 { animation: fadeUp 0.6s 0.6s ease both; }
        .evo-row-3 { animation: fadeUp 0.6s 0.8s ease both; }
        .evo-node-0 { animation: popIn 0.4s 0.3s ease both; }
        .evo-node-1 { animation: popIn 0.4s 0.5s ease both; }
        .evo-node-2 { animation: popIn 0.4s 0.7s ease both; }
        .evo-node-3 { animation: popIn 0.4s 0.9s ease both; }
      `}</style>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "70px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#fff", margin: "0 0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Evolution</h2>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>From a single failure to a global infrastructure standard.</p>
        </div>
        <div style={{ position: "relative" }}>
          <div className="evo-vline" />
          {events.map((ev, i) => (
            <div key={i} className={`evo-row-${i}`} style={{ display: "flex", alignItems: "center", position: "relative", marginBottom: i === events.length - 1 ? 0 : 56 }}>
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
              <div className={`evo-node evo-node-${i}`}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#00C96B" }} />
              </div>
              <div style={{ width: 28, flexShrink: 0 }} />
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
      </div>
    </section>
  );
}