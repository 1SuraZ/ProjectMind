import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Unlock Your Mental Wellbeing</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Mindful is a comprehensive platform dedicated to empowering individuals on their mental health journey.
                Explore our range of services and discover the path to a healthier, more balanced life.
              </p>
              <div className="flex space-x-4">
                <button className="primary-button">Get Started</button>
                <button className="secondary-button">Learn More</button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Mindful Platform"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center justify-center rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                {/* Replace with the appropriate icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Therapy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with licensed therapists and embark on a personalized journey to mental wellness.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/therapy">
                Learn More
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                {/* Replace with the appropriate icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Peer Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join our supportive community and find solace in shared experiences and mutual understanding.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/peer-support">
                Learn More
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                {/* Replace with the appropriate icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Be Mindful</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our collection of guided meditations, breathing exercises, and spiritual practices.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/be-mindful">
                Learn More
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                {/* Replace with the appropriate icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Astrology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover the cosmic insights that can guide your personal growth and self-understanding.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/astrology">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Hear from Our Satisfied Users</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Discover how Mindful has transformed the lives of individuals on their mental health journey.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <blockquote className="space-y-2">
                  <p className="text-gray-900 dark:text-gray-50">
                    "Mindful has been a game-changer for me. The therapists are incredible, and the peer support
                    community has been a lifeline."
                  </p>
                  <cite className="text-gray-600 dark:text-gray-400">- Emma, 32</cite>
                </blockquote>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <blockquote className="space-y-2">
                  <p className="text-gray-900 dark:text-gray-50">
                    "I've been practicing mindfulness and meditation through Mindful, and it's truly transformed my
                    mental well-being. Highly recommended!"
                  </p>
                  <cite className="text-gray-600 dark:text-gray-400">- Michael, 45</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Get answers to the most common questions about Mindful.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/faq">
                View FAQ
              </Link>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Resources</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our collection of articles, guides, and tools to support your mental health journey.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/resources">
                View Resources
              </Link>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Join Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Become a part of our community as a therapist or astrologer.
              </p>
              <Link className="text-primary-500 hover:underline dark:text-primary-400" to="/join">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
