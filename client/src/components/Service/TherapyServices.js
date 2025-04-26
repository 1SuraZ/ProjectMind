import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import './Services.css';

const TherapyServices = () => {
  const therapyTypes = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists tailored to your unique needs.",
      benefits: ["Personalized attention", "Confidential environment", "Flexible scheduling", "Custom treatment plans"],
      icon: "user"
    },
    {
      title: "Couples Counseling",
      description: "Professional guidance for couples seeking to strengthen their relationship.",
      benefits: ["Improve communication", "Resolve conflicts", "Rebuild trust", "Strengthen bonds"],
      icon: "heart"
    },
    {
      title: "Family Therapy",
      description: "Sessions designed to improve family dynamics and relationships.",
      benefits: ["Better understanding", "Healthier boundaries", "Conflict resolution", "Stronger family unit"],
      icon: "users"
    },
    {
      title: "Cognitive Behavioral Therapy",
      description: "Evidence-based approach to identify and change negative thought patterns.",
      benefits: ["Practical strategies", "Long-term results", "Skill development", "Emotional regulation"],
      icon: "brain"
    }
  ];

  return (
    <Layout>
      <div className="service-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Therapy Services</h1>
              <p>Professional mental health support tailored to your unique journey</p>
              <Link to="/contact" className="btn btn-primary">Schedule a Session</Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="therapy-types-grid">
              {therapyTypes.map((type, index) => (
                <div key={index} className="therapy-card">
                  <div className="therapy-icon">
                    <i className={`fas fa-${type.icon}`}></i>
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  <ul className="benefits-list">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx}><i className="fas fa-check"></i> {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section process-section">
          <div className="container">
            <h2 className="section-title">Our Therapy Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>Free 15-minute consultation to understand your needs and match you with the right therapist.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Assessment</h3>
                <p>Comprehensive evaluation to develop a personalized treatment plan.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Regular Sessions</h3>
                <p>Weekly or bi-weekly sessions with your dedicated therapist.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Progress Review</h3>
                <p>Regular check-ins to assess progress and adjust treatment as needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section pricing-section">
          <div className="container">
            <h2 className="section-title">Therapy Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Individual Session</h3>
                <div className="price">$120<span>/session</span></div>
                <ul>
                  <li>60-minute session</li>
                  <li>One-on-one attention</li>
                  <li>Session summary</li>
                  <li>Resource materials</li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Book Now</Link>
              </div>
              <div className="pricing-card featured">
                <h3>Monthly Package</h3>
                <div className="price">$400<span>/month</span></div>
                <ul>
                  <li>4 sessions per month</li>
                  <li>Email support</li>
                  <li>Progress tracking</li>
                  <li>Priority scheduling</li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Get Started</Link>
              </div>
              <div className="pricing-card">
                <h3>Couples/Family</h3>
                <div className="price">$150<span>/session</span></div>
                <ul>
                  <li>90-minute session</li>
                  <li>Relationship assessment</li>
                  <li>Communication tools</li>
                  <li>Joint session notes</li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Healing Journey?</h2>
              <p>Take the first step towards better mental health with our professional therapy services.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Schedule Consultation</Link>
                <Link to="/services" className="btn btn-secondary">Explore Other Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TherapyServices; 