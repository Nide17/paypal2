import React from 'react'
import './spend.css'

function Spend() {
    return (
        <div>
            <section className="spend-section">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 text-xs-center spend-container col-xs-12">
                            {/* <img className="spend-image" src="/assets/images/groceries_image_update.gif" alt="QR code" /> */}
                            <img className="spend-image" src="https://www.paypalobjects.com/marketing/web/us/en/home/uncookied-treatment-v3/groceries_image_update.gif" alt="QR code" />

                        </div>

                        <div className="col-xs-12 col-md-6 spend-container text-md-left">

                            <h2 className="spend-head">Get instant spend notifications</h2>

                            <p className="spend-paragraph">Whether shopping at your usual store or somewhere new, we help keep checkout fast and your eligible purchase protected.<sup>**</sup> You also get instant spend notifications, so you can easily keep track of all your online hauls.

                             <br /><br />
                                <a href="/" className="spend-link">Download the App</a>

                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Spend