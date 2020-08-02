import React from 'react'
import 'font-awesome/css/font-awesome.css';
import './corona.css';


function Corona() {
    return (

        <div id="covid-banner">
            <div className="row-fluid">

                <div className="containerCentered center-text">

                    <h4>Responding to the Coronavirus</h4>
                    <p>All of us at PayPal are working to provide you with the resources, support, and information you need, as the times demand.</p>

                    <div className="links row">

                        <div className="link col-xs-12 col-md-6 col-xl-3">

                            <a href="/">
                                <div className="container">
                                    <div className="row">

                                        <span className="col-3 mr-0">
                                            <button>
                                                <i class="fa fa-bank fa-fw"></i>
                                            </button>
                                        </span>

                                        <span className="col-8 ml-2 text-left">Apply for a Paycheck Protection Program Loan &nbsp;
                        <i class="fa fa-angle-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </a>

                        </div>


                        <div className="link col-xs-12 col-md-6 col-xl-3">

                            <a href="/">

                                <div className="container">
                                    <div className="row">

                                        <span className="col-3 mr-0">
                                            <button>
                                                <i class="fa fa-building fa-fw"></i>
                                            </button>
                                        </span>

                                        <span className="col-8 ml-2 text-left">Get support for your small business &nbsp;
                        <i class="fa fa-angle-right"></i>
                                        </span>
                                    </div>

                                </div>

                            </a>

                        </div>



                        <div className="link col-xs-12 col-md-6 col-xl-3">

                            <a href="/">

                                <div className="container">
                                    <div className="row">

                                        <span className="col-3 mr-0">
                                            <button>
                                                <i class="fa fa-support fa-fw"></i>
                                            </button>
                                        </span>

                                        <span className="col-8 ml-2 text-left">Find the help you need in our Help Center &nbsp;
                        <i class="fa fa-angle-right"></i>
                                        </span>
                                    </div>

                                </div>

                            </a>

                        </div>


                        <div className="link col-xs-12 col-md-6 col-xl-3">

                            <a href="/">

                                <div className="container">
                                    <div className="row">

                                        <span className="col-3 mr-0">
                                            <button>
                                                <i class="fa fa-book fa-fw"></i>
                                            </button>
                                        </span>

                                        <span className="col-8 ml-2 text-left">Learn about our ongoing efforts in the Newsroom &nbsp;
                        <i class="fa fa-angle-right"></i>
                                        </span>
                                    </div>

                                </div>

                            </a>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Corona
