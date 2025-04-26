import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section main-section">
          <h3>Mindful</h3>
          <p>Empowering individuals on their mental health journey through comprehensive resources and a supportive community.</p>
          <div className="social-links">
            <a href="https://facebook.com/mindful" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/mindful" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/mindful" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/mindful" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/therapy">Therapy Services</Link></li>
            <li><Link to="/services/peer-support">Peer Support</Link></li>
            <li><Link to="/services/mindfulness">Mindfulness Programs</Link></li>
            <li><Link to="/services/group-sessions">Group Sessions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/be-mindful">Be Mindful</Link></li>
            <li><Link to="/astrology">Astrology</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <a href="mailto:info@mindful.com">info@mindful.com</a>
            </li>
            <li>
              <a href="tel:+15551234567">(555) 123-4567</a>
            </li>
            <li>
              <address>123 Wellness Street, San Francisco, CA 94107</address>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 