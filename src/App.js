import React from "react";

export default function App(){

    return(
        <div>
            <header>
                <icon id='menu'></icon>
                <img id="logo" />
                <input id='search' type='text'/>
            </header>
            <nav>
                <ul>
                    <li id='navLink'></li>
                </ul>
                <footer/>
            </nav>
            <main>
                <div id='filters'>
                    <ul>
                        <li id='filter1'></li>
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