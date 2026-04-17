import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Docs",     href: "/docs" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const matched = navLinks.find((l) => l.href === path);
    if (matched) setActive(matched.label);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleClick = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  const barStyle = (width: string, open: boolean, index: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: "block",
      width,
      height: "2px",
      background: "#ffffff",
      borderRadius: "2px",
      transition: "transform 0.3s ease, opacity 0.3s ease, width 0.3s ease",
      transformOrigin: "center",
    };
    if (open) {
      if (index === 0) return { ...base, transform: "translateY(7px) rotate(45deg)", width: "22px" };
      if (index === 1) return { ...base, opacity: 0, width: "0px" };
      if (index === 2) return { ...base, transform: "translateY(-7px) rotate(-45deg)", width: "22px" };
    }
    return base;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 4px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0%; height: 2px;
          background: #00C96B;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #ffffff !important; font-weight: 600 !important; }
        .nav-link:hover { color: #ffffff !important; }

        .nav-get-started { transition: background 0.2s ease, transform 0.15s ease; }
        .nav-get-started:hover { background: #15a85e !important; transform: scale(1.03); }

        .nav-signin { transition: color 0.2s ease; }
        .nav-signin:hover { color: #ffffff !important; }

        .nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 110;
          backdrop-filter: blur(2px);
          transition: opacity 0.3s ease;
        }

        .nav-drawer {
          position: fixed;
          top: 0; right: 0;
          width: 280px;
          height: 100vh;
          background: #0d0d0d;
          border-left: 1px solid #1e1e1e;
          z-index: 120;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .nav-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 64px;
          border-bottom: 0.5px solid #2a2a2a;
          flex-shrink: 0;
        }

        .nav-drawer-links {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          flex: 1;
        }

        .nav-drawer-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #888;
          text-decoration: none;
          padding: 13px 24px;
          border-left: 2px solid transparent;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .nav-drawer-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .nav-drawer-link.active {
          color: #fff;
          font-weight: 600;
          border-left-color: #00C96B;
          background: rgba(0,201,107,0.06);
        }

        .nav-drawer-footer {
          padding: 20px 24px;
          border-top: 0.5px solid #2a2a2a;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
      `}</style>

      {/* Backdrop */}
      {isMobile && (
        <div
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
          style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none" }}
        />
      )}

      {/* Drawer */}
      {isMobile && (
        <div
          className="nav-drawer"
          style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="nav-drawer-header">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div style={{
              width: 30, height: 30, background: "#5b4ef8",
              borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span style={{ color: "#7c6ff7", fontWeight: 600, fontSize: 15 }}>MigrateAI</span>
          </a>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#888", padding: 4, display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="nav-drawer-links">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`nav-drawer-link${active === label ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(label);
                  setTimeout(() => { window.location.href = href; }, 200);
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="nav-drawer-footer">
            <a
              href="/signin"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "11px 20px", borderRadius: 999,
                border: "1px solid #2a2a2a", color: "#ccc",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#444";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#ccc";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
              }}
            >
              Sign In
            </a>
            <a
              href="/signup"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "11px 20px", borderRadius: 999,
                background: "#1a7a4a", color: "#fff",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                gap: 6, transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#15a85e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1a7a4a";
              }}
            >
              Get Started →
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div aria-hidden="true" style={{ height: "64px" }} />
        <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "64px",
        background: "#0d0d0d",
        borderBottom: "0.5px solid #2a2a2a",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        isolation: "isolate",
        boxShadow: "0 1px 0 rgba(0,0,0,0.35)",
      }}>

        {/* Logo */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div style={{
            width: "36px", height: "36px", background: "#5b4ef8",
            borderRadius: "10px", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span style={{ color: "#7c6ff7", fontWeight: 600, fontSize: "17px" }}>MigrateAI</span>
        </a>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => handleClick(label)}
                className={`nav-link${active === label ? " active" : ""}`}
                style={{
                  color: active === label ? "#ffffff" : "#888",
                  fontWeight: active === label ? 600 : 400,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* Desktop auth */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="/signin"
              className="nav-signin"
              style={{
                color: "#ccc", fontSize: "15px",
                cursor: "pointer", textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="nav-get-started"
              style={{
                background: "#1a7a4a", color: "#fff",
                borderRadius: "999px", padding: "10px 22px",
                fontSize: "15px", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "6px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600, textDecoration: "none",
              }}
            >
              Get Started →
            </a>
          </div>
        )}

        {/* Mobile hamburger — fully controlled via React state, no CSS media queries */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              width: "36px",
              height: "36px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              zIndex: 200,
            }}
          >
            <div style={barStyle("22px", menuOpen, 0)} />
            <div style={barStyle("16px", menuOpen, 1)} />
            <div style={barStyle("22px", menuOpen, 2)} />
          </button>
        )}

      </nav>
    </>
  );
}

export default Navbar;
