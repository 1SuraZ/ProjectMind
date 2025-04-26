import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import './Legal.css';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      content: `We provide an online platform connecting users with mental health professionals. Our services include but are not limited to online therapy sessions, messaging, and educational resources.`
    },
    {
      id: 'eligibility',
      title: 'User Eligibility',
      content: `You must be at least 18 years old to use our services. By using our services, you represent and warrant that you have the right, authority, and capacity to enter into these terms.`
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.`
    },
    {
      id: 'conduct',
      title: 'User Conduct',
      content: `You agree to use our services in accordance with these terms and applicable laws. You will not engage in any behavior that could harm, disable, or impair our services.`
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Layout>
      <div className="legal-page">
        <div className="hero">
          <div className="container">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using our services. These terms govern your use of our platform.</p>
          </div>
        </div>

        <div className="legal-container">
          <aside className="table-of-contents">
            <h3>Contents</h3>
            <ul className="toc-list">
              {sections.map(section => (
                <li key={section.id} className="toc-item">
                  <button
                    className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="legal-content">
            {sections.map(section => (
              <div key={section.id} id={section.id}>
                <h2 
                  className="section-title"
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                  <span>{activeSection === section.id ? '−' : '+'}</span>
                </h2>
                <div className={`section-content ${activeSection === section.id ? 'active' : ''}`}>
                  <p>{section.content}</p>
                </div>
              </div>
            ))}

            <div className="contact-info">
              <h3>Need Help?</h3>
              <p>If you have any questions about these terms, please contact our support team.</p>
            </div>
          </main>
        </div>

        <button 
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </Layout>
  );
};

export default TermsOfService; 