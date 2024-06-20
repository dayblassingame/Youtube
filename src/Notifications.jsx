import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Notifications(){

    return(
        <div className="yt-c-notifications_wrapper">
            <div className="yt-c-notifications_header">
                <label>Notifications</label>
                <a><FontAwesomeIcon id='icon' icon={faGear} /></a>
            </div>
            <div className="yt-c-notifications_body">
                <div className='yt-c-notifications_body_default'>
                    <FontAwesomeIcon id='icon' icon={faBell}/>
                    <h5>Your notifications live here</h5>
                    <p>Subscribe to your favorite channels to get notified about their latest videos.</p>
                </div>
            
            </div>
        </div>
    )
}