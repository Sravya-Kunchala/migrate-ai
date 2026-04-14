import { useEffect, useRef } from "react";

const metricItems = [
  { value: "2.4M+", label: "ACTIVE INSTALLATIONS" },
  { value: "99.97%", label: "MIGRATION SUCCESS RATE" },
  { value: "8", label: "AI MODULES BUILT-IN" },
  { value: "50GB", label: "MAX SITE SIZE SUPPORTED" },
  { value: "★ 4.9", label: "RATING ON WORDPRESS.ORG" },
];

const tickerItems = [
  "ZERO DOWNTIME MIGRATION",
  "AES-256 ENCRYPTION",
  "30+ CLOUD DESTINATIONS",
  "MULTISITE SUPPORT",
  "NATURAL LANGUAGE COMMANDS",
];

const sidebarItems = [
  { label: "Dashboard", icon: "⊞", active: true },
  { label: "Backups", icon: "🗄", active: false },
  { label: "Migration", icon: "⇄", active: false },
  { label: "Restore", icon: "↺", active: false },
  { label: "Schedules", icon: "🗓", active: false },
  { label: "Reports", icon: "📊", active: false },
  { label: "AI Assistant", icon: "✦", active: false, badge: "AI" },
  { label: "Settings", icon: "⚙", active: false },
];

const stats = [
  { label: "TOTAL BACKUPS", value: "148", sub: "↑ 12% this month", subColor: "#22c55e", icon: "🗄", iconBg: "#eff6ff" },
  { label: "LAST BACKUP", value: "2h ago", sub: "Oct 05 · 09:10 AM", subColor: "#94a3b8", icon: "🕐", iconBg: "#f0fdf4" },
  { label: "ACTIVE JOBS", value: "3", sub: "2 scheduled · 1 running", subColor: "#94a3b8", icon: "⚡", iconBg: "#faf5ff" },
  { label: "HEALTH SCORE", value: "94%", sub: "↑ Up 2pts this week", subColor: "#22c55e", icon: "🛡", iconBg: "#f0fdf4" },
];

const backups = [
  { name: "Full Site\nBackup", type: "Full", date: "Apr 05 ·\n09:10 AM", size: "4.2 GB", status: "Done", pct: 98, color: "#22c55e" },
  { name: "DB\nSnapshot", type: "Database", date: "Apr 04 ·\n02:30 PM", size: "320 MB", status: "Done", pct: 100, color: "#22c55e" },
  { name: "Files Only", type: "Files", date: "Apr 03 ·\n10:00 PM", size: "2.8 GB", status: "Warning", pct: 74, color: "#f59e0b" },
  { name: "Pre-Update\nBackup", type: "Full", date: "Apr 02 ·\n11:15 AM", size: "4.0 GB", status: "Failed", pct: 32, color: "#ef4444" },
];

const liveSteps = [
  { label: "Connecting to remote", done: true },
  { label: "Exporting database", done: true },
  { label: "Uploading files...", done: false, active: true },
  { label: "Verifying integrity", done: false },
  { label: "Finalizing backup", done: false },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Done: { bg: "#dcfce7", text: "#16a34a" },
  Warning: { bg: "#fef9c3", text: "#ca8a04" },
  Failed: { bg: "#fee2e2", text: "#dc2626" },
};

