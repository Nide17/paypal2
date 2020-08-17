import React from 'react'

const VideoAbove = (props) => {

    let className = 'info-hero-head';
    props.isBusinessState ? className += ' hero-business-extended' : props.isPersonalState ? className += ' hero-personal-extended' : className='info-hero-head'

    return (
        <section className="info-hero custom-infohero">

            <div className="container">

                <div className="row">

                    <div className="info-hero-container col-xs-12 col-lg-8 center-block text-xs-center">
                        <h1 className={className}>
                            <b>With ways to shop, pay and chip-in, we're here for you.</b>
                        </h1>
                        <a href="/" target="_self" className="btn-hero" role="button">
                            <b>Sign Up for Free</b>
                        </a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default VideoAbove


