import React from 'react';
import Layout from './Layout';
import './App.css';

const PeerSupport = () => {
  return (
    <Layout>
      <section className="peer-support-section">
        <div className="container">
          <h1>Peer Support</h1>
          <p>
            Join our supportive community and find solace in shared experiences and mutual understanding.
          </p>
          <img src="/images/peer_support.jpg" alt="Peer Support" className="peer-support-image" />
        </div>
      </section>
    </Layout>
  );
};

export default PeerSupport;
