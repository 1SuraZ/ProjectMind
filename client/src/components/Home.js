import React from 'react';
import Layout from './Layout';
import './App.css';

const Home = () => {
  return (
    <Layout>
      <section className="intro-section">
        <div className="container">
          <h1>Unlock Your Mental Wellbeing</h1>
          <p>
            Mindful is a comprehensive platform dedicated to empowering individuals on their mental health journey.
            Explore our range of services and discover the path to a healthier, more balanced life.
          </p>
          <div className="buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="service">
            <div className="icon-wrapper"><img src="/icons/therapy.png" alt="Therapy Icon"/></div>
            <h3>Therapy</h3>
            <p>
              Connect with licensed therapists and embark on a personalized journey to mental wellness.
            </p>
            <a href="/therapy">Learn More</a>
          </div>
          <div className="service">
            <div className="icon-wrapper"><img src="/icons/peer_support.png" alt="Peer Support Icon"/></div>
            <h3>Peer Support</h3>
            <p>
              Join our supportive community and find solace in shared experiences and mutual understanding.
            </p>
            <a href="/peer-support">Learn More</a>
          </div>
          <div className="service">
            <div className="icon-wrapper"><img src="/icons/be_mindful.png" alt="Be Mindful Icon"/></div>
            <h3>Be Mindful</h3>
            <p>
              Explore our collection of guided meditations, breathing exercises, and spiritual practices.
            </p>
            <a href="/be-mindful">Learn More</a>
          </div>
          <div className="service">
            <div className="icon-wrapper"><img src="/icons/astrology.png" alt="Astrology Icon"/></div>
            <h3>Astrology</h3>
            <p>
              Discover the cosmic insights that can guide your personal growth and self-understanding.
            </p>
            <a href="/astrology">Learn More</a>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <h2>Hear from Our Satisfied Users</h2>
          <p>Discover how Mindful has transformed the lives of individuals on their mental health journey.</p>
          <div className="testimonial">
            <blockquote>
              <p>
                "Mindful has been a game-changer for me. The therapists are incredible, and the peer support
                community has been a lifeline."
              </p>
              <cite>- Emma, 32</cite>
            </blockquote>
          </div>
          <div className="testimonial">
            <blockquote>
              <p>
                "I've been practicing mindfulness and meditation through Mindful, and it's truly transformed my
                mental well-being. Highly recommended!"
              </p>
              <cite>- Michael, 45</cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="faq-resources-join-section">
        <div className="container">
          <div className="faq">
            <h3>Frequently Asked Questions</h3>
            <p>Get answers to the most common questions about Mindful.</p>
            <a href="/faq">View FAQ</a>
          </div>
          <div className="resources">
            <h3>Resources</h3>
            <p>Explore our collection of articles, guides, and tools to support your mental health journey.</p>
            <a href="/resources">View Resources</a>
          </div>
          <div className="join-us">
            <h3>Join Us</h3>
            <p>Become a part of our community as a therapist or astrologer.</p>
            <a href="/join">Learn More</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
