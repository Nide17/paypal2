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
                        <div className="col-12 col-xl-3">

                            <ul className="footer-main">

                                <li className="country-selector">
                                    <a
                                        href="/"
                                        className="country lazy-load-flag US">
                                        <img src="/assets/images/sprite_countries_flag4.png" alt="us flag" />
                                    </a>

                                </li>

                            </ul>
                        </div>

                        <div className="col-12 col-xl-9">

                            <ul className="footer-main text-xl-left">
                                {footerMainAll}
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <hr className="hidden-lg-down" />
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-xl-9">

                            <ul className="footer-secondary footer-corplinks text-xl-left">
                                {allCorpLinks}
                            </ul>

                        </div>

                        <div className="col-12 col-xl-3">
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
}
export default Footer
