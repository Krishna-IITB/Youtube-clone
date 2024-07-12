import React from 'react';
import Avatar from '@mui/material/Avatar';
import './video.css';

function Video({ image, title, channel, views, timestamp, channelimage }) {
    return (
        <div className="video">
            <img className="video_thumbnail" src={image} alt={title} />
            <div className="video_info">
                <Avatar className="video_avatar" alt={channel} src={channelimage} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Video;