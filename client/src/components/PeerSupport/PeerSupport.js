import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import './PeerSupport.css';

const PeerSupport = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Peer Support Community</h1>
            <p>Connect with others who understand your journey. Share experiences, find support, and grow together.</p>
            <div className="hero-actions">
              <Link to="/join" className="btn btn-primary">Join Our Community</Link>
              <Link to="/groups" className="btn btn-secondary">View Support Groups</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Join Our Community?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Safe Space</h3>
              <p>A judgment-free environment where you can share your experiences openly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Access to a supportive community whenever you need it, day or night.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Shared Experiences</h3>
              <p>Connect with others who truly understand what you're going through.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Groups Section */}
      <section className="section groups-section">
        <div className="container">
          <h2 className="section-title">Support Groups</h2>
          <div className="groups-grid">
            <div className="group-card">
              <div className="group-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Anxiety Support</h3>
              <p>Weekly meetings for those dealing with anxiety and related challenges.</p>
              <Link to="/groups/anxiety" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="group-card">
              <div className="group-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Depression Support</h3>
              <p>Support and resources for managing depression and mood disorders.</p>
              <Link to="/groups/depression" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="group-card">
              <div className="group-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Trauma Recovery</h3>
              <p>A safe space for healing and recovery from traumatic experiences.</p>
              <Link to="/groups/trauma" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Connect?</h2>
            <p>Join our supportive community and start your journey to better mental health.</p>
            <Link to="/join" className="btn btn-primary">Join Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PeerSupport;
