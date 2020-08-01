import React from 'react'
import './videoabove.css'

function VideoAbove() {
    return (

        <div>

            <section data-building-block="organism" className="info-hero theme-background-image-white custom-infohero">

                <div className="container">
                    <div className="row">
                        <div className="info-hero__container col-xs-12 col-lg-8 center-block text-xs-center">
                            <h1 className="pypl-heading info-hero__headline h2">
                                <b>With ways to shop, pay and chip-in, we're here for you.</b>
                            </h1>
                            <a id="hero-signup" href="/" target="_self" className="pypl-btn mpp-btn info-hero__cta info-hero__cta--center" data-pa-click="InfoHero-PrmryCTA-<b>Sign Up for Free</b>" role="button" pa-marked="1">
                                <b>Sign Up for Free</b>
                            </a>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default VideoAbove


