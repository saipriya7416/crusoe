import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-wrapper pt-32">
      <div className="container page-header center animate-fade-up">
        <h1 className="page-title text-gradient">Get In Touch</h1>
        <p className="page-desc">
          Ready to start your next big project? Reach out to our team of experts and let's craft something remarkable.
        </p>
      </div>

      <div className="container pb-24">
        <div className="contact-grid">
          
          {/* Contact Details */}
          <div className="contact-info glass animate-fade-up">
            <h2>Contact Information</h2>
            <p className="contact-sub">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-list">
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>hello@crusoetec.com</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Headquarters</h4>
                  <p>100 Innovation Drive<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="whatsapp-cta mt-4">
              <a href="https://wa.me/15551234567" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                <MessageCircle size={20} className="mr-2" /> Chat on WhatsApp
              </a>
            </div>
            
            <div className="map-placeholder mt-4 glass">
              {/* Abstract Map Visual */}
              <div className="map-visual">
                <div className="map-marker">
                  <div className="pulse-ring"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper glass animate-fade-up delay-200">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@company.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="">Select a subject...</option>
                  <option value="project">New Project Inquiry</option>
                  <option value="career">Career Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button type="button" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
