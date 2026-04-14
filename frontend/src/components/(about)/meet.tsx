export default function MeetThePioneers() {
  const team = [
    { name: "Dilip Kumar",  role: "CEO & Founder",    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=380&fit=crop&crop=face", featured: false },
    { name: "Ananya Reddy", role: "CTO",               img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=380&fit=crop&crop=face", featured: false },
    { name: "Vikram Singh", role: "Product Strategy",  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=380&fit=crop&crop=face", featured: true  },
    { name: "Sneha Patel",  role: "Customer Success",  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=380&fit=crop&crop=face", featured: false },
    { name: "Ravi Kumar",   role: "AI Engineer",       img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=380&fit=crop&crop=face", featured: false },
  ];

  return (
    <section style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pioneer-title { animation: fadeDown 0.6s ease both; }
        .pioneer-0 { animation: fadeUp 0.6s 0.1s ease both; }
        .pioneer-1 { animation: fadeUp 0.6s 0.2s ease both; }
        .pioneer-2 { animation: fadeUp 0.6s 0.3s ease both; }
        .pioneer-3 { animation: fadeUp 0.6s 0.4s ease both; }
        .pioneer-4 { animation: fadeUp 0.6s 0.5s ease both; }

        .pioneer-card { transition: transform 0.3s ease; }
        .pioneer-card:hover { transform: translateY(-8px); }
        .pioneer-card:hover img { transform: scale(1.05); }
        .pioneer-card img { transition: transform 0.4s ease; }

        /* Desktop default — untouched */
        .pioneer-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 72px 48px;
        }

        .pioneer-grid {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 16px;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .pioneer-inner {
            padding: 40px 20px;
          }

          .pioneer-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
            justify-items: center;
            gap: 20px;
          }

          /* Featured card spans full width and stays centered */
          .pioneer-grid .pioneer-featured {
            grid-column: 1 / -1;
          }

          /* Normalize card sizes on mobile */
          .pioneer-grid .pioneer-img-wrap {
            width: 140px !important;
            height: 175px !important;
          }
        }
      `}</style>

      <div className="pioneer-inner">
        <h2
          className="pioneer-title"
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 48px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Meet the Pioneers
        </h2>

        <div className="pioneer-grid">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`pioneer-${i} pioneer-card${member.featured ? " pioneer-featured" : ""}`}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
            >
              <div
                className="pioneer-img-wrap"
                style={{
                  width: member.featured ? 160 : 130,
                  height: member.featured ? 200 : 165,
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  border: member.featured ? "1.5px solid rgba(0,201,107,0.4)" : "1.5px solid rgba(255,255,255,0.08)",
                  boxShadow: member.featured ? "0 0 32px rgba(0,201,107,0.15)" : "none",
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 3px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {member.name}
                </p>
                <p style={{ fontSize: 11.5, color: member.featured ? "#00C96B" : "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}