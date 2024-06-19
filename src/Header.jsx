import React, { useState } from "react";
import Logo from './images/youtubeLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone, faMagnifyingGlass, faVideo, faBell, faPlay, faTowerBroadcast} from "@fortawesome/free-solid-svg-icons";

export default function Header({profileImg}){
    const [search, setSearch] = useState('');

    return(
        <header>
            <span id='start'>
                <button><FontAwesomeIcon icon={faBars} alt='menu'/></button>
                <a href='#'><img id='logo' alt="Youtube Home" title='Youtube Home' src={Logo}/></a>
            </span>
            
            <span id='center'>
                <input id='searchInput' type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <button id='searchBtn' alt='search' title='Search'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                <button id='voiceSearch' alt='search with your voice' title='Search with your voice'><FontAwesomeIcon icon={faMicrophone}/></button>
            </span>

            <span id='end'>
                <button><FontAwesomeIcon icon={faVideo} alt='create' title='Create'/></button>
                <ul>
                    <li alt='upload video'><a><FontAwesomeIcon icon={faPlay} />Upload Video</a></li>
                    <li alt='go live'><a><FontAwesomeIcon icon={faTowerBroadcast}/> Go Live</a></li>
                </ul>
                <button><FontAwesomeIcon icon={faBell} alt='notifications' title='Notifications'/></button>
                <button><img src={profileImg} alt='profile picture'/></button>
            </span>
        </header>
    )
}