import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import './about.css';  // Ensure this path is correct

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <h1 className="error-heading">Oops!!!</h1>
      <h2 className="error-subheading">Something went wrong!</h2>
      <div className="error-details">
        <h3>{error.statusText || error.message}</h3>
        <h4>{error.status}</h4>
      </div>
      <div className="error-actions">
        <Link to="/" className="error-link">
          Go Back to Home
        </Link>
        <button className="error-btn" onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
