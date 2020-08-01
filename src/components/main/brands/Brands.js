import React from 'react'
import './brands.css'

function Brands() {
    return (

        <section className="brand-section logo-section ">

            <div className="container">

                <div className="row brand-header">
                    <h2 className="brand-head col-xs-12 col-md-10 center-block text-xs-center">Checkout with millions of brands you love</h2>
                </div>

                <hr />

                <div className="row brand-container">

                    <div className="col-xs-6 col-md-4 col-xl-2 brand-logo">
                        <img src="/assets/images/LOGOS_120x50_US_HULU.png" alt="Hulu" className="brand-image" />
                    </div>

                    <div className="col-xs-6 col-md-4 col-xl-2">
                        <img src="/assets/images/LOGOS_120x50_SPOTIFY.png" alt="Spotify" className="brand-image" />
                    </div>

                    <div className="col-xs-6 col-md-4 col-xl-2">
                        <img src="/assets/images/LOGOS_120x50_US_GRUBHUB.png" alt="Grubhub" className="brand-image" />
                    </div>

                    <div className="col-xs-6 col-md-4 col-xl-2">
                        <img src="/assets/images/LOGOS_120x50_US_ULTA.png" alt="ULTA" className="brand-image" />
                    </div>

                    <div className="col-xs-6 col-md-4 col-xl-2">
                        <img src="/assets/images/LOGOS_120x50_US_POTTERYBARN.png" alt="Potteryban" className="brand-image" />
                    </div>

                    <div className="col-xs-6 col-md-4 col-xl-2">
                        <img src="/assets/images/LOGOS_120x50_US_GROUPON.png" alt="Groupon" className="brand-image" />
                    </div>

                    {/* <div className="text-xs-center brand-logo brand-logo-0 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_US_HULU.png" alt="Hulu" className="brand-image" />
                        </div>

                        <div className="text-xs-center brand-logo brand-logo-1 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_SPOTIFY.png" alt="Spotify" className="brand-image" />
                        </div>

                        <div className="text-xs-center brand-logo brand-logo-2 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_US_GRUBHUB.png" alt="Grubhub" className="brand-image" />
                        </div>

                        <div className="text-xs-center brand-logo brand-logo-3 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_US_ULTA.png" alt="ULTA" className="brand-image" />
                        </div>

                        <div className="text-xs-center brand-logo brand-logo-4 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_US_POTTERYBARN.png" alt="Potteryban" className="brand-image" />
                        </div>

                        <div className="text-xs-center brand-logo brand-logo-5 col-xs-6 col-md-4">
                            <img src="/assets/images/LOGOS_120x50_US_GROUPON.png" alt="Groupon" className="brand-image" />
                        </div> */}

                </div>
            </div>

        </section>
    )
}

export default Brands
