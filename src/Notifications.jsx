import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Notifications(){

    return(
        <div name='notificationsPopup' className="yt-c-notifications_wrapper">
            <div name='notificationsPopup' className="yt-c-notifications_header">
                <label name='notificationsPopup'> Notifications</label>
                <a name='notificationsPopup'><FontAwesomeIcon id='icon' icon={faGear} name='notificationsPopup'/></a>
            </div>
            <div name='notificationsPopup' className="yt-c-notifications_body">
                <div name='notificationsPopup' className='yt-c-notifications_body_default'>
                    <FontAwesomeIcon id='icon' icon={faBell} name='notificationsPopup'/>
                    <h5 name='notificationsPopup'>Your notifications live here</h5>
                    <p name='notificationsPopup'>Subscribe to your favorite channels to get notified about their latest videos.</p>
                </div>
            </div>
        </div>
    )
}