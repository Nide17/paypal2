import React from 'react'
import './helping.css'

const Helping = () => {
    return (

        <section className="video-thumbnail">
            <div className="container">
                <div className="row row-helping">

                    <div className="col-xs-12 col-md-6 thumbnail-container text-md-left text-xs-center">

                        <h2 className="thumbnail-head">Helping you come together</h2>

                        <p className="thumbnail-paragraph"> We’re all finding ways to come together. Now watch how we’ve been there to help, from securely paying your online Pilates instructor, to getting take out touch free.
</p>
                    </div>

                    <div className="col-xs-12 col-md-6 thumbnail-container text-xs-center">

                        <div className="video-image">
                            <div>
                                <button className="video-image-media-btn play-button" type="button">
                                    <span className="fa fa-play-circle-o">
                                    </span>
                                    <span className="media-btn-content"></span>
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
