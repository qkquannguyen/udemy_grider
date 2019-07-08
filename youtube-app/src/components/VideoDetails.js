/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <div> Loading Your Waifu Search... </div>
        )
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSource} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>
            </div> 
        </div>
    )
}

export default VideoDetails