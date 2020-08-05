import React from 'react';

const Header = () => {
    return (

        <header className="header-section">
            <div>
                <div className="header-container container">

                    <div className="contain-btn">
                        <button className="btn-menu" type="button">
                            Menu
                        </button>
                    </div>

                    <div className="logo-container">
                        <a href="/" className="logo-text logo-url">
                            PayPal
                        </a>
                    </div>

                    <nav className="main-menu">
                        <ul className="list-1">
                            <li>
                                <a className="main-link personal-link" href="/">
                                    Personal
                                </a>

                            </li>

                            <li>
                                <a className="main-link business-link" href="/">Business</a>
                            </li>
                            <li>
                                <a href="/" className="main-link dev-link">Developer</a>
                            </li>
                            <li>
                                <a href="/" className="main-link help-link">Help</a>
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
