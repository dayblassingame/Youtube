import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Notifications(){

    return(
        <div>
            <div>
                <h5>Notifications</h5>
                <a><FontAwesomeIcon icon={faGear} /></a>
            </div>
            <div>
                <FontAwesomeIcon icon={faBell}/>
                <h6>Your notifications live here</h6>
                <p>Subscribe to your favorite channels to get notified about their latest videos.</p>
            </div>
        </div>
    )
}