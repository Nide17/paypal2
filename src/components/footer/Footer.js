import React, { Component } from 'react'

class Footer extends Component {

    constructor() {
        super()
        this.state = {
            corplinks: [
                'About', 'Newsroom', 'Jobs', 'Investor Relations', 'Social Innovation', 'Public', 'Policy', 'Sitemap', 'Enterprise', 'Partners'
            ],

            footerMainLinks: [
                'Help', 'Contact', 'Fees', 'Security', 'Apps', 'Shop'
            ]
        }
    }

    render() {
        const allCorpLinks = this.state.corplinks.map((corpLink) => {
            return (
                <li key={corpLink}>
                    <a href="/">{corpLink}</a>
                </li>
            )
        })

        const footerMainAll = this.state.footerMainLinks.map((footerMain) => {
            return (
                <li key={footerMain}>
                    <a href="/">{footerMain}</a>
                </li>
            )
        })

        return (
            <footer className="footer">

                <div className="container">

                    <div className="row row-flag">
                        <div className="col-md-12">

                            <ul class="footer-main">
                                <li class="country-selector">
                                    <a
                                        href="/"
                                        className="country lazy-load-flag US">
                                        <img src="/assets/images/sprite_countries_flag4.png" alt="us flag" />
                                    </a>
                                </li></ul>

                            <ul className="footer-main">
                                {footerMainAll}
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
                                {allCorpLinks}
                            </ul>
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
                        <div className="col-md-12">
                            <p className="footer-notes"></p>
                        </div>
                    </div>

                </div>

            </footer>
        );
    }
}
export default Footer
