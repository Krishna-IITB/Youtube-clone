import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";
function Header() {
    const[inputSearch, setInputSearch] = useState('');
    return (
        <div class="header">
            <div class="header__left">
                <MenuIcon />
                <Link to='/'>
                <img class="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                </Link>
            </div>
            <div class="header__input">
            <input onChange={(e) => setInputSearch(e.target.value)}  value={inputSearch} placeholder='search' type="text"></input>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon class="header__inputbutton" />
            </Link>
            </div>
            <div class="header__icons">
            <VideoCallIcon className="icon" />
            <AppsIcon className="icon" />
            <NotificationsIcon className="icon" />
            <Avatar src="sry" alt="sry" />
            </div>
        </div>

    );
}
export default Header;
