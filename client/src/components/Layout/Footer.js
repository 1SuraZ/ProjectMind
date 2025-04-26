import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mindful</h3>
            <p>Supporting your mental health journey with professional care and community support.</p>
            <div className="social-links">
              <a href="https://facebook.com/mindful" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/mindful" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/mindful" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/mindful" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/therapy">Therapy</Link></li>
              <li><Link to="/peer-support">Peer Support</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/be-mindful">Be Mindful</Link></li>
              <li><Link to="/astrology">Astrology</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@mindful.com">info@mindful.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Wellness Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mindful. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 