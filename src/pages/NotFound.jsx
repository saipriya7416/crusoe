import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="page-wrapper notfound-wrapper">
      <div className="container notfound-container animate-fade-up">

        <div className="glitch-number" aria-hidden="true">
          <span>4</span>
          <span className="text-gradient-primary">0</span>
          <span>4</span>
        </div>

        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} className="mr-2" /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <ArrowLeft size={18} className="mr-2" /> Go Back
          </button>
        </div>

        {/* Abstract floating orbs for visual depth */}
        <div className="nf-orb nf-orb-1"></div>
        <div className="nf-orb nf-orb-2"></div>
        <div className="nf-orb nf-orb-3"></div>
      </div>
    </div>
  );
}
