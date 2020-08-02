import React from 'react'
import './video.css'

function Video() {
    return (
        
            <div className="bg-video-container">
                <video id="bg-video" className="bg-video" width="100%" autoplay="" muted="" playsinline="">
                    <source src="/assets/images/PP_EE_LP_Header_Output_US_desktop.mp4" type="video/mp4" />
                    <track kind="captions" />
                </video>
            </div>
    )
}

export default Video
