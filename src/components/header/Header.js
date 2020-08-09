import React, { Component } from 'react';
import VideoAbove from '../main/videoabove/VideoAbove'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isBusiness: false,
            isPersonal: false,
            // isClosed: true
        }
        this.showBusiness = this.showBusiness.bind(this);
        this.showPersonal = this.showPersonal.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
    }

    showPersonal = (e) => {
        e.preventDefault();
        this.setState({
            isBusiness: false,
            isPersonal: !this.state.isPersonal
        })
    }

    showBusiness = (e) => {
        e.preventDefault();
        this.setState({
            isPersonal: false,
            isBusiness: !this.state.isBusiness
        })
    }

    closeHandler = () => {
        this.setState({
            isPersonal: false,
            isBusiness: false
        })
    }

    render() {

        return (

            <div>

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
                                dropbtn" href="/" onClick={this.showPersonal}>
                                            Personal
                                </a>

                                        <div className="submenu-wrapper" id="submenu-Personal" style={{
                                            display:
                                                this.state.isPersonal ? 'block' : 'none'
                                        }}>

                                            <div className="container">

                                                <div className="header-section__subnav">

                                                    <div className="submenu-cols">

                                                        <ul className="submenu-col">
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/how-paypal-works/overview">
                                                                    What is PayPal?
                                <em>Learn how PayPal works in your everyday life</em>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/pay-online">

                                                                    Check Out Securely Online
                                <em>Use your credit cards or other funds</em>

                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <ul className="submenu-col">
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/credit-line-and-card-services">
                                                                    PayPal Credit &amp;
                                                                    Cards
                                <em>Our credit, debit, prepaid cards &amp; PayPal Credit</em>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/mobile-apps/paypal-app">
                                                                    PayPal App
                                <em>Transfer money and track activity with our app</em>
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <ul className="submenu-col">
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/what-can-paypal-do">
                                                                    PayPal Can Do That
                                <em>Discover ways to manage and move your money</em>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/about-paypal-products">
                                                                    Shopping and more
                                <em>Deals, gift cards and donations</em>
                                                                </a>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <span className="closer-desktop"><button href="#" className="closer" title="Close" onClick={this.closeHandler}>Close</button></span>

                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                    <li>
                                        <a className="main-link personal-link header__subnav-control main-link header__subnav-control--is-active header__subnav-control--is-highlighted dropbtn" href="/" onClick={this.showBusiness}>Business</a>

                                        <div className="submenu-wrapper" id="submenu-Business" style={{
                                            display:
                                                this.state.isBusiness ? 'block' : 'none'
                                        }}>

                                            <div className="container">

                                                <div className="header-section__subnav">

                                                    <div className="submenu-cols submenu-cols--grouped submenu-cols--3">

                                                        <ul className="submenu-col">
                                                            <li className="submenu-col__header">
                                                                PayPal Commerce Platform
                                </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business">
                                                                    Overview
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/accept-payments">
                                                                    Accept Payments
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/make-payments">Make Payments</a></li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/manage-risk">Manage Risk</a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/accelerate-growth">Accelerate Growth</a></li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/streamline-operations">
                                                                    Streamline Operations
                                </a>
                                                            </li>

                                                        </ul>
                                                        <ul className="submenu-col">
                                                            <li className="submenu-col__header">
                                                                Solutions For
                                </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business">
                                                                    Businesses
                                </a></li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/enterprise">
                                                                    Enterprises
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/platforms-and-marketplaces">
                                                                    Platforms &amp; Marketplaces
                                </a>
                                                            </li>
                                                        </ul>

                                                        <ul className="submenu-col">
                                                            <li className="submenu-col__header">
                                                                Resources
                                </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/business/getting-started">
                                                                    Getting Started
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/merchant-fees">
                                                                    Pricing
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/brc">
                                                                    Business Resource Center
                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.paypal.com/us/webapps/mpp/nfp">
                                                                    Nonprofits
                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <span className="closer-desktop"><button href="#" className="closer" title="Close" onClick={this.closeHandler}>Close</button></span>

                                                </div>
                                            </div>
                                        </div>

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
                <VideoAbove isBusinessState={this.state.isBusiness} isPersonalState={this.state.isPersonal} />
            </div>
        );
    }
}

export default Header;
