import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <Link className="logo" to="/">Mindful</Link>
          <nav className="nav">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/therapy">Therapy</Link>
            <Link to="/peer-support">Peer Support</Link>
            <Link to="/be-mindful">Be Mindful</Link>
            <Link to="/astrology">Astrology</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <Link className="signup-button" to="/signup">Sign Up</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-left">
            <h3>Mindful</h3>
            <p>Empowering individuals on their mental health journey.</p>
          </div>
          <div className="footer-center">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/therapy">Therapy</Link></li>
              <li><Link to="/peer-support">Peer Support</Link></li>
              <li><Link to="/be-mindful">Be Mindful</Link></li>
              <li><Link to="/astrology">Astrology</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Mindful. All rights reserved. <Link to="/accessibility">Accessibility</Link> <Link to="/terms">Terms of Service</Link> <Link to="/privacy">Privacy Policy</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
