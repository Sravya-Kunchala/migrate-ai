export default function ValuesThatDriveUs() {
  const values = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        </svg>
      ),
      title: "Transparency first",
      desc: "We provide real-time logs and clear communication at every step.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Simplicity without compromise",
      desc: "Complex tech should feel effortless for the end user.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "AI as a tool",
      desc: "Augmenting human expertise, not replacing it, for better results.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      ),
      title: "Your data is yours",
      desc: "Privacy is a fundamental right. We never store client site data.",
    },
  ];

  return (
    <section style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes iconPop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .val-header { animation: fadeUp 0.6s ease both; }
        .val-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .val-card:hover { transform: translateY(-6px); border-color: rgba(0,201,107,0.35) !important; box-shadow: 0 12px 32px rgba(0,201,107,0.08); }
        .val-c0 { animation: fadeUp 0.6s 0.1s ease both; }
        .val-c1 { animation: fadeUp 0.6s 0.2s ease both; }
        .val-c2 { animation: fadeUp 0.6s 0.3s ease both; }
        .val-c3 { animation: fadeUp 0.6s 0.4s ease both; }
        .val-icon { animation: iconPop 0.5s 0.5s ease both; }
      `}</style>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px" }}>
        <div className="val-header" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Values that Drive Us</h2>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>The principles we live by, every single commit.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {values.map((v, i) => (
            <div key={i} className={`val-card val-c${i}`} style={{ background: "#111720", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="val-icon" style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,201,107,0.08)", border: "1px solid rgba(0,201,107,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {v.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{v.title}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}