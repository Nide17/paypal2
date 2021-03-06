import React from 'react';

function Header(props) {

    let headerClassName = 'header-section';
    let classNameNav = 'main-menu';

    let menuPersonalLinkClassName = 'main-link personal-link header__subnav-control';
    let menuBusinessLinkClassName = 'main-link business-link header__subnav-control';

    props.openMenu ? classNameNav += ' menu-opened' : classNameNav = 'main-menu';

    props.openMenu && props.isPersonal ?
        headerClassName += ' header-section--submenu-open header-section--menu-open header-section--enhanced header-section--active-link-0' :
        props.openMenu && props.isBusiness ?
            headerClassName += ' header-section--submenu-open header-section--menu-open header-section--enhanced header-section--active-link-1' :
            props.isPersonal ?
                headerClassName += ' header-section--submenu-open header-section--enhanced header-section--active-link-0' :
                props.isBusiness ?
                    headerClassName += ' header-section--submenu-open header-section--enhanced header-section--active-link-1' :
                    props.openMenu ?
                        headerClassName += ' header-section--menu-open header-section--enhanced' :
                        headerClassName += ' header-section--enhanced header-section--active-link--1';


    props.isPersonal ? menuPersonalLinkClassName += ' header__subnav-control--is-active header__subnav-control--is-highlighted' : menuPersonalLinkClassName = 'main-link personal-link header__subnav-control header__subnav-control--is-closing';

    props.isBusiness ? menuBusinessLinkClassName += ' header__subnav-control--is-active header__subnav-control--is-highlighted' : menuBusinessLinkClassName = 'main-link business-link header__subnav-control';

    return (
        <header className={headerClassName}>
            <div>
                <div className="header-container container">

                    <div className="contain-btn">
                        <button className="btn-menu small-button" type="button" onClick={props.menuOpened}>
                            Menu
                        </button>
                    </div>

                    <div className="logo-container">
                        <a href="/" className="logo-text logo-url">
                            PayPal
                        </a>
                    </div>

                    <nav id="mySidenav" className={classNameNav} style={{ height: props.contentHeight }}>
                        <ul className="list-1">
                            <li>

                                <a className={menuPersonalLinkClassName} href="/" onClick={props.showPersonal}>
                                    Personal
                                </a>

                                <div className="submenu-wrapper" id="submenu-Personal" style={{
                                    display:
                                        props.isPersonal ? 'block' : 'none'
                                }}>

                                    <div className="container">

                                        <div className="header-section__subnav">
                                            <span className="closer-mobile">
                                                <button href="#" className="closer" onClick={props.showPersonal}>
                                                    Personal
                                                </button>
                                            </span>

                                            <div className="submenu-cols">
                                                <ul className="submenu-col">
                                                    <li>
                                                        <a href="/">
                                                            What is PayPal?
                                                                        <em>Learn how PayPal works in your everyday life</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">

                                                            Check Out Securely Online
                                                                        <em>Use your credit cards or other funds</em>

                                                        </a>
                                                    </li>
                                                </ul>

                                                <ul className="submenu-col">
                                                    <li>
                                                        <a href="/">
                                                            PayPal Credit &amp;
                                                            Cards
                                                                        <em>Our credit, debit, prepaid cards &amp; PayPal Credit</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            PayPal App
                                                                        <em>Transfer money and track activity with our app</em>
                                                        </a>
                                                    </li>
                                                </ul>

                                                <ul className="submenu-col">
                                                    <li>
                                                        <a href="/">
                                                            PayPal Can Do That
                                                                        <em>Discover ways to manage and move your money</em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Shopping and more
                                                                        <em>Deals, gift cards and donations</em>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>

                                            <span className="closer-desktop"><button href="#" className="closer" title="Close" onClick={props.closeHandler}>Close</button></span>

                                        </div>
                                    </div>

                                </div>

                            </li>

                            <li>
                                <a className={menuBusinessLinkClassName} href="/" onClick={props.showBusiness}>Business</a>

                                <div className="submenu-wrapper" id="submenu-Business" style={{
                                    display:
                                        props.isBusiness ? 'block' : 'none'
                                }}>
                                    <div className="container">

                                        <div className="header-section__subnav">

                                            <span className="closer-mobile">
                                                <button href="#" className="closer" onClick={props.showBusiness}>
                                                    Business</button></span>

                                            <div className="submenu-cols submenu-cols--grouped submenu-cols--3">

                                                <ul className="submenu-col">
                                                    <li className="submenu-col__header">
                                                        PayPal Commerce Platform
                                </li>
                                                    <li>
                                                        <a href="/">
                                                            Overview
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Accept Payments
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Make Payments</a></li>
                                                    <li>
                                                        <a href="/">Manage Risk</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Accelerate Growth</a></li>
                                                    <li>
                                                        <a href="/">
                                                            Streamline Operations
                                </a>
                                                    </li>

                                                </ul>
                                                <ul className="submenu-col">
                                                    <li className="submenu-col__header">
                                                        Solutions For
                                </li>
                                                    <li>
                                                        <a href="/">
                                                            Businesses
                                </a></li>
                                                    <li>
                                                        <a href="/">
                                                            Enterprises
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Platforms &amp; Marketplaces
                                </a>
                                                    </li>
                                                </ul>

                                                <ul className="submenu-col">
                                                    <li className="submenu-col__header">
                                                        Resources
                                </li>
                                                    <li>
                                                        <a href="/">
                                                            Getting Started
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Pricing
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Business Resource Center
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Nonprofits
                                </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <span className="closer-desktop"><button href="#" className="closer" title="Close" onClick={props.closeHandler}>Close</button></span>

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

                        <ul className="list-2">
                            <li className="list-2-link">
                                <a href="/" className="signup-btn link-2" role="button">Sign Up for Free</a>
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
