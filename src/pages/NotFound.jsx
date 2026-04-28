import { useState } from 'react';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="page-wrapper notfound-wrapper">
      {/* Animated background grid */}
      <div className="nf-grid-bg"></div>

      <div className="container notfound-container animate-fade-up">
        {/* Animated floating shapes */}
        <div className="nf-shapes">
          <div className="nf-shape nf-shape-1"></div>
          <div className="nf-shape nf-shape-2"></div>
          <div className="nf-shape nf-shape-3"></div>
          <div className="nf-shape nf-shape-4"></div>
          <div className="nf-shape nf-shape-5"></div>
        </div>

        {/* 404 Number */}
        <div className="glitch-number" aria-hidden="true">
          <span className="digit digit-4-left">4</span>
          <span className="digit digit-0">
            <Compass size={80} className="compass-icon" />
          </span>
          <span className="digit digit-4-right">4</span>
        </div>

        <h1 className="notfound-title">
          Oops! Page not found
        </h1>
        <p className="notfound-desc">
          The page you're looking for seems to have wandered off into the digital void. 
          Don't worry — even the best explorers take a wrong turn sometimes.
        </p>

        {/* Search Bar */}
        <form className="nf-search-form" onSubmit={handleSearch}>
          <div className="nf-search-wrapper">
            <Search size={18} className="nf-search-icon" />
            <input
              type="text"
              placeholder="Search for something..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="nf-search-input"
              id="notfound-search"
            />
            <button type="submit" className="nf-search-btn">
              Search
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary" id="notfound-home">
            <Home size={18} /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary" id="notfound-back">
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="nf-quick-links">
          <p className="nf-quick-title">Or try these popular pages:</p>
          <div className="nf-links-row">
            <Link to="/services" className="nf-link">Services</Link>
            <Link to="/about" className="nf-link">About Us</Link>
            <Link to="/blog" className="nf-link">Blog</Link>
            <Link to="/contact" className="nf-link">Contact</Link>
          </div>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="nf-orb nf-orb-1"></div>
      <div className="nf-orb nf-orb-2"></div>
      <div className="nf-orb nf-orb-3"></div>
    </div>
  );
}
