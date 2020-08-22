import React from 'react';

const NewResponse = () => {
    return (
            <section id="covid-statement" className="statement text-xs-center covid-banner">

                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <p className="new_paragraph big-res-txt">
                                <span className="covid-new">
                                    <img className="covid-logo"
                                        src="https://www.paypalobjects.com/marketing/web/us/en/home/covid-icon.png" alt="covid-icon" />
                                    <div className="para-content">
                                        Learn how <a href="/"> we’re responding to COVID-19</a> and how we can
                                        <a href="/"> help your business adapt</a>.
                                    </div>
                                </span>
                            </p>

                        </div>
                    </div>
                </div>

            </section>
    );
}

export default NewResponse;
