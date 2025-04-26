import React from 'react';
import Layout from '../Layout';

const Blog = () => {
  return (
    <Layout>
      <section className="blog-section">
        <div className="container">
          <h1>Mindful Blog</h1>
          <p className="lead">
            Explore our collection of articles, insights, and resources on mental health,
            mindfulness, and personal growth. Our expert contributors share their knowledge
            and experiences to support your journey to wellbeing.
          </p>

          <div className="featured-posts">
            <h2>Featured Articles</h2>
            <div className="post-grid">
              <div className="post-card">
                <img src="/images/blog1.jpg" alt="Understanding Anxiety" />
                <div className="post-content">
                  <h3>Understanding Anxiety: A Comprehensive Guide</h3>
                  <p className="post-meta">By Dr. Sarah Johnson | May 15, 2023</p>
                  <p>Learn about different types of anxiety and effective coping strategies...</p>
                  <button className="secondary-button">Read More</button>
                </div>
              </div>
              <div className="post-card">
                <img src="/images/blog2.jpg" alt="Mindfulness Meditation" />
                <div className="post-content">
                  <h3>The Science of Mindfulness Meditation</h3>
                  <p className="post-meta">By Michael Chen | May 10, 2023</p>
                  <p>Discover how mindfulness meditation affects the brain and improves wellbeing...</p>
                  <button className="secondary-button">Read More</button>
                </div>
              </div>
              <div className="post-card">
                <img src="/images/blog3.jpg" alt="Self-Care" />
                <div className="post-content">
                  <h3>Self-Care: More Than Just Bubble Baths</h3>
                  <p className="post-meta">By Emily Rodriguez | May 5, 2023</p>
                  <p>Explore meaningful self-care practices that truly nourish your mind and soul...</p>
                  <button className="secondary-button">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-categories">
            <h2>Categories</h2>
            <div className="category-grid">
              <div className="category">
                <h3>Mental Health</h3>
                <p>Articles about mental health conditions and treatments</p>
                <button className="secondary-button">Browse</button>
              </div>
              <div className="category">
                <h3>Mindfulness</h3>
                <p>Guides and insights on mindfulness practices</p>
                <button className="secondary-button">Browse</button>
              </div>
              <div className="category">
                <h3>Personal Growth</h3>
                <p>Resources for self-improvement and development</p>
                <button className="secondary-button">Browse</button>
              </div>
              <div className="category">
                <h3>Relationships</h3>
                <p>Advice on building healthy relationships</p>
                <button className="secondary-button">Browse</button>
              </div>
            </div>
          </div>

          <div className="popular-topics">
            <h2>Popular Topics</h2>
            <div className="topic-tags">
              <span className="tag">Anxiety</span>
              <span className="tag">Depression</span>
              <span className="tag">Meditation</span>
              <span className="tag">Stress Management</span>
              <span className="tag">Self-Care</span>
              <span className="tag">Mindfulness</span>
              <span className="tag">Therapy</span>
              <span className="tag">Personal Growth</span>
            </div>
          </div>

          <div className="expert-contributors">
            <h2>Our Expert Contributors</h2>
            <div className="contributor-grid">
              <div className="contributor">
                <img src="/images/contributor1.jpg" alt="Dr. Sarah Johnson" />
                <h3>Dr. Sarah Johnson</h3>
                <p>Clinical Psychologist</p>
                <p>Specializing in anxiety and trauma</p>
              </div>
              <div className="contributor">
                <img src="/images/contributor2.jpg" alt="Michael Chen" />
                <h3>Michael Chen</h3>
                <p>Mindfulness Coach</p>
                <p>Meditation and stress reduction</p>
              </div>
              <div className="contributor">
                <img src="/images/contributor3.jpg" alt="Emily Rodriguez" />
                <h3>Emily Rodriguez</h3>
                <p>Relationship Counselor</p>
                <p>Family and couples therapy</p>
              </div>
            </div>
          </div>

          <div className="newsletter-signup">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest articles and resources</p>
            <div className="signup-form">
              <input type="email" placeholder="Enter your email" />
              <button className="primary-button">Subscribe</button>
            </div>
          </div>

          <div className="blog-archive">
            <h2>Archive</h2>
            <div className="archive-list">
              <div className="archive-item">
                <h3>May 2023</h3>
                <ul>
                  <li>Understanding Anxiety: A Comprehensive Guide</li>
                  <li>The Science of Mindfulness Meditation</li>
                  <li>Self-Care: More Than Just Bubble Baths</li>
                </ul>
              </div>
              <div className="archive-item">
                <h3>April 2023</h3>
                <ul>
                  <li>Building Resilience in Challenging Times</li>
                  <li>The Power of Gratitude Practice</li>
                  <li>Navigating Relationship Conflicts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
