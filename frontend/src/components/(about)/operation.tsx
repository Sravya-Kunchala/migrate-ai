export default function OperationalScale() {
  return (
    <section style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scale-label { animation: fadeUp 0.5s ease both; }
        .scale-stat1 { animation: countUp 0.6s 0.1s ease both; }
        .scale-stat2 { animation: countUp 0.6s 0.25s ease both; }
        .scale-stat3 { animation: countUp 0.6s 0.4s ease both; }
        .scale-bottom { animation: fadeUp 0.6s 0.55s ease both; }
      `}</style>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 56px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <p className="scale-label" style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.45)", margin: "0 0 36px", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
          Operational Scale
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "end", marginBottom: 32 }}>
          {[
            { value: "2.4M", label: "SUCCESSFUL INSTALLS", align: "left", cls: "scale-stat1" },
            { value: "99.97%", label: "MIGRATION SUCCESS RATE", align: "center", cls: "scale-stat2" },
            { value: "140+", label: "COUNTRIES REACHED", align: "right", cls: "scale-stat3" },
          ].map((stat) => (
            <div key={stat.label} className={stat.cls} style={{ textAlign: stat.align as "left" | "center" | "right" }}>
              <div style={{ fontSize: stat.value === "99.97%" ? 52 : 44, fontWeight: 800, color: "#00C96B", lineHeight: 1, margin: "0 0 8px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 24 }} />
        <div className="scale-bottom" style={{ display: "flex", justifyContent: "center", gap: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#00C96B" }}>18</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Core Team Members</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#00C96B" }}>4.9</span>
            <span style={{ fontSize: 14, color: "#00C96B" }}>★</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Stars Average</span>
          </div>
        </div>
      </div>
    </section>
  );
}