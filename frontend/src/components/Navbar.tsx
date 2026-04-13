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

  useEffect(() => {
    const path = window.location.pathname;
    const matched = navLinks.find((l) => l.href === path);
    if (matched) setActive(matched.label);
  }, []);

  const handleClick = (label: string) => {
    setActive(label);
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
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: #00C96B;
          border-radius: 2px;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #ffffff !important;
          font-weight: 600 !important;
        }

        .nav-link:hover {
          color: #ffffff !important;
        }

        .nav-get-started {
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .nav-get-started:hover {
          background: #15a85e !important;
          transform: scale(1.03);
        }

        .nav-signin {
          transition: color 0.2s ease;
        }

        .nav-signin:hover {
          color: #ffffff !important;
        }
      `}</style>

      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "64px",
        background: "#0d0d0d",
        borderBottom: "0.5px solid #2a2a2a",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "36px",
            height: "36px",
            background: "#5b4ef8",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span style={{ color: "#7c6ff7", fontWeight: 600, fontSize: "17px" }}>MigrateAI</span>
        </div>

        {/* Nav Links */}
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

        {/* Auth Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="/signin"
            className="nav-signin"
            style={{
              color: "#ccc",
              fontSize: "15px",
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="nav-get-started"
            style={{
              background: "#1a7a4a",
              color: "#fff",
              borderRadius: "999px",
              padding: "10px 22px",
              fontSize: "15px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get Started →
          </a>
        </div>

      </nav>
    </>
  );
}

export default Navbar;