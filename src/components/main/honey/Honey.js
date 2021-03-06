import React from 'react'
// import honeyImg from '../../../images/Hill.png'

const Honey = () => {
    return (
        <section className="honey">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 text-xs-center honey-container col-xs-12">
                        <picture>
                            {/* <source className="honey-image" type="image/png" srcSet={honeyImg} alt="Honey-coin" /> */}
                            <source className="honey-image" type="image/png" srcSet="https://www.paypalobjects.com/marketing/web/us/en/home/Everyday-Essentials/COINY_Hill.png" alt="Honey-coin" />
                            <img className="honey-image" src="https://www.paypalobjects.com/marketing/web/us/en/home/Everyday-Essentials/COINY_Hill.png" alt="Honey-coin" />
                        </picture>
                    </div>
                    
                    <div className="col-xs-12 col-md-6 honey-container honey-text text-md-left">

                        <h2 className="honey-head">

                            <span className="new-badge">New</span>
                            <br />
                            <br />
                                Save more when you shop online with Honey</h2>

                        <p className="honey-paragraph">Honey has joined the PayPal family.  Use it to help find discounts at over 30,000 retailers online. Plus, Honey is 100% free.
                                <br />
                            <br />
                            <a href="/" className="honey-link">Join Honey</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Honey
