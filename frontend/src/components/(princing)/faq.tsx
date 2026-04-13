import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "1. Can I try Pro before paying?",
    a: "Yes. The free plan gives you full access to core features so you can verify the plugin works on your setup before upgrading.",
  },
  {
    q: "2. What happens when I hit the site limit?",
    a: "You'll receive a notification. Upgrade to the next plan or deactivate the plugin on one site to make room.",
  },
  {
    q: "3. Do you offer discounts for nonprofits or educational institutions?",
    a: (
      <>
        Yes. Contact us at{" "}
        <a href="mailto:hello@migrateai.io" style={{ color: "#00C96B", textDecoration: "none" }}>
          hello@migrateai.io
        </a>{" "}
        with verification and we'll apply a 40% discount.
      </>
    ),
  },
  {
    q: "4. Can I pay in USD?",
    a: "Yes. Prices are available in INR and USD. Select your currency during checkout.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: React.ReactNode; index: number }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, index * 100);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      onClick={() => setOpen((v) => !v)}
      style={{
        background: "#161b22",
        border: `1px solid ${open ? "rgba(0,201,107,0.35)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        padding: "20px 24px",
        cursor: "pointer",
        transition: "border-color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!open)(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,107,0.2)";
      }}
      onMouseLeave={(e) => {
        if (!open)(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* Question row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
      }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <div style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          background: open ? "rgba(0,201,107,0.15)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${open ? "rgba(0,201,107,0.3)" : "rgba(255,255,255,0.08)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.2s, border-color 0.2s, transform 0.3s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke={open ? "#00C96B" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="1" y1="6" x2="11" y2="6" stroke={open ? "#00C96B" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "200px" : "0px",
        opacity: open ? 1 : 0,
        transition: "max-height 0.35s ease, opacity 0.3s ease",
      }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          margin: "12px 0 0",
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function PricingFAQ() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      background: "#0a0f0c",
      padding: "80px 48px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 700,
          color: "#ffffff",
          margin: "0 0 12px",
          letterSpacing: "-0.5px",
        }}>
          Frequently Asked Pricing Questions
        </h2>
      </div>

      {/* FAQ list */}
      <div style={{
        maxWidth: 680,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}>
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}