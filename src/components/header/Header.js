import React from 'react';
import './header1.css'

const Header = () => {
    return (
        <header className="header-section">
            <div>
                <div className="container header-container">

                    <div className="contain-btn">
                        <button id="menu-button" className="btn-menu" type="button">
                            Menu
                        </button>
                    </div>

                    <div className="logo-container">
                        <a href="/" className="logo-text">
                            PayPal
                        </a>
                    </div>

                    <nav className="main-menu">
                        <ul className="list-1">
                            <li>
                                <a className="personal-link" href="/">
                                    PERSONAL
                                </a>

                            </li>

                            <li>
                                <a className="business-link" href="/">BUSINESS</a>
                            </li>
                            <li>
                                <a href="/" className="dev-link">DEVELOPER</a>
                            </li>
                            <li>
                                <a href="/" className="help-link">HELP</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="signup-login">
                        <div>
                            <a href="/" className="signlogbtns" role="button">Log In</a>

                            <a href="/" className="signlogbtns signup-btn" role="button">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
