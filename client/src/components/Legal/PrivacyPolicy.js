import React from 'react';
import { Layout } from '../Layout/Layout';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="legal-page privacy-policy">
        <div className="hero">
          <div className="hero-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="container">
          <div className="legal-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                ProjectMind ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our mental health services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Date of birth</li>
                <li>Emergency contact details</li>
                <li>Medical history and mental health information</li>
                <li>Insurance information</li>
                <li>Payment information</li>
              </ul>

              <h3>2.2 Usage Information</h3>
              <p>We automatically collect certain information about your device when you use our website:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages you view and time spent</li>
                <li>Referring website</li>
                <li>Operating system</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about appointments and services</li>
                <li>Process your payments</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Analyze and improve our website performance</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing</h2>
              <p>
                We maintain strict confidentiality of your mental health information in accordance with HIPAA 
                and other applicable laws. We may share your information with:
              </p>
              <ul>
                <li>Healthcare providers involved in your care</li>
                <li>Insurance companies for billing purposes</li>
                <li>Legal authorities when required by law</li>
                <li>Service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                information. However, no data transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>

            <section>
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect information 
                from children under 13 without parental consent.
              </p>
            </section>

            <section>
              <h2>8. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="contact-info">
                <p>Email: privacy@projectmind.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Mental Health Street, Wellness City, MC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 