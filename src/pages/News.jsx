import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './News.css';

const news = [
  {
    id: 1,
    type: "Press Release",
    date: "April 20, 2026",
    title: "Crusoe Technologies Raises $50M Series B to Accelerate Global Expansion",
    excerpt: "The funding round was led by Sequoia Capital and will be used to scale engineering teams across EMEA and APAC regions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    type: "Partnership",
    date: "March 15, 2026",
    title: "Crusoe Partners with Microsoft Azure to Deliver Enterprise Cloud Solutions",
    excerpt: "Strategic alliance will offer customers streamlined cloud migration paths and co-engineered infrastructure blueprints.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    type: "Award",
    date: "February 28, 2026",
    title: "Crusoe Named 'Top 50 Most Innovative Tech Companies' by Forbes",
    excerpt: "Recognition highlights our commitment to building next-generation cloud-native software at unprecedented scale.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    type: "Product Launch",
    date: "January 10, 2026",
    title: "Introducing CrusoeFlow: AI-Powered DevOps Automation Platform",
    excerpt: "CrusoeFlow automates the entire CI/CD lifecycle using machine learning to predict failures before they happen.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    type: "Community",
    date: "December 5, 2025",
    title: "Crusoe Launches Open Source Initiative: 3 Core Libraries Now Public",
    excerpt: "We are giving back to the developer community by open sourcing three internal tools that power our production systems.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const typeColors = {
  "Press Release": "#14B8A6",
  "Partnership": "#3B82F6",
  "Award": "#F59E0B",
  "Product Launch": "#8B5CF6",
  "Community": "#EC4899"
};

export default function News() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header animate-fade-up">
        <h1 className="page-title text-gradient">Latest News</h1>
        <p className="page-desc">
          Updates, announcements, and milestones from Crusoe Technologies.
        </p>
      </div>

      {/* Featured News */}
      <div className="container pb-12">
        <div className="news-featured glass animate-fade-up delay-100">
          <div className="news-featured-image">
            <img src={featured.image} alt={featured.title} />
            <div className="news-image-overlay"></div>
          </div>
          <div className="news-featured-content">
            <div className="news-type-badge" style={{ color: typeColors[featured.type], borderColor: typeColors[featured.type] + '44', background: typeColors[featured.type] + '18' }}>
              <Tag size={12} /> {featured.type}
            </div>
            <p className="news-date"><Calendar size={14} /> {featured.date}</p>
            <h2>{featured.title}</h2>
            <p className="news-excerpt">{featured.excerpt}</p>
            <Link to="#" className="action-link mt-4">
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container pb-32">
        <div className="news-grid">
          {rest.map((item, i) => (
            <Link to="#" key={item.id} className="news-card glass animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
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
                <span className="read-more">Read More <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
