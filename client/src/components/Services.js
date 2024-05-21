import React from 'react';
import Layout from './Layout';
import './App.css';

const Services = () => {
  return (
    <Layout>
      <section className="services-section">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Explore the variety of services we offer to support your mental health and wellbeing.
          </p>
          <img src="/images/services.jpg" alt="Our Services" className="services-image" />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
