import React from 'react'
import yogaImg from '../../../images/Purple_Yoga.png'

const Yoga = () => {
    return (
        <section className="reverse-render yoga-section">

            <div className="container">

                <div className="row">

                    <div className="col-xs-12 col-md-6 yoga-section-container text-md-left">
                        <h2 className="yoga-section-head">Send money in seconds</h2>
                        <p className="yoga-section-paragraph">
                            Do more with friends – send money, split bills and pool funds from friends quickly and easily, with just a mobile number or email address.
                            <sup>*</sup>
                            <br /><br />

                            <a href="/" className="yoga-section-link">Download the App</a>
                        </p>
                    </div>

                    <div className="col-xs-12 col-md-6 text-xs-center"><img className="yoga-section-image" src={yogaImg} alt="Send money in seconds" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Yoga
