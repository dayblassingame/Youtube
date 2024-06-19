import React from "react";
import Logo from './images/youtubeLogo.png'

export default function Header({profileImg}){

    return(
        <header>
            <span id='start'>
                <button>Hamburger Menu</button>
                <img id='logo' alt="Youtube Logo" src={Logo}/>
            </span>
            
            <span id='center'>
                <input id='searchInput' type="text" />
                <button id='searchBtn'>Search Icon</button>
                <button id='voiceSearch'>mic</button>
            </span>

            <span id='end'>
                <button>vid</button>
                <button>Notifications</button>
                <button>my profile</button>
            </span>
        </header>
    )
}