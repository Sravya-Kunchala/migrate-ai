"use client";

export default function GenesisSection() {
  return (
    <section style={{
      background: "#0a0d0f",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 40px 8px rgba(91,79,212,0.35); }
          50%       { box-shadow: 0 0 70px 20px rgba(91,79,212,0.55); }
        }

        .genesis-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00C96B;
          margin: 0 0 20px;
          animation: fadeUp 0.6s 0.1s both;
        }
        .genesis-heading {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 16px;
          animation: fadeUp 0.6s 0.2s both;
        }
        .genesis-heading span { color: #00C96B; }

        .genesis-body {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin: 0 0 48px;
          animation: fadeUp 0.6s 0.3s both;
        }
        .genesis-body span {
          color: #00C96B;
          font-weight: 600;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(160px, 30vw, 220px);
          height: clamp(160px, 30vw, 220px);
          background: #5B4FD4;
          border-radius: clamp(22px, 4vw, 38px);
          animation: fadeUp 0.6s 0.4s both, floatIcon 4s 1s ease-in-out infinite, glowPulse 3s 1s ease-in-out infinite;
          cursor: default;
          transition: transform 0.2s;
        }
        .icon-wrapper:hover {
          transform: scale(1.04) translateY(-4px);
        }

        @media (max-width: 480px) {
          .genesis-heading br { display: none; }
        }
      `}</style>

      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>

        <p className="genesis-label">Our Genesis</p>

        <h1 className="genesis-heading">
          Built by Developers Who<br />
          <span>Lost a Site.</span>
        </h1>

        <p className="genesis-body">
          We built{" "}
          <span>MigrateAI</span>
          {" "}because we experienced firsthand how devastating a failed WordPress migration can be — and we decided no one else should have to go through that.
        </p>

        <div className="icon-wrapper">
          <svg
            width="42%"
            height="42%"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 8L28 52H46L36 82L72 38H52L54 8Z"
              fill="rgba(255,255,255,0.13)"
              stroke="white"
              strokeWidth="3.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}