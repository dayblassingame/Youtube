import React, { useState } from "react";
import Logo from './images/youtubeLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone, faMagnifyingGlass, faVideo, faBell} from "@fortawesome/free-solid-svg-icons";

export default function Header({profileImg}){
    const [search, setSearch] = useState('');

    return(
        <header>
            <span id='start'>
                <button><FontAwesomeIcon icon={faBars}/></button>
                <img id='logo' alt="Youtube Logo" src={Logo}/>
            </span>
            
            <span id='center'>
                <input id='searchInput' type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <button id='searchBtn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                <button id='voiceSearch'><FontAwesomeIcon icon={faMicrophone}/></button>
            </span>

            <span id='end'>
                <button><FontAwesomeIcon icon={faVideo}/></button>
                <button><FontAwesomeIcon icon={faBell}/></button>
                <button><img src={profileImg} alt='profilePic'/></button>
            </span>
        </header>
    )
}