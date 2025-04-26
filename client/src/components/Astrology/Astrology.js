import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import './Astrology.css';

const Astrology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Astrology & Mental Wellness</h1>
            <p>Discover how astrology can provide insights into your mental health journey and personal growth.</p>
            <div className="hero-actions">
              <Link to="/birth-chart" className="btn btn-primary">Get Your Birth Chart</Link>
              <Link to="/readings" className="btn btn-secondary">Book a Reading</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Astrology Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Birth Chart Analysis</h3>
              <p>Deep dive into your natal chart to understand your personality, strengths, and challenges.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h3>Transit Readings</h3>
              <p>Explore how current planetary movements affect your mental and emotional well-being.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-sync"></i>
              </div>
              <h3>Relationship Synastry</h3>
              <p>Understand relationship dynamics through astrological compatibility analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">How Astrology Can Help</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Self-Awareness</h3>
              <p>Gain deeper insights into your personality traits and behavioral patterns.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Emotional Understanding</h3>
              <p>Learn about your emotional needs and how to nurture them effectively.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Personal Growth</h3>
              <p>Identify areas for growth and development in your life journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore Your Cosmic Blueprint?</h2>
            <p>Start your journey of self-discovery through astrology today.</p>
            <Link to="/birth-chart" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Astrology;
