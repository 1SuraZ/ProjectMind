import React from 'react';
import Layout from '../Layout';

const BeMindful = () => {
  return (
    <Layout>
      <section className="be-mindful-section">
        <div className="container">
          <h1>Be Mindful</h1>
          <p className="lead">
            Discover the transformative power of mindfulness through our curated collection
            of guided meditations, breathing exercises, and spiritual practices designed
            to enhance your mental wellbeing.
          </p>

          <div className="mindfulness-features">
            <div className="feature">
              <h3>Guided Meditations</h3>
              <p>Access a library of guided meditation sessions for various needs.</p>
              <ul>
                <li>Stress Reduction</li>
                <li>Sleep Improvement</li>
                <li>Anxiety Management</li>
                <li>Focus Enhancement</li>
              </ul>
              <button className="secondary-button">Start Meditating</button>
            </div>

            <div className="feature">
              <h3>Breathing Exercises</h3>
              <p>Learn and practice different breathing techniques for relaxation.</p>
              <ul>
                <li>Box Breathing</li>
                <li>4-7-8 Technique</li>
                <li>Diaphragmatic Breathing</li>
                <li>Alternate Nostril Breathing</li>
              </ul>
              <button className="secondary-button">Try Exercises</button>
            </div>

            <div className="feature">
              <h3>Mindfulness Tools</h3>
              <p>Access resources to support your mindfulness practice.</p>
              <ul>
                <li>Daily Reminders</li>
                <li>Progress Tracking</li>
                <li>Journal Prompts</li>
                <li>Community Challenges</li>
              </ul>
              <button className="secondary-button">Explore Tools</button>
            </div>
          </div>

          <div className="daily-practice">
            <h2>Daily Mindfulness Practice</h2>
            <div className="practice-schedule">
              <div className="time-slot">
                <h3>Morning</h3>
                <p>Start your day with intention</p>
                <ul>
                  <li>5-minute breathing exercise</li>
                  <li>Gratitude journaling</li>
                  <li>Mindful movement</li>
                </ul>
              </div>
              <div className="time-slot">
                <h3>Afternoon</h3>
                <p>Reset and recharge</p>
                <ul>
                  <li>Body scan meditation</li>
                  <li>Mindful walking</li>
                  <li>Stress relief techniques</li>
                </ul>
              </div>
              <div className="time-slot">
                <h3>Evening</h3>
                <p>Wind down and reflect</p>
                <ul>
                  <li>Progressive relaxation</li>
                  <li>Sleep meditation</li>
                  <li>Daily reflection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mindfulness-resources">
            <h2>Learning Resources</h2>
            <div className="resource-grid">
              <div className="resource">
                <h3>Articles</h3>
                <p>Read about mindfulness techniques and benefits</p>
                <button className="secondary-button">Browse Articles</button>
              </div>
              <div className="resource">
                <h3>Videos</h3>
                <p>Watch guided practices and tutorials</p>
                <button className="secondary-button">Watch Videos</button>
              </div>
              <div className="resource">
                <h3>Podcasts</h3>
                <p>Listen to mindfulness discussions and guided sessions</p>
                <button className="secondary-button">Listen Now</button>
              </div>
            </div>
          </div>

          <div className="community-section">
            <h2>Join Our Mindfulness Community</h2>
            <p>Connect with others on their mindfulness journey</p>
            <div className="community-features">
              <div className="feature">
                <h3>Group Sessions</h3>
                <p>Participate in live guided meditation sessions</p>
              </div>
              <div className="feature">
                <h3>Discussion Forums</h3>
                <p>Share experiences and learn from others</p>
              </div>
              <div className="feature">
                <h3>Challenges</h3>
                <p>Join community mindfulness challenges</p>
              </div>
            </div>
            <button className="primary-button">Join Community</button>
          </div>

          <div className="testimonials">
            <h2>Success Stories</h2>
            <div className="testimonial">
              <blockquote>
                "The daily mindfulness practices have transformed how I handle stress
                and improved my overall wellbeing significantly."
              </blockquote>
              <cite>- David, 29</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                "I never thought I could meditate, but the guided sessions made it
                accessible and enjoyable. It's now an essential part of my routine."
              </blockquote>
              <cite>- Lisa, 42</cite>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BeMindful;
