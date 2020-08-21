import React, { Component } from 'react'

class Clock extends Component {

    constructor() {
        super()
        this.state = {
            lastDigit: 0,
            prevToLast: 0,
            secondToLast: 0,
            thirdToLast: 0,
            fourthToLast: 0,
            fifthToLast: 0,
            sixthToLast: 0,
            seventhToLast: 0,
            eighthToLast: 0
        }

        this.ChangeTime = this.ChangeTime.bind(this)
        this.ChangeTime = this.ChangeTime.bind(this)
    }

    componentDidMount() {
        this.intervalID = setInterval(this.ChangeTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    ChangeTime = () => {

        if (this.state.lastDigit < 9) {
            this.setState({
                lastDigit: this.state.lastDigit + 1,
                lastDigitToDisplay: this.state.lastDigit
            })
        }

        else if (this.state.lastDigit === 9) {
            this.setState({
                lastDigit: 0,
                prevToLast: this.state.prevToLast + 1
            })

            if (this.state.prevToLast === 10) {
                this.setState({
                    prevToLast: 0,
                    secondToLast: this.state.secondToLast + 1
                })

                if (this.state.secondToLast === 10) {
                    this.setState({
                        secondToLast: 0,
                        thirdToLast: this.state.thirdToLast + 1
                    })

                    if (this.state.thirdToLast === 10) {
                        this.setState({
                            thirdToLast: 0,
                            fourthToLast: this.state.fourthToLast + 1
                        })
                        if (this.state.fourthToLast === 10) {
                            this.setState({
                                fourthToLast: 0,
                                fifthToLast: this.state.fifthToLast + 1
                            })
                            if (this.state.fifthToLast === 10) {
                                this.setState({
                                    fifthToLast: 0,
                                    sixthToLast: this.state.sixthToLast + 1
                                })

                                if (this.state.sixthToLast === 10) {
                                    this.setState({
                                        sixthToLast: 0,
                                        seventhToLast: this.state.seventhToLast + 1
                                    })

                                    if (this.state.seventhToLast === 10) {
                                        this.setState({
                                            seventhToLast: 0,
                                            eighthToLast: this.state.eighthToLast + 1
                                        })

                                        if (this.state.eighthToLast === 10) {
                                            this.setState({
                                                lastDigitToDisplay: 0,
                                                lastDigit: 0,
                                                prevToLast: 0,
                                                secondToLast: 0,
                                                thirdToLast: 0,
                                                fourthToLast: 0,
                                                fifthToLast: 0,
                                                sixthToLast: 0,
                                                seventhToLast: 0,
                                                eighthToLast: 0
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }


    render() {

        return (

            <div className="clock">

                <div className="second">
                    <div className="number">
                        <span>{this.state.eighthToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.seventhToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.sixthToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.fifthToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.fourthToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.thirdToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.secondToLast}</span>
                    </div>
                </div>

                <div className="second">
                    <div className="number">
                        <span>{this.state.prevToLast}</span>
                    </div>
                </div>

                <div className="second lastdigit ">
                    <div className="number">
                        <span className="move">{this.state.lastDigitToDisplay}</span>
                        <span className="move">{this.state.lastDigit}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Clock
