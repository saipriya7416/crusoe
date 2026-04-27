import { useState } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Engineering', 'Architecture', 'Design', 'Company'];

  const featured = {
    title: "How We Migrated to a Zero-Trust Architecture",
    category: "Architecture",
    date: "Oct 12, 2026",
    author: "Marcus Chen",
    desc: "A deep dive into our 6-month journey of overhauling our entire security model without dropping a single packet. Learn about the strategic, architectural, and cultural shifts required.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  };

  const posts = [
    { title: "Building Scalable React Applications in 2026", category: "Engineering", date: "Sep 28, 2026", author: "David Foster", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" },
    { title: "The Future of Minimalist UI/UX", category: "Design", date: "Sep 15, 2026", author: "Elena Rodriguez", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
    { title: "Why We Chose Go Over Rust for Our Edge Network", category: "Engineering", date: "Aug 30, 2026", author: "Marcus Chen", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80" },
    { title: "Q3 2026 Company Update: Scaling Globally", category: "Company", date: "Aug 12, 2026", author: "Sarah Jenkins", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" }
  ];

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header">
        <h1 className="page-title text-gradient">Crusoe Insights</h1>
        <p className="page-desc">
          Thoughts, technical deep dives, and news from our engineering and design teams.
        </p>
      </div>

      {/* Featured Post */}
      <div className="container pb-12">
        <div className="featured-post glass animate-fade-up">
           <div className="featured-image">
             <img src={featured.image} alt="Featured" />
           </div>
           <div className="featured-content">
             <span className="category-badge">{featured.category}</span>
             <h2>{featured.title}</h2>
             <p className="featured-desc">{featured.desc}</p>
             <div className="post-meta">
               <span><Calendar size={14}/> {featured.date}</span>
               <span><User size={14}/> {featured.author}</span>
             </div>
             <Link to="#" className="btn btn-primary mt-4">Read Article</Link>
           </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container pb-32">
        <div className="category-filters">
          {categories.map(cat => (
             <button 
               key={cat} 
               className={`filter-btn ${filter === cat ? 'active' : ''}`}
               onClick={() => setFilter(cat)}
             >
               {cat}
             </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post, idx) => (
             <Link to="#" key={idx} className="blog-card glass animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
               <div className="blog-card-image">
                 <img src={post.image} alt={post.title} />
                 <span className="category-badge small">{post.category}</span>
               </div>
               <div className="blog-card-content">
                 <h3>{post.title}</h3>
                 <div className="post-meta">
                   <span>{post.date}</span>
                   <span className="dot">•</span>
                   <span>{post.author}</span>
                 </div>
                 <div className="read-more">
                   Read Post <ArrowRight size={16} />
                 </div>
               </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
