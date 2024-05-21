import React from 'react';
import Layout from '../Layout';

const Astrology = () => {
  return (
    <Layout>
      <section className="astrology-section">
        <div className="container">
          <h1>Astrology</h1>
          <p>
            Discover the cosmic insights that can guide your personal growth and self-understanding.
          </p>
          <img src="/images/astrology.jpg" alt="Astrology" className="astrology-image" />
        </div>
      </section>
    </Layout>
  );
};

export default Astrology;
