// Детали фильма и видео
import React from 'react'
import VideoItem from './VideoItem';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div style={{marginTop: '15rem'}} class="ui massive active centered inline loader"></div>;
    }
    
    const src = `https://www.youtube.com/embed/${video.id.videoId}`;

    if(video) {
        return(
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={src} />
                </div>
                <div className="ui segment">
                    <h4 className="header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;