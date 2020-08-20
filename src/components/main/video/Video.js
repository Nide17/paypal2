import React, { Component } from 'react'
import videoPC from '../../../images/PPdesktop.mp4'
import videoPhone from '../../../images/videoPhone.mp4'

class Video extends Component {

    constructor() {
        super()

        this.state = {
            videoSrc: ""
        }
    }

    componentDidMount() {
        const screenWidth = window.screen.width;
        
        this.setState({
            videoSrc: (screenWidth > 415) ? videoPC : videoPhone
        })
    }

    render() {
        return (
            <div className="bg-video-container">
                <video id="bg-video" className="bg-video" width="100%" autoPlay muted playsInline>
                    <source src={this.state.videoSrc} type="video/mp4"/>
                    <track kind="captions" />
                </video>
            </div>
        )
    }
}

export default Video
