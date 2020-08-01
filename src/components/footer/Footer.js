import React from 'react'
// import './footer.css'
import './footer1.css'

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row row-flag">
                    <div className="col-12 col-xl-4">

                        <ul className="footer-main">

                            <li className="country-selector">
                                <a
                                    href="/"
                                    title="See all countries/regions"
                                    className="country lazy-load-flag US">

                                    <img src="./us-flag.png" alt="us-flag" />

                                </a>

                            </li>

                        </ul>
                    </div>

                    <div className="col-12 col-xl-8">

                        <ul className="footer-main">
                            <li>
                                <a href="/">Help</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                            <li>
                                <a href="/">Fees</a>
                            </li>
                            <li>
                                <a href="/">Security</a>
                            </li>
                            <li>
                                <a href="/">Apps</a>
                            </li>
                            <li>
                                <a href="/">Shop</a>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">

                        <hr className="hidden-lg-down" />

                    </div>
                </div>


                <div className="row">

                    <div className="col-12 col-xl-8">

                        <ul className="footer-secondary footer-corplinks">
                            <li>
                                <a href="/" target="_blank" rel="noopener noreferrer">About</a>
                            </li>

                            <li>
                                <a href="/" target="_blank" rel="noopener noreferrer">Newsroom</a>
                            </li>

                            <li>
                                <a href="/" target="_blank" rel="noopener noreferrer">Jobs</a>
                            </li>

                            <li>
                                <a href="/">Investor Relations</a>
                            </li>

                            <li>
                                <a href="/">Social Innovation</a>
                            </li>

                            <li>
                                <a href="/">Public Policy</a>
                            </li>

                            <li>
                                <a href="/">Sitemap</a>
                            </li>

                            <li>
                                <a href="/">Enterprise</a>
                            </li>

                            <li>
                                <a href="/">Partners</a>
                            </li>

                        </ul>

                    </div>

                    <div className="col-12 col-xl-4">
                        <ul className="footer-tertiary copyright-section">
                            <li className="footer-copyright">© 1999–2020 </li>

                            <li>
                                <a href="/">Privacy</a>
                            </li>

                            <li>
                                <a href="/">Legal</a>
                            </li>

                        </ul>

                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <p className="footer-notes"></p>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer
