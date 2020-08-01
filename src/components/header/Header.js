import React from 'react';
import './header.css'

const Header = () => {
    return (

        <div>
            <header className="pp-header pp-header--enhanced pp-header--active-link--1" data-building-block="organism">

                <div>

                    <div className="pp-header__wrapper container">

                        <div className="menu-button-wrapper">

                            <button id="menu-button" className="pypl-btn mpp-btn pypl-btn--outline-white pypl-btn--small menu-button" data-pa-click="MainMenu-Cta-Menu" type="button" pa-marked="1">
                                Menu
            </button>
                        </div>

                        <div className="pypl-logo-wrapper">
                            <a href="/" data-pa-click="Header-Logo-PayPal Logo" className="pypl-logo pypl-logo--full-text pypl-logo--white" pa-marked="1">
                                PayPal</a>

                        </div>

                        <nav id="main-menu" className="main-menu">

                            <ul className="main-menu-list">
                                <li>
                                    <a className="pypl-header__subnav-control main-link" href="/" aria-controls="submenu-Personal" aria-expanded="false" data-pa-click="HeaderMainMenu-Link-Personal" pa-marked="1">
                                        Personal
            </a>

                                    <div className="submenu-wrapper" id="submenu-Personal" aria-labelledby="header-Personal" role="region">

                                        <div className="container">
                                            <div className="pp-header__subnav">
                                                <div className="submenu-cols">

                                                    <ul className="submenu-col">
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav0-Link-What is PayPal?" pa-marked="1">What is PayPal?<em>Learn how PayPal works in your everyday life</em></a>
                                                        </li>

                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav1-Link-Check Out Securely Online" pa-marked="1">Check Out Securely Online<em>Use your credit cards or other funds</em></a>

                                                        </li>
                                                    </ul>

                                                    <ul className="submenu-col">
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav2-Link-PayPal Credit &amp; Cards" pa-marked="1">PayPal Credit &amp; Cards<em>Our credit, debit, prepaid cards &amp; PayPal Credit</em></a>

                                                        </li>

                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav3-Link-PayPal App" pa-marked="1">PayPal App<em>Transfer money and track activity with our app</em></a>
                                                        </li>
                                                    </ul>

                                                    <ul className="submenu-col">
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav4-Link-PayPal Can Do That" pa-marked="1">PayPal Can Do That<em>Discover ways to manage and move your money</em></a>
                                                        </li>

                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav5-Link-Shopping and more" pa-marked="1">Shopping and more<em>Deals, gift cards and donations</em></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a className="pypl-header__subnav-control main-link" href="/" aria-controls="submenu-Business" aria-expanded="false" data-pa-click="HeaderMainMenu-Link-Business" pa-marked="1">Business</a>

                                    <div className="submenu-wrapper" id="submenu-Business" aria-labelledby="header-Business" role="region">
                                        <div className="container">
                                            <div className="pp-header__subnav">
                                                <div className="submenu-cols submenu-cols--grouped submenu-cols--3">

                                                    <ul className="submenu-col">
                                                        <li className="submenu-col__header">PayPal Commerce Platform</li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav0-Link-Overview" pa-marked="1">Overview</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav1-Link-Accept Payments" pa-marked="1">Accept Payments</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav2-Link-Make Payments" pa-marked="1">Make Payments</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav3-Link-Manage Risk" pa-marked="1">Manage Risk</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav4-Link-Accelerate Growth" pa-marked="1">Accelerate Growth</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav5-Link-Streamline Operations" pa-marked="1">Streamline Operations</a>
                                                        </li>
                                                    </ul>

                                                    <ul className="submenu-col">
                                                        <li className="submenu-col__header">Solutions For</li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav0-Link-Businesses" pa-marked="1">Businesses</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav1-Link-Enterprises" pa-marked="1">Enterprises</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav2-Link-Platforms &amp; Marketplaces" pa-marked="1">Platforms &amp; Marketplaces</a>
                                                        </li>
                                                    </ul>

                                                    <ul className="submenu-col">
                                                        <li className="submenu-col__header">Resources</li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav0-Link-Getting Started" pa-marked="1">Getting Started</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav1-Link-Pricing" pa-marked="1">Pricing</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav2-Link-Business Resource Center" pa-marked="1">Business Resource Center</a>
                                                        </li>
                                                        <li>
                                                            <a href="/" data-pa-click="HeaderSubnav3-Link-Nonprofits" pa-marked="1">Nonprofits</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/" className="main-link" data-pa-click="HeaderMainMenu-Link-Developer" pa-marked="1">Developer</a>
                                </li>
                                <li>
                                    <a href="/" className="main-link" data-pa-click="HeaderMainMenu-Link-Help" pa-marked="1">Help</a>
                                </li>
                            </ul>

                            <ul className="main-menu__sublist">
                                <li className="sublist-cta-wrapper">
                                    <a href="/" className="pypl-btn mpp-btn pypl-btn--outline-white sublist-cta" data-pa-click="HeaderMainMenu-Cta-Sign Up for Free" role="button" pa-marked="1">Sign Up for Free</a>
                                </li>
                            </ul>
                        </nav>

                        <div id="header-buttons" className="header-buttons">
                            <div>
                                <a id="ul-btn" href="/" className="pypl-btn mpp-btn pypl-btn--outline-white pypl-btn--small" data-pa-click="HeaderMainMenu0-Cta-Log In" role="button" pa-marked="1">Log In</a>
                                <a id="signup-button" href="/" className="pypl-btn mpp-btn pypl-btn--white pypl-btn--small" data-pa-click="HeaderMainMenu1-Cta-Sign Up" role="button" pa-marked="1">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default Header;
