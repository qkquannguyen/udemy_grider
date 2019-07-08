import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideoList = videos.map((video) => {
        return <VideoItems onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <div className="ui relaxed divided list" > 
            {renderedVideoList} 
        </div>
    )
}

export default VideoList