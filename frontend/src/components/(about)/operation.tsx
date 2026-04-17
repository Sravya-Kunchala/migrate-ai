import { useEffect, useRef } from "react";

export default function OperationalScale() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = Array.from(section.querySelectorAll<HTMLElement>("[data-counter]"));
    if (!counters.length) return;

    const animateCounter = (el: HTMLElement) => {
      const target = el.getAttribute("data-counter") ?? "";
      const match = target.match(/[\d.]+/);
      if (!match) return;

      const targetValue = Number.parseFloat(match[0]);
      const prefix = target.slice(0, match.index ?? 0);
      const suffix = target.slice((match.index ?? 0) + match[0].length);
      const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;

      let startTime = 0;
      const duration = 1400;

      const step = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * targetValue;
        el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        counters.forEach((el) => animateCounter(el));
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#0a0d0f", width: "100%" }}>
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

        .scale-label   { animation: fadeUp 0.5s ease both; }
        .scale-stat1   { animation: countUp 0.6s 0.1s ease both; }
        .scale-stat2   { animation: countUp 0.6s 0.25s ease both; }
        .scale-stat3   { animation: countUp 0.6s 0.4s ease both; }
        .scale-bottom  { animation: fadeUp 0.6s 0.55s ease both; }

        /* Desktop default — untouched */
        .scale-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 56px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .scale-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: end;
          margin-bottom: 32px;
        }

        .scale-bottom {
          display: flex;
          justify-content: center;
          gap: 64px;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .scale-inner {
            padding: 40px 20px;
          }

          .scale-stats {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 28px;
          }

          .scale-stats > div {
            text-align: center !important;
          }

          .scale-bottom {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
        }
      `}</style>

      <div className="scale-inner">
        <p
          className="scale-label"
          style={{
            textAlign: "center",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 36px",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Operational Scale
        </p>

        <div className="scale-stats">
          {[
            { value: "2.4M",   label: "SUCCESSFUL INSTALLS",     align: "left",   cls: "scale-stat1" },
            { value: "99.97%", label: "MIGRATION SUCCESS RATE",  align: "center", cls: "scale-stat2" },
            { value: "140+",   label: "COUNTRIES REACHED",       align: "right",  cls: "scale-stat3" },
          ].map((stat) => (
            <div key={stat.label} className={stat.cls} style={{ textAlign: stat.align as "left" | "center" | "right" }}>
              <div style={{ fontSize: stat.value === "99.97%" ? 52 : 44, fontWeight: 800, color: "#00C96B", lineHeight: 1, margin: "0 0 8px" }}>
                <span data-counter={stat.value}>{stat.value}</span>
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 24 }} />

        <div className="scale-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#00C96B" }} data-counter="18">18</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              Core Team Members
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#00C96B" }} data-counter="4.9">4.9</span>
            <span style={{ fontSize: 14, color: "#00C96B" }}>★</span>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              Stars Average
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
