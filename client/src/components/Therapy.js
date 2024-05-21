import React from 'react';
import Layout from './Layout';
import './App.css';

const Therapy = () => {
  return (
    <Layout>
      <section className="therapy-section">
        <div className="container">
          <h1>Therapy</h1>
          <p>
            Connect with licensed therapists and embark on a personalized journey to mental wellness.
          </p>
          <img src="/images/therapy.jpg" alt="Therapy" className="therapy-image" />
        </div>
      </section>
    </Layout>
  );
};

export default Therapy;
