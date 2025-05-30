import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/contact" className="btn btn-outline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 