const tickerDuped = [...tickerItems, ...tickerItems, ...tickerItems];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(24px)";
      htmlEl.style.transition = `opacity 0.7s ease ${i * 0.13}s, transform 0.7s ease ${i * 0.13}s`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "translateY(0)";
        }, 80);
      });
    });

    const metricEls = ref.current?.querySelectorAll("[data-counter]");
    metricEls?.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const target = htmlEl.getAttribute("data-counter") || "";
      const numMatch = target.match(/[\d.]+/);
      if (!numMatch) return;
      const num = parseFloat(numMatch[0]);
      const prefix = target.slice(0, numMatch.index);
      const suffix = target.slice((numMatch.index || 0) + numMatch[0].length);
      let start = 0;
      const duration = 1800;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * num;
        htmlEl.textContent = prefix + (Number.isInteger(num) ? Math.floor(current) : current.toFixed(2)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else htmlEl.textContent = target;
      };

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(step);
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(htmlEl);
    });

    const shell = ref.current?.querySelector(".db-shell-wrap") as HTMLElement;
    if (shell) {
      shell.style.animation = "db-float 5s ease-in-out infinite";
    }

    const progressFill = ref.current?.querySelector(".db-progress-fill") as HTMLElement;
    if (progressFill) {
      progressFill.style.width = "0%";
      progressFill.style.transition = "width 1.4s ease 1.2s";
      setTimeout(() => {
        progressFill.style.width = "67%";
      }, 100);
    }

    const barFills = ref.current?.querySelectorAll<HTMLElement>(".db-bar-fill");
    barFills?.forEach((bar) => {
      const targetWidth = bar.style.width;
      bar.style.width = "0%";
      bar.style.transition = "width 1.2s ease 1.5s";
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 100);
    });

    const toast = ref.current?.querySelector(".db-toast") as HTMLElement;
    if (toast) {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(16px)";
      toast.style.transition = "opacity 0.5s ease 2s, transform 0.5s ease 2s";
      setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <section ref={ref} className="hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        @keyframes db-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes live-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
          50%       { box-shadow: 0 0 12px 2px rgba(74,222,128,0.25); }
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .hero-section {
          background: #0d0d0d;
          display: flex; flex-direction: column; align-items: center;
          padding: 40px 1.5rem 0;
          text-align: center; overflow: hidden;
          font-family: 'Manrope', sans-serif;
          position: relative;
        }
        .hero-watermark-logo {
          position: fixed;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 100%; max-width: 1600px;
          height: auto; display: block;
          opacity: 0.38; filter: grayscale(1) brightness(4);
          user-select: none; pointer-events: none;
          z-index: 0;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(105,246,184,0.3); border-radius: 9999px;
          padding: 6px 16px; margin-bottom: 20px;
          position: relative; z-index: 3;
          animation: badge-glow 3s ease-in-out infinite;
        }
        .hero-badge-dot { color: #4ade80; font-size: 13px; }
        .hero-badge-text { color: #aaa; font-size: 13px; }
        .hero-title {
          color: #fff; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px,5vw,60px); font-weight: 400;
          line-height: 1.2; letter-spacing: -1.5px;
          max-width: 700px; margin-bottom: 16px;
          position: relative; z-index: 3;
        }
        .hero-title-accent {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
          font-size: clamp(28px,5vw,60px); line-height: 1.2;
          letter-spacing: -1.5px; color: #6366f1;
        }
        .hero-subtitle {
          color: #888; font-size: 18px; font-weight: 400;
          line-height: 1.6; max-width: 560px; margin-bottom: 24px;
          position: relative; z-index: 3;
        }
        .hero-subtitle-bold { font-weight: 700; font-size: 22px; line-height: 1.4; color: #fff; }
        .hero-cta-group {
          display: flex; gap: 10px; margin-bottom: 56px;
          flex-wrap: wrap; justify-content: center;
          position: relative; z-index: 3;
        }
        .hero-btn-primary {
          width: 240px; height: 60px; background: #006D4A; color: #fff;
          border: none; border-radius: 48px; font-size: 14px; font-weight: 700;
          cursor: pointer; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          transition: opacity 0.2s, transform 0.2s;
        }
        .hero-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .hero-btn-primary-sub { font-size: 10px; font-weight: 400; color: #a7f3d0; margin-top: 2px; }
        .hero-btn-secondary {
          width: 240px; height: 60px; background: #E2EAE3; color: #0d0d0d;
          border: none; border-radius: 48px; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: opacity 0.2s, transform 0.2s;
        }
        .hero-btn-secondary:hover { opacity: 0.85; transform: translateY(-2px); }
        .hero-visual-wrap {
          position: relative; width: 100%;
          display: flex; flex-direction: column; align-items: center;
          margin-bottom: 60px; z-index: 3;
        }
        .db-shell-wrap {
          position: relative; width: 100%; max-width: 900px; z-index: 3;
        }
        .db-deco-card {
          position: absolute; bottom: -20px; left: 50%;
          transform: translateX(-50%);
          width: 340px; height: 90px; border-radius: 48px;
          background: rgba(255,255,255,0.002);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          pointer-events: none; z-index: 0;
        }
        .db-shell {
          width: 100%; border-radius: 14px; overflow: hidden;
          border: 2px solid #00C96B;
          box-shadow: 0 0 0 1px rgba(0,201,107,0.25), 0 24px 60px rgba(0,0,0,0.7);
          background: #f1f5f9; position: relative; z-index: 1;
        }
        .db-chrome {
          background: #1e1e2e; padding: 8px 14px;
          display: flex; align-items: center; gap: 5px;
        }
        .db-dot { width: 10px; height: 10px; border-radius: 50%; }
        .db-url-bar {
          flex: 1; height: 20px; background: #2a2a3e;
          border-radius: 5px; margin-left: 8px;
          display: flex; align-items: center; padding: 0 8px;
        }
        .db-url-text { color: #555; font-size: 9px; font-family: 'Manrope', sans-serif; }
        .db-inner { display: flex; height: 460px; }
        .db-sidebar {
          width: 160px; background: #0f172a;
          display: flex; flex-direction: column;
          padding: 12px 8px; flex-shrink: 0;
        }
        .db-sidebar-logo {
          display: flex; align-items: center; gap: 6px;
          padding: 4px 6px; margin-bottom: 12px;
        }
        .db-sidebar-logo-icon {
          width: 24px; height: 24px; border-radius: 6px; overflow: hidden; flex-shrink: 0;
        }
        .db-sidebar-logo-icon img { width: 100%; height: 100%; object-fit: contain; }
        .db-sidebar-logo-text {
          color: #fff; font-size: 12px; font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .db-nav-item {
          display: flex; align-items: center; gap: 7px;
          padding: 6px 8px; border-radius: 7px;
          font-size: 11px; font-family: 'Manrope', sans-serif;
          cursor: pointer; margin-bottom: 2px;
          transition: background 0.2s;
        }
        .db-nav-item.active { background: #1e293b; color: #fff; font-weight: 600; }
        .db-nav-item.inactive { color: #475569; }
        .db-nav-item.inactive:hover { background: #1e293b; color: #94a3b8; }
        .db-nav-icon { font-size: 12px; width: 14px; text-align: center; }
        .db-nav-badge {
          margin-left: auto; background: #6366f1; color: #fff;
          font-size: 7px; font-weight: 700; padding: 1px 4px;
          border-radius: 3px; font-family: 'Manrope', sans-serif;
        }
        .db-sidebar-footer {
          margin-top: auto; padding: 6px 8px;
          display: flex; align-items: center; gap: 7px;
          border-top: 1px solid #1e293b;
        }
        .db-avatar-sm {
          width: 24px; height: 24px; border-radius: 50%;
          background: linear-gradient(135deg,#6366f1,#8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; color: #fff; font-weight: 700; flex-shrink: 0;
        }
        .db-footer-name { color: #cbd5e1; font-size: 9px; font-weight: 600; font-family: 'Manrope', sans-serif; }
        .db-footer-role { color: #475569; font-size: 8px; font-family: 'Manrope', sans-serif; }
        .db-main { flex: 1; background: #f8fafc; display: flex; flex-direction: column; overflow: hidden; min-width: 0; }
        .db-topbar {
          background: #fff; border-bottom: 1px solid #e2e8f0;
          padding: 8px 16px; display: flex; align-items: center; gap: 10px; flex-shrink: 0;
        }
        .db-search {
          flex: 1; background: #f1f5f9; border: 1px solid #e2e8f0;
          border-radius: 7px; padding: 5px 10px; font-size: 10px; color: #94a3b8;
          font-family: 'Manrope', sans-serif; display: flex; align-items: center; gap: 5px;
        }
        .db-topbar-actions { display: flex; align-items: center; gap: 8px; }
        .db-bell {
          width: 28px; height: 28px; border-radius: 7px; background: #f1f5f9;
          display: flex; align-items: center; justify-content: center; font-size: 12px;
        }
        .db-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg,#6366f1,#8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: #fff; font-weight: 700;
        }
        .db-user { display: flex; align-items: center; gap: 7px; }
        .db-user-name { font-size: 10px; font-weight: 600; color: #1e293b; font-family: 'Manrope', sans-serif; text-align: left; }
        .db-user-role { font-size: 8px; color: #94a3b8; font-family: 'Manrope', sans-serif; text-align: left; }
        .db-content { flex: 1; overflow-y: auto; padding: 14px 16px; }
        .db-page-title { font-size: 16px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; margin-bottom: 1px; }
        .db-page-sub { font-size: 10px; color: #94a3b8; font-family: 'Manrope', sans-serif; margin-bottom: 12px; }
        .db-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 10px; }
        .db-stat {
          background: #fff; border-radius: 10px; border: 1px solid #e2e8f0;
          padding: 10px; display: flex; flex-direction: column; gap: 4px;
          transition: box-shadow 0.2s;
        }
        .db-stat:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .db-stat-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .db-stat-label { font-size: 7.5px; color: #94a3b8; font-weight: 600; letter-spacing: 0.5px; font-family: 'Manrope', sans-serif; text-transform: uppercase; }
        .db-stat-icon {
          width: 24px; height: 24px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0;
        }
        .db-stat-value { font-size: 18px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1; }
        .db-stat-sub { font-size: 8.5px; font-family: 'Manrope', sans-serif; }
        .db-bottom { display: grid; grid-template-columns: 1fr 1.85fr; gap: 8px; }
        .db-live { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 12px; }
        .db-live-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        .db-live-title { font-size: 11px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; }
        .db-live-badge {
          display: flex; align-items: center; gap: 3px;
          background: #dcfce7; border-radius: 9999px; padding: 2px 7px;
          font-size: 8.5px; font-weight: 600; color: #16a34a; font-family: 'Manrope', sans-serif;
        }
        .db-live-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #22c55e;
          animation: live-pulse 1.5s ease-in-out infinite;
        }
        .db-live-sub { font-size: 9.5px; color: #64748b; font-family: 'Manrope', sans-serif; margin-bottom: 7px; }
        .db-progress-label { display: flex; justify-content: space-between; font-size: 8.5px; color: #94a3b8; font-family: 'Manrope', sans-serif; margin-bottom: 3px; }
        .db-progress-track { height: 5px; background: #e2e8f0; border-radius: 3px; margin-bottom: 8px; }
        .db-progress-fill { height: 5px; border-radius: 3px; background: linear-gradient(90deg,#6366f1,#8b5cf6); }
        .db-steps { display: flex; flex-direction: column; gap: 4px; }
        .db-step { display: flex; align-items: center; gap: 5px; font-size: 9.5px; font-family: 'Manrope', sans-serif; }
        .db-step-icon { font-size: 9px; width: 12px; }
        .db-step.done { color: #22c55e; }
        .db-step.active { color: #6366f1; font-weight: 600; }
        .db-step.pending { color: #cbd5e1; }
        .db-table-wrap { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 12px; }
        .db-table-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .db-table-title { font-size: 11px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; }
        .db-view-all { font-size: 9.5px; color: #6366f1; font-family: 'Manrope', sans-serif; cursor: pointer; }
        .db-table { width: 100%; border-collapse: collapse; }
        .db-table th {
          text-align: left; padding: 3px 5px;
          font-size: 8.5px; color: #94a3b8; font-weight: 600;
          letter-spacing: 0.4px; text-transform: uppercase;
          border-bottom: 1px solid #f1f5f9; font-family: 'Manrope', sans-serif;
        }
        .db-table td {
          padding: 6px 5px; border-bottom: 1px solid #f8fafc;
          font-size: 9.5px; color: #334155; font-family: 'Manrope', sans-serif;
          vertical-align: middle;
        }
        .db-table tr:last-child td { border-bottom: none; }
        .db-table tr { transition: background 0.15s; }
        .db-table tr:hover td { background: #f8fafc; }
        .db-name-cell { font-weight: 600; color: #1e293b; white-space: pre-line; line-height: 1.3; }
        .db-status-pill {
          display: inline-flex; align-items: center; gap: 3px;
          border-radius: 9999px; padding: 2px 6px;
          font-size: 8.5px; font-weight: 600; font-family: 'Manrope', sans-serif;
        }
        .db-status-dot { width: 4px; height: 4px; border-radius: 50%; }
        .db-bar-wrap { display: flex; align-items: center; gap: 4px; }
        .db-bar-bg { flex: 1; height: 3px; background: #f1f5f9; border-radius: 2px; }
        .db-bar-fill { height: 3px; border-radius: 2px; }
        .db-bar-pct { font-size: 8.5px; color: #94a3b8; font-family: 'Manrope', sans-serif; min-width: 22px; text-align: right; }
        .db-toast {
          position: absolute; bottom: 12px; left: 12px;
          background: #fff; border-radius: 10px; border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          padding: 8px 12px; display: flex; align-items: center; gap: 8px; min-width: 220px;
        }
        .db-toast-icon {
          width: 26px; height: 26px; border-radius: 50%; background: #dcfce7;
          display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0;
        }
        .db-toast-title { font-size: 10.5px; font-weight: 700; color: #0f172a; font-family: 'Manrope', sans-serif; }
        .db-toast-sub { font-size: 8.5px; color: #64748b; font-family: 'Manrope', sans-serif; }

        /* Metrics band */
        .hero-metrics {
          display: flex; gap: 40px; flex-wrap: wrap; justify-content: center;
          width: 100vw; max-width: none; background: #1F2937;
          padding: 40px 0; box-sizing: border-box; position: relative; z-index: 3;
        }
        .metric-item { text-align: center; }
        .metric-value {
          font-size: 22px; font-weight: 700;
          background: linear-gradient(90deg, #fff 0%, #4ade80 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .metric-label { color: #4ade80; font-size: 9px; letter-spacing: 1.2px; margin-top: 4px; font-weight: 600; }

        /* Ticker */
        .ticker-band {
          width: 100vw; max-width: none; background: #0a2e1f;
          border-top: 1px solid rgba(0,201,107,0.18); border-bottom: 1px solid rgba(0,201,107,0.18);
          overflow: hidden; padding: 12px 0; display: flex; align-items: center;
          position: relative; z-index: 3;
        }
        .ticker-track { display: flex; width: max-content; animation: ticker-scroll 28s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 24px;
          white-space: nowrap; font-size: 11px; font-weight: 700;
          letter-spacing: 1.8px; color: rgba(255,255,255,0.55);
          font-family: 'Manrope', sans-serif; padding: 0 24px;
        }
        .ticker-item::after {
          content: ''; display: inline-block; width: 4px; height: 4px;
          border-radius: 50%; background: #00C96B; flex-shrink: 0;
        }
        .ticker-item:last-child::after { display: none; }

        /* ===================== MOBILE FIXES ===================== */
        @media (max-width: 768px) {
          .hero-section { padding: 28px 1rem 0; }

          .hero-subtitle { font-size: 15px; }
          .hero-subtitle-bold { font-size: 17px; }

          /* CTA buttons: full width, stacked, rounded rect */
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            margin-bottom: 36px;
            padding: 0;
            width: 100%;
            max-width: 100%;
          }
          .hero-btn-primary {
            width: 100%;
            max-width: 100%;
            border-radius: 14px;
            height: 56px;
          }
          .hero-btn-secondary {
            width: 100%;
            max-width: 100%;
            border-radius: 14px;
            height: 56px;
            background: transparent;
            color: #fff;
            border: 1.5px solid rgba(255,255,255,0.25);
          }

          .hero-visual-wrap { margin-bottom: 36px; }

          /* Dashboard: natural height */
          .db-inner { height: auto; }

          /* Hide sidebar completely */
          .db-sidebar { display: none !important; }

          /* Main takes full width */
          .db-main { width: 100%; }

          /* Hide search bar */
          .db-search { display: none; }

          /* Topbar: push to right */
          .db-topbar { justify-content: flex-end; }

          /* Stats: 2x2 grid */
          .db-stats { grid-template-columns: repeat(2, 1fr); gap: 6px; }

          /* Bottom panels: stack vertically */
          .db-bottom { grid-template-columns: 1fr; gap: 8px; }

          /* Table: hide Type, Date, Size columns */
          .db-col-type, .db-col-date, .db-col-size { display: none !important; }

          /* Toast: pull out of absolute, sit at bottom of shell */
          .db-toast {
            position: relative;
            bottom: auto; left: auto;
            width: 100%;
            min-width: unset;
            margin-top: 8px;
            border-radius: 0 0 12px 12px;
          }

          /* Metrics: 2-col grid, 5th item spans full width centered */
          .hero-metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 16px;
            padding: 28px 24px;
          }
          .metric-item:last-child {
            grid-column: 1 / -1;
            justify-self: center;
          }
        }

        @media (max-width: 400px) {
          .db-stat-value { font-size: 15px; }
          .db-content { padding: 10px 8px; }
          .hero-metrics { gap: 18px 12px; padding: 22px 16px; }
        }
      `}</style>

      <img src="/migrateai.svg" alt="" className="hero-watermark-logo" aria-hidden="true" />

      <div className="hero-badge" data-animate>
        <span className="hero-badge-dot">✦</span>
        <span className="hero-badge-text">Now with 8 AI Modules — v5.0 Released</span>
      </div>

      <h1 className="hero-title" data-animate>
        The World's First{" "}
        <span className="hero-title-accent">AI–Powered WordPress Backup & Migration</span>{" "}
        Plugin
      </h1>

      <p className="hero-subtitle" data-animate>
        <span className="hero-subtitle-bold">MigrateAI doesn't just backup your site — it understands it.</span>{" "}
        Predicts conflicts before they happen, detects anomalies in real time,
        guides migrations in plain English, and recovers your site in under 60 seconds when things go wrong.
      </p>

      <div className="hero-cta-group" data-animate>
        <button className="hero-btn-primary">
          <span>Download Free Plugin</span>
          <span className="hero-btn-primary-sub">No Credit Card Required</span>
        </button>
        <button className="hero-btn-secondary">Explore All Features →</button>
      </div>

      <div className="hero-visual-wrap" data-animate>
        <div className="db-shell-wrap">
          <div className="db-deco-card" />
          <div className="db-shell">
            <div className="db-chrome">
              <div className="db-dot" style={{ background: "#ff5f57" }} />
              <div className="db-dot" style={{ background: "#febc2e" }} />
              <div className="db-dot" style={{ background: "#28c840" }} />
              <div className="db-url-bar">
                <span className="db-url-text">app.migrateai.com/dashboard</span>
              </div>
            </div>
            <div className="db-inner">
              <div className="db-sidebar">
                <div className="db-sidebar-logo">
                  <div className="db-sidebar-logo-icon">
                    <img src="/dashboard.svg" alt="MigrateAI" />
                  </div>
                  <span className="db-sidebar-logo-text">MigrateAI</span>
                </div>
                {sidebarItems.map((item) => (
                  <div key={item.label} className={`db-nav-item ${item.active ? "active" : "inactive"}`}>
                    <span className="db-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.badge && <span className="db-nav-badge">{item.badge}</span>}
                  </div>
                ))}
                <div className="db-sidebar-footer">
                  <div className="db-avatar-sm">A</div>
                  <div>
                    <div className="db-footer-name">Admin</div>
                    <div className="db-footer-role">WordPress Pro</div>
                  </div>
                </div>
              </div>
              <div className="db-main">
                <div className="db-topbar">
                  <div className="db-search">
                    <span>🔍</span>
                    <span>Search anything...</span>
                  </div>
                  <div className="db-topbar-actions">
                    <div className="db-bell">🔔</div>
                    <div className="db-user">
                      <div className="db-avatar">A</div>
                      <div>
                        <div className="db-user-name">Admin</div>
                        <div className="db-user-role">WordPress Pro</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="db-content">
                  <div className="db-page-title">Dashboard</div>
                  <div className="db-page-sub">Your WordPress site health, activity and AI insights at a glance.</div>
                  <div className="db-stats">
                    {stats.map((s) => (
                      <div key={s.label} className="db-stat">
                        <div className="db-stat-top">
                          <div className="db-stat-label">{s.label}</div>
                          <div className="db-stat-icon" style={{ background: s.iconBg }}>{s.icon}</div>
                        </div>
                        <div className="db-stat-value">{s.value}</div>
                        <div className="db-stat-sub" style={{ color: s.subColor }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="db-bottom">
                    <div className="db-live">
                      <div className="db-live-header">
                        <span className="db-live-title">Live Activity</span>
                        <span className="db-live-badge"><span className="db-live-dot" /> Running</span>
                      </div>
                      <div className="db-live-sub">Uploading to S3 — Step 3 of 5</div>
                      <div className="db-progress-label"><span></span><span>67%</span></div>
                      <div className="db-progress-track">
                        <div className="db-progress-fill" style={{ width: "67%" }} />
                      </div>
                      <div className="db-steps">
                        {liveSteps.map((step) => (
                          <div key={step.label} className={`db-step ${step.done ? "done" : step.active ? "active" : "pending"}`}>
                            <span className="db-step-icon">{step.done ? "✓" : step.active ? "○" : "·"}</span>
                            <span>{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="db-table-wrap">
                      <div className="db-table-header">
                        <span className="db-table-title">Recent Backups</span>
                        <span className="db-view-all">View all →</span>
                      </div>
                      <table className="db-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th className="db-col-type">Type</th>
                            <th className="db-col-date">Date</th>
                            <th className="db-col-size">Size</th>
                            <th>Status</th>
                            <th>Health</th>
                          </tr>
                        </thead>
                        <tbody>
                          {backups.map((row) => {
                            const st = statusStyles[row.status];
                            return (
                              <tr key={row.name}>
                                <td><div className="db-name-cell">{row.name}</div></td>
                                <td className="db-col-type">{row.type}</td>
                                <td className="db-col-date" style={{ whiteSpace: "pre-line", lineHeight: 1.3 }}>{row.date}</td>
                                <td className="db-col-size">{row.size}</td>
                                <td>
                                  <span className="db-status-pill" style={{ background: st.bg, color: st.text }}>
                                    <span className="db-status-dot" style={{ background: st.text }} />
                                    {row.status}
                                  </span>
                                </td>
                                <td>
                                  <div className="db-bar-wrap">
                                    <div className="db-bar-bg">
                                      <div className="db-bar-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                                    </div>
                                    <span className="db-bar-pct">{row.pct}%</span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="db-toast">
              <div className="db-toast-icon">✓</div>
              <div>
                <div className="db-toast-title">Conflict Scan Clean</div>
                <div className="db-toast-sub">Predictive AI: 0 issues detected in destination.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-metrics" data-animate>
        {metricItems.map((m) => (
          <div key={m.label} className="metric-item">
            <div className="metric-value" data-counter={m.value}>{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="ticker-band" data-animate>
        <div className="ticker-track">
          {tickerDuped.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}