import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations sequentially
    const elements = containerRef.current?.querySelectorAll('.ty-animate');
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('ty-visible');
      }, 300 + i * 150);
    });
  }, []);

  return (
    <div className="page-wrapper thankyou-wrapper" ref={containerRef}>
      {/* Animated background */}
      <div className="ty-bg-pattern"></div>

      <div className="container thankyou-container">
        {/* Animated success icon */}
        <div className="ty-icon-wrapper ty-animate">
          <div className="ty-icon-ring ty-ring-1"></div>
          <div className="ty-icon-ring ty-ring-2"></div>
          <div className="ty-icon-ring ty-ring-3"></div>
          <div className="ty-check-circle">
            <CheckCircle size={48} className="ty-check-icon" />
          </div>
          <div className="ty-particles">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="ty-particle" style={{ '--angle': `${i * 45}deg` }}></span>
            ))}
          </div>
        </div>

        {/* Main message */}
        <h1 className="thankyou-title ty-animate">
          Thank You!
        </h1>
        <p className="thankyou-subtitle ty-animate">
          Your submission has been received.
        </p>

        {/* Next steps */}
        <div className="ty-steps ty-animate">
          <div className="ty-step-card glass">
            <div className="ty-step-number">1</div>
            <div>
              <h4>Confirmation Sent</h4>
              <p>A confirmation email has been sent to your inbox.</p>
            </div>
          </div>
          <div className="ty-step-card glass">
            <div className="ty-step-number">2</div>
            <div>
              <h4>Team Review</h4>
              <p>Our team will review your request within 24 hours.</p>
            </div>
          </div>
          <div className="ty-step-card glass">
            <div className="ty-step-number">3</div>
            <div>
              <h4>We'll Contact You</h4>
              <p>A dedicated specialist will reach out to discuss next steps.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="thankyou-actions ty-animate">
          <Link to="/" className="btn btn-primary" id="thankyou-home">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-secondary" id="thankyou-services">
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="ty-contact-section ty-animate">
          <p className="ty-contact-label">Need immediate assistance?</p>
          <div className="ty-contact-cards">
            <a href="mailto:hello@crusoe.tech" className="ty-contact-chip">
              <Mail size={16} />
              <span>hello@crusoe.tech</span>
            </a>
            <a href="tel:+18005551234" className="ty-contact-chip">
              <Phone size={16} />
              <span>+1 (800) 555-1234</span>
            </a>
            <Link to="/contact" className="ty-contact-chip">
              <MessageCircle size={16} />
              <span>Live Chat</span>
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="thankyou-footer-note ty-animate">
          In the meantime, explore our latest insights on the{' '}
          <Link to="/blog" className="inline-link">Crusoe Blog</Link>.
        </div>
      </div>

      {/* Decorative */}
      <div className="ty-orb ty-orb-1"></div>
      <div className="ty-orb ty-orb-2"></div>
    </div>
  );
}
