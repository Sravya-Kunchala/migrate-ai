const posts = [
  {
    image: "/a6.svg",
    category: "TUTORIAL",
    readTime: "8 MIN READ",
    title: "Setting Up Automated Backups on Shared Hosting: A Practical Guide",
    excerpt: "Bypass hosting limitations and secure your data without focusing through CPU queries.",
    author: "MigrateAI Team",
    date: "May 12, 2026",
    avatar: "/f1.svg",
  },
  {
    image: "/a7.svg",
    category: "ARCHITECTURE",
    readTime: "6 MIN READ",
    title: "Understanding the AI Conflict Predictor",
    excerpt: "Discover the architecture behind our prediction engine and how it maps dependencies.",
    author: "MigrateAI Team",
    date: "May 10, 2026",
    avatar: "/f1.svg",
  },
  {
    image: "/a8.svg",
    category: "SECURITY",
    readTime: "8 MIN READ",
    title: "Why Your WordPress Backups Might Not Save You",
    excerpt: "The hidden risks of traditional backup solutions and standard recovery standards.",
    author: "MigrateAI Team",
    date: "May 8, 2026",
    avatar: "/f1.svg",
  },
  {
    image: "/a6.svg",
    category: "TUTORIAL",
    readTime: "8 MIN READ",
    title: "Setting Up Automated Backups on Shared Hosting: A Practical Guide",
    excerpt: "Bypass hosting limitations and secure your data without focusing through CPU queries.",
    author: "MigrateAI Team",
    date: "May 6, 2026",
    avatar: "/f1.svg",
  },
  {
    image: "/a7.svg",
    category: "ARCHITECTURE",
    readTime: "6 MIN READ",
    title: "Understanding the AI Conflict Predictor",
    excerpt: "Discover the architecture behind our prediction engine and how it maps dependencies.",
    author: "MigrateAI Team",
    date: "May 4, 2026",
    avatar: "/f1.svg",
  },
  {
    image: "/a8.svg",
    category: "SECURITY",
    readTime: "8 MIN READ",
    title: "Why Your WordPress Backups Might Not Save You",
    excerpt: "The hidden risks of traditional backup solutions and standard recovery standards.",
    author: "MigrateAI Team",
    date: "May 2, 2026",
    avatar: "/f1.svg",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function BlogContent() {
  return (
    <section style={{
      background: "#0a0d0f",
      padding: "60px 48px 80px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .bc-card {
          background: #111418;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
          animation: fadeInUp 0.5s ease both;
          cursor: pointer;
        }
        .bc-card:hover {
          border-color: rgba(0,201,107,0.35);
          transform: translateY(-3px);
        }

        .bc-card img.bc-thumb {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }

        .bc-body {
          padding: 20px 18px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .bc-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .bc-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #00C96B;
        }

        .bc-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          flex-shrink: 0;
        }

        .bc-read {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        .bc-title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .bc-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }

        .bc-author {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }

        .bc-avatar-initials {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #00C96B;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #0a0d0f;
          flex-shrink: 0;
          letter-spacing: 0.3px;
        }

        .bc-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bc-author-name {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          line-height: 1;
        }

        .bc-author-date {
          font-size: 10px;
          color: rgba(255,255,255,0.35);
          line-height: 1;
        }

        .bc-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .bc-all-btn:hover { background: rgba(255,255,255,0.08); }

        @media (max-width: 900px) {
          .bc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .bc-grid { grid-template-columns: 1fr !important; }
          section { padding: 40px 20px 60px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#ffffff", margin: 0 }}>
            Recent Posts
          </h2>
          <button className="bc-all-btn">All Posts</button>
        </div>

        {/* Grid */}
        <div className="bc-grid">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bc-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img src={post.image} alt={post.title} className="bc-thumb" />
              <div className="bc-body">
                <div className="bc-meta">
                  <span className="bc-tag">{post.category}</span>
                  <div className="bc-dot" />
                  <span className="bc-read">{post.readTime}</span>
                </div>
                <h3 className="bc-title">{post.title}</h3>
                <p className="bc-excerpt">{post.excerpt}</p>
                <div className="bc-author">
                  <div className="bc-avatar-initials">
                    {getInitials(post.author)}
                  </div>
                  <div className="bc-author-info">
                    <span className="bc-author-name">{post.author}</span>
                    <span className="bc-author-date">{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}