import React from 'react'

const Pay = () => {
    return (
        <section className="pay-section">

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 pay-container text-md-left">

                        <h2 className="pay-head">
                            <span className="new-badge">New</span>
                            <br />
                            Pay touch-free
                        </h2>
                        <p className="pay-paragraph">With the PayPal app, the only thing you need to touch when you pay in-person, is your own phone.
                            <br />
                            <br />
                            <a href="/" className="pay-link">
                                Learn More
                            </a>
                        </p>

                    </div>

                    <div className="col-md-6 text-xs-center pay-container col-xs-12">
                        <img className="pay-image" src="/assets/images/PP_EE_QR_Code_US-(White).gif" alt="Groceries" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pay
