import React from 'react'
import Slides from './Slides'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css'



function Sidebar() {
  return (
    <div class="sidebar">
      <Slides selected Icon={HomeIcon} title="Home"/>
      <Slides Icon={WhatshotIcon} title="Trending"/>
      <Slides Icon={SubscriptionsIcon} title="subscription"/>
      <hr />
      <Slides Icon={VideoLibraryIcon} title="Library"/>
      <Slides Icon={HistoryIcon} title="History"/>
      <Slides Icon={OndemandVideoIcon} title="Your Videos"/>
      <Slides Icon={WatchLaterIcon} title="Watch later"/>
      <Slides Icon={ThumbUpAltIcon} title="Liked videos"/>
      <Slides Icon={ExpandMoreIcon} title="Show more"/>
      <hr />
    </div>
  )
}

export default Sidebar
