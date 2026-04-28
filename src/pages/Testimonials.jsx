import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Alexander V.",
    role: "CTO, Finova Finance",
    company: "Finova Finance",
    rating: 5,
    text: "Crusoe Technologies transformed our legacy systems into a modern powerhouse. Their team delivered a UI that exceeded all our expectations — pixel-perfect and blazing fast. Absolute perfection from start to finish.",
    avatar: "A",
    color: "#14B8A6"
  },
  {
    name: "Priya Sharma",
    role: "Head of Product, NovaSaaS",
    company: "NovaSaaS",
    rating: 5,
    text: "Working with Crusoe was a revelation. Their cloud architecture expertise cut our infrastructure costs by 40% while tripling our reliability. We've never looked back. Genuinely the best tech partner we've ever had.",
    avatar: "P",
    color: "#3B82F6"
  },
  {
    name: "Marcus Elliot",
    role: "CEO, DataPulse AI",
    company: "DataPulse AI",
    rating: 5,
    text: "The data pipeline Crusoe engineered processes 2 billion events per day without breaking a sweat. Their team's depth of knowledge is unmatched. We went from prototype to production in just 3 months.",
    avatar: "M",
    color: "#8B5CF6"
  },
  {
    name: "Yuki Tanaka",
    role: "VP Engineering, Orbix Systems",
    company: "Orbix Systems",
    rating: 5,
    text: "I've worked with many vendors, but Crusoe operates at a completely different level of professionalism. Their code is clean, extensively documented, and architected to scale. Highly recommended.",
    avatar: "Y",
    color: "#F59E0B"
  },
  {
    name: "Camille Dubois",
    role: "Founder, Creatify Studio",
    company: "Creatify Studio",
    rating: 5,
    text: "The UI/UX work Crusoe delivered rivals the best in Silicon Valley. Our user retention jumped 60% post-launch. They have a rare ability to combine stunning aesthetics with rock-solid engineering.",
    avatar: "C",
    color: "#EC4899"
  }
];

const logos = ["Finova Finance", "NovaSaaS", "DataPulse AI", "Orbix Systems", "Creatify Studio", "Aerolux", "BlockVault"];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header center animate-fade-up">
        <h1 className="page-title text-gradient">What Clients Say</h1>
        <p className="page-desc">Trusted by forward-thinking companies across the globe.</p>
      </div>

      {/* Logo Strip */}
      <div className="container logo-strip-wrapper animate-fade-up delay-100">
        <div className="logo-strip">
          {logos.map((logo, i) => (
            <div key={i} className="logo-chip">{logo}</div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="container testimonial-carousel-section pb-24">
        <div className="testimonial-carousel glass animate-fade-up delay-200">
          <div className="carousel-body">
            <div className="stars">
              {Array(t.rating).fill(0).map((_, i) => <Star key={i} size={18} fill="#14B8A6" color="#14B8A6" />)}
            </div>
            <blockquote className="carousel-quote">"{t.text}"</blockquote>
            <div className="carousel-author">
              <div className="author-avatar-lg" style={{ background: t.color }}>{t.avatar}</div>
              <div>
                <h4>{t.name}</h4>
                <p className="author-role">{t.role}</p>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="ctrl-btn" onClick={prev} aria-label="Previous"><ChevronLeft size={20} /></button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`}></button>
              ))}
            </div>
            <button className="ctrl-btn" onClick={next} aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="container pb-32">
        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <div key={i} className="testi-card glass animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="testi-stars">
                {Array(item.rating).fill(0).map((_, j) => <Star key={j} size={14} fill="#14B8A6" color="#14B8A6" />)}
              </div>
              <p className="testi-text">"{item.text}"</p>
              <div className="testi-author">
                <div className="small-avatar" style={{ background: item.color }}>{item.avatar}</div>
                <div>
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
