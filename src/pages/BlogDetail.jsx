import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BlogDetail.css';

export default function BlogDetail() {
  return (
    <div className="page-wrapper pt-32">
      <div className="container blog-detail-layout">

        {/* Article */}
        <article className="article-body animate-fade-up">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="article-meta-top">
            <span className="category-badge">Architecture</span>
            <span className="article-date"><Calendar size={14} /> Oct 12, 2026</span>
            <span className="article-read"><Clock size={14} /> 8 min read</span>
          </div>

          <h1 className="article-title">
            How We Migrated to a Zero-Trust Architecture Without Downtime
          </h1>

          <div className="article-author-bar">
            <div className="author-avatar-md">M</div>
            <div>
              <strong>Marcus Chen</strong>
              <span>Chief Technology Officer, Crusoe Technologies</span>
            </div>
          </div>

          <div className="article-hero-image">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="Zero-Trust Architecture at scale"
            />
          </div>

          <div className="article-content">
            <p>
              Migrating a production system serving millions of users to a Zero-Trust security model is not for the faint of heart. Over six months, our team quietly dismantled every implicit trust relationship inside our infrastructure — and rebuilt them from scratch, one service at a time.
            </p>

            <h2>What is Zero-Trust?</h2>
            <p>
              Zero-Trust is not a product; it's a philosophy. The core axiom is simple: <em>never trust, always verify</em>. Every request, regardless of its origin — internal or external — must be authenticated, authorized, and continuously validated before access is granted.
            </p>

            <h2>Why We Decided to Migrate</h2>
            <p>
              Our pre-existing perimeter security model was showing its age. As we scaled across multiple regions and adopted a hybrid cloud approach, the castle-and-moat metaphor simply broke down. Lateral movement risks, overly permissive service accounts, and a growing attack surface forced our hand.
            </p>
            <blockquote>
              "Perimeter security assumes the enemy is outside. Zero-Trust assumes the enemy might already be inside."
            </blockquote>

            <h2>Our Step-by-Step Approach</h2>
            <p>
              We structured the migration into four phases over six months: <strong>Inventory & Classify</strong>, <strong>Identity-First Networking</strong>, <strong>Micro-Segmentation Rollout</strong>, and finally <strong>Continuous Monitoring Hardening</strong>.
            </p>

            <h2>Key Outcomes</h2>
            <p>
              The results exceeded our expectations. Mean time to detect (MTTD) lateral movements dropped by 94%. Blast radius for any compromised service was contained to a single microsegment. And importantly, end-user latency barely budged — a testament to good engineering.
            </p>

            <h2>Lessons Learned</h2>
            <p>
              The cultural shift was harder than the technical one. Engineers who had grown comfortable with implicit trust boundaries needed to adapt. Investing in documentation, tooling, and internal training was just as important as the infrastructure changes themselves.
            </p>
          </div>

          <div className="article-tags">
            <Tag size={14} />
            {["Zero-Trust", "Security", "Architecture", "Cloud"].map(tag => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="article-sidebar animate-fade-up delay-200">
          <div className="sidebar-card glass">
            <h3>About the Author</h3>
            <div className="sidebar-author">
              <div className="author-avatar-lg" style={{ background: '#14B8A6' }}>M</div>
              <div>
                <strong>Marcus Chen</strong>
                <p>CTO at Crusoe Technologies, systems architect, and distributed systems enthusiast.</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card glass">
            <h3>Related Articles</h3>
            <div className="related-list">
              {[
                "Why We Chose Go Over Rust for Our Edge Network",
                "Building Scalable React Applications in 2026",
                "The Future of Minimalist UI/UX"
              ].map((title, i) => (
                <Link to="#" key={i} className="related-item">
                  <ArrowLeft size={14} className="related-icon" /> {title}
                </Link>
              ))}
            </div>
          </div>

          <div className="sidebar-card glass cta-card">
            <h3>Work With Us</h3>
            <p>Ready to transform your architecture? Let's talk.</p>
            <Link to="/contact" className="btn btn-primary mt-4">Get in Touch</Link>
          </div>
        </aside>

      </div>
    </div>
  );
}
