import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="page-wrapper thankyou-wrapper">
      <div className="container thankyou-container animate-fade-up">
        <div className="check-icon-wrapper">
          <CheckCircle size={64} className="check-icon" />
          <div className="check-glow"></div>
        </div>

        <h1 className="thankyou-title">Message Received!</h1>
        <p className="thankyou-desc">
          Thank you for reaching out to Crusoe Technologies. Our team will review your message and get back to you within <strong>24 hours</strong>.
        </p>

        <div className="thankyou-actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/services" className="btn btn-secondary">Explore Services</Link>
        </div>

        <div className="thankyou-footer-note">
          In the meantime, check out our latest insights on the{' '}
          <Link to="/blog" className="inline-link">Crusoe Blog</Link>.
        </div>
      </div>
    </div>
  );
}
