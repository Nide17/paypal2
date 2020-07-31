import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div>
            <footer data-building-block="organism" className="global-footer" id="footer">

                <div className="container">

                    <div className="row">
                        <div className="col-md-12">

                            <ul className="footer-main">

                                <li className="country-selector">
                                    <a
                                        href="https://www.paypal.com/us/webapps/mpp/country-worldwide"
                                        aria-label="See all countries/regions"
                                        title="See all countries/regions"
                                        className="country lazy-load-flag US"
                                        data-pa-click="FooterFlag-Link-See all countries/regions"
                                        style={{ backgroundImage: 'url(&quot;https://www.paypalobjects.com/webstatic/mktg/icons/sprite_countries_flag4.png&quot;)' }}>

                                        See all countries/regions</a>
                                </li>

                            </ul>

                            <ul className="footer-main">
                                <li>
                                    <a href="https://www.paypal.com/us/smarthelp/home" data-pa-click="Footer-Link-Help" pa-marked="1">Help</a>
                                </li>
                                <li>
                                    <a href="https://www.paypal.com/us/smarthelp/contact-us" data-pa-click="Footer-Link-Contact" pa-marked="1">Contact</a>
                                </li>
                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/paypal-fees" data-pa-click="Footer-Link-Fees" pa-marked="1">Fees</a>
                                </li>
                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/paypal-safety-and-security" data-pa-click="Footer-Link-Security" pa-marked="1">Security</a>
                                </li>
                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/mobile-apps" data-pa-click="Footer-Link-Apps" pa-marked="1">Apps</a>
                                </li>
                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/shopping-selection" data-pa-click="Footer-Link-Shop" pa-marked="1">Shop</a>
                                </li>

                            </ul>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12">

                            <hr className="hidden-lg-down" />

                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-12">

                            <ul className="footer-secondary footer-corplinks">
                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/about" target="_blank" rel="noopener noreferrer" data-pa-click="Footer-Link-About" pa-marked="1">About</a>
                                </li>

                                <li>
                                    <a href="http://newsroom.paypal-corp.com/" target="_blank" rel="noopener noreferrer" data-pa-click="Footer-Link-Newsroom" pa-marked="1">Newsroom</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/jobs" target="_blank" rel="noopener noreferrer" data-pa-click="Footer-Link-Jobs" pa-marked="1">Jobs</a>
                                </li>

                                <li>
                                    <a href="https://investor.paypal-corp.com/" data-pa-click="Footer-Link-Investor Relations" pa-marked="1">Investor Relations</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/social-innovation" data-pa-click="Footer-Link-Social Innovation" pa-marked="1">Social Innovation</a>
                                </li>

                                <li>
                                    <a href="https://publicpolicy.paypal-corp.com" data-pa-click="Footer-Link-Public Policy" pa-marked="1">Public Policy</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/full-sitemap" data-pa-click="Footer-Link-Sitemap" pa-marked="1">Sitemap</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/enterprise" data-pa-click="Footer-Link-Enterprise" pa-marked="1">Enterprise</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/partner-program" data-pa-click="Footer-Link-Partners" pa-marked="1">Partners</a>
                                </li>

                            </ul>

                            <ul className="footer-tertiary copyright-section">
                                <li className="footer-copyright">© 1999–2020 </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" data-pa-click="Footer-Link-Privacy" pa-marked="1">Privacy</a>
                                </li>

                                <li>
                                    <a href="https://www.paypal.com/us/webapps/mpp/ua/legalhub-full" data-pa-click="Footer-Link-Legal" pa-marked="1">Legal</a>
                                </li>

                            </ul>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12">
                            <p className="footer-notes"></p>
                        </div>
                    </div>

                </div>

            </footer>

        </div>
    );
}

export default Footer
