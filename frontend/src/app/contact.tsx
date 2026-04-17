import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";

const channels = [
  {
    title: "General Inquiries",
    email: "hello@migrateai.io",
    desc: "Response within 24 hours on business days.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="#00C96B" strokeWidth="1.4"/>
        <path d="M2 5l6 4 6-4" stroke="#00C96B" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Technical Support",
    email: "support@migrateai.io",
    desc: "Free plan: 48 hours. Pro: 12 hours. Agency: 4 hours.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="2" width="10" height="12" rx="2" stroke="#00C96B" strokeWidth="1.4"/>
        <path d="M5 6h6M5 9h4" stroke="#00C96B" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Sales & Licensing",
    email: "sales@migrateai.io",
    desc: "For volume licensing, custom plans, and enterprise subscriptions.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 11l3-3 2 2 4-4 3 3" stroke="#00C96B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Partnerships & Integrations",
    email: "partners@migrateai.io",
    desc: "For agency/reseller programs, plugin integrations, and co-marketing.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3" stroke="#00C96B" strokeWidth="1.4"/>
        <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="#00C96B" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Press & Media",
    email: "press@migrateai.io",
    desc: "Press kit, screenshots, founder interview requests, product announcements.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4h8v6H4z" stroke="#00C96B" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M4 7h8M7 4v6" stroke="#00C96B" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Billing & Refunds",
    email: "billing@migrateai.io",
    desc: "For invoice requests, GST certificates, subscription changes, and refunds.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v2M8 12v2M2 8h2M12 8h2" stroke="#00C96B" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="3" stroke="#00C96B" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function AnimBox({
  children,
  animation = "fadeUp",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  animation?: "fadeUp" | "slideRight" | "slideLeft" | "fadeIn";
  delay?: number;
  style?: React.CSSProperties;
}) {
  const [ref, visible] = useInView();
  const anims = {
    fadeUp: "fadeUp .7s ease forwards",
    slideRight: "slideRight .7s ease forwards",
    slideLeft: "slideLeft .7s ease forwards",
    fadeIn: "fadeIn .8s ease forwards",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: visible ? anims[animation] : "none",
        animationDelay: visible ? `${delay}s` : "0s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn    { from { opacity:0 } to { opacity:1 } }
        @keyframes slideRight{ from { opacity:0; transform:translateX(-24px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideLeft { from { opacity:0; transform:translateX(24px) } to { opacity:1; transform:translateX(0) } }

        .field-input {
          width: 100%;
          background: #0d1117;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 13px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color .2s;
        }
        .field-input:focus { border-color: #00C96B; }
        .field-input::placeholder { color: rgba(255,255,255,0.2); }

        .ch-card {
          background: #111720;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 28px 24px;
          transition: border-color .2s, transform .2s;
          cursor: default;
          height: 100%;
        }
        .ch-card:hover {
          border-color: rgba(0,201,107,0.3);
          transform: translateY(-2px);
        }

        .send-btn {
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background .2s, transform .15s;
        }
        .send-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .send-btn:active { transform: scale(0.98); }

        @media (max-width: 768px) {
          .contact-hero-grid { grid-template-columns: 1fr !important; }
          .channels-grid     { grid-template-columns: 1fr 1fr !important; }
          .hq-grid           { grid-template-columns: 1fr !important; }
          .hq-image-side     { min-height: 220px !important; }
        }
        @media (max-width: 500px) {
          .channels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      <div style={{
        background: "#0a0d0f",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}>

        {/* ── Hero + Form ── */}
        <div
          className="contact-hero-grid"
          style={{
            padding: "80px 48px 70px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            maxWidth: 1100,
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          <AnimBox animation="slideRight" delay={0.1}>
            <div style={{
              display: "inline-block",
              fontSize: 10, fontWeight: 700,
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: "#00C96B",
              border: "1px solid rgba(0,201,107,0.35)",
              borderRadius: 999, padding: "4px 12px", marginBottom: 20,
            }}>
              REACH OUT
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              We'd Love to<br />Hear From You.
            </h1>
            <p style={{
              fontSize: 13.5,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 32,
            }}>
              Whether you have a sales question, need technical support, want to explore a partnership,
              or just want to say hello — we respond to every message within 24 hours.
            </p>

            {[
              {
                label: "Official Address",
                val: "Banjara Hills, Hyderabad, Telangana 500034, India",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="10" rx="2" stroke="#00C96B" strokeWidth="1.4"/>
                    <path d="M2 5l6 4 6-4" stroke="#00C96B" strokeWidth="1.4"/>
                  </svg>
                ),
              },
              {
                label: "Operating Hours",
                val: "Monday – Friday, 9:00 AM – 6:00 PM IST",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5.5" stroke="#00C96B" strokeWidth="1.4"/>
                    <path d="M8 5v3.5l2 1.5" stroke="#00C96B" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((info, i) => (
              <AnimBox key={i} animation="fadeUp" delay={0.3 + i * 0.12}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 18 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(0,201,107,0.1)",
                    border: "1px solid rgba(0,201,107,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: 11, fontWeight: 700,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: ".8px", textTransform: "uppercase", marginBottom: 3,
                    }}>{info.label}</div>
                    <div style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{info.val}</div>
                  </div>
                </div>
              </AnimBox>
            ))}
          </AnimBox>

          {/* Form */}
          <AnimBox animation="slideLeft" delay={0.2}>
            <div style={{
              background: "#111720",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              padding: "28px 26px",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email Address", type: "email", placeholder: "email@example.com" },
                ].map((f) => (
                  <div key={f.label}>
                    <div style={{
                      fontSize: 10, fontWeight: 700,
                      letterSpacing: ".8px", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)", marginBottom: 6,
                    }}>{f.label}</div>
                    <input className="field-input" type={f.type} placeholder={f.placeholder} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 14 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: ".8px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)", marginBottom: 6,
                }}>Subject</div>
                <select className="field-input" style={{ appearance: "none", cursor: "pointer" }}>
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>General</option>
                </select>
              </div>
              <div style={{ marginBottom: 14 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: ".8px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)", marginBottom: 6,
                }}>Message</div>
                <textarea
                  className="field-input"
                  placeholder="How can we help you?"
                  style={{ resize: "none", minHeight: 110 }}
                />
              </div>
              <button
                className="send-btn"
                onClick={handleSend}
                style={{ background: sent ? "#059953" : "#00C96B", color: "#0a0d0f" }}
              >
                {sent ? "✓ Message Sent!" : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#0a0d0f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </AnimBox>
        </div>

        {/* ── Direct Channels ── */}
        <div style={{
          background: "#0d1117",
          padding: "70px 48px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <AnimBox animation="fadeUp" delay={0.1}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff" }}>Direct Channels</h2>
              <p style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                marginTop: 8,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Specialized teams ready to assist you across various departments.
              </p>
            </div>
          </AnimBox>
          <div
            className="channels-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {channels.map((ch, i) => (
              <AnimBox key={i} animation="fadeUp" delay={0.15 + i * 0.08}>
                <div className="ch-card">
                  {/* Icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "rgba(0,201,107,0.1)",
                    border: "1px solid rgba(0,201,107,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}>
                    {ch.icon}
                  </div>
                  {/* Title */}
                  <div style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}>{ch.title}</div>
                  {/* Email */}
                  <div style={{
                    fontSize: 14,
                    color: "#00C96B",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}>{ch.email}</div>
                  {/* Desc */}
                  <div style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.65,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>{ch.desc}</div>
                </div>
              </AnimBox>
            ))}
          </div>
        </div>

        {/* ── Headquarters ── */}
        <div style={{ padding: "70px 48px 80px" }}>
          <AnimBox animation="fadeUp" delay={0.1}>
            <div
              className="hq-grid"
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                background: "#111720",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {/* Left — text */}
              <div style={{ padding: "52px 48px" }}>
                <h2 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 32, fontWeight: 800, color: "#fff",
                  margin: "0 0 32px",
                }}>
                  Our Headquarters
                </h2>
                {[
                  { label: "Company Name", val: "MigrateAI Technologies Private Limited" },
                  { label: "Address", val: "Banjara Hills, Hyderabad,\nTelangana 500034, India" },
                  { label: "Operating Hours", val: "Monday – Friday\n9:00 AM – 6:00 PM IST" },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: 26 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 700,
                      letterSpacing: "1.2px", textTransform: "uppercase",
                      color: "#00C96B", marginBottom: 7,
                    }}>{item.label}</div>
                    <div style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                      whiteSpace: "pre-line",
                    }}>{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Right — map/image side */}
              <div
                className="hq-image-side"
                style={{
                  position: "relative",
                  minHeight: 300,
                  overflow: "hidden",
                  backgroundImage: "url('/s8.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(17,23,32,0.75) 0%, transparent 55%)",
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,30,20,0.25)",
                }} />
              </div>

            </div>
          </AnimBox>
        </div>

      </div>

      <Footer />
    </>
  );
}