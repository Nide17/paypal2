import React, { Component } from 'react'

class Video extends Component {

    constructor() {
        super()

        this.state = {
            headerVideo: "",
            phoneVideo: ""
        }
    }

    componentDidMount() {
        this.setState({
            // headerVideo: '/assets/images/PPdesktop.mp4',
            headerVideo: "https://www.paypalobjects.com/marketing/web/us/en/home/Everyday-Essentials/v5/PP_EE_LP_Header_Output_US_desktop.mp4",
            phoneVideo: "https://www.paypalobjects.com/marketing/web/us/en/home/Everyday-Essentials/PP_EE_LP_Header_Output_US_V1.mp4"
        })
    }

    render() {
        return (
            <div className="bg-video-container">
                <video id="bg-video" className="bg-video" width="100%" autoPlay muted playsInline>
                    {/* video by screen size: doesn't work */}
                    <source src={this.state.headerVideo} type="video/mp4" />
                    <source src={this.state.phoneVideo} media="(max-width: 767px)" type="video/mp4" />
                    <track kind="captions" />
                </video>
            </div>
        )
    }
}

export default Video
