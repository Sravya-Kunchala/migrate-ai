import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .scroll-top-btn {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #00C96B 0%, #00a857 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(0, 201, 107, 0.28);
          cursor: pointer;
          z-index: 90;
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        }

        .scroll-top-btn[data-visible="false"] {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }

        .scroll-top-btn[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .scroll-top-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(0, 201, 107, 0.36);
        }

        .scroll-top-btn:active {
          transform: translateY(0);
        }

        .scroll-top-btn svg {
          width: 22px;
          height: 22px;
        }

        @media (max-width: 640px) {
          .scroll-top-btn {
            right: 16px;
            bottom: 16px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <button
        type="button"
        className="scroll-top-btn"
        data-visible={visible ? "true" : "false"}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default ScrollToTopButton;
