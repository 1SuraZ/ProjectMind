import React from 'react';
import Layout from '../Layout/Layout';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="legal-page">
        <div className="hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Learn how we collect, use, and protect your personal information.</p>
          </div>
        </div>

        <section className="legal-content">
          <div className="container">
            <h2>Introduction</h2>
            <p>At Mindful, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us for support</li>
              <li>Participate in our services</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information about your device when you use our website, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time and date of visits</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send you updates and communications</li>
              <li>Respond to your inquiries</li>
              <li>Ensure platform security</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors as needed</li>
            </ul>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul>
                <li>Email: privacy@mindful.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Wellness Street, San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 