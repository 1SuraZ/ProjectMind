import React from 'react';
import Layout from '../Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for any inquiries or support.
          </p>
          <img src="/images/contact.jpg" alt="Contact Us" className="contact-image" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
