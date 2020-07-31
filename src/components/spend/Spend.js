import React from 'react'
import './spend.css'

function Spend() {
    return (
        <div>
            <section className="editorial theme-background-color-light" data-building-block="organism">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 text-xs-center editorial__container editorial__device-image col-xs-12">
                            <img className="editorial__image" src="/assets/images/groceries_image_update.gif" alt="QR code" />

                        </div>

                        <div className="col-xs-12 col-md-6 editorial__container editorial__text text-md-left">

                            <h2 className="pypl-heading editorial__headline">Get instant spend notifications</h2>

                            <p className="editorial__paragraph">Whether shopping at your usual store or somewhere new, we help keep checkout fast and your eligible purchase protected.<sup>**</sup> You also get instant spend notifications, so you can easily keep track of all your online hauls.

            <br /><br />
                                <a href="/" data-pa-click="CTA|Download the App Instant" className="editorial_link" pa-marked="1">Download the App</a>

                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Spend
