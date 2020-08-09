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
                                <a className="main-link personal-link header__subnav-control main-link header__subnav-control--is-active header__subnav-control--is-highlighted
                                " href="/">
                                    Personal
                                </a>

                                <div class="submenu-wrapper" id="submenu-Personal" aria-labelledby="header-Personal" role="region">

                                    <div class="container">

                                        <div class="header-section__subnav">

                                            <div class="submenu-cols">

                                                <ul class="submenu-col">
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/how-paypal-works/overview" data-pa-click="HeaderSubnav0-Link-What is PayPal?" pa-marked="1">
                                                            What is PayPal?
                                <em>Learn how PayPal works in your everyday life</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/pay-online" data-pa-click="HeaderSubnav1-Link-Check Out Securely Online" pa-marked="1">

                                                            Check Out Securely Online
                                <em>Use your credit cards or other funds</em>

                                                        </a>
                                                    </li>
                                                </ul>

                                                <ul class="submenu-col">
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/credit-line-and-card-services" data-pa-click="HeaderSubnav2-Link-PayPal Credit &amp; Cards" pa-marked="1">
                                                            PayPal Credit &amp;
                                                            Cards
                                <em>Our credit, debit, prepaid cards &amp; PayPal Credit</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/mobile-apps/paypal-app" data-pa-click="HeaderSubnav3-Link-PayPal App" pa-marked="1">\
                                                        PayPal App
                                <em>Transfer money and track activity with our app</em>
                                                        </a>
                                                    </li>
                                                </ul>

                                                <ul class="submenu-col">
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/what-can-paypal-do" data-pa-click="HeaderSubnav4-Link-PayPal Can Do That" pa-marked="1">
                                                            PayPal Can Do That
                                <em>Discover ways to manage and move your money</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.paypal.com/us/webapps/mpp/about-paypal-products" data-pa-click="HeaderSubnav5-Link-Shopping and more" pa-marked="1">
                                                            Shopping and more
                                <em>Deals, gift cards and donations</em>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>

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
