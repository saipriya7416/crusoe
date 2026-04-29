import { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, Tag, Filter, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './News.css';

const news = [
  {
    id: 1,
    category: "Company Updates",
    type: "Press Release",
    date: "April 20, 2026",
    readTime: "5 min read",
    title: "Crusoe Technologies Raises $50M Series B to Accelerate Global Expansion",
    excerpt: "The funding round was led by Sequoia Capital and will be used to scale engineering teams across EMEA and APAC regions, bringing world-class technology to new markets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    category: "Tech",
    type: "Partnership",
    date: "March 15, 2026",
    readTime: "4 min read",
    title: "Crusoe Partners with Microsoft Azure to Deliver Enterprise Cloud Solutions",
    excerpt: "Strategic alliance will offer customers streamlined cloud migration paths and co-engineered infrastructure blueprints.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    category: "Company Updates",
    type: "Award",
    date: "February 28, 2026",
    readTime: "3 min read",
    title: "Crusoe Named 'Top 50 Most Innovative Tech Companies' by Forbes",
    excerpt: "Recognition highlights our commitment to building next-generation cloud-native software at unprecedented scale.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    category: "Tech",
    type: "Product Launch",
    date: "January 10, 2026",
    readTime: "6 min read",
    title: "Introducing CrusoeFlow: AI-Powered DevOps Automation Platform",
    excerpt: "CrusoeFlow automates the entire CI/CD lifecycle using machine learning to predict failures before they happen.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    category: "Events",
    type: "Community",
    date: "December 5, 2025",
    readTime: "4 min read",
    title: "Crusoe Launches Open Source Initiative: 3 Core Libraries Now Public",
    excerpt: "We are giving back to the developer community by open sourcing three internal tools that power our production systems.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 6,
    category: "Events",
    type: "Event",
    date: "November 18, 2025",
    readTime: "3 min read",
    title: "Join Us at TechSummit 2025 — Crusoe Keynote Speaker Announced",
    excerpt: "Our CTO will be delivering a keynote on 'The Future of Cloud-Native Architecture' at TechSummit 2025 in San Francisco.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 7,
    category: "Tech",
    type: "Research",
    date: "October 2, 2025",
    readTime: "8 min read",
    title: "How We Reduced API Latency by 92% Using Edge Computing",
    excerpt: "A deep dive into the architectural decisions that enabled us to serve 50M+ requests per day with sub-10ms response times.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 8,
    category: "Company Updates",
    type: "Milestone",
    date: "September 1, 2025",
    readTime: "3 min read",
    title: "Crusoe Technologies Surpasses 500 Enterprise Clients Milestone",
    excerpt: "A celebration of growth and the incredible partnerships that have made this milestone possible in just three years.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const categories = ["All", "Tech", "Company Updates", "Events"];

const typeColors = {
  "Press Release": "#84BD00",
  "Partnership": "#84BD00",
  "Award": "#84BD00",
  "Product Launch": "#84BD00",
  "Community": "#84BD00",
  "Event": "#84BD00",
  "Research": "#84BD00",
  "Milestone": "#84BD00"
};

const ITEMS_PER_PAGE = 4;

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = containerRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory, currentPage]);

  const featured = news[0];
  const filtered = (activeCategory === "All" ? news.slice(1) : news.filter(n => n.category === activeCategory && !n.featured));
  
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedItems = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="page-wrapper pt-32" ref={containerRef}>
      {/* Header */}
      <div className="container page-header animate-fade-up">
        <div className="news-badge">
          <TrendingUp size={14} />
          <span>Latest Updates & Insights</span>
        </div>
        <h1 className="page-title text-gradient">Newsroom</h1>
        <p className="page-desc">
          Updates, announcements, and milestones from Crusoe Technologies.
        </p>
      </div>

      {/* Featured News */}
      <div className="container pb-12">
        <div className="news-featured glass scroll-reveal">
          <div className="news-featured-image">
            <img src={featured.image} alt={featured.title} loading="lazy" />
            <div className="news-image-overlay"></div>
            <div className="featured-ribbon">
              <span>Featured</span>
            </div>
          </div>
          <div className="news-featured-content">
            <div className="news-meta-row">
              <div className="news-type-badge" style={{ color: typeColors[featured.type], borderColor: typeColors[featured.type] + '44', background: typeColors[featured.type] + '18' }}>
                <Tag size={12} /> {featured.type}
              </div>
            </div>
            <div className="news-date-row">
              <span className="news-date"><Calendar size={14} /> {featured.date}</span>
              <span className="news-read-time"><Clock size={14} /> {featured.readTime}</span>
            </div>
            <h2>{featured.title}</h2>
            <p className="news-excerpt">{featured.excerpt}</p>
            <Link to="#" className="news-read-btn">
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container scroll-reveal">
        <div className="news-filters">
          <div className="filter-label">
            <Filter size={16} /> Filter by
          </div>
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="pill-count">
                    {cat === "All" ? news.length - 1 : news.filter(n => n.category === cat && !n.featured).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container pb-12">
        <div className="news-grid">
          {paginatedItems.map((item, i) => (
            <Link to="#" key={item.id} className="news-card glass scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="news-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="news-card-category-chip">
                  {item.category}
                </div>
              </div>
              <div className="news-card-body">
                <div className="news-card-meta">
                  <span className="news-type-badge small" style={{ color: typeColors[item.type], borderColor: typeColors[item.type] + '44', background: typeColors[item.type] + '18' }}>
                    {item.type}
                  </span>
                  <span className="news-date-small"><Calendar size={12} /> {item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="news-card-footer">
                  <span className="read-time-small"><Clock size={12} /> {item.readTime}</span>
                  <span className="read-more">Read More <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="news-empty scroll-reveal">
            <p>No articles found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="container pb-32 scroll-reveal">
          <div className="news-pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Decorative */}
      <div className="news-orb news-orb-1"></div>
      <div className="news-orb news-orb-2"></div>
    </div>
  );
}
