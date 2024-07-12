import React, { useEffect, useState } from "react";
import { AccountLinks, Subscriptions } from "./Links";
import {IoMdHome} from "react-icons/io";
import {SiYoutubeshorts} from 'react-icons/si';
import {MdOutlineSubscriptions} from 'react-icons/md';
import {LuList} from 'react-icons/lu';
import { LuChevronRight } from "react-icons/lu";

export default function Nav(){
    const [links, setLinks] = useState({
        accLinks: [],
        subLinks: [],
        exploreLinks: []
    })

    const {accLinks, subLinks, exploreLinks} = links;

    useEffect(()=>{
        setLinks({
            accLinks: AccountLinks(),
            subLinks: Subscriptions()
        })
    
    },[])

    return(
        <nav className="nav">
            <ul>
                <a><li><IoMdHome className="icon"/>Home </li></a>
                <a><li><SiYoutubeshorts className="icon"/> Shorts </li></a>
                <a><li><MdOutlineSubscriptions className="icon"/> Subscriptions </li></a>
            </ul>
           
            <ul id='accountLinksList'>
                <a><li><label>You <LuChevronRight className="icon"/> </label></li></a>
                {accLinks.map((link) => (
                    <a className="yt-C-navListLabel">
                        <li>
                            {link.icon} {link.name}
                        </li>
                    </a>
                ))}
            </ul>
            <ul id='subscriptionsList'>
                <li><label>Subscriptions</label></li>
                {   subLinks.length > 3 ?
                        subLinks.slice(0,3).map((link)=>(
                            <a className="yt-C-navListLabel">
                                <li>
                                    {link.name}
                                </li>
                            </a>
                        ))
                        :
                        subLinks.map((link) =>(
                            <a>
                               <li>
                                    {link.name}
                                </li>
                            </a>
                        ))
                }
                {
                    subLinks.length > 3 ?
                        <a>
                            <li>
                                <LuList style={{marginRight: '8px'}}/> All subscriptions
                            </li>
                        </a>
                        :
                        ''
                }
            </ul>
        </nav>
    )
}