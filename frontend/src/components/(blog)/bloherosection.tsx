const featuredPost = {
  image: "/main.svg",
  tag: "FEATURED",
  title: "How to Migrate a 10GB WooCommerce Store in Under 10 Minutes — Without Downtime",
  excerpt: "Most guides on WordPress migration assume small sites. This one doesn't. We'll walk through migrating a 10GB WooCommerce store with zero downtime and zero data loss.",
  readTime: "8 MIN READ",
  href: "#",
};

const otherPosts = [
  {
    image: "/a1.svg",
    title: "Understanding the AI Conflict Predictor: How It Catches 97% of...",
    readTime: "6 MIN READ",
    href: "#",
  },
  {
    image: "/a2.svg",
    title: "Why Your WordPress Backups Might Not Actually Save You (And How to Fi...",
    readTime: "8 MIN READ",
    href: "#",
  },
  {
    image: "/a3.svg",
    title: "Case Study: How Priya's 40-Site Agency Cut Migration Time by 80%",
    readTime: "7 MIN READ",
    href: "#",
  },
  {
    image: "/a4.svg",
    title: "MigrateAI v5.0 Released: 8 AI Modules, NLP Commands, and Smart Backup",
    readTime: "4 MIN READ",
    href: "#",
  },
  {
    image: "/a5.svg",
    title: "The Complete Technical Guide to WordPress Serialized Data",
    readTime: "10 MIN READ",
    href: "#",
  },
];

export default function BlogHero() {
  return (
    <div style={{ background: "#0a0d0f", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blog-header  { animation: fadeInUp 0.6s ease 0.1s both; }
        .blog-main    { animation: fadeInUp 0.6s ease 0.2s both; }

        .featured-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          flex: 0 0 55%;
        }
        .featured-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.2) 100%);
        }
        .featured-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px;
        }

        .post-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          transition: opacity 0.2s;
          text-decoration: none;
        }
        .post-row:last-child { border-bottom: none; }
        .post-row:hover { opacity: 0.75; }

      .post-thumb {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

        .read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 14px;
          transition: gap 0.2s;
        }
        .read-link:hover { gap: 10px; }

        @media (max-width: 768px) {
          .blog-split { flex-direction: column !important; }
          .featured-card { flex: none !important; width: 100% !important; min-height: 320px !important; }
          .other-posts  { width: 100% !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Header */}
        <div className="blog-header" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "1.4px",
            textTransform: "uppercase", color: "#00C96B", marginBottom: 14,
          }}>
            Our Journal
          </p>
          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800,
            color: "#ffffff", margin: "0 0 20px", lineHeight: 1.1,
          }}>
            MigrateAI Blog
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, color: "rgba(255,255,255,0.5)",
            maxWidth: 580, margin: "0 auto", lineHeight: 1.7,
          }}>
            Tutorials, case studies, product updates, WordPress migration best practices, and deep dives
            into how AI is changing WordPress development. Published weekly by the MigrateAI team.
          </p>
        </div>

        {/* Main split */}
        <div className="blog-main blog-split" style={{ display: "flex", gap: 32, alignItems: "stretch" }}>

          {/* Featured post */}
          <div className="featured-card" style={{ minHeight: 480 }}>
            <img src={featuredPost.image} alt={featuredPost.title} />
            <div className="featured-overlay" />
            <div className="featured-content">
              <span style={{
                display: "inline-block",
                background: "#00C96B", color: "#fff",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.8px",
                padding: "4px 12px", borderRadius: 999, marginBottom: 12,
              }}>
                {featuredPost.tag}
              </span>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800,
                color: "#ffffff", margin: "0 0 12px", lineHeight: 1.25,
              }}>
                {featuredPost.title}
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6, margin: 0,
              }}>
                {featuredPost.excerpt}
              </p>
              <a href={featuredPost.href} className="read-link">
                Read Full Article →
              </a>
            </div>
          </div>

          {/* Other posts */}
          <div className="other-posts" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h3 style={{
              fontSize: 16, fontWeight: 700, color: "#ffffff",
              margin: "0 0 4px",
            }}>
              Other featured posts
            </h3>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {otherPosts.map((post) => (
                <a key={post.title} href={post.href} className="post-row">
                  <img src={post.image} alt={post.title} className="post-thumb" />
                  <div>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13, fontWeight: 600, color: "#e6edf3",
                      margin: "0 0 5px", lineHeight: 1.4,
                    }}>
                      {post.title}
                    </p>
                    <p style={{
                      fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.5px", margin: 0,
                    }}>
                      {post.readTime}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}