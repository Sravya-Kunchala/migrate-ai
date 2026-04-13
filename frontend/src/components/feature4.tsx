import { useEffect, useRef } from "react";

const destinations = [
  {
    icon: "/amazon.svg",
    name: "Amazon S3",
    desc: "Industry-standard object storage with tiered classes.",
  },
  {
    icon: "/googledrive.svg",
    name: "Google Drive",
    desc: "Seamless integration for personal and team drives.",
  },
  {
    icon: "/dropbox.svg",
    name: "Dropbox",
    desc: "Fast, reliable syncing for small to mid-sized sites.",
  },
  {
    icon: "/microsoft.svg",
    name: "OneDrive",
    desc: "Perfect for enterprises on the Microsoft stack.",
  },
  {
    icon: "/ftp.svg",
    name: "FTP / SFTP",
    desc: "Secure transfer to any private server or NAS.",
  },
];

export default function CloudDestinations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".cld-card");
    const header = sectionRef.current?.querySelectorAll<HTMLElement>(".cld-animate");

    header?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    cards?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header?.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            cards?.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, 200 + i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .cld-card:hover .cld-name { color: #00C96A; }
        .cld-scroll-wrap {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .cld-scroll-wrap::-webkit-scrollbar { display: none; }
        .cld-row {
          display: flex;
          gap: 16px;
          padding: 0 48px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          50%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
        .cld-card:hover .cld-icon-wrap {
          animation: pulse-ring 1.2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          background: "#0a0f0c",
          padding: "72px 0",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: 48, padding: "0 48px" }}>
          <h2
            className="cld-animate"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 12px",
              letterSpacing: "-0.5px",
              textAlign: "center",
            }}
          >
            Cloud Storage Destinations
          </h2>
          <p
            className="cld-animate"
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              textAlign: "center",
            }}
          >
            Store your data wherever you feel most secure.
          </p>
        </div>

        <div
          className="cld-animate"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0 48px 48px" }}
        />

        <div className="cld-scroll-wrap">
          <div className="cld-row">
            {destinations.map((d, i) => (
              <div
                key={i}
                className="cld-card"
                style={{
                  width: 180,
                  flexShrink: 0,
                  background: "#161f2e",
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "24px 16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "center",
                  cursor: "default",
                  transition: "border-color 0.2s, transform 0.2s, opacity 0.6s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,107,0.35)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                }}
              >
                <div
                  className="cld-icon-wrap"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background: "#1e2d3d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                >
                  <img src={d.icon} alt={d.name} style={{ width: 48, height: 48 }} />
                </div>

                <div
                  className="cld-name"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    transition: "color 0.2s ease",
                  }}
                >
                  {d.name}
                </div>

                <p
                  style={{
                    fontSize: 11.5,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="cld-animate"
          style={{ display: "flex", justifyContent: "center", marginTop: 40, padding: "0 48px" }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(0,201,107,0.35)",
              color: "#00C96B",
              borderRadius: 9999,
              padding: "10px 28px",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,201,107,0.08)";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            View All 30+ Destinations →
          </button>
        </div>
      </section>
    </>
  );
}