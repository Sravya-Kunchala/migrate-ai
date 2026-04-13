import React from "react";

const rows = [
  { feature: "Max backup size",         free: "512 MB",        pro: "Unlimited",           agency: "Unlimited",            proHighlight: true,  agencyHighlight: true  },
  { feature: "Sites",                   free: "1",             pro: "5",                   agency: "Unlimited",            proHighlight: false, agencyHighlight: true  },
  { feature: "Backup frequency",        free: "Daily/Weekly",  pro: "Hourly+",             agency: "Hourly+",              proHighlight: false, agencyHighlight: false },
  { feature: "Cloud storage",           free: "No",            pro: "All 10+",             agency: "All 10+",              proHighlight: false, agencyHighlight: false },
  { feature: "AI Migration Assistant",  free: "Basic",         pro: "Full",                agency: "Full + Custom Prompt", proHighlight: false, agencyHighlight: false },
  { feature: "Smart Backup Engine",     free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "Conflict Predictor",      free: "3/month",       pro: "Unlimited",           agency: "Unlimited",            proHighlight: true,  agencyHighlight: true  },
  { feature: "AI Restore Advisor",      free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "Anomaly Detector",        free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "Smart Scheduler",         free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "AI Report Generator",     free: "No",            pro: "PDF",                 agency: "White-Label PDF",      proHighlight: false, agencyHighlight: false },
  { feature: "Natural Language Commands", free: "No",          pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "AES-256 Encryption",      free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "REST API",                free: "No",            pro: "Yes",                 agency: "Yes",                  proHighlight: true,  agencyHighlight: true  },
  { feature: "WP-CLI",                  free: "Basic",         pro: "Full",                agency: "Full",                 proHighlight: false, agencyHighlight: false },
  { feature: "Client Dashboard",        free: "No",            pro: "No",                  agency: "Yes",                  proHighlight: false, agencyHighlight: true  },
  { feature: "Done-for-you migrations", free: "No",            pro: "No",                  agency: "3/year",               proHighlight: false, agencyHighlight: false, dimmed: true },
  { feature: "Support",                 free: "Community",     pro: "Priority Email 12h",  agency: "Dedicated 4h + Phone", proHighlight: false, agencyHighlight: false },
];

export default function FeatureComparison() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .fc-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .fc-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 560px;
        }

        .fc-table th,
        .fc-table td {
          padding: 13px 16px;
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .fc-table td:first-child,
        .fc-table th:first-child {
          text-align: left;
        }

        .fc-row-even {
          background: rgba(255,255,255,0.025);
        }

        .fc-row-odd {
          background: transparent;
        }
      `}</style>

      <section
        style={{
          background: "#0a0f0c",
          padding: "80px 48px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >

        {/* Money-back guarantee banner */}
        <div style={{
          maxWidth: 480,
          margin: "0 auto 72px",
          background: "#0f1f17",
          border: "1px solid rgba(0,201,107,0.2)",
          borderRadius: 20,
          padding: "28px 32px",
          textAlign: "center",
          position: "relative",
        }}>
          {/* Shield icon */}
          <div style={{
            position: "absolute",
            top: -18,
            right: 28,
            width: 36,
            height: 36,
            background: "#0f1f17",
            border: "1px solid rgba(0,201,107,0.2)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C96B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>

          <p style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#00C96B",
            margin: "0 0 10px",
            letterSpacing: "-0.2px",
          }}>
            30-Day Money-Back Guarantee
          </p>
          <p style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            Not satisfied for any reason within 30 days of your purchase? Contact us and
            we'll refund you completely. No questions, no arguments, no hassle. We stand
            behind MigrateAI 100%.
          </p>
        </div>

        {/* Section title */}
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          margin: "0 0 48px",
          letterSpacing: "-0.5px",
        }}>
          Full Feature Comparison
        </h2>

        {/* Table */}
        <div className="fc-table-wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
          <table className="fc-table">
            <thead>
              <tr>
                <th style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#ffffff",
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  Feature
                </th>
                {["Free", "Pro", "Agency"].map((plan) => (
                  <th key={plan} style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: plan === "Pro" ? "#00C96B" : "#ffffff",
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "fc-row-even" : "fc-row-odd"}>

                  {/* Feature name */}
                  <td style={{
                    fontSize: 13,
                    color: row.dimmed ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.75)",
                    fontWeight: 500,
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    {row.feature}
                  </td>

                  {/* Free */}
                  <td style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    {row.free}
                  </td>

                  {/* Pro */}
                  <td style={{
                    fontSize: 13,
                    fontWeight: row.proHighlight ? 700 : 400,
                    color: row.proHighlight ? "#00C96B" : "rgba(255,255,255,0.75)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    {row.pro}
                  </td>

                  {/* Agency */}
                  <td style={{
                    fontSize: 13,
                    fontWeight: row.agencyHighlight ? 700 : 400,
                    color: row.agencyHighlight ? "#00C96B" : "rgba(255,255,255,0.75)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    {row.agency}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </>
  );
}