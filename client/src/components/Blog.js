import React from 'react';
import Layout from './Layout';
import './App.css';

const Blog = () => {
  return (
    <Layout>
      <section className="blog-section">
        <div className="container">
          <h1>Our Blog</h1>
          <p>
            Read our latest articles and insights on mental health and wellbeing.
          </p>
          <img src="/images/blog.jpg" alt="Blog" className="blog-image" />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
