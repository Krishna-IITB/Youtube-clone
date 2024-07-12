import React from 'react';
import "./channelrow.css"
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';

function ChannelRow({image , channel ,subs , noOfVideos, description , verified}) {
  return (
    <div className="channelrow">
        <Avatar className="channelrow_logo" src={image} alt={channel} />
         <div className="channelrow_text">
            <h4>{channel} {verified && <VerifiedIcon />} </h4>  
            <p> {subs} subscriber . {noOfVideos} videos </p>
            <p>{description}</p> 
         </div>
    </div>
  );
}

export default ChannelRow
