import React, { useState } from "react";
import Logo from './images/youtubeLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone, faMagnifyingGlass, faVideo, faBell, faPlay, faTowerBroadcast} from "@fortawesome/free-solid-svg-icons";

export default function Header({profileImg}){
    const [search, setSearch] = useState('');

    return(
        <div className='yt-c-header_wrapper'>
            <header className='yt-c-header'>
                <div id='start'>
                    <button><FontAwesomeIcon id='icon' icon={faBars} alt='menu'/></button>
                    <a href='#'><img id='logo' alt="Youtube Home" title='Youtube Home' src={Logo}/></a>
                </div>
                
                <div id='center'>
                    <input id='searchInput' type="text" value={search} placeholder='Search' onChange={(e)=> setSearch(e.target.value)} />
                    <button id='searchBtn' alt='search' title='Search'><FontAwesomeIcon id='icon' icon={faMagnifyingGlass}/></button>
                    <button id='voiceSearch' alt='search with your voice' title='Search with your voice'><FontAwesomeIcon id='icon' icon={faMicrophone}/></button>
                </div>

                <div id='end'>
                    <button><FontAwesomeIcon id='icon' icon={faVideo} alt='create' title='Create'/></button>
                    <ul className="display_none">
                        <li alt='upload video'><a><FontAwesomeIcon id='icon' icon={faPlay} />Upload Video</a></li>
                        <li alt='go live'><a><FontAwesomeIcon id='icon' icon={faTowerBroadcast}/> Go Live</a></li>
                    </ul>
                    <button><FontAwesomeIcon id='icon' icon={faBell} alt='notifications' title='Notifications'/></button>
                    <button><img id='profileimg' src={profileImg} alt='profile picture'/></button>
                </div>
            </header>
        </div>
    )
}