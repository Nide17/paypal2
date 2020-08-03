import React, { Component } from 'react'
import './video.css'

class Video extends Component {

    constructor() {
        super()

        this.state = {
            headerVideo: ''
        }
    }

    componentDidMount() {
        this.setState({
            headerVideo: '/assets/images/PP_EE_LP_Header_Output_US_desktop.mp4'
        })
    }

    render() {
        return (
            <div className="bg-video-container">
                <video id="bg-video" className="bg-video" width="100%" autoPlay muted playsInline>
                    <source src={this.state.headerVideo} type="video/mp4" />
                    <track kind="captions" />
                </video>
            </div>
        )
    }
}

export default Video
