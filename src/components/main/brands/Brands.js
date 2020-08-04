import React, { Component } from 'react'
import brandsImages from './brandsData'

class Brands extends Component {

    constructor() {
        super();
        this.state = {
            images: brandsImages
        }
    }

    render() {
        const allBrands = this.state.images.map((brand) => {
            return (
                <div className="col-xs-6 col-md-4 col-xl-2 brand-logo" key={brand.id}>
                <img src={brand.src} alt={brand.alt} className="brand-image" />
                </div>
            )
        })

    return (

        <section className="brand-section logo-section ">
            <div className="container">

                <div className="row brand-header">
                    <h2 className="brand-head col-xs-12 col-md-10 center-block text-xs-center">Checkout with millions of brands you love</h2>
                </div>

                <hr />

                <div className="row brand-container">
                {allBrands}
                </div>
            </div>

        </section>
    )
}
}

export default Brands
