import React from 'react';
import Layout from './Layout';
import './App.css';

const BeMindful = () => {
  return (
    <Layout>
      <section className="be-mindful-section">
        <div className="container">
          <h1>Be Mindful</h1>
          <p>
            Explore our collection of guided meditations, breathing exercises, and spiritual practices.
          </p>
          <img src="/images/be_mindful.jpg" alt="Be Mindful" className="be-mindful-image" />
        </div>
      </section>
    </Layout>
  );
};

export default BeMindful;
