import React from "react";
import './App.scss';
import profilePic from './images/profileImg.jpg'
import Header from "./Header";
export default function App(){

    return(
        <div id='body'>
            <Header profileImg = {profilePic}/>
            <nav>
                <ul>
                </ul>
                <footer/>
            </nav>
            <main id='main'>
                <div id='filters'>
                    <ul>
                    </ul>
                </div>
                <div id='video list'>
                    <div id="videoComponent">
                        <img src='' />
                        <span>
                            <p id='title'><b></b></p>
                            <icon id='videoOptions'/>
                        </span>
                        <p id='channel name'></p>
                    </div>
                </div>
            </main>
        </div>
    )
}