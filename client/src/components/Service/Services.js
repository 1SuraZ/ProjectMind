import React from 'react';
import Layout from '../Layout/Layout';
import './Services.css';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive mental health support tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/therapy.jpg" alt="Therapy Services" />
              <div className="service-content">
                <h3>Therapy Services</h3>
                <p>Professional counseling and therapy sessions with licensed mental health professionals.</p>
                <ul className="service-features">
                  <li>Individual Therapy</li>
                  <li>Couples Counseling</li>
                  <li>Family Therapy</li>
                  <li>Group Sessions</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Schedule a Session</a>
              </div>
            </div>

            <div className="service-card">
              <img src="/images/peer-support.jpg" alt="Peer Support" />
              <div className="service-content">
                <h3>Peer Support</h3>
                <p>Connect with others who understand your journey in a safe, supportive environment.</p>
                <ul className="service-features">
                  <li>Support Groups</li>
                  <li>One-on-One Peer Support</li>
                  <li>Community Events</li>
                  <li>Online Forums</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Join Our Community</a>
              </div>
            </div>

            <div className="service-card">
              <img src="/images/mindfulness.jpg" alt="Mindfulness Programs" />
              <div className="service-content">
                <h3>Mindfulness Programs</h3>
                <p>Learn practical techniques to manage stress and improve mental well-being.</p>
                <ul className="service-features">
                  <li>Meditation Classes</li>
                  <li>Stress Management</li>
                  <li>Mindfulness Training</li>
                  <li>Yoga Sessions</li>
                </ul>
                <a href="/contact" className="btn btn-primary">Explore Programs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">$49<span>/month</span></div>
              <ul className="pricing-features">
                <li>4 Therapy Sessions</li>
                <li>Access to Support Groups</li>
                <li>Basic Mindfulness Resources</li>
                <li>Email Support</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <h3>Premium</h3>
              <div className="price">$99<span>/month</span></div>
              <ul className="pricing-features">
                <li>8 Therapy Sessions</li>
                <li>Priority Support Groups</li>
                <li>Full Mindfulness Program</li>
                <li>24/7 Support</li>
                <li>Personalized Care Plan</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started</a>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul className="pricing-features">
                <li>Unlimited Sessions</li>
                <li>Dedicated Support Team</li>
                <li>Custom Programs</li>
                <li>Team Training</li>
                <li>Analytics Dashboard</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Take the first step towards better mental health today.</p>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
