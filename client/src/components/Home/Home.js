import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Your Journey to Mental Wellness Starts Here</h1>
              <p>
                Discover a supportive community and professional resources to help you navigate your mental health journey with confidence and care.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">Explore Services</Link>
                <Link to="/contact" className="btn btn-secondary">Get Started</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose Mindful?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <h3>Professional Therapy</h3>
                <p>Access licensed therapists and mental health professionals for personalized support.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Peer Support</h3>
                <p>Connect with others who understand your journey in a safe, supportive environment.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Mindfulness Tools</h3>
                <p>Learn practical techniques to manage stress and improve mental well-being.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="services-preview">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/images/therapy.jpg" alt="Therapy Services" />
                <div className="service-content">
                  <h3>Therapy Services</h3>
                  <p>Professional counseling and therapy sessions tailored to your needs.</p>
                  <Link to="/therapy" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
              <div className="service-card">
                <img src="/images/peer-support.jpg" alt="Peer Support" />
                <div className="service-content">
                  <h3>Peer Support</h3>
                  <p>Connect with others who understand your journey.</p>
                  <Link to="/peer-support" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "Mindful has been a game-changer in my mental health journey. The support and resources have been invaluable."
                </div>
                <div className="testimonial-author">
                  <img src="/images/client1.jpg" alt="Sarah M." />
                  <div>
                    <h4>Sarah M.</h4>
                    <p>Client since 2022</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "The peer support groups have helped me feel less alone. I've made meaningful connections and learned so much."
                </div>
                <div className="testimonial-author">
                  <img src="/images/client2.jpg" alt="James T." />
                  <div>
                    <h4>James T.</h4>
                    <p>Client since 2021</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "The mindfulness tools have transformed how I handle stress. I'm more present and at peace with myself."
                </div>
                <div className="testimonial-author">
                  <img src="/images/client3.jpg" alt="Emma R." />
                  <div>
                    <h4>Emma R.</h4>
                    <p>Client since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Journey?</h2>
              <p>
                Take the first step towards better mental health. Our team is here to support you every step of the way.
              </p>
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
