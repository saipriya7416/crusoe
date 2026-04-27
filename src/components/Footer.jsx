import { Link } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <Hexagon className="logo-icon" size={28} />
              <span className="logo-text">Crusoe</span>
            </Link>
            <p className="footer-desc">
              Building next-generation software services with premium design, cutting-edge technology, and unparalleled performance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="social-link" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/news">News</Link>
              <Link to="/contact">Contact</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <Link to="/services">Software Development</Link>
              <Link to="/services">Cloud Architecture</Link>
              <Link to="/services">UI/UX Design</Link>
              <Link to="/services">Data Engineering</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Crusoe Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
