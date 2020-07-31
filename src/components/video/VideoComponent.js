import React, { Component } from 'react';
// import ReactPlayer from 'react-player'
// import './video.css'

class VideoComponent extends Component {
    render() {
        return (

            <div className="bg-video-container">
                <video className="bg-video" width="100%" autoPlay muted playsInline>
                
                    <source src="https://www.paypalobjects.com/marketing/web/us/en/home/PP_EE_LP_Header_Output_US_%20750x1400.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        <track kind="captions" />
                        
                </video>
                
                </div>
        )
    }
}

export default VideoComponent;
