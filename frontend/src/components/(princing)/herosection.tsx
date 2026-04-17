import { useState } from "react";

const freePlanIncludes = [
  "1 WordPress site",
  "512 MB maximum backup size",
  "Daily and weekly backup scheduling",
  "Local server storage only",
  "Basic AI Assistant (connect your own API key)",
  "3 Conflict Predictions per month",
  "Community forum support",
  "WordPress.org plugin listing",
];

const freePlanNotIncluded = [
  "Smart Backup Engine",
  "AI Restore Advisor",
  "and other premium features...",
];

const proPlanFeatures = [
  "5 WordPress sites",
  "Unlimited backup size",
  "All backup frequencies — hourly+",
  "All 10+ cloud storage destinations",
  "All 8 AI modules fully unlocked",
  "Unlimited Conflict Predictions",
  "AES-256 backup encryption",
  "Priority email support (12hr SLA)",
  "30-day money-back guarantee",
];

const agencyPlanFeatures = [
  "Unlimited WordPress sites",
  "White-label PDF migration reports",
  "Client management dashboard",
  "3 done-for-you migrations / year",
  "Custom AI system prompt config",
  "Dedicated support (4h SLA)",
  "Early access to new features",
  "Phone support",
];

function CheckIcon({ color = "#00C96A" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .pricing-btn {
          padding: 14px;
          border-radius: 9999px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          width: 100%;
          transition: opacity 0.2s;
        }
        .pricing-btn:hover { opacity: 0.88; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 1020px;
          align-items: stretch;
        }

        /* Each card is a flex column of equal height */
        .plan-card {
          border-radius: 20px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
        }

        /* The middle "body" of each card grows to fill available space */
        .plan-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 7px;
        }

        .section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .price-row {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          flex-wrap: nowrap;
        }
        .price-suffix {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-bottom: 6px;
        }
        .price-per-year {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          line-height: 1.3;
        }
        .price-per-month {
          font-size: 11px;
          color: rgba(255,255,255,0.28);
          white-space: nowrap;
          line-height: 1.3;
        }

        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; }
        }
      `}</style>

      <section style={{
        background: "#0a0f0c",
        padding: "80px 48px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          maxWidth: 1100,
          height: "45%",
          borderRadius: "0 0 28px 28px",
          border: "1px solid rgba(99,130,180,0.15)",
          borderTop: "none",
          background: "rgba(13,20,40,0.6)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 18px", borderRadius: 9999,
            background: "rgba(0,201,106,0.15)", border: "1px solid rgba(0,201,106,0.3)",
            fontSize: 11, fontWeight: 600, color: "#00C96A", letterSpacing: "0.06em",
            marginBottom: 24,
          }}>
            <span style={{ fontSize: 8 }}>●</span>
            Honest Pricing · No Surprises · No Hidden Fees
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "#ffffff",
            margin: "0 0 16px", letterSpacing: "-1.5px", textAlign: "center",
          }}>
            Simple, Transparent Pricing
          </h2>

          {/* Subtext */}
          <p style={{
            fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center",
            maxWidth: 400, lineHeight: 1.6, margin: "0 0 26px",
          }}>
            Choose the plan that fits your workflow. Start free and upgrade when you need more power.
          </p>

          {/* Toggle */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(255,255,255,0.07)", borderRadius: 9999, padding: 4,
            marginBottom: 14, gap: 2,
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {(["monthly", "annual"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding: "7px 20px", borderRadius: 9999, border: "none",
                background: billing === b ? "#ffffff" : "transparent",
                color: billing === b ? "#0a0f0c" : "rgba(255,255,255,0.45)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600, fontSize: 13, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
                transition: "background 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
              }}>
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span style={{
                    background: "#00C96A", color: "#fff",
                    fontSize: 10, fontWeight: 700, padding: "2px 8px",
                    borderRadius: 9999, lineHeight: 1.6,
                  }}>Save 21%</span>
                )}
              </button>
            ))}
          </div>

          {/* Note */}
          <p style={{
            fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center",
            marginBottom: 48, lineHeight: 1.8,
          }}>
            Start free forever. Upgrade when you need more power. Cancel anytime. No long-term contracts.
            <br />No setup fees. No per-migration charges.
          </p>

          {/* Cards */}
          <div className="pricing-grid">

            {/* FREE */}
            <div className="plan-card" style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {/* Header */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase", marginBottom: 8 }}>Free Plan</div>
                <div className="price-row">
                  <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1 }}>₹0</span>
                  <div className="price-suffix">
                    <span className="price-per-year">/forever</span>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 6, lineHeight: 1.5 }}>
                  Perfect for personal blogs, test sites, and getting started.
                </p>
              </div>

              {/* Body — grows to fill */}
              <div className="plan-card-body">
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 14, marginBottom: 14 }}>
                  <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>Included</div>
                  {freePlanIncludes.map((item) => (
                    <div key={item} className="feature-row">
                      <CheckIcon />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>Not Included</div>
                  {freePlanNotIncluded.map((item) => (
                    <div key={item} className="feature-row">
                      <CrossIcon />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button pinned to bottom */}
                <div style={{ marginTop: "auto" }}>
                  <button className="pricing-btn" style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.06)", color: "#fff",
                  }}>
                    Download Free
                  </button>
                </div>
              </div>
            </div>

            {/* PRO */}
            <div className="plan-card" style={{
              background: "#0b1a13",
              border: "2px solid #00C96A",
              position: "relative",
              boxShadow: "0 0 60px rgba(0,201,106,0.12)",
            }}>
              <div style={{
                position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)",
                background: "#00C96A", color: "#fff", fontSize: 12, fontWeight: 700,
                padding: "5px 20px", borderRadius: 9999, whiteSpace: "nowrap",
              }}>
                Most Popular
              </div>

              {/* Header */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase", marginBottom: 10 }}>Pro Plan</div>
                <div className="price-row">
                  <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1 }}>₹3,499</span>
                  <div className="price-suffix">
                    <span className="price-per-year">/year</span>
                    <span className="price-per-month">(₹291/month)</span>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 6, lineHeight: 1.5 }}>
                  Best for freelancers, developers, and growing businesses.
                </p>
              </div>

              {/* Body — grows to fill */}
              <div className="plan-card-body">
                <div style={{ borderTop: "1px solid rgba(0,201,106,0.15)", paddingTop: 14, marginBottom: 16 }}>
                  <div className="section-label" style={{ color: "#00C96A" }}>All Features Included</div>
                  {proPlanFeatures.map((item) => (
                    <div key={item} className="feature-row">
                      <CheckIcon />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <button className="pricing-btn" style={{
                    border: "none", background: "#00C96A", color: "#fff",
                    boxShadow: "0 4px 24px rgba(0,201,106,0.35)",
                  }}>
                    Start Pro — ₹3,499/yr
                  </button>
                </div>
              </div>
            </div>

            {/* AGENCY */}
            <div className="plan-card" style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {/* Header */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase", marginBottom: 10 }}>Agency Plan</div>
                <div className="price-row">
                  <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1 }}>₹8,999</span>
                  <div className="price-suffix">
                    <span className="price-per-year">/year</span>
                    <span className="price-per-month">(₹749/month)</span>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 8, lineHeight: 1.6 }}>
                  For WordPress agencies managing multiple client sites professionally.
                </p>
              </div>

              {/* Body — grows to fill */}
              <div className="plan-card-body">
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16, marginBottom: 20 }}>
                  <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>Everything in Pro, Plus</div>
                  {agencyPlanFeatures.map((item) => (
                    <div key={item} className="feature-row">
                      <CheckIcon />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <button className="pricing-btn" style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.06)", color: "#fff",
                  }}>
                    Start Agency — ₹8,999/yr
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

