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
            <p>Empowering individuals on their mental health journey through comprehensive resources and a supportive community.</p>
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
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <button className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </button>
              <button className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </button>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> info@mindful.com</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
            </div>
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