// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'; // Import CSS for styling

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>It seems you have encountered a broken link or a page that doesn't exist.</p>
            <Link to="/" className="home-link">Go to Home</Link>
        </div>
    );
};

export default NotFound;
