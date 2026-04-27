import './About.css';
import { Target, Lightbulb, Shield, Users } from 'lucide-react';

export default function About() {
  const team = [
    { name: "Sarah Jenkins", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=1" },
    { name: "Marcus Chen", role: "Chief Technology Officer", image: "https://i.pravatar.cc/300?img=11" },
    { name: "Elena Rodriguez", role: "Head of Design", image: "https://i.pravatar.cc/300?img=5" },
    { name: "David Foster", role: "VP of Engineering", image: "https://i.pravatar.cc/300?img=8" }
  ];

  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header center animate-fade-up">
        <h1 className="page-title text-gradient">About Crusoe</h1>
        <p className="page-desc">
          We are a team of visionary engineers, designers, and strategists obsessed with building the future of software.
        </p>
      </div>

      {/* Story Section */}
      <section className="story-section container pb-24">
        <div className="story-grid">
          <div className="story-text animate-fade-up">
            <h2>Our Origin</h2>
            <p>
              Founded in 2020, Crusoe Technologies emerged from a simple realization: enterprise software shouldn't have to choose between extreme performance and beautiful design. 
            </p>
            <p>
              We started as a boutique architectural firm and quickly scaled to a global powerhouse by delivering on our promise of flawless execution. Today, we partner with industry leaders to redefine digital experiences.
            </p>
          </div>
          <div className="story-image-wrapper glass animate-fade-up delay-200">
            <div className="story-image-placeholder">
               <div className="abstract-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="values-section bg-secondary py-24">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Core Values</h2>
            <p className="section-desc">The principles that guide our every line of code.</p>
          </div>
          <div className="values-grid">
            <div className="value-card glass">
              <Target className="value-icon" size={32} />
              <h3>Precision</h3>
              <p>We measure twice and cut once. Our architectures are designed for optimal resource utilization.</p>
            </div>
            <div className="value-card glass">
              <Lightbulb className="value-icon" size={32} />
              <h3>Innovation</h3>
              <p>We constantly experiment with bleeding-edge tech stacks to give our clients an unfair advantage.</p>
            </div>
            <div className="value-card glass">
              <Shield className="value-icon" size={32} />
              <h3>Integrity</h3>
              <p>Security and privacy are not afterthoughts; they are baked into the foundation of everything we build.</p>
            </div>
            <div className="value-card glass">
              <Users className="value-icon" size={32} />
              <h3>Collaboration</h3>
              <p>We act as an extension of your own team, promoting radical transparency throughout the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="team-section py-24">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Leadership</h2>
            <p className="section-desc">Meet the minds behind Crusoe.</p>
          </div>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                  <div className="team-image-overlay"></div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="text-gradient-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
