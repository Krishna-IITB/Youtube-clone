import React from 'react'
import './videorow.css';

function Videorow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="videorow">
            <img src={image} alt="" />
            <div className="videorow_text">
                <h3>{title}</h3>
                <p className="video_headline">
                    {channel} . {" "}<span class="video_subs"><span class="video_subsnumber">{subs}</span> Subscriber</span>{" "} {views} views . {timestamp}
                </p>
                <p className="video_description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Videorow;
