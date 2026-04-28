import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setCompanyOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">Crusoe</span>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/services" className="nav-link">Services</Link>

          {/* Company dropdown */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link nav-dropdown-btn"
              onClick={() => setCompanyOpen(!companyOpen)}
              aria-expanded={companyOpen}
            >
              Company <ChevronDown size={14} className={`dropdown-chevron ${companyOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu glass ${companyOpen ? 'open' : ''}`}>
              <Link to="/about" className="dropdown-item">About Us</Link>
              <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
              <Link to="/news" className="dropdown-item">News</Link>
              <Link to="/careers" className="dropdown-item">Careers</Link>
            </div>
          </div>

          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary nav-btn">Get Started</Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
