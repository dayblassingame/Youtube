import React from "react";
import {CgPlayList} from 'react-icons/cg';
import {PiUserSquareLight} from 'react-icons/pi';
import {FaClockRotateLeft} from 'react-icons/fa6';
import {AiOutlinePlaySquare} from 'react-icons/ai';
import {GoClock} from 'react-icons/go';
import {LiaThumbsUp} from 'react-icons/lia';

export const AccountLinks = () => (
    [
        {
            name: 'your channel',
            icon: <PiUserSquareLight className="icon"/>
        },
        {
            name: 'history',
            icon: <FaClockRotateLeft className="icon"/>
        },
        {
            name: 'playlists',
            icon: <CgPlayList className="icon"/>
        },
        {
            name: 'your videos',
            icon: <AiOutlinePlaySquare className="icon"/>
        },
        {
            name: 'watch later',
            icon: <GoClock className="icon"/>
        },
        {
            name: 'liked videos',
            icon: <LiaThumbsUp className="icon"/>
        }
    ]
)

export function Subscriptions(){
    return(
       [
            {
                name: 'Mr Beast',
            },
            {
                name: 'growwithjo',
            },
            {
                name: 'Kimberly Cherrell',
            },
            {
                name: 'FGTeeV',
            }
        ]
    )
}