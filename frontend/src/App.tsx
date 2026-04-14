import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/HomePage";
import FeaturesPage from "./app/features";
import PricingPage from "./app/pricing";
import SignUpPage from "./app/signup";
import SignInPage from "./app/signin";
import DocsPage from "./app/docs";
import BlogPage from "./app/blog";
import AboutPage from "./app/about";
import ContactPage from "./app/contact";

function App() {
  return (
    <>
      <style>{`
        /* ── Global mobile resets ── */
        *, *::before, *::after { box-sizing: border-box; }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -webkit-text-size-adjust: 100%;
        }

        /* ── Responsive images & media ── */
        img, svg, video, canvas {
          max-width: 100%;
          height: auto;
        }

        /* ── Grid → single column on mobile ── */
        @media (max-width: 768px) {

          /* Hero */
          .hero-section {
            padding: 32px 1rem 0 !important;
          }
          .hero-title {
            font-size: clamp(24px, 7vw, 40px) !important;
          }
          .hero-subtitle {
            font-size: 15px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            margin-bottom: 36px !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            max-width: 320px !important;
          }
          .hero-metrics {
            gap: 20px !important;
            padding: 28px 16px !important;
          }

          /* Dashboard shell shrink */
          .db-shell-wrap { max-width: 100% !important; }
          .db-inner { height: auto !important; min-height: 300px !important; }
          .db-sidebar { width: 48px !important; }
          .db-sidebar-logo-text,
          .db-nav-item span:not(.db-nav-icon),
          .db-nav-badge,
          .db-footer-name,
          .db-footer-role { display: none !important; }
          .db-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .db-bottom { grid-template-columns: 1fr !important; }

          /* AI Features section */
          .aif-row,
          .aif-row.reverse {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .aif-bottom-grid { grid-template-columns: 1fr !important; }
          .aif-rows { gap: 60px !important; }

          /* Cloud destinations */
          .cld-row { padding: 0 16px !important; }

          /* Pricing / comparison table */
          .fc-table-wrap { overflow-x: auto !important; }

          /* Contact page */
          .contact-hero-grid { grid-template-columns: 1fr !important; }
          .channels-grid { grid-template-columns: 1fr 1fr !important; }
          .hq-grid { grid-template-columns: 1fr !important; }
          .hq-image-side { min-height: 200px !important; }

          /* Docs layout */
          .docs-layout { grid-template-columns: 1fr !important; }
          .docs-sidebar { display: none !important; }

          /* Docs content */
          .quick-grid { grid-template-columns: 1fr 1fr !important; }
          .migration-grid { grid-template-columns: 1fr !important; }

          /* Timeline */
          .evo-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: 28px !important;
          }
          .evo-card { width: 100% !important; }

          /* Blog grid */
          .bc-grid { grid-template-columns: 1fr !important; }
          .bc-featured { grid-template-columns: 1fr !important; }

          /* AI modules grid */
          .ai-grid { grid-template-columns: 1fr 1fr !important; }

          /* Footer */
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1 !important; }

          /* General section padding */
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }

        @media (max-width: 480px) {
          .quick-grid { grid-template-columns: 1fr !important; }
          .channels-grid { grid-template-columns: 1fr !important; }
          .ai-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .db-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <BrowserRouter>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing"  element={<PricingPage />} />
          <Route path="/signup"   element={<SignUpPage />} />
          <Route path="/signin"   element={<SignInPage />} />
          <Route path="/docs"     element={<DocsPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;