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
    </div>
  );
};

export default Layout;
