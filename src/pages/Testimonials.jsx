import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Alexander V.",
    role: "CTO",
    company: "Finova Finance",
    rating: 5,
    text: "Crusoe Technologies transformed our legacy systems into a modern powerhouse. Their team delivered a UI that exceeded all our expectations — pixel-perfect and blazing fast. Absolute perfection from start to finish.",
    avatar: "A",
    gradient: "linear-gradient(135deg, #14B8A6, #0F9788)"
  },
  {
    name: "Priya Sharma",
    role: "Head of Product",
    company: "NovaSaaS",
    rating: 5,
    text: "Working with Crusoe was a revelation. Their cloud architecture expertise cut our infrastructure costs by 40% while tripling our reliability. We've never looked back. Genuinely the best tech partner we've ever had.",
    avatar: "P",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
  },
  {
    name: "Marcus Elliot",
    role: "CEO",
    company: "DataPulse AI",
    rating: 5,
    text: "The data pipeline Crusoe engineered processes 2 billion events per day without breaking a sweat. Their team's depth of knowledge is unmatched. We went from prototype to production in just 3 months.",
    avatar: "M",
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)"
  },
  {
    name: "Yuki Tanaka",
    role: "VP Engineering",
    company: "Orbix Systems",
    rating: 5,
    text: "I've worked with many vendors, but Crusoe operates at a completely different level of professionalism. Their code is clean, extensively documented, and architected to scale. Highly recommended.",
    avatar: "Y",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)"
  },
  {
    name: "Camille Dubois",
    role: "Founder",
    company: "Creatify Studio",
    rating: 5,
    text: "The UI/UX work Crusoe delivered rivals the best in Silicon Valley. Our user retention jumped 60% post-launch. They have a rare ability to combine stunning aesthetics with rock-solid engineering.",
    avatar: "C",
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)"
  },
  {
    name: "Raj Patel",
    role: "Director of IT",
    company: "Aerolux",
    rating: 5,
    text: "From day one, Crusoe demonstrated an extraordinary ability to understand our complex requirements and translate them into elegant solutions. The platform they built handles millions of transactions seamlessly.",
    avatar: "R",
    gradient: "linear-gradient(135deg, #06B6D4, #0284C7)"
  }
];

const logos = [
  { name: "Finova Finance", abbr: "FF" },
  { name: "NovaSaaS", abbr: "NS" },
  { name: "DataPulse AI", abbr: "DP" },
  { name: "Orbix Systems", abbr: "OS" },
  { name: "Creatify Studio", abbr: "CS" },
  { name: "Aerolux", abbr: "AL" },
  { name: "BlockVault", abbr: "BV" },
  { name: "Synthwave", abbr: "SW" }
];

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const containerRef = useScrollReveal();

  const prev = useCallback(() => {
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
    setIsAutoPlaying(false);
  }, []);

  const next = useCallback(() => {
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
    setIsAutoPlaying(false);
  }, []);

  // Autoplay carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const t = testimonials[active];

  return (
    <div className="page-wrapper pt-32" ref={containerRef}>
      {/* Hero Header */}
      <div className="container page-header center animate-fade-up">
        <div className="testi-badge">
          <Star size={14} fill="#14B8A6" color="#14B8A6" />
          <span>Trusted by 200+ Companies Worldwide</span>
        </div>
        <h1 className="page-title text-gradient">What Our Clients Say</h1>
        <p className="page-desc">
          Don't just take our word for it — hear from the leaders who've experienced the Crusoe difference.
        </p>
      </div>

      {/* Featured Video Testimonial */}
      <div className="container scroll-reveal">
        <div className="video-testimonial-section">
          <div className="video-container" onClick={() => setVideoPlaying(!videoPlaying)}>
            <div className="video-placeholder">
              <div className="video-overlay"></div>
              <div className="video-pattern"></div>
              {!videoPlaying && (
                <button className="play-button" aria-label="Play video testimonial">
                  <div className="play-pulse"></div>
                  <Play size={28} fill="#fff" />
                </button>
              )}
              {videoPlaying && (
                <div className="video-playing-state">
                  <div className="sound-wave">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.15}s` }}></span>
                    ))}
                  </div>
                  <p>Video Testimonial Playing…</p>
                </div>
              )}
            </div>
          </div>
          <div className="video-testimonial-content">
            <div className="featured-label">Featured Testimonial</div>
            <Quote size={40} className="quote-icon-featured" />
            <h2>The partnership that transformed our entire tech stack</h2>
            <p className="video-quote">
              "Crusoe didn't just build software for us — they reimagined how our entire organization operates. The ROI was visible within the first quarter."
            </p>
            <div className="video-author">
              <div className="video-avatar" style={{ background: 'linear-gradient(135deg, #14B8A6, #0F9788)' }}>AV</div>
              <div>
                <h4>Alexander V.</h4>
                <span>CTO, Finova Finance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="container scroll-reveal">
        <div className="logos-section">
          <p className="logos-label">Trusted by innovative companies worldwide</p>
          <div className="logo-strip">
            {logos.map((logo, i) => (
              <div key={i} className="logo-chip" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="logo-abbr">{logo.abbr}</span>
                <span className="logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="container testimonial-carousel-section scroll-reveal">
        <div className="carousel-wrapper">
          <div className="testimonial-carousel glass">
            <div className="carousel-body" key={active}>
              <div className="carousel-rating">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={20} fill="#14B8A6" color="#14B8A6" />
                ))}
              </div>
              <blockquote className="carousel-quote">"{t.text}"</blockquote>
              <div className="carousel-author">
                <div className="author-avatar-lg" style={{ background: t.gradient }}>
                  {t.avatar}
                </div>
                <div className="author-details">
                  <h4>{t.name}</h4>
                  <p className="author-role">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>

            <div className="carousel-controls">
              <button className="ctrl-btn" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <div className="carousel-indicators">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`indicator ${i === active ? 'active' : ''}`}
                    onClick={() => { setActive(i); setIsAutoPlaying(false); }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span className="indicator-fill" style={i === active && isAutoPlaying ? { animation: 'fillProgress 5s linear forwards' } : {}}></span>
                  </button>
                ))}
              </div>
              <button className="ctrl-btn" onClick={next} aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="container pb-32">
        <div className="testi-grid-header scroll-reveal">
          <h2 className="section-title text-gradient">More Success Stories</h2>
          <p className="section-desc">Every project is a commitment to excellence.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <div key={i} className="testi-card glass scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="testi-card-header">
                <div className="testi-stars">
                  {Array(item.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} fill="#14B8A6" color="#14B8A6" />
                  ))}
                </div>
                <Quote size={24} className="testi-quote-icon" />
              </div>
              <p className="testi-text">"{item.text}"</p>
              <div className="testi-author">
                <div className="small-avatar" style={{ background: item.gradient }}>
                  {item.avatar}
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <span>{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="testi-orb testi-orb-1"></div>
      <div className="testi-orb testi-orb-2"></div>
    </div>
  );
}
