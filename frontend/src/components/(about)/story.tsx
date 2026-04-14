export default function OurStory() {
  return (
    <section style={{ background: "#0a0d0f", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 32px; }
        }

        .story-title { animation: fadeUp 0.6s ease forwards; }
        .story-bar   { animation: expandWidth 0.6s 0.3s ease forwards; width: 0; }
        .story-p1    { animation: fadeUp 0.6s 0.2s ease both; }
        .story-p2    { animation: fadeUp 0.6s 0.35s ease both; }
        .story-p3    { animation: fadeUp 0.6s 0.5s ease both; }

        /* Desktop default — side by side */
        .story-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 48px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: row;
          gap: 80px;
          align-items: flex-start;
        }

        .story-left {
          flex-shrink: 0;
          width: 160px;
        }

        .story-right {
          flex: 1;
        }

        /* Mobile — stacked */
        @media (max-width: 600px) {
          .story-inner {
            flex-direction: column;
            gap: 24px;
            padding: 40px 20px;
          }
          .story-left {
            width: 100%;
          }
        }
      `}</style>

      <div className="story-inner">
        {/* Left — label */}
        <div className="story-left">
          <h2 className="story-title" style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
            Our Story
          </h2>
          <div className="story-bar" style={{ height: 2, background: "#00C96B" }} />
        </div>

        {/* Right — content */}
        <div className="story-right">
          {[
            { cls: "story-p1", text: "In 2021, Dilip Kumar faced every developer's nightmare: a critical client site migration failed, resulting in 48 hours of downtime and permanent data loss for a growing e-commerce brand. The existing tools were too manual, and the risks were too high." },
            { cls: "story-p2", text: "Determined to fix the industry's broken process, Dilip assembled a team of specialists to integrate predictive AI into server-side migrations. Following two years of intensive R&D, MigrateAI launched in 2023." },
            { cls: "story-p3", text: "Our mission is simple yet ambitious: to make website migrations entirely foolproof. We believe moving your digital home should be as exciting as moving into a physical one, without the fear of the roof collapsing." },
          ].map(({ cls, text }, i) => (
            <p
              key={i}
              className={cls}
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                margin: "0 0 20px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}