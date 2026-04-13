// SignInPage.tsx
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [view, setView] = useState<"signin" | "forgot">("signin");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .si-input {
          width: 100%;
          background: #0d0d0d;
          border: 1px solid #2a2a2a;
          border-radius: 999px;
          padding: 12px 20px 12px 40px;
          font-size: 14px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .si-input::placeholder { color: #555; }
        .si-input:focus { border-color: #00C96B; }

        .si-google-btn {
          width: 100%;
          background: #fff;
          color: #111;
          border: none;
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .si-google-btn:hover {
          background: #f0f0f0;
          transform: scale(1.01);
        }

        .si-submit-btn {
          width: 100%;
          background: #00C96B;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 13px 20px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .si-submit-btn:hover {
          background: #00a857;
          transform: scale(1.01);
        }

        .si-label {
          font-size: 12px;
          color: #888;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin-bottom: 6px;
          display: block;
        }

        .si-divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .si-divider-line {
          flex: 1;
          height: 1px;
          background: #2a2a2a;
        }
        .si-divider-text {
          font-size: 11px;
          color: #555;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }

        .si-text-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 0;
          transition: opacity 0.2s;
        }
        .si-text-btn:hover { opacity: 0.75; }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px 1.5rem 64px",
        }}>

          {/* ── SIGN IN VIEW ── */}
          {view === "signin" && (
            <>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{
                  width: 44, height: 44, background: "#5b4ef8",
                  borderRadius: 12, display: "flex",
                  alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span style={{ color: "#7c6ff7", fontWeight: 700, fontSize: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  MigrateAI
                </span>
              </div>

              {/* Card */}
              <div style={{
                width: "100%", maxWidth: 380,
                background: "#161b22",
                border: "1px solid #21262d",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex", flexDirection: "column", gap: 16,
              }}>
                <div style={{ textAlign: "center", marginBottom: 4 }}>
                  <h1 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 6px",
                  }}>
                    Welcome Back
                  </h1>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#888", margin: 0 }}>
                    Sign in to manage your WordPress migrations and backups.
                  </p>
                </div>

                {/* Google */}
                <button className="si-google-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>

                {/* Divider */}
                <div className="si-divider">
                  <div className="si-divider-line" />
                  <span className="si-divider-text">OR USE EMAIL</span>
                  <div className="si-divider-line" />
                </div>

                {/* Email */}
                <div>
                  <label className="si-label">Email address</label>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <input className="si-input" type="email" placeholder="Enter your email id" />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <label className="si-label" style={{ margin: 0 }}>Password</label>
                    <button
                      className="si-text-btn"
                      onClick={() => setView("forgot")}
                      style={{ fontSize: 11, color: "#00C96B" }}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <input
                      className="si-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      style={{ paddingRight: 44 }}
                    />
                    <button
                      onClick={() => setShowPassword((v) => !v)}
                      style={{
                        position: "absolute", right: 16, top: "50%",
                        transform: "translateY(-50%)", background: "none",
                        border: "none", cursor: "pointer", padding: 0,
                        display: "flex", alignItems: "center",
                      }}
                    >
                      {showPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button className="si-submit-btn">Sign In</button>
              </div>

              {/* Sign up link */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13, color: "#888", marginTop: 20,
              }}>
                Don't have an account?{" "}
                <a href="/signup" style={{ color: "#00C96B", textDecoration: "none", fontWeight: 600 }}>
                  Create one
                </a>
              </p>
            </>
          )}

          {/* ── FORGOT PASSWORD VIEW ── */}
          {view === "forgot" && (
            <div style={{
              width: "100%", maxWidth: 360,
              background: "#161b22",
              border: "1px solid #21262d",
              borderRadius: 20,
              padding: "36px 28px",
              display: "flex", flexDirection: "column", gap: 20,
              marginTop: 40,
            }}>
              {/* Logo */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
                <div style={{
                  width: 44, height: 44, background: "#5b4ef8",
                  borderRadius: 12, display: "flex",
                  alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <div style={{ textAlign: "center" }}>
                <h2 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 8px",
                }}>
                  Forgot Password?
                </h2>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13, color: "#888", lineHeight: 1.6, margin: 0,
                }}>
                  Enter your email and we'll send you instructions to reset your password.
                </p>
              </div>

              {sent ? (
                <div style={{
                  background: "rgba(0,201,107,0.1)",
                  border: "1px solid rgba(0,201,107,0.25)",
                  borderRadius: 12, padding: "14px 16px",
                  textAlign: "center",
                }}>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13, color: "#00C96B", margin: 0, lineHeight: 1.6,
                  }}>
                    ✓ Reset link sent! Check your inbox.
                  </p>
                </div>
              ) : (
                <>
                  {/* Email input */}
                  <div>
                    <label className="si-label">Email address</label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <input
                        className="si-input"
                        type="email"
                        placeholder="Enter your email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Send button */}
                  <button
                    className="si-submit-btn"
                    onClick={() => setSent(true)}
                  >
                    Send Reset Link →
                  </button>
                </>
              )}

              {/* Back to sign in */}
              <div style={{ textAlign: "center" }}>
                <button
                  className="si-text-btn"
                  onClick={() => { setView("signin"); setSent(false); setEmail(""); }}
                  style={{ fontSize: 13, color: "#888" }}
                >
                  ← Back to Sign In
                </button>
              </div>
            </div>
          )}

        </main>

        <Footer />
      </div>
    </>
  );
}