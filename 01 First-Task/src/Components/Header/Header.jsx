import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showHeader = () => {
        setIsVisible(true);
    };

    const closeHeader = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="small-header">
                <h1>Logo</h1>
                <button onClick={showHeader}>Show</button>
            </div>

            <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
                <div className="cross" onClick={closeHeader}>
                    X
                </div>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="connect">
                    <button className='btn'>Get Started</button>
                </div>
            </div>
        </>
    );
};

export default Header;
