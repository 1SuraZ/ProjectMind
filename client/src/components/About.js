import React from 'react';
import Layout from './Layout';
import './App.css';

const About = () => {
  return (
    <Layout>
      <section className="about-section">
        <div className="container">
          <h1>About Us</h1>
          <p>
            At Mindful, our mission is to empower individuals on their mental health journey by providing comprehensive resources and a supportive community.
          </p>
          <img src="/images/about_us.jpg" alt="About Us" className="about-image" />
        </div>
      </section>
    </Layout>
  );
};

export default About;
