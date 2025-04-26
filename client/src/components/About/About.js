import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>About Mindful</h1>
              <p>Empowering individuals on their mental health journey through comprehensive resources and a supportive community.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section mission-section">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-content">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-text">
                  At Mindful, we believe that mental health is a fundamental aspect of overall well-being. Our mission is to provide accessible, high-quality mental health resources and support to individuals from all walks of life.
                </p>
                <p className="mission-text">
                  We strive to create a safe and inclusive environment where everyone can find the support they need to thrive mentally and emotionally.
                </p>
              </div>
              <div className="mission-image">
                <img src="/images/mission.jpg" alt="Our Mission" className="rounded-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Compassion</h3>
                <p>We approach every individual with empathy and understanding, creating a safe space for healing and growth.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>Privacy</h3>
                <p>We maintain the highest standards of confidentiality and data security to protect our users' information.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Community</h3>
                <p>We foster a supportive community where individuals can connect and share their experiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section team-section">
          <div className="container">
            <h2 className="section-title">Our Expert Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/therapist1.jpg" alt="Dr. Sarah Johnson" />
                </div>
                <div className="team-info">
                  <h3>Dr. Sarah Johnson</h3>
                  <p className="role">Clinical Psychologist</p>
                  <p className="description">Specializing in anxiety, depression, and trauma therapy with over 10 years of experience.</p>
                  <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/therapist2.jpg" alt="Michael Chen" />
                </div>
                <div className="team-info">
                  <h3>Michael Chen</h3>
                  <p className="role">Peer Support Specialist</p>
                  <p className="description">Dedicated to building supportive communities and facilitating group therapy sessions.</p>
                  <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/therapist3.jpg" alt="Emily Rodriguez" />
                </div>
                <div className="team-info">
                  <h3>Emily Rodriguez</h3>
                  <p className="role">Mindfulness Coach</p>
                  <p className="description">Expert in meditation and stress management techniques with a holistic approach to mental wellness.</p>
                  <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Journey?</h2>
              <p>Join our community and take the first step towards better mental health.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Get Started</Link>
                <Link to="/services" className="btn btn-secondary">View Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
