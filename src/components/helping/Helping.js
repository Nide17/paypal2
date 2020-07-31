import React from 'react'
import './helping.css'

function Helping() {
    return (
        <section className="video-thumbnail">
            <div className="container">
                <div className="row row-helping">

                    <div className="col-xs-12 col-md-6 video-thumbnail__container text-md-left text-xs-center">


                        <h2 class="pypl-heading video-thumbnail__headline">Helping you come together</h2>

                        <p class="video-thumbnail__paragraph" style={{fontFamily: "PayPalSansBig-Light, Helvetica NeueArial, sans-serif"}}> We’re all finding ways to come together. Now watch how we’ve been there to help, from securely paying your online Pilates instructor, to getting take out touch free.
</p>

                    </div>

                    <div className="col-xs-12 col-md-6 video-thumbnail__container video-thumbnail__device-image text-xs-center">

                        <div className="video-image video-image--no-text" style={{ height: "187px" }}>
                            <div>
                                <button className="pypl-btn mpp-btn pypl-btn--outline-white mpp-media-btn video-image__media-btn" type="button">
                                    <span class="fa fa-play-circle-o" style={{fontSize:"68px", fontWeight: "100", color:"white"}}>
                                    </span>
                                    <span className="mpp-media-btn__content"></span>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Helping
