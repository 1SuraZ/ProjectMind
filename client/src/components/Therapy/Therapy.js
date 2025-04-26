import React from 'react';
import Layout from '../Layout/Layout';
import './Therapy.css';
import { Link } from 'react-router-dom';

const Therapy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Therapy Services</h1>
            <p>Access licensed therapists and mental health professionals for personalized support and guidance.</p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary">Book a Session</Link>
              <Link to="/therapists" className="btn btn-secondary">Meet Our Therapists</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Therapy Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Individual Therapy</h3>
              <p>One-on-one sessions with licensed therapists for personalized mental health support.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Couples Therapy</h3>
              <p>Strengthen your relationship with professional guidance and support.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-child"></i>
              </div>
              <h3>Family Therapy</h3>
              <p>Improve family dynamics and communication with expert assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose Your Therapist</h3>
              <p>Browse our network of licensed professionals and find the right match for you.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Book Your Session</h3>
              <p>Schedule a session at a time that works for you, either online or in-person.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Start Your Journey</h3>
              <p>Begin your path to better mental health with professional support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Healing Journey?</h2>
            <p>Take the first step towards better mental health today.</p>
            <Link to="/book" className="btn btn-primary">Book Your First Session</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Therapy;
