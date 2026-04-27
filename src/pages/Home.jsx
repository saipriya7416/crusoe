import { useEffect, useRef } from 'react';
import { ArrowRight, Code, Database, Globe, Cpu, Layout, Cloud, CheckCircle, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_3d.png';
import mid3dImg from '../assets/mid_page_3d.png';
import './Home.css';

export default function Home() {
  const statsRef = useRef(null);
  const midScrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!midScrollRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      midScrollRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-fade-up">
            <div className="hero-badge delay-100">
              <span className="live-dot"></span> Next-Gen Software Solutions
            </div>
            <h1 className="hero-title delay-200">
              Engineer Your <br />
              <span className="text-gradient-primary">Company's Future</span>
            </h1>
            <p className="hero-desc delay-300">
              Crusoe Technologies delivers premium, scalable software solutions. We bridge the gap between complex engineering and elegant design to drive exceptional business growth.
            </p>
            <div className="hero-actions delay-400">
              <Link to="/contact" className="btn btn-primary">
                Start a Project <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-fade-up delay-300">
            <div className="hero-image-wrapper glass">
              <img src={heroImg} alt="Abstract 3D Tech" className="hero-3d-img" />
              <div className="glow-orb top-right"></div>
              <div className="glow-orb bottom-left"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-secondary" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card animate-on-scroll">
              <h3 className="stat-value text-gradient">200+</h3>
              <p className="stat-label">Projects Delivered</p>
            </div>
            <div className="stat-card animate-on-scroll delay-100">
              <h3 className="stat-value text-gradient">99.9%</h3>
              <p className="stat-label">Uptime SLA</p>
            </div>
            <div className="stat-card animate-on-scroll delay-200">
              <h3 className="stat-value text-gradient-primary">40+</h3>
              <p className="stat-label">Enterprise Clients</p>
            </div>
            <div className="stat-card animate-on-scroll delay-300">
              <h3 className="stat-value text-gradient">24/7</h3>
              <p className="stat-label">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">End-to-End <span className="text-gradient-primary">Capabilities</span></h2>
            <p className="section-desc">We build digital products from strategy to scale.</p>
          </div>
          
          <div className="services-grid">
            {[
              { title: "Cloud Architecture", desc: "Scalable AWS and Azure infrastructure designed for high availability and security.", icon: <Cloud size={32} /> },
              { title: "Custom Development", desc: "Tailored software solutions built with modern stacks (React, Node, Go, Python).", icon: <Code size={32} /> },
              { title: "UI/UX Design", desc: "Premium, functional interfaces optimizing user experience and retention.", icon: <Layout size={32} /> },
              { title: "Data Engineering", desc: "Intelligent pipelines, AI integrations, and big data management.", icon: <Database size={32} /> },
              { title: "Global Systems", desc: "Distributed international applications requiring high-performance latency.", icon: <Globe size={32} /> },
              { title: "Hardware Integration", desc: "IoT software stacks and embedded systems processing real-time telemetry.", icon: <Cpu size={32} /> },
            ].map((service, index) => (
              <div key={index} className="service-card animate-on-scroll glass" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="interactive-3d-section">
        <div className="container section-container">
          <div className="interactive-content animate-on-scroll">
            <h2 className="section-title">Engineering the <br/>Unthinkable</h2>
            <p className="section-desc">
              Push the boundaries of the digital realm. Our proprietary architectures leverage bleeding-edge technologies ensuring your systems run lighter, faster, and smarter.
            </p>
            <ul className="feature-list">
              <li><CheckCircle className="feature-icon" /> Microservices architecture</li>
              <li><CheckCircle className="feature-icon" /> AI-driven automation</li>
              <li><CheckCircle className="feature-icon" /> Real-time data processing</li>
            </ul>
          </div>
          <div className="interactive-visual animate-on-scroll">
            <div className="mid-3d-wrapper" ref={midScrollRef}>
              <img src={mid3dImg} alt="Interactive 3D Visual" />
              <div className="hologram-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section bg-secondary">
        <div className="container">
          <div className="section-header center animate-on-scroll">
            <h2 className="section-title">Why Crusoe?</h2>
            <p className="section-desc">The standard for modern tech enterprises.</p>
          </div>
          <div className="why-grid">
             <div className="why-card animate-on-scroll">
                <div className="why-icon"><Shield size={28} /></div>
                <h4>Enterprise Security</h4>
                <p>Bank-grade encryption and SOC2 compliance out of the box.</p>
             </div>
             <div className="why-card animate-on-scroll delay-100">
                <div className="why-icon"><Zap size={28} /></div>
                <h4>Hyper Performance</h4>
                <p>Optimized edge networking ensuring fast load times globally.</p>
             </div>
             <div className="why-card animate-on-scroll delay-200">
                <div className="why-icon"><Cpu size={28} /></div>
                <h4 className="text-gradient">Future-Proof Tech</h4>
                <p>We write clean, modular, and extensively documented codebases.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonial-wrapper glass animate-on-scroll">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              Crusoe Technologies transformed our legacy systems into a modern powerhouse. Their team is exceptionally talented and delivered a UI that exceeded all initial expectations. Absolute perfection.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">A</div>
              <div className="author-info">
                <h4>Alexander V.</h4>
                <p>CTO, Finova Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner animate-on-scroll glass">
            <h2>Ready to transform your business?</h2>
            <p>Let's build something remarkable together.</p>
            <Link to="/contact" className="btn btn-primary mt-4">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